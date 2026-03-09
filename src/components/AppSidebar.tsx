import { Shield, Code2, History, Settings, Volume2, VolumeX, LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SentinelAvatar from "./SentinelAvatar";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/analysis", icon: Code2, label: "Análisis" },
  { to: "/history", icon: History, label: "Historial" },
  { to: "/settings", icon: Settings, label: "Configuración" },
];

const AppSidebar = () => {
  const [silentMode, setSilentMode] = useState(false);

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-border bg-sidebar">
      {/* Logo */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-5">
        <Shield className="h-6 w-6 text-primary" />
        <div>
          <h1 className="text-sm font-bold tracking-wider text-foreground">
            AI-CODE <span className="text-primary text-glow-primary">SENTINEL</span>
          </h1>
          <p className="text-[10px] font-mono text-muted-foreground">v1.0.0 — Local-First</p>
        </div>
      </div>

      {/* Avatar */}
      <SentinelAvatar
        status={silentMode ? "silent" : "idle"}
        message={silentMode ? "Modo silencioso activo" : "Listo para analizar"}
      />

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary/10 text-primary glow-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`
            }
          >
            <Icon className="h-4 w-4" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Silent mode toggle */}
      <div className="border-t border-border p-3">
        <button
          onClick={() => setSilentMode(!silentMode)}
          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
            silentMode
              ? "bg-warning/10 text-warning"
              : "text-sidebar-foreground hover:bg-sidebar-accent"
          }`}
        >
          {silentMode ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          {silentMode ? "Silencio Activo" : "Modo Silencioso"}
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
