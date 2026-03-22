"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function MdxPreWithCopy({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"pre">) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  const handleCopy = useCallback(async () => {
    const text = preRef.current?.textContent ?? "";
    if (!text.trim()) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      // Clipboard may be denied (non-HTTPS, permissions)
    }
  }, []);

  return (
    <div className="relative my-4">
      <pre
        ref={preRef}
        className={cn(
          "overflow-x-auto rounded-lg bg-gray-900 p-4 pr-14 text-sm leading-relaxed",
          className
        )}
        {...props}
      >
        {children}
      </pre>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy code"}
        className={cn(
          "absolute right-2 top-2 z-10 inline-flex h-8 w-8 items-center justify-center rounded-md",
          "border border-white/10 bg-gray-800/90 text-gray-300 shadow-sm",
          "transition-colors hover:bg-gray-700 hover:text-white",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        )}
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-400" aria-hidden />
        ) : (
          <Copy className="h-4 w-4" aria-hidden />
        )}
      </button>
      <span className="sr-only" role="status">
        {copied ? "Code copied to clipboard" : ""}
      </span>
    </div>
  );
}
