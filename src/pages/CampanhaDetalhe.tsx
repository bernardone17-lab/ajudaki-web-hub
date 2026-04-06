import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { campaigns, formatCurrency } from "@/data/campaigns";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Users } from "lucide-react";

const CampanhaDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const campaign = campaigns.find((c) => c.id === id);

  if (!campaign) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="font-heading text-2xl font-bold text-foreground">Campanha não encontrada</h1>
            <Link to="/campanhas">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar às campanhas
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const pct = Math.round((campaign.raised / campaign.goal) * 100);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero image */}
      <div className="w-full h-64 md:h-96 overflow-hidden relative">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-0 right-0 container mx-auto px-4">
          <Badge className="bg-primary hover:bg-primary mb-3">{campaign.tag}</Badge>
          <h1 className="font-heading text-2xl md:text-4xl font-bold text-white max-w-3xl">
            {campaign.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            <Link
              to="/campanhas"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-1 h-4 w-4" /> Voltar às campanhas
            </Link>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                Sobre esta campanha
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {campaign.fullDescription}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-sm space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{pct}% arrecadado</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {campaign.daysLeft} dias restantes
                  </span>
                </div>
                <Progress value={pct} className="h-3 bg-muted [&>div]:bg-primary" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Arrecadado</p>
                  <p className="font-heading font-bold text-foreground text-lg">
                    {formatCurrency(campaign.raised)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Meta</p>
                  <p className="font-heading font-bold text-foreground text-lg">
                    {formatCurrency(campaign.goal)}
                  </p>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Doar Agora
              </Button>
            </div>

            {/* Organizador */}
            <div className="bg-card rounded-2xl p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <h3 className="font-heading font-semibold text-foreground text-sm">Organizador</h3>
              </div>
              <p className="font-medium text-foreground">{campaign.organizer}</p>
              <p className="text-sm text-muted-foreground">{campaign.organizerDesc}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CampanhaDetalhe;
