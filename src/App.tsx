import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Mission from "./pages/Mission";
import Legacy from "./pages/Legacy";
import Board from "./pages/Board";
import Values from "./pages/Values";
import AreasOfFocus from "./pages/AreasOfFocus";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PasswordProtect from "./components/PasswordProtect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PasswordProtect>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/legacy" element={<Legacy />} />
            <Route path="/board" element={<Board />} />
            <Route path="/values" element={<Values />} />
            <Route path="/areas-of-focus" element={<AreasOfFocus />} />
            <Route path="/contact" element={<Contact />} />
            {/* CATCH-ALL ROUTE MUST BE LAST */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PasswordProtect>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
