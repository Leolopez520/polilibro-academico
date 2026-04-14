export const MethodologySection = () => {
  return (
    <div className="space-y-4">
      <p>
        Diseñado con un enfoque pedagógico centrado en la comprensión,
        aplicación y reflexión. El polilibro promueve la colaboración, el
        aprendizaje cooperativo y la evaluación continua.
      </p>
      <div className="space-y-3">
        <div className="bg-background/30 rounded-lg p-4 border border-border/30">
          <h4 className="font-semibold text-foreground text-sm mb-1">
            🎯 Aprendizaje basado en proyectos
          </h4>
          <p className="text-xs text-muted-foreground">
            Colaboración guiada para responder a problemáticas reales en el
            ámbito de los sistemas operativos.
          </p>
        </div>
        <div className="bg-background/30 rounded-lg p-4 border border-border/30">
          <h4 className="font-semibold text-foreground text-sm mb-1">
            📖 Aprendizaje autónomo
          </h4>
          <p className="text-xs text-muted-foreground">
            Navegación autogestionada con recursos interactivos, lecturas clave
            y ejemplos guiados.
          </p>
        </div>
        <div className="bg-background/30 rounded-lg p-4 border border-border/30">
          <h4 className="font-semibold text-foreground text-sm mb-1">
            🧩 Aprendizaje basado en problemas
          </h4>
          <p className="text-xs text-muted-foreground">
            Resolución colaborativa de problemas auténticos en el contexto de
            sistemas operativos.
          </p>
        </div>
      </div>
      <div className="bg-background/30 rounded-lg p-4 border border-border/30">
        <p className="text-xs text-muted-foreground">
          <strong className="text-secondary-foreground">Duración total:</strong>{" "}
          81 horas · 3.0h teoría/semana + 1.5h presencial/semana
        </p>
      </div>
    </div>
  );
};
