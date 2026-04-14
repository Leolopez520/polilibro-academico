export const ActivitySection = () => {
  return (
    <div className="space-y-4">
      <p>
        Compendio de actividades lúdicas y ejercicios prácticos para cada
        unidad:
      </p>
      {[
        {
          unit: "Unidad 1: Lenguajes Regulares",
          count: 5,
          base: "UNIDAD_1/actividad_1_",
        },
        {
          unit: "Unidad 2: Lenguajes independientes del contexto ",
          count: 5,
          base: "UNIDAD_2/actividad_2_",
        },
        {
          unit: "Unidad 3: Computabilidad",
          count: 3,
          base: "UNIDAD_3/Actividad_3_",
        },
      ].map((u) => (
        <div key={u.unit}>
          <h4 className="font-semibold text-foreground text-sm mb-2">
            {u.unit}
          </h4>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: u.count }, (_, i) => (
              <a
                key={i}
                href={`#`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md bg-primary/10 text-primary text-xs font-mono hover:bg-primary/20 transition-colors border border-primary/20"
              >
                Act {i + 1}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
