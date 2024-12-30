import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TopicGenerator from "./pages/TopicGenerator";
import Research from "./pages/Research";
import ContentGenerator from "./pages/ContentGenerator";
import SeoOptimizer from "./pages/SeoOptimizer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<TopicGenerator />} />
            <Route path="/research" element={<Research />} />
            <Route path="/content" element={<ContentGenerator />} />
            <Route path="/seo" element={<SeoOptimizer />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;