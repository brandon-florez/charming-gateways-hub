const sampleCode = `function calcularPromedio(notas) {
  let suma = 0
  for (let i = 0; i <= notas.length; i++) {
    suma += notas[i]
  }
  const promedio = suma / notas.length
  
  if (promedio = 6) {
    console.log("Aprobado")
  } else {
    console.log("Reprobado")
  }
  
  return promedio
}

var resultado = calcularPromedio([8, 9, 7, 10])
console.log(resultado)`;

const errorLines = [3, 8, 17];
const warningLines = [1, 2];

const CodeEditor = () => {
  const lines = sampleCode.split("\n");

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      {/* Editor header */}
      <div className="flex items-center justify-between border-b border-border bg-secondary px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-destructive/60" />
            <span className="h-3 w-3 rounded-full bg-warning/60" />
            <span className="h-3 w-3 rounded-full bg-success/60" />
          </div>
          <span className="ml-3 text-xs font-mono text-muted-foreground">ejemplo.js</span>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground">TypeScript</span>
      </div>

      {/* Code area */}
      <div className="relative overflow-x-auto">
        <div className="overflow-hidden">
          <div className="animate-scan-line pointer-events-none absolute inset-0 z-10 h-8 bg-gradient-to-b from-primary/5 to-transparent" />
        </div>
        <pre className="p-4 text-sm leading-6">
          {lines.map((line, i) => {
            const lineNum = i + 1;
            const isError = errorLines.includes(lineNum);
            const isWarning = warningLines.includes(lineNum);

            return (
              <div
                key={i}
                className={`flex ${
                  isError ? "bg-destructive/10 border-l-2 border-destructive" :
                  isWarning ? "bg-warning/10 border-l-2 border-warning" :
                  "border-l-2 border-transparent"
                }`}
              >
                <span className="w-8 flex-shrink-0 select-none pr-3 text-right font-mono text-xs text-muted-foreground">
                  {lineNum}
                </span>
                <code className="font-mono text-foreground whitespace-pre">{line || " "}</code>
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;
