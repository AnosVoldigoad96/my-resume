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
      <header className="mb-12 border-b pb-8">
        {/* Main content: info on left, image/buttons on right for desktop */}
        <div className="flex flex-col-reverse items-start gap-x-8 sm:flex-row">
          {/* Left side: Name, about, contact, social */}
          <div className="flex-1">
            <div className="mt-6 flex items-center gap-x-4 sm:mt-0">
              <button onClick={() => setIsAvatarModalOpen(true)} className="sm:hidden" aria-label="View profile picture">
                <Image
                  src={avatarUrl}
                  alt={name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                  priority
                />
              </button>
              <div>
                <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent sm:text-3xl">
                  {name}
                </h1>
                <p className="mt-1 text-sm text-foreground/80 sm:text-base">{about}</p>
              </div>
            </div>

            {/* Contact & Socials for Desktop */}
            <div className="mt-6 hidden items-center gap-x-6 text-sm text-foreground/60 sm:flex">
              <div className="flex flex-col gap-y-1">
                <div className="flex items-center gap-x-2">
                  <MapPin className="h-4 w-4" />
                  {location}
                </div>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-x-2 hover:text-primary">
                  <Mail className="h-4 w-4" />
                  {contact.email}
                </a>
                <a href={`tel:${contact.tel}`} className="flex items-center gap-x-2 hover:text-primary">
                  <Phone className="h-4 w-4" />
                  {contact.tel}
                </a>
              </div>
              <div className="flex gap-x-4">
                {contact.social.map((social) => (
                  <SocialIcon key={social.name} name={social.name} url={social.url} icon={social.icon as keyof typeof socialIcons} />
                ))}
              </div>
            </div>
          </div>

          {/* Right side: Image and buttons for desktop */}
          <div className="hidden w-40 flex-col items-center gap-y-2 sm:flex">
            <button onClick={() => setIsAvatarModalOpen(true)} aria-label="View profile picture">
              <Image
                src={avatarUrl}
                alt={name}
                width={160}
                height={160}
                className="rounded-xl object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </button>
            <a
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-md bg-primary/90 px-4 py-2 text-sm font-semibold text-background shadow-sm transition-all hover:bg-primary hover:scale-105"
            >
              <Send className="h-4 w-4" />
              Contact Me
            </a>
          </div>
        </div>

        {/* Mobile-only contact info */}
        <div className="mt-6 flex flex-col items-center gap-y-2 text-sm text-foreground/70 sm:hidden">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-x-2 hover:text-primary">
            <Mail className="h-4 w-4" />
            {contact.email}
          </a>
          <a href={`tel:${contact.tel}`} className="flex items-center gap-x-2 hover:text-primary">
            <Phone className="h-4 w-4" />
            {contact.tel}
          </a>
        </div>

        {/* Mobile-only action buttons */}
        <div className="mt-6 flex w-full gap-x-4 sm:hidden">
          <a
            onClick={() => setIsContactModalOpen(true)}
            className="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-md bg-primary/90 px-4 py-2 text-sm font-semibold text-background shadow-sm transition-all hover:bg-primary hover:scale-105"
          >
            <Send className="h-4 w-4" />
            Contact Me
          </a>
        </div>
      </header>

      {isAvatarModalOpen && (
        <AvatarModal
          imageUrl={avatarUrl}
          title={name}
          onClose={() => setIsAvatarModalOpen(false)}
        />
      )}
      {isContactModalOpen && (
        <ContactModal onClose={() => setIsContactModalOpen(false)} />
      )}
    </>
  );
};
