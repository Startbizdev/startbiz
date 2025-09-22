type Column<T> = { key: keyof T; header: string; render?: (value: unknown, row: T) => React.ReactNode };

export function DataTable<T extends Record<string, unknown>>({
  rows,
  columns,
}: {
  rows: T[];
  columns: Column<T>[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={String(c.key)} className="px-3 py-2 font-semibold border-b">
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b last:border-0">
              {columns.map((c) => (
                <td key={String(c.key)} className="px-3 py-2">
                  {c.render ? c.render(row[c.key], row) : String((row[c.key] as unknown) ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}