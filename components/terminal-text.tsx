"use client";

import { useState, useEffect } from "react";

interface TerminalTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export default function TerminalText({
  text,
  delay = 0,
  speed = 70,
  className = "",
}: TerminalTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Initial delay before starting to type
    timeout = setTimeout(() => {
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && cursorVisible && (
        <span className="inline-block w-[0.1em] h-[1.2em] bg-[#a3ffb0] ml-1 align-middle animate-pulse"></span>
      )}
    </span>
  );
}
