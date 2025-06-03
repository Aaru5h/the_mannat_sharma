
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MessagePage from "./pages/MessagePage";
import PoemPage from "./pages/PoemPage";
import AboutPage from "./pages/AboutPage";
import CollagePage from "./pages/CollagePage";
import EasterEggPage from "./pages/EasterEggPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/poem" element={<PoemPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/memories" element={<CollagePage />} />
          <Route path="/legend" element={<EasterEggPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
