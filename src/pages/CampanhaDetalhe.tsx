import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { campaigns, formatCurrency } from "@/data/campaigns";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ArrowLeft,
  Calendar,
  Users,
  Image as ImageIcon,
  Share2,
  Info,
  MapPin,
  Tag,
  Link2,
  MoreHorizontal,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

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
  const shareUrl = window.location.href;
  const shareText = `Ajude esta campanha: ${campaign.title}`;

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    };
    if (platform === "copy") {
      navigator.clipboard.writeText(shareUrl);
      toast({ title: "Link copiado!", description: "Cole onde quiser para compartilhar." });
      return;
    }
    window.open(urls[platform], "_blank", "noopener,noreferrer");
  };

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

            {/* Fotos - versão grande */}
            <div className="bg-card rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-primary" />
                  <h3 className="font-heading font-semibold text-foreground">Fotos</h3>
                </div>
                <Badge variant="secondary">{campaign.photos.length}</Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {campaign.photos.map((photo, i) => (
                  <div key={i} className="aspect-video rounded-xl overflow-hidden">
                    <img src={photo} alt={`Foto ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress + Doar */}
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
            <div className="bg-card rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <h3 className="font-heading font-semibold text-foreground text-sm">Organizador</h3>
              </div>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary text-primary-foreground font-bold text-sm">
                    {campaign.organizer.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground text-sm">{campaign.organizer}</p>
                  <p className="text-xs text-muted-foreground">Organizador da campanha</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{campaign.organizerDesc}</p>
            </div>

            {/* Ajude compartilhando */}
            <div className="bg-card rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Share2 className="h-4 w-4 text-primary" />
                <h3 className="font-heading font-semibold text-foreground text-sm">Ajude compartilhando</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Compartilhar pode ser tão importante quanto doar. Espalhe essa causa!
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white"
                  onClick={() => handleShare("whatsapp")}
                >
                  WhatsApp
                </Button>
                <Button
                  size="sm"
                  className="bg-[#1877F2] hover:bg-[#1565c0] text-white"
                  onClick={() => handleShare("facebook")}
                >
                  Facebook
                </Button>
                <Button
                  size="sm"
                  className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white"
                  onClick={() => handleShare("twitter")}
                >
                  Twitter
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleShare("copy")}
                >
                  <Link2 className="h-3.5 w-3.5 mr-1" />
                  Copiar link
                </Button>
              </div>
            </div>

            {/* Informações */}
            <div className="bg-card rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-primary" />
                <h3 className="font-heading font-semibold text-foreground text-sm">Informações</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Tag className="h-3.5 w-3.5" />
                    <span className="text-xs">Categoria</span>
                  </div>
                  <p className="font-medium text-foreground text-sm">{campaign.tag}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="text-xs">Localização</span>
                  </div>
                  <p className="font-medium text-foreground text-sm">{campaign.location}</p>
                </div>
                <div className="space-y-1 col-span-2">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="text-xs">Criada em</span>
                  </div>
                  <p className="font-medium text-foreground text-sm">{campaign.createdAt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CampanhaDetalhe;
