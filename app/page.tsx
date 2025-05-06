import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParticleBackground from "@/components/particle-background";
import TerminalText from "@/components/terminal-text";
import ScrollReveal from "@/components/scroll-reveal";
import SignUpForm from "@/components/sign-up-form";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "FartLabs Computer",
  description:
    "Claim your free Computer! Software that works the way you imagine it should.",
  keywords: [
    "FartLabs",
    "computer",
    "imagination-driven",
    "development",
    "customizable",
  ],
  openGraph: {
    title: "FartLabs Computer",
    description:
      "Claim your free Computer! Software that works the way you imagine it should.",
    url: "https://cpu.fartlabs.org",
    siteName: "FartLabs Computer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FartLabs Computer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a1f0a] text-[#a3ffb0]">
      <ParticleBackground />

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-[#1a3a1a] bg-[#0a1f0a]/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded">
              <div className="absolute inset-0 bg-gradient-to-br from-[#a3ffb0] to-[#4a8c56]"></div>
              <div className="absolute inset-1 bg-[#0a1f0a] rounded-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#a3ffb0]">
                FL
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">
              FartLabs Computer
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="https://fartlabs.org/mission"
              className="text-sm hover:text-white transition-colors"
            >
              Our Mission
            </Link>
            <Link
              href="https://github.com/FartLabs"
              className="text-sm hover:text-white transition-colors"
            >
              Open Source
            </Link>
          </nav>
          <Link
            href="#signup"
            className="rounded bg-[#4a8c56] px-4 py-2 text-sm font-medium text-white hover:bg-[#5aa366] transition-colors"
          >
            Claim Now
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center pt-16 text-center">
        <div className="container max-w-4xl px-4 py-24 sm:py-32">
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-4xl md:text-6xl lg:text-8xl bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center font-semibold leading-none text-transparent dark:from-[#a3ffb0] dark:to-slate-900/10">
            The last{" "}
            <span className="inline-block text-white ring-1 ring-white/10 bg-gradient-to-t from-gray-300/10 -rotate-2 to-white/10 backdrop-blur rounded-md md:px-3 px-1 mr-2 mt-1 md:mx-0 md:mt-0">
              Computer
            </span>
            <br />
            you will ever need
          </h1>
          <div className="mt-12 mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#signup"
              className="rounded-md bg-[#4a8c56] px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-[#5aa366] transition-all hover:shadow-xl hover:shadow-[#4a8c56]/20"
            >
              Claim Your Free Computer
            </Link>
            <Link
              href="#features"
              className="rounded-md border border-[#4a8c56] bg-transparent px-6 py-3 text-base font-medium text-[#a3ffb0] hover:bg-[#1a3a1a] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        <a
          href="#features"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-[#a3ffb0]" />
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32">
        <div className="container px-4">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Imagination-driven development
            </h2>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={200}>
              <div className="rounded-lg border border-[#1a3a1a] bg-[#0f2a0f] p-6 transition-all hover:border-[#4a8c56] hover:shadow-lg hover:shadow-[#4a8c56]/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1a3a1a]">
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
                    className="text-[#a3ffb0]"
                  >
                    <rect
                      width="18"
                      height="12"
                      x="3"
                      y="4"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="2" x2="22" y1="20" y2="20"></line>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Bare Essentials</h3>
                <p className="text-[#a3ffb0]/80">
                  The FartLabs Computer comes with the bare essentials. Program
                  a user profile to make it your own.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="rounded-lg border border-[#1a3a1a] bg-[#0f2a0f] p-6 transition-all hover:border-[#4a8c56] hover:shadow-lg hover:shadow-[#4a8c56]/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1a3a1a]">
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
                    className="text-[#a3ffb0]"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Think It, Build It</h3>
                <p className="text-[#a3ffb0]/80">
                  Think about what you want, then it happens. Our intuitive
                  interface responds to your imagination.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="rounded-lg border border-[#1a3a1a] bg-[#0f2a0f] p-6 transition-all hover:border-[#4a8c56] hover:shadow-lg hover:shadow-[#4a8c56]/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1a3a1a]">
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
                    className="text-[#a3ffb0]"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M12 18v-6"></path>
                    <path d="M8 18v-1"></path>
                    <path d="M16 18v-3"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Customizable Software
                </h3>
                <p className="text-[#a3ffb0]/80">
                  Software that works the way you imagine it should. No more
                  adapting to rigid interfaces.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 bg-[#0f2a0f]">
        <div className="container px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <ScrollReveal>
              <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-[#1a3a1a] shadow-2xl">
                <Image
                  src="/computer-retro.png"
                  alt="Retro FartLabs Computer"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  The Future of Computing
                </h2>
                <div className="space-y-4 text-[#a3ffb0]/80">
                  <p>
                    The FartLabs Computer represents a paradigm shift in how we
                    interact with technology. Inspired by classic systems like
                    LCARS and early personal computers, we've created something
                    entirely new.
                  </p>
                  <p>
                    Our system adapts to you, not the other way around. With
                    imagination-driven development, the computer responds to
                    your thoughts and needs, creating a truly personalized
                    experience.
                  </p>
                  <p>
                    For researchers, scientists, academics, students, and
                    engineers, the FartLabs Computer provides a unique platform
                    for exploring new ideas and collaborating on projects. With
                    its intuitive interface and flexible architecture, it's the
                    perfect tool for anyone looking to push the boundaries of
                    technology.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="#signup"
                    className="inline-flex items-center rounded-md bg-[#4a8c56] px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-[#5aa366] transition-all hover:shadow-xl hover:shadow-[#4a8c56]/20"
                  >
                    Join the Revolution
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-32">
        <div className="container px-4">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              What Users Are Saying
            </h2>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={200}>
              <div className="rounded-lg border border-[#1a3a1a] bg-[#0f2a0f] p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#1a3a1a] flex items-center justify-center">
                    <span className="text-[#a3ffb0] font-bold">JD</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Jean-Luc D.</h3>
                    <p className="text-sm text-[#a3ffb0]/60">
                      Starship Captain
                    </p>
                  </div>
                </div>
                <p className="text-[#a3ffb0]/80">
                  "The FartLabs Computer interface reminds me of our ship's
                  systems, but with even more intuitive controls. It's like the
                  computer reads my mind."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="rounded-lg border border-[#1a3a1a] bg-[#0f2a0f] p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#1a3a1a] flex items-center justify-center">
                    <span className="text-[#a3ffb0] font-bold">SJ</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Steve J.</h3>
                    <p className="text-sm text-[#a3ffb0]/60">Tech Innovator</p>
                  </div>
                </div>
                <p className="text-[#a3ffb0]/80">
                  "I thought I knew what a computer could be, but FartLabs has
                  reimagined the entire concept. It's both familiar and
                  revolutionary at the same time."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="rounded-lg border border-[#1a3a1a] bg-[#0f2a0f] p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#1a3a1a] flex items-center justify-center">
                    <span className="text-[#a3ffb0] font-bold">BG</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Bill G.</h3>
                    <p className="text-sm text-[#a3ffb0]/60">
                      Software Pioneer
                    </p>
                  </div>
                </div>
                <p className="text-[#a3ffb0]/80">
                  "The user selection menu is unlike anything I've ever created.
                  FartLabs has taken customization to a whole new level. I'm
                  genuinely impressed."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section id="signup" className="py-20 sm:py-32 bg-[#0f2a0f]">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Claim Your Free FartLabs Computer Today!
              </h2>
              <p className="mb-8 text-[#a3ffb0]/80">
                Join the waitlist to be among the first to experience the future
                of computing.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mx-auto max-w-md">
                <SignUpForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a3a1a] bg-[#0a1f0a] py-8">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start md:justify-center">
            <div className="flex items-center gap-2">
              <div className="relative h-6 w-6 overflow-hidden rounded">
                <div className="absolute inset-0 bg-gradient-to-br from-[#a3ffb0] to-[#4a8c56]"></div>
                <div className="absolute inset-1 bg-[#0a1f0a] rounded-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#a3ffb0]">
                  FL
                </div>
              </div>
              <span className="text-sm font-bold text-center">
                <a
                  href="https://fartlabs.org"
                  className="text-[#a3ffb0] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FartLabs.org
                </a>{" "}
                out the{" "}
                <a
                  href="https://wazoo.tech"
                  className="text-[#a3ffb0] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wazoo
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
