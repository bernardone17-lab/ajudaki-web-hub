import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Sobre from "./pages/Sobre.tsx";
import Seguranca from "./pages/Seguranca.tsx";
import Divulgacao from "./pages/Divulgacao.tsx";
import Privacidade from "./pages/Privacidade.tsx";
import Cookies from "./pages/Cookies.tsx";
import ComoFuncionaPage from "./pages/ComoFuncionaPage.tsx";
import DestinoCerto from "./pages/DestinoCerto.tsx";
import TermosDeUso from "./pages/TermosDeUso.tsx";
import FAQ from "./pages/FAQ.tsx";
import Contato from "./pages/Contato.tsx";
import ONGs from "./pages/ONGs.tsx";
import CampanhasPage from "./pages/CampanhasPage.tsx";
import CampanhaDetalhe from "./pages/CampanhaDetalhe.tsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/seguranca" element={<Seguranca />} />
      <Route path="/divulgacao" element={<Divulgacao />} />
      <Route path="/privacidade" element={<Privacidade />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/como-funciona-ajudaki" element={<ComoFuncionaPage />} />
      <Route path="/destino-certo" element={<DestinoCerto />} />
      <Route path="/termos-de-uso" element={<TermosDeUso />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/ongs" element={<ONGs />} />
      <Route path="/campanhas" element={<CampanhasPage />} />
      <Route path="/campanhas/:id" element={<CampanhaDetalhe />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
