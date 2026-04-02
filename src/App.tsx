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
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
