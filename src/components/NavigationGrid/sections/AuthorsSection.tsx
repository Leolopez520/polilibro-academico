export const AuthorsSection = () => {
  return (
    <div className="space-y-1">
      {[
        {
          name: "Luis Enrique Olvera Hernandez",
          email: "lehernandez@ipn.mx",
          desc: "M. en C. en Sistemas Computacionales Móviles - Ing. en Sistemas Computacionales",
          areas:
            "Algoritmia y Programación Estructurada, Estructuras de Datos, Teoría Computacional,  Compiladores, Programación Orientada a Objetos, Análisis y Diseño de Algoritmos",
        },
      ].map((author) => (
        <div
          key={author.name}
          className="flex flex-col gap-1 py-4 border-b border-border/30 last:border-0"
        >
          <h3 className="font-semibold text-foreground">{author.name}</h3>
          <p className="text-xs text-primary font-mono">{author.email}</p>
          <p className="text-sm text-muted-foreground">{author.desc}</p>
          <p className="text-xs text-muted-foreground">
            <strong className="text-secondary-foreground">Áreas:</strong>{" "}
            {author.areas}
          </p>
        </div>
      ))}
    </div>
  );
};
