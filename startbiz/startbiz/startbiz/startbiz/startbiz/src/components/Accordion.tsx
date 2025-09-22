import { useState } from "react";

export function Accordion({ items }: { items: { title: string; content: string }[] }) {
  return (
    <div className="divide-y rounded-xl border">
      {items.map((item, idx) => (
        <AccordionItem key={idx} title={item.title} content={item.content} />)
      )}
    </div>
  );
}

function AccordionItem({ title, content }: { title: string; content: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="w-full text-left p-4 font-medium">
        {title}
      </button>
      {open && <div className="px-4 pb-4 text-[var(--muted-800)]">{content}</div>}
    </div>
  );
}