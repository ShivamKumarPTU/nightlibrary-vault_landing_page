import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Privacy from "./pages/Privacy.tsx";
import NotFound from "./pages/NotFound.tsx";
import FeaturePhotoStorage from "./pages/FeaturePhotoStorage.tsx";
import FeatureVideoDownloader from "./pages/FeatureVideoDownloader.tsx";
import FeatureEncryptedMedia from "./pages/FeatureEncryptedMedia.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy.html" element={<Privacy />} />
          <Route path="/features/photo-secure-storage-app" element={<FeaturePhotoStorage />} />
          <Route path="/features/private-video-downloader-app" element={<FeatureVideoDownloader />} />
          <Route path="/features/encrypted-media-app" element={<FeatureEncryptedMedia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
