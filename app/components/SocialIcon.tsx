import { Github, Linkedin, X } from "lucide-react";

export const socialIcons = {
  GitHubIcon: Github,
  LinkedInIcon: Linkedin,
  XIcon: X,
};

export const SocialIcon = ({ name, url, icon }: { name: string; url: string; icon: keyof typeof socialIcons }) => {
  const Icon = socialIcons[icon];
  if (!Icon) return null;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary" aria-label={name}>
      <Icon size={20} />
    </a>
  );
};