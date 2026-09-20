"use client";

import { Button } from "@/components/ui/button";
import { Download, ExternalLink, X, ZoomIn } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

export interface CertificateData {
  title: string;
  issuer?: string;
  dates?: string;
  image: string;
  pdf?: string;
  description?: string;
}

interface Props {
  certificate: CertificateData | null;
  onClose: () => void;
}

const emptySubscribe = () => () => {};

export function CertificatePreviewModal({ certificate, onClose }: Props) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [isZoomed, setIsZoomed] = useState(false);

  // Handle ESC key and lock background scroll
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [certificate, onClose]);

  if (!certificate || !isClient) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-200 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border bg-muted/40">
          <div className="pr-4">
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-foreground leading-snug">
              {certificate.title}
            </h2>
            {(certificate.issuer || certificate.dates) && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {[certificate.issuer, certificate.dates].filter(Boolean).join(" • ")}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Certificate Image View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col items-center justify-center bg-black/5 dark:bg-black/40">
          <div
            className={`relative max-w-full overflow-hidden rounded-xl border border-border shadow-lg transition-all duration-300 ${
              isZoomed ? "cursor-zoom-out max-h-none" : "cursor-zoom-in max-h-[62vh]"
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
            title={isZoomed ? "Click to zoom out" : "Click to zoom in"}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={certificate.image}
              alt={certificate.title}
              className={`w-auto mx-auto object-contain transition-transform duration-300 ${
                isZoomed ? "scale-125" : "max-h-[60vh]"
              }`}
            />
          </div>

          <p className="text-[11px] text-muted-foreground mt-3 flex items-center gap-1">
            <ZoomIn className="size-3" />
            Klik gambar untuk {isZoomed ? "memperkecil" : "memperbesar"}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="px-5 sm:px-6 py-3.5 border-t border-border bg-muted/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {certificate.pdf && (
              <Link
                href={certificate.pdf}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button size="sm" variant="default" className="gap-1.5 text-xs cursor-pointer">
                  <Download className="size-3.5" />
                  Unduh PDF
                </Button>
              </Link>
            )}
            <Link
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="outline" className="gap-1.5 text-xs cursor-pointer">
                <ExternalLink className="size-3.5" />
                Buka Gambar Penuh
              </Button>
            </Link>
          </div>

          <Button size="sm" variant="ghost" onClick={onClose} className="text-xs cursor-pointer">
            Tutup
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
