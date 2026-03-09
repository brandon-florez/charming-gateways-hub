import SentinelAvatar from "@/components/SentinelAvatar";
import CodeEditor from "@/components/CodeEditor";
import AlertCard from "@/components/AlertCard";

const analysisSteps = [
  { label: "Análisis Léxico", status: "done" },
  { label: "Análisis Sintáctico", status: "done" },
  { label: "Análisis Semántico", status: "active" },
  { label: "Revisión de Seguridad", status: "pending" },
];

const AnalysisPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Análisis de <span className="text-accent text-glow-accent">Código</span>
        </h1>
        <p className="text-sm text-muted-foreground font-mono mt-1">Motor de análisis en tiempo real con Tree-sitter + Ollama</p>
      </div>

      {/* Pipeline */}
      <div className="rounded-lg border border-border bg-card p-4">
        <h3 className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-wider">Pipeline de Análisis</h3>
        <div className="flex items-center gap-2">
          {analysisSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 flex-1">
              <div className={`flex-1 rounded-md border px-3 py-2 text-center text-xs font-medium transition-all ${
                step.status === "done" ? "border-success/30 bg-success/10 text-success" :
                step.status === "active" ? "border-accent/50 bg-accent/10 text-accent animate-pulse" :
                "border-border bg-secondary text-muted-foreground"
              }`}>
                {step.label}
              </div>
              {i < analysisSteps.length - 1 && (
                <span className={`text-xs ${step.status === "done" ? "text-success" : "text-muted-foreground"}`}>→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Code */}
        <div className="lg:col-span-2">
          <CodeEditor />
        </div>

        {/* AI Assistant */}
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <SentinelAvatar status="analyzing" message="Analizando semántica del código..." />
          </div>

          <AlertCard
            severity="critical"
            title="Quick-Fix disponible"
            description="Cambiar 'i <= notas.length' por 'i < notas.length' para evitar acceso fuera de rango."
            line={3}
            file="ejemplo.js"
          />

          <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
            <h4 className="text-sm font-semibold text-accent mb-2">💡 Explicación Pedagógica</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Los arrays en JavaScript están indexados desde 0 hasta length-1. Al usar <code className="font-mono text-accent">{'<='}</code> en
              lugar de <code className="font-mono text-accent">{'<'}</code>, el bucle intenta acceder a un elemento que no existe, resultando
              en <code className="font-mono text-destructive">undefined</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
