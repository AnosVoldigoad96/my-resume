"use client";

import { useState } from "react";
import type { ResumeData } from "@/data/resumeData";
import { Award, ExternalLink } from "lucide-react";
import { CertificateModal } from "./CertificateModal";

type Certificate = ResumeData["certifications"][0];

interface CertificationsProps {
  data: ResumeData["certifications"];
}

export const Certifications = ({ data }: CertificationsProps) => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight text-foreground mb-5 flex items-center gap-x-3">
        <span className="inline-block h-6 w-1.5 rounded-full bg-gradient-to-b from-accent to-secondary shrink-0" />
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.map((cert) => (
          <div
            key={cert.title}
            className="group relative flex items-start gap-x-3.5 rounded-xl bg-surface border border-border p-4 transition-all duration-300 hover:shadow-md hover:shadow-accent/10 hover:-translate-y-0.5 hover:border-accent/30"
          >
            <div className="flex-shrink-0 mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
              <Award className="h-4 w-4 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm leading-snug">{cert.title}</h3>
              <p className="mt-0.5 text-xs text-muted">
                {cert.issuer}
                {cert.platform && ` · ${cert.platform}`}
              </p>
              <p className="mt-0.5 text-xs font-semibold text-secondary">{cert.year}</p>
            </div>
            {cert.certificateUrl && (
              <button
                onClick={() => setSelectedCert(cert)}
                className="flex-shrink-0 self-start rounded-lg p-1.5 text-muted transition-all hover:bg-accent/10 hover:text-accent"
                aria-label={`View certificate for ${cert.title}`}
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        ))}
      </div>

      {selectedCert && (
        <CertificateModal
          imageUrl={selectedCert.certificateUrl!}
          title={selectedCert.title}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
};
