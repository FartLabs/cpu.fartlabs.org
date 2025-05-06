"use client";

import type React from "react";
import { useState, useRef } from "react";
import { Loader2 } from "lucide-react";
import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { recaptchaSiteKey } from "@/lib/recaptcha";

export default function SignUpForm() {
  const [formState, setFormState] = useState({
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isEmailRegistered, setIsEmailRegistered] = useState(false);
  const confettiRef = useRef<ConfettiRef>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setIsEmailRegistered(false);

    (window as any).grecaptcha.ready(function () {
      (window as any).grecaptcha
        .execute(recaptchaSiteKey, { action: "submit" })
        .then(async function (token: string) {
          try {
            const response = await fetch("/api/waitlist", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...formState, token }),
            });

            if (!response.ok) {
              const { error } = await response.json();
              throw new Error(error);
            }

            setIsSubmitted(true);
          } catch (error) {
            if (
              error instanceof Error &&
              error.message === "Email already registered"
            ) {
              setIsEmailRegistered(true);
            } else {
              setError("Something went wrong. Please try again.");
            }
          } finally {
            setIsSubmitting(false);
          }
        });
    });
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-[#4a8c56] bg-[#1a3a1a] p-8 text-center">
        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-0 size-full"
          onMouseEnter={() => {
            confettiRef.current?.fire({});
          }}
        />

        <div className="relative z-10">
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
            Thank you for your interest in{" "}
            <span className="font-bold">FartLabs Computer</span>! We're excited
            to hear your feedback and welcome you to our{" "}
            <a href="https://go.fart.tools/chat" className="underline">
              community on Discord
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg border border-[#1a3a1a] bg-[#0a1f0a] p-6"
    >
      <div className="space-y-2 text-left">
        <Label htmlFor="email">
          Email address <span className="text-red-500">*</span>
        </Label>
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

      {isEmailRegistered && (
        <div className="rounded bg-yellow-900/20 p-3 text-sm text-yellow-400">
          Thank you! This email is already registered.
          <br />
          Join our{" "}
          <a href="https://go.fart.tools/chat" className="underline">
            community on Discord
          </a>
          .
        </div>
      )}

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
