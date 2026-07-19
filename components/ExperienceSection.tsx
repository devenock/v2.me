"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { experiences } from "@/data";

export default function ExperienceSection() {
  const [openSet, setOpenSet] = useState<Set<number>>(() => new Set([0]));

  function toggle(i: number) {
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <section aria-label="Experience">
      <h2 className="text-2xl font-bold text-foreground mb-6">Experience</h2>

      <div className="space-y-3">
        {experiences.map((exp, i) => {
          const isOpen = openSet.has(i);
          return (
            <div
              key={exp.company}
              className="rounded-lg border border-border overflow-hidden"
            >
              {exp.roles.map((role) => (
                <div key={`${exp.company}-${role.title}`}>
                  {/* Header */}
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-muted/30 transition-colors"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        <span className="font-semibold text-foreground">
                          {role.title}
                        </span>
                        <span className="text-sm font-medium text-primary">
                          {exp.company}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {role.dates}
                      </p>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                    )}
                  </button>

                  {/* Expandable body */}
                  {isOpen && (
                    <div className="px-5 pb-5 border-t border-border/50">
                      {exp.description && (
                        <p className="mt-4 text-sm italic text-muted-foreground">
                          {exp.description}
                        </p>
                      )}

                      <ul className="mt-4 space-y-2">
                        {role.highlights.map((line) => (
                          <li
                            key={line}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                            {line}
                          </li>
                        ))}
                      </ul>

                      {role.tags && role.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {role.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-xs rounded px-2 py-1 bg-muted/70 text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
