import { Shield, Zap, Eye, AlertTriangle } from "lucide-react";

const stats = [
  { label: "Errores Detectados", value: "12", icon: AlertTriangle, color: "text-destructive", glow: "glow-destructive" },
  { label: "Sugerencias", value: "28", icon: Zap, color: "text-warning", glow: "glow-warning" },
  { label: "Líneas Analizadas", value: "1,247", icon: Eye, color: "text-info", glow: "glow-accent" },
  { label: "Seguridad", value: "98%", icon: Shield, color: "text-primary", glow: "glow-primary" },
];

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map(({ label, value, icon: Icon, color, glow }) => (
        <div
          key={label}
          className={`rounded-lg border border-border bg-card p-4 transition-all hover:${glow}`}
        >
          <div className="flex items-center gap-2">
            <Icon className={`h-4 w-4 ${color}`} />
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
          <p className={`mt-2 text-2xl font-bold font-mono ${color}`}>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
