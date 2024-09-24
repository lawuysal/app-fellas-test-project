import { ThemeProvider } from "@/components/dark-mode/theme-provider.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import { AppRoutes } from "./routes/AppRoutes.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-muted">
        <Navbar />
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
