import sentinelAvatar from "@/assets/sentinel-avatar.png";

interface AvatarWidgetProps {
  status?: "idle" | "analyzing" | "alert" | "silent";
  message?: string;
}

const statusColors = {
  idle: "border-primary glow-primary",
  analyzing: "border-accent glow-accent",
  alert: "border-destructive glow-destructive",
  silent: "border-muted",
};

const statusLabels = {
  idle: "En espera",
  analyzing: "Analizando...",
  alert: "¡Alerta!",
  silent: "Modo silencioso",
};

const SentinelAvatar = ({ status = "idle", message }: AvatarWidgetProps) => {
  return (
    <div className="flex flex-col items-center gap-3 p-4">
      <div className={`relative rounded-full border-2 p-1 transition-all duration-500 ${statusColors[status]}`}>
        <img
          src={sentinelAvatar}
          alt="AI-Code Sentinel Avatar"
          className={`h-20 w-20 rounded-full object-cover ${status === "analyzing" ? "animate-sentinel-pulse" : ""} ${status === "idle" ? "animate-float" : ""}`}
        />
        <span className={`absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-card ${
          status === "idle" ? "bg-primary" : status === "analyzing" ? "bg-accent" : status === "alert" ? "bg-destructive" : "bg-muted-foreground"
        }`} />
      </div>
      <span className="text-xs font-mono text-muted-foreground">{statusLabels[status]}</span>
      {message && (
        <div className="max-w-[200px] rounded-lg border border-border bg-secondary p-2 text-xs text-secondary-foreground">
          {message}
        </div>
      )}
    </div>
  );
};

export default SentinelAvatar;
