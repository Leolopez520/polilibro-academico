export const LicenseSection = () => {
  return (
    <div className="space-y-4">
      <p>
        <strong className="text-foreground">Teoría Computacional</strong> © 2026
        por Luis Enrique Hernandez Olvera.
      </p>
      <p>
        Licenciado bajo{" "}
        <a
          href="https://creativecommons.org/licenses/by-nc/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC
          4.0)
        </a>
      </p>
    </div>
  );
};
