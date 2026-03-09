import { useState } from "react";
import type { Severity } from "./AlertCard";

interface SeverityFilterProps {
  onFilterChange: (filters: Severity[]) => void;
}

const filters: { key: Severity; label: string; colorClass: string; activeClass: string }[] = [
  { key: "critical", label: "Crítico", colorClass: "border-destructive/30 text-destructive", activeClass: "bg-destructive/20 border-destructive glow-destructive" },
  { key: "warning", label: "Advertencia", colorClass: "border-warning/30 text-warning", activeClass: "bg-warning/20 border-warning glow-warning" },
  { key: "info", label: "Consejo", colorClass: "border-info/30 text-info", activeClass: "bg-info/20 border-info glow-accent" },
  { key: "success", label: "Correcto", colorClass: "border-success/30 text-success", activeClass: "bg-success/20 border-success glow-primary" },
];

const SeverityFilter = ({ onFilterChange }: SeverityFilterProps) => {
  const [active, setActive] = useState<Severity[]>(["critical", "warning", "info", "success"]);

  const toggle = (key: Severity) => {
    const next = active.includes(key) ? active.filter((k) => k !== key) : [...active, key];
    setActive(next);
    onFilterChange(next);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(({ key, label, colorClass, activeClass }) => (
        <button
          key={key}
          onClick={() => toggle(key)}
          className={`rounded-md border px-3 py-1.5 text-xs font-mono font-medium transition-all ${
            active.includes(key) ? activeClass : `${colorClass} opacity-40`
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default SeverityFilter;
