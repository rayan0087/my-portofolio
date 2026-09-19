"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Markdown from "react-markdown";

export interface ProjectPreviewData {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags?: readonly string[];
  image?: string;
  images?: readonly string[];
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

interface Props {
  project: ProjectPreviewData | null;
  onClose: () => void;
}

const emptySubscribe = () => () => {};

export function ProjectPreviewModal({ project, onClose }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Collect all slides (images or single image fallback)
  const slides: string[] = [];
  if (project?.images && project.images.length > 0) {
    slides.push(...project.images);
  } else if (project?.image) {
    slides.push(project.image);
  }

  const handleNext = useCallback(() => {
    if (slides.length > 1) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    if (slides.length > 1) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  }, [slides.length]);

  // Handle keyboard events (ESC, Arrow keys) and lock background scroll
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, handleNext, handlePrev, onClose]);

  if (!project || !isClient) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-200 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/40">
          <div className="pr-4">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground leading-snug">
              {project.title}
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">{project.dates}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Image Slider / Preview */}
          <div className="relative w-full bg-muted/30 rounded-xl overflow-hidden border border-border aspect-video max-h-[360px] flex items-center justify-center group">
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : slides.length > 0 ? (
              <div className="relative w-full h-full flex items-center justify-center bg-black/5 dark:bg-black/30 p-2">
                {/* Current Slide Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slides[currentSlide]}
                  alt={`${project.title} preview slide ${currentSlide + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg transition-all duration-300"
                  loading="eager"
                />

                {/* Preload adjacent image lazily in hidden element for seamless sliding */}
                {slides.length > 1 && (
                  <link
                    rel="prefetch"
                    as="image"
                    href={slides[(currentSlide + 1) % slides.length]}
                  />
                )}

                {/* Navigation Arrows */}
                {slides.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 size-9 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-md"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="size-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 size-9 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-md"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="size-5" />
                    </button>

                    {/* Counter Badge */}
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-full font-medium shadow-sm">
                      {currentSlide + 1} / {slides.length}
                    </div>

                    {/* Bottom Dots Indicator */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-full">
                      {slides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={cn(
                            "size-2 rounded-full transition-all duration-200",
                            currentSlide === idx
                              ? "bg-white w-4"
                              : "bg-white/50 hover:bg-white/80"
                          )}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-sm">
                No preview image available
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div className="prose max-w-full text-sm font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{project.description}</Markdown>
            </div>

            {/* Technologies */}
            {project.tags && project.tags.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs font-medium border-border px-2.5 py-0.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer with External Action Links */}
        <div className="px-6 py-4 border-t border-border bg-muted/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {project.links && project.links.length > 0
              ? project.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="gap-1.5 text-xs">
                      {link.icon}
                      {link.type}
                    </Button>
                  </Link>
                ))
              : project.href && project.href !== "#" && (
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="default" className="gap-1.5 text-xs">
                      <ExternalLink className="size-3.5" />
                      Visit Project
                    </Button>
                  </Link>
                )}
          </div>

          <Button size="sm" variant="ghost" onClick={onClose} className="text-xs">
            Close
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
