"use client";
import { KanbanBoard, KanbanItem } from "@/components/KanbanBoard";
import { DataTable } from "@/components/DataTable";

export default function AdminLeadsPage() {
  const items: KanbanItem[] = [
    { id: "1", title: "Jean Dupont — 25-50k", status: "new", meta: "Paris / SaaS" },
    { id: "2", title: "ACME — 100k+", status: "qualified", meta: "Lyon / Marketplace" },
  ];
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Leads</h2>
      <KanbanBoard items={items} />
      <div className="mt-8">
        <DataTable
          rows={items}
          columns={[
            { key: "title", header: "Lead" },
            { key: "status", header: "Statut" },
            { key: "meta", header: "Détails" },
          ]}
        />
      </div>
    </div>
  );
}