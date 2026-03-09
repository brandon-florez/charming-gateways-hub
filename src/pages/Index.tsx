import { useState } from "react";
import StatsGrid from "@/components/StatsGrid";
import CodeEditor from "@/components/CodeEditor";
import AlertCard from "@/components/AlertCard";
import SeverityFilter from "@/components/SeverityFilter";
import type { Severity } from "@/components/AlertCard";

const alerts = [
  { severity: "critical" as Severity, title: "Error de índice fuera de rango", description: "En 'i <= notas.length' se accede a un índice inexistente. Usa 'i < notas.length'.", line: 3, file: "ejemplo.js", timestamp: "hace 2s" },
  { severity: "critical" as Severity, title: "Asignación en vez de comparación", description: "'promedio = 6' asigna el valor 6 en vez de comparar. Usa '===' para comparar.", line: 8, file: "ejemplo.js", timestamp: "hace 2s" },
  { severity: "warning" as Severity, title: "Falta de tipado en parámetros", description: "El parámetro 'notas' no tiene tipo definido. Considera usar TypeScript: 'notas: number[]'.", line: 1, file: "ejemplo.js", timestamp: "hace 5s" },
  { severity: "warning" as Severity, title: "Uso de 'var' en vez de 'const/let'", description: "'var' tiene scope de función. Usa 'const' para variables inmutables.", line: 17, file: "ejemplo.js", timestamp: "hace 5s" },
  { severity: "info" as Severity, title: "Sugerencia de refactorización", description: "Puedes usar 'notas.reduce()' para calcular la suma de forma más idiomática.", line: 2, file: "ejemplo.js", timestamp: "hace 8s" },
  { severity: "success" as Severity, title: "Estructura de función correcta", description: "La función retorna el valor calculado correctamente.", line: 14, file: "ejemplo.js", timestamp: "hace 10s" },
];

const Dashboard = () => {
  const [activeFilters, setActiveFilters] = useState<Severity[]>(["critical", "warning", "info", "success"]);

  const filtered = alerts.filter((a) => activeFilters.includes(a.severity));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Dashboard de <span className="text-primary text-glow-primary">Análisis</span>
        </h1>
        <p className="text-sm text-muted-foreground font-mono mt-1">Monitoreo en tiempo real · Motor IA Local · 100% Privado</p>
      </div>

      <StatsGrid />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Code Editor */}
        <div className="lg:col-span-3">
          <CodeEditor />
        </div>

        {/* Alerts panel */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">Alertas en Tiempo Real</h2>
          </div>
          <SeverityFilter onFilterChange={setActiveFilters} />
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {filtered.map((alert, i) => (
              <AlertCard key={i} {...alert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
