export const CollabSection = () => {
  return (
    <div className="space-y-4">
      <p>
        Estudiantes que contribuyeron a la creación de este recurso digital:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[["Perez Lopez Leonardo", "lperezl1501@alumno.ipn.mx"]].map(
          ([name, email]) => (
            <div
              key={name}
              className="bg-background/30 rounded-lg p-3 border border-border/30"
            >
              <p className="font-medium text-foreground text-sm">{name}</p>
              <p className="text-xs text-primary font-mono">{email}</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
};
