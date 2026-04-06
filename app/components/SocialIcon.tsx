import { Github, Linkedin, X } from "lucide-react";

export const socialIcons = {
  GitHubIcon: Github,
  LinkedInIcon: Linkedin,
  XIcon: X,
};

export const SocialIcon = ({
  name,
  url,
  icon,
}: {
  name: string;
  url: string;
  icon: keyof typeof socialIcons;
}) => {
  const Icon = socialIcons[icon];
  if (!Icon) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5 text-muted transition-all hover:bg-primary/10 hover:text-primary hover:scale-110"
      aria-label={name}
    >
      <Icon size={18} />
    </a>
  );
};
