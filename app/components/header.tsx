"use client";

import { useState } from "react";
import Image from "next/image";
import type { ResumeData } from "@/data/resumeData";
import { SocialIcon, socialIcons } from "./SocialIcon";
import { MapPin, Download, Mail, Phone, Send } from "lucide-react";
import { AvatarModal } from "./AvatarModal";
import { ContactModal } from "./ContactModal";

export const Header = ({ data }: { data: ResumeData }) => {
  const { name, about, avatarUrl, location, contact } = data;
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <header className="relative rounded-2xl overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="absolute inset-0 border border-border rounded-2xl" />

        <div className="relative p-6 sm:p-8">
          {/* Desktop Layout */}
          <div className="hidden sm:flex items-start gap-x-8">
            {/* Avatar */}
            <button
              onClick={() => setIsAvatarModalOpen(true)}
              aria-label="View profile picture"
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-50 blur-sm" />
                <Image
                  src={avatarUrl}
                  alt={name}
                  width={156}
                  height={156}
                  className="relative rounded-2xl object-cover ring-2 ring-surface transition-transform duration-300 hover:scale-[1.03]"
                  priority
                />
              </div>
            </button>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                {name}
              </h1>
              <p className="mt-2 text-base text-foreground/70 font-medium">{about}</p>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
                <span className="flex items-center gap-x-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary/70" />
                  {location}
                </span>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-x-1.5 hover:text-primary transition-colors">
                  <Mail className="h-3.5 w-3.5 text-primary/70" />
                  {contact.email}
                </a>
                <a href={`tel:${contact.tel}`} className="flex items-center gap-x-1.5 hover:text-primary transition-colors">
                  <Phone className="h-3.5 w-3.5 text-primary/70" />
                  {contact.tel}
                </a>
              </div>

              <div className="mt-5 flex items-center justify-between gap-x-4 flex-wrap gap-y-3">
                <div className="flex items-center gap-x-2">
                  {contact.social.map((social) => (
                    <SocialIcon
                      key={social.name}
                      name={social.name}
                      url={social.url}
                      icon={social.icon as keyof typeof socialIcons}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-x-3">
                  <a
                    href="/Dr. Hassaan Qazi Resume.pdf"
                    download
                    className="inline-flex items-center gap-x-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent/90 hover:shadow-md hover:shadow-accent/25 hover:-translate-y-0.5"
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </a>
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="inline-flex items-center gap-x-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/25 hover:-translate-y-0.5"
                  >
                    <Send className="h-4 w-4" />
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="sm:hidden">
            <div className="flex items-center gap-x-4">
              <button
                onClick={() => setIsAvatarModalOpen(true)}
                aria-label="View profile picture"
                className="flex-shrink-0"
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary to-secondary opacity-60 blur-[3px]" />
                  <Image
                    src={avatarUrl}
                    alt={name}
                    width={80}
                    height={80}
                    className="relative rounded-full object-cover ring-2 ring-surface"
                    priority
                  />
                </div>
              </button>
              <div className="min-w-0 flex-1">
                <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                  {name}
                </h1>
                <p className="mt-0.5 text-sm text-foreground/70">{about}</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
              <span className="flex items-center gap-x-1">
                <MapPin className="h-3 w-3 text-primary/70" />
                {location}
              </span>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-x-1 hover:text-primary transition-colors">
                <Mail className="h-3 w-3 text-primary/70" />
                {contact.email}
              </a>
              <a href={`tel:${contact.tel}`} className="flex items-center gap-x-1 hover:text-primary transition-colors">
                <Phone className="h-3 w-3 text-primary/70" />
                {contact.tel}
              </a>
            </div>

            <div className="mt-4 flex items-center justify-between gap-x-3">
              <div className="flex items-center gap-x-2">
                {contact.social.map((social) => (
                  <SocialIcon
                    key={social.name}
                    name={social.name}
                    url={social.url}
                    icon={social.icon as keyof typeof socialIcons}
                  />
                ))}
              </div>
              <div className="flex items-center gap-x-2">
                <a
                  href="/Dr. Hassaan Qazi Resume.pdf"
                  download
                  className="inline-flex items-center gap-x-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-accent/90"
                >
                  <Download className="h-3.5 w-3.5" />
                  Resume
                </a>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center gap-x-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-primary/90"
                >
                  <Send className="h-3.5 w-3.5" />
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isAvatarModalOpen && (
        <AvatarModal imageUrl={avatarUrl} title={name} onClose={() => setIsAvatarModalOpen(false)} />
      )}
      {isContactModalOpen && (
        <ContactModal onClose={() => setIsContactModalOpen(false)} />
      )}
    </>
  );
};
