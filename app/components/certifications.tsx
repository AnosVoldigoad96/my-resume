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
    <section className="mb-12">
      <h2 className="text-2xl font-bold tracking-tight text-secondary mb-6">
        Certifications
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {data.map((cert) => (
          <div
            key={cert.title}
            className={`group relative flex flex-col rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 ${cert.certificateUrl ? 'cursor-pointer' : ''}`}
            onClick={() => cert.certificateUrl && setSelectedCert(cert)}
          >
            <div className="flex items-start gap-x-4">
              <div className="mt-1 text-accent">
                <Award size={24} />
              </div>
              <div className="w-10/12">
                <h3 className="font-semibold text-foreground">
                  {cert.title}
                  <span className="ml-2 text-sm font-normal text-foreground/60">({cert.year})</span>
                </h3>
                <p className="mt-1 text-sm text-foreground/80 text-justify">
                  {cert.issuer}
                  {cert.platform && ` · ${cert.platform}`}
                </p>
              </div>
            </div>
            {cert.certificateUrl && (
              <ExternalLink className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-foreground/20 transition-all duration-300 group-hover:text-accent" />
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