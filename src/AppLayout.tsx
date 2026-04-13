import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Aquí se renderizará el HeroSection y NavigationGrid (HomePage) */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
