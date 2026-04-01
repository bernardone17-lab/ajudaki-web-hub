import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import ImpactGrid from "@/components/ImpactGrid";
import ComoFunciona from "@/components/ComoFunciona";
import Campanhas from "@/components/Campanhas";
import HistoriasImpacto from "@/components/HistoriasImpacto";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navbar />
      
      <ImpactGrid />
      <ComoFunciona />
      <Campanhas />
      <HistoriasImpacto />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
