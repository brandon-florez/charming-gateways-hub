import { useState } from "react";
import { Globe, Mic, Palette, Bell, Shield, Cpu } from "lucide-react";
import SentinelAvatar from "@/components/SentinelAvatar";

const SettingsPage = () => {
  const [language, setLanguage] = useState("es");
  const [voice, setVoice] = useState("neutral");
  const [alertMode, setAlertMode] = useState("visual");

  const [modules, setModules] = useState({
    syntaxAnalysis: true,
    semanticAnalysis: true,
    securityScan: true,
    voiceAlerts: false,
    avatarInteractive: true,
    silentMode: false,
  });

  const toggleModule = (key: keyof typeof modules) => {
    setModules((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          <span className="text-primary text-glow-primary">Configuración</span>
        </h1>
        <p className="text-sm text-muted-foreground font-mono mt-1">Personaliza tu experiencia con AI-Code Sentinel</p>
      </div>

      {/* Avatar Preview */}
      <div className="rounded-lg border border-border bg-card p-6 flex items-center gap-6">
        <SentinelAvatar status="idle" />
        <div>
          <h3 className="text-sm font-semibold text-foreground">Avatar Interactivo</h3>
          <p className="text-xs text-muted-foreground mt-1">
            El avatar refleja el estado actual del análisis y reacciona a los errores encontrados en tiempo real.
          </p>
        </div>
      </div>

      {/* Language */}
      <div className="rounded-lg border border-border bg-card p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-accent" />
          <h3 className="text-sm font-semibold text-foreground">Idioma</h3>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { key: "es", label: "Español" },
            { key: "en", label: "English" },
            { key: "pt", label: "Português" },
          ].map((lang) => (
            <button
              key={lang.key}
              onClick={() => setLanguage(lang.key)}
              className={`rounded-md border px-3 py-2 text-xs font-medium transition-all ${
                language === lang.key
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Voice */}
      <div className="rounded-lg border border-border bg-card p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Mic className="h-4 w-4 text-accent" />
          <h3 className="text-sm font-semibold text-foreground">Personalización de Voz</h3>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { key: "neutral", label: "Neutral" },
            { key: "friendly", label: "Amigable" },
            { key: "professional", label: "Profesional" },
          ].map((v) => (
            <button
              key={v.key}
              onClick={() => setVoice(v.key)}
              className={`rounded-md border px-3 py-2 text-xs font-medium transition-all ${
                voice === v.key
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Alert Mode */}
      <div className="rounded-lg border border-border bg-card p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4 text-warning" />
          <h3 className="text-sm font-semibold text-foreground">Modo de Alertas</h3>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { key: "visual", label: "Visual" },
            { key: "voice", label: "Voz" },
            { key: "both", label: "Ambas" },
          ].map((mode) => (
            <button
              key={mode.key}
              onClick={() => setAlertMode(mode.key)}
              className={`rounded-md border px-3 py-2 text-xs font-medium transition-all ${
                alertMode === mode.key
                  ? "border-warning bg-warning/10 text-warning"
                  : "border-border bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* Modules */}
      <div className="rounded-lg border border-border bg-card p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Módulos Activos</h3>
        </div>
        <div className="space-y-2">
          {[
            { key: "syntaxAnalysis" as const, label: "Análisis Sintáctico", desc: "Detecta errores de sintaxis en tiempo real", icon: Shield },
            { key: "semanticAnalysis" as const, label: "Análisis Semántico", desc: "Valida la lógica y contexto del código", icon: Cpu },
            { key: "securityScan" as const, label: "Escaneo de Seguridad", desc: "Detecta vulnerabilidades y amenazas", icon: Shield },
            { key: "voiceAlerts" as const, label: "Alertas por Voz", desc: "Emitir alertas mediante síntesis de voz", icon: Mic },
            { key: "avatarInteractive" as const, label: "Avatar Interactivo", desc: "Animaciones y reacciones visuales", icon: Palette },
            { key: "silentMode" as const, label: "Modo Silencioso", desc: "Desactiva interrupciones no críticas", icon: Bell },
          ].map(({ key, label, desc }) => (
            <button
              key={key}
              onClick={() => toggleModule(key)}
              className={`flex w-full items-center justify-between rounded-md border px-3 py-3 text-left transition-all ${
                modules[key]
                  ? "border-primary/30 bg-primary/5"
                  : "border-border bg-secondary"
              }`}
            >
              <div>
                <p className={`text-xs font-semibold ${modules[key] ? "text-primary" : "text-muted-foreground"}`}>{label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{desc}</p>
              </div>
              <div className={`h-5 w-9 rounded-full p-0.5 transition-colors ${modules[key] ? "bg-primary" : "bg-muted"}`}>
                <div className={`h-4 w-4 rounded-full bg-background transition-transform ${modules[key] ? "translate-x-4" : "translate-x-0"}`} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
