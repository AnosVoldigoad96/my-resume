"use client";

import { useState } from "react";

interface ContactFormProps {
  onSuccess: () => void;
}

export const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Optional phone number field
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "18bc4218-2548-49b6-9789-d83a331ebc1a",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatusMessage("Success! Thank you for your message.");
        // Wait for 2 seconds to show the success message, then trigger the close animation
        setTimeout(() => {
          onSuccess();
        }, 2000);
      } else {
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = "w-full rounded-md border bg-background/50 p-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground/80">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputStyles}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground/80">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputStyles}
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-foreground/80">
          Phone <span className="text-foreground/50">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={inputStyles}
          required
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary/90 px-4 py-2 text-sm font-semibold text-background shadow-sm transition-all hover:bg-primary hover:scale-105 disabled:cursor-not-allowed disabled:bg-primary/50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {statusMessage && <p className={`text-sm text-center ${statusMessage.includes("Success") ? "text-accent" : "text-warning"}`}>{statusMessage}</p>}
    </form>
  );
};