"use client";

/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { CertificatePreviewModal, CertificateData } from "@/components/certificate-preview-modal";
import { Award, Eye } from "lucide-react";
import { useState } from "react";

export default function HackathonsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateData | null>(null);

  return (
    <div className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Hackathons</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">I like building things</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Throughout my career, I have participated in over {DATA.hackathons.length} competitions to hone my skills and gain experience. I believe that participating in competitions is a great way to learn and grow as a programmer. Additionally, I enjoy working in teams and collaborating with like-minded individuals.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.hackathons.map((hackathon) => {
            const cert = "certificate" in hackathon ? (hackathon.certificate as CertificateData | undefined) : undefined;

            return (
              <TimelineItem key={hackathon.title + hackathon.dates} className="w-full flex items-start justify-between gap-10">
                <TimelineConnectItem className="flex items-start justify-center">
                  {hackathon.image ? (
                    <img
                      src={hackathon.image}
                      alt={hackathon.title}
                      className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                    />
                  ) : (
                    <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                  )}
                </TimelineConnectItem>
                <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                  {hackathon.dates && (
                    <time className="text-xs text-muted-foreground">{hackathon.dates}</time>
                  )}
                  {hackathon.title && (
                    <h3 className="font-semibold leading-none">{hackathon.title}</h3>
                  )}
                  {hackathon.location && (
                    <p className="text-sm text-muted-foreground">{hackathon.location}</p>
                  )}
                  {hackathon.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                      {hackathon.description}
                    </p>
                  )}

                  {/* Certificate preview thumbnail & button */}
                  {cert && (
                    <div className="mt-2 flex flex-col gap-2.5">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedCertificate(cert)}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-xs cursor-pointer"
                        >
                          <Award className="size-3.5" />
                          <span>Lihat Sertifikat</span>
                          <Eye className="size-3 opacity-80" />
                        </button>
                      </div>

                      {/* Interactive certificate card preview */}
                      <div
                        onClick={() => setSelectedCertificate(cert)}
                        className="group relative w-full max-w-sm overflow-hidden rounded-xl border border-border bg-card/60 hover:border-primary/50 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                      >
                        <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted/20">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white text-xs font-medium backdrop-blur-[1px]">
                            <Eye className="size-4" />
                            <span>Buka Preview Sertifikat</span>
                          </div>
                        </div>
                        <div className="p-2.5 flex items-center justify-between text-xs bg-muted/20">
                          <div className="flex items-center gap-1.5 font-medium text-foreground truncate">
                            <Award className="size-3.5 text-primary shrink-0" />
                            <span className="truncate">{cert.title}</span>
                          </div>
                          <span className="text-[11px] text-muted-foreground shrink-0 ml-2 group-hover:text-primary transition-colors">
                            Preview ↗
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {hackathon.links && hackathon.links.length > 0 && (
                    <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                      {(
                        hackathon.links as readonly {
                          title: string;
                          icon?: React.ReactNode;
                          href: string;
                        }[]
                      ).map((link, idx) => (
                        <Link
                          href={link.href}
                          key={idx}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground cursor-pointer">
                            {link.icon}
                            {link.title}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>

      {/* Certificate Lightbox Modal */}
      <CertificatePreviewModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  );
}
