import { AlertTriangle, AlertCircle, Info, CheckCircle } from "lucide-react";

export type Severity = "critical" | "warning" | "info" | "success";

interface AlertCardProps {
  severity: Severity;
  title: string;
  description: string;
  line?: number;
  file?: string;
  timestamp?: string;
}

const severityConfig = {
  critical: {
    icon: AlertCircle,
    containerClass: "border-destructive/30 bg-destructive/5",
    iconClass: "text-destructive",
    badgeClass: "bg-destructive/20 text-destructive",
    label: "Crítico",
  },
  warning: {
    icon: AlertTriangle,
    containerClass: "border-warning/30 bg-warning/5",
    iconClass: "text-warning",
    badgeClass: "bg-warning/20 text-warning",
    label: "Advertencia",
  },
  info: {
    icon: Info,
    containerClass: "border-info/30 bg-info/5",
    iconClass: "text-info",
    badgeClass: "bg-info/20 text-info",
    label: "Consejo",
  },
  success: {
    icon: CheckCircle,
    containerClass: "border-success/30 bg-success/5",
    iconClass: "text-success",
    badgeClass: "bg-success/20 text-success",
    label: "Correcto",
  },
};

const AlertCard = ({ severity, title, description, line, file, timestamp }: AlertCardProps) => {
  const config = severityConfig[severity];
  const Icon = config.icon;

  return (
    <div className={`rounded-lg border p-3 transition-all hover:scale-[1.01] ${config.containerClass}`}>
      <div className="flex items-start gap-3">
        <Icon className={`mt-0.5 h-4 w-4 flex-shrink-0 ${config.iconClass}`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`rounded px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase ${config.badgeClass}`}>
              {config.label}
            </span>
            {line && (
              <span className="text-[10px] font-mono text-muted-foreground">
                Línea {line}
              </span>
            )}
          </div>
          <h4 className="text-sm font-semibold text-foreground">{title}</h4>
          <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{description}</p>
          {(file || timestamp) && (
            <div className="mt-2 flex items-center gap-3 text-[10px] font-mono text-muted-foreground">
              {file && <span>{file}</span>}
              {timestamp && <span>{timestamp}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
