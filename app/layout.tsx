import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-resume-one-beta.vercel.app/"),
  title: "Dr. Hassaan Ahmad Qazi | Pharmacist & Copywriter",
  description: "The professional online resume for Dr. Hassaan Ahmad Qazi, a licensed pharmacist with experience in retail, copywriting, and a passion for technology and AI.",
  openGraph: {
    title: "Dr. Hassaan Ahmad Qazi | Professional Resume",
    description: "A licensed pharmacist with experience in retail, copywriting, and a passion for technology and AI.",
    url: "https://my-resume-one-beta.vercel.app/",
    siteName: "Hassaan Qazi's Resume",
    images: [
      {
        url: "/profile.jpg", // Using your profile picture as the preview image
        width: 160,
        height: 160,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Dr. Hassaan Ahmad Qazi | Professional Resume",
    description: "A licensed pharmacist with experience in retail, copywriting, and a passion for technology and AI.",
    images: ["/profile.jpg"], // Using your profile picture as the preview image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
