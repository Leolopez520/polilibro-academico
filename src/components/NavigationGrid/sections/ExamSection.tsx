export const ExamSection = () => {
  return (
    <div className="space-y-4">
      <p>
        Evaluación de conocimientos previos sobre conceptos básicos, funciones y
        tipos de sistemas operativos.{" "}
        <strong className="text-foreground">
          No tiene valor en la calificación final
        </strong>
        , su finalidad es exclusivamente diagnóstica.
      </p>
      <div className="bg-background/30 rounded-lg p-4 border border-border/30">
        <p className="text-xs text-muted-foreground mb-2">
          Duración: 30-45 minutos · 14 preguntas
        </p>
        <p className="text-xs text-muted-foreground">
          Incluye reactivos de opción múltiple, verdadero/falso y preguntas
          abiertas cortas.
        </p>
      </div>
    </div>
  );
};
