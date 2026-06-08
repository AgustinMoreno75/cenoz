import { ChevronDown } from "lucide-react";

import type { FAQItem } from "@/data/site";

type FAQListProps = {
  items: FAQItem[];
};

export function FAQList({ items }: FAQListProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          key={item.question}
          open={index === 0}
          className="panel group rounded-[28px] px-6 py-2"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4">
            <span className="text-lg font-semibold tracking-tight text-slate-950">
              {item.question}
            </span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface)] text-slate-700 transition group-open:rotate-180">
              <ChevronDown className="h-5 w-5" />
            </span>
          </summary>
          <div className="pb-5 text-sm leading-7 text-[var(--color-muted)]">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}