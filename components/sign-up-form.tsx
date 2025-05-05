"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export default function SignUpForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    reason: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-[#4a8c56] bg-[#1a3a1a] p-8 text-center">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#4a8c56]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold">Thank You!</h3>
        <p className="text-[#a3ffb0]/80">
          Your application has been received. We'll contact you soon with next
          steps to claim your FartLabs Computer.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg border border-[#1a3a1a] bg-[#0a1f0a] p-6"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your name"
          required
          value={formState.name}
          onChange={handleChange}
          className="border border-[#1a3a1a] bg-[#0f2a0f] text-[#a3ffb0] placeholder:text-[#a3ffb0]/50 focus:border-[#4a8c56] focus:ring-[#4a8c56]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          value={formState.email}
          onChange={handleChange}
          className="border border-[#1a3a1a] bg-[#0f2a0f] text-[#a3ffb0] placeholder:text-[#a3ffb0]/50 focus:border-[#4a8c56] focus:ring-[#4a8c56]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="reason">Why do you want a FartLabs Computer?</Label>
        <Input
          id="reason"
          name="reason"
          placeholder="Tell us why you're interested"
          value={formState.reason}
          onChange={handleChange}
          className="border border-[#1a3a1a] bg-[#0f2a0f] text-[#a3ffb0] placeholder:text-[#a3ffb0]/50 focus:border-[#4a8c56] focus:ring-[#4a8c56]"
        />
      </div>

      {error && (
        <div className="rounded bg-red-900/20 p-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#4a8c56] text-white hover:bg-[#5aa366]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          "Claim Your Computer"
        )}
      </Button>
    </form>
  );
}
