"use client";

import { Button } from "@/components/ui/button";
import { X, ZoomIn, ZoomOut } from "lucide-react";
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
        className="relative w-full max-w-4xl h-[86vh] sm:h-[88vh] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border bg-muted/40 shrink-0">
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
        <div className="flex-1 min-h-0 w-full overflow-hidden flex flex-col items-center justify-between bg-black/5 dark:bg-black/40 p-4 sm:p-6">
          <div className="flex-1 min-h-0 w-full flex items-center justify-center overflow-auto p-2">
            <div
              className={`relative transition-transform duration-300 ease-out select-none ${
                isZoomed ? "cursor-zoom-out scale-125 sm:scale-135" : "cursor-zoom-in scale-100"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
              title={isZoomed ? "Klik untuk memperkecil" : "Klik untuk memperbesar"}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={certificate.image}
                alt={certificate.title}
                className="max-h-[58vh] sm:max-h-[62vh] w-auto max-w-full mx-auto object-contain rounded-xl border border-border shadow-lg"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            className="text-[11px] text-muted-foreground mt-2 flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer shrink-0"
          >
            {isZoomed ? <ZoomOut className="size-3.5" /> : <ZoomIn className="size-3.5" />}
            <span>Klik gambar untuk {isZoomed ? "memperkecil" : "memperbesar"}</span>
          </button>
        </div>

        {/* Footer Actions */}
        <div className="px-5 sm:px-6 py-3.5 border-t border-border bg-muted/20 flex items-center justify-end shrink-0">
          <Button size="sm" variant="outline" onClick={onClose} className="text-xs cursor-pointer">
            Tutup
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
