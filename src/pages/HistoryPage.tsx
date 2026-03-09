import AlertCard from "@/components/AlertCard";
import type { Severity } from "@/components/AlertCard";
import { Calendar, Search } from "lucide-react";

const historyItems = [
  { date: "09 Mar 2026 — 14:32", severity: "critical" as Severity, title: "Error de índice fuera de rango", description: "Corregido: 'i <= notas.length' → 'i < notas.length'", file: "ejemplo.js", line: 3 },
  { date: "09 Mar 2026 — 14:30", severity: "warning" as Severity, title: "Variable no utilizada", description: "Se eliminó la variable 'temp' que no se usaba en el scope.", file: "utils.ts", line: 42 },
  { date: "09 Mar 2026 — 13:15", severity: "critical" as Severity, title: "Vulnerabilidad SQL Injection", description: "Se reemplazó concatenación de strings por consultas parametrizadas.", file: "database.ts", line: 87 },
  { date: "09 Mar 2026 — 12:00", severity: "info" as Severity, title: "Refactorización sugerida", description: "Se aplicó reduce() en lugar de bucle for para sumar valores.", file: "math.ts", line: 12 },
  { date: "08 Mar 2026 — 18:45", severity: "warning" as Severity, title: "Tipo 'any' detectado", description: "Se agregó tipado explícito 'number[]' al parámetro.", file: "helpers.ts", line: 5 },
  { date: "08 Mar 2026 — 16:20", severity: "success" as Severity, title: "Código optimizado", description: "Se mejoró la complejidad de O(n²) a O(n log n) usando sort.", file: "sort.ts", line: 23 },
  { date: "08 Mar 2026 — 10:00", severity: "info" as Severity, title: "Estilo de código mejorado", description: "Se aplicaron convenciones de naming camelCase en 15 funciones.", file: "app.ts", line: 1 },
];

const HistoryPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Historial de <span className="text-warning">Sugerencias</span>
        </h1>
        <p className="text-sm text-muted-foreground font-mono mt-1">Registro completo de errores detectados y correcciones aplicadas</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 flex-1 max-w-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar en historial..."
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1"
          />
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span className="font-mono text-xs">Últimos 7 días</span>
        </div>
      </div>

      {/* Stats summary */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-lg border border-border bg-card p-3 text-center">
          <p className="text-2xl font-bold font-mono text-destructive">5</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Errores Críticos</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-3 text-center">
          <p className="text-2xl font-bold font-mono text-warning">12</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Advertencias</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-3 text-center">
          <p className="text-2xl font-bold font-mono text-success">94%</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Correcciones Aplicadas</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {historyItems.map((item, i) => (
          <div key={i} className="relative">
            <div className="text-[10px] font-mono text-muted-foreground mb-1.5 ml-1">{item.date}</div>
            <AlertCard
              severity={item.severity}
              title={item.title}
              description={item.description}
              file={item.file}
              line={item.line}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
