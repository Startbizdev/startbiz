type ColumnKey = "new" | "qualified" | "contacted" | "meeting" | "proposal" | "won" | "lost" | "cold";

export type KanbanItem = {
  id: string;
  title: string;
  status: ColumnKey;
  meta?: string;
};

const COLUMNS: { key: ColumnKey; title: string }[] = [
  { key: "new", title: "New" },
  { key: "qualified", title: "Qualified" },
  { key: "contacted", title: "Contacted" },
  { key: "meeting", title: "Meeting" },
  { key: "proposal", title: "Proposal" },
  { key: "won", title: "Won" },
  { key: "lost", title: "Lost" },
  { key: "cold", title: "Cold" },
];

export function KanbanBoard({ items }: { items: KanbanItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-8 gap-3">
      {COLUMNS.map((col) => (
        <div key={col.key} className="rounded-xl border min-h-40 p-2">
          <div className="px-2 py-1 font-semibold sticky top-0 bg-white/70 backdrop-blur rounded">
            {col.title}
          </div>
          <div className="space-y-2 mt-2">
            {items
              .filter((i) => i.status === col.key)
              .map((i) => (
                <div key={i.id} className="rounded-lg border p-3 bg-white">
                  <div className="font-medium">{i.title}</div>
                  {i.meta && <div className="text-xs text-[var(--muted-800)]">{i.meta}</div>}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}