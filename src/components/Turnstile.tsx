"use client";
import { useEffect } from "react";

declare global {
  interface Window { turnstile?: { render: (selector: string, opts: { sitekey?: string; callback: (token: string) => void }) => void } }
}

export function TurnstileWidget({ onVerify }: { onVerify: (token: string) => void }) {
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || process.env.TURNSTILE_SITE_KEY;
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.onload = () => {
      window.turnstile?.render('#turnstile', {
        sitekey: siteKey,
        callback: onVerify,
      });
    };
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, [onVerify]);
  return <div id="turnstile" />;
}

