import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes.tsx";
import { ThemeProvider } from "@/components/dark-mode/theme-provider.tsx";
import Navbar from "./components/navbar/Navbar.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-muted">
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
