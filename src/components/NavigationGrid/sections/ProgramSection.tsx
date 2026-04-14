export const ProgramSection = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          ["Unidad Académica", "ESCOM"],
          ["Programa", "ISC"],
          ["Semestre", "IV"],
          ["Modalidad", "Escolarizada"],
          ["Tipo", "Teórica-Práctica"],
          ["Créditos SATCA", "6.1"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="bg-background/50 rounded-lg p-3 border border-border/50"
          >
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="font-semibold text-foreground text-sm">{value}</p>
          </div>
        ))}
      </div>
      <p>
        <strong className="text-foreground">Propósito:</strong> Construye
        soluciones a problemas computacionales con base en los modelos de
        cómputo para lenguajes regulares, lenguajes independientes del contexto
        y la noción de computabilidad.
      </p>
      <a
        href="https://www.escom.ipn.mx/docs/oferta/uaISC2020/teoriaComputacion_ISC2020.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary text-sm hover:underline"
      >
        Ver programa completo
      </a>
    </div>
  );
};
