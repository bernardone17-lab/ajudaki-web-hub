import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { campaigns, formatCurrency } from "@/data/campaigns";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowLeft,
  Calendar,
  Users,
  Image as ImageIcon,
  Share2,
  Info,
  MapPin,
  Tag,
  Copy,
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";

const CampanhaDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const campaign = campaigns.find((c) => c.id === id);
  const [shareOpen, setShareOpen] = useState(false);

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
  const shareText = `Olá! A campanha "${campaign.title}" precisa do seu apoio. Contribua e ajude a fazer a diferença!`;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(campaign.pixKey);
    toast.success("Chave PIX copiada!");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copiado!");
  };

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      messenger: `https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&app_id=0`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(campaign.title)}&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`,
    };
    if (urls[platform]) {
      window.open(urls[platform], "_blank", "noopener,noreferrer");
    }
  };

  const socialButtons = [
    { id: "whatsapp", label: "WhatsApp", color: "bg-[#25D366]", icon: <MessageCircle className="h-5 w-5 text-white" /> },
    { id: "facebook", label: "Facebook", color: "bg-[#1877F2]", icon: <Facebook className="h-5 w-5 text-white" /> },
    { id: "twitter", label: "X", color: "bg-[#000000]", icon: <span className="text-white font-bold text-sm">𝕏</span> },
    { id: "messenger", label: "Messenger", color: "bg-[#0084FF]", icon: <MessageCircle className="h-5 w-5 text-white" /> },
    { id: "linkedin", label: "LinkedIn", color: "bg-[#0A66C2]", icon: <Linkedin className="h-5 w-5 text-white" /> },
    { id: "email", label: "E-mail", color: "bg-muted-foreground", icon: <Mail className="h-5 w-5 text-white" /> },
  ];

  const ProgressCard = () => (
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

      {/* PIX */}
      <div className="space-y-3 pt-2 border-t border-border">
        <p className="text-xs font-semibold text-muted-foreground tracking-widest text-center">
          OU DOE VIA PIX
        </p>
        <div className="flex gap-2">
          <Input
            readOnly
            value={campaign.pixKey}
            className="text-sm bg-muted border-none"
          />
          <Button
            variant="secondary"
            size="icon"
            className="shrink-0"
            onClick={handleCopyPix}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );

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

            {/* Mobile-only: Progress + Doar */}
            <div className="lg:hidden">
              <ProgressCard />
            </div>

            {/* Fotos */}
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
            {/* Progress + Doar (desktop only) */}
            <div className="hidden lg:block">
              <ProgressCard />
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

            {/* Botão Compartilhar */}
            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={() => setShareOpen(true)}
            >
              <Share2 className="mr-2 h-5 w-5" />
              Compartilhar esta campanha
            </Button>
          </div>
        </div>
      </div>

      {/* Dialog de Compartilhamento */}
      <Dialog open={shareOpen} onOpenChange={setShareOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading">Compartilhamento rápido</DialogTitle>
          </DialogHeader>
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Link da vaquinha:</p>
              <div className="flex gap-2">
                <Input readOnly value={shareUrl} className="text-sm bg-muted border-none" />
                <Button variant="secondary" size="icon" className="shrink-0" onClick={handleCopyLink}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Compartilhe também nas redes sociais e alcance ainda mais doadores!
            </p>

            <div className="bg-muted/50 rounded-xl p-4">
              <p className="text-sm text-foreground italic">
                "{shareText}"
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {socialButtons.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => handleShare(btn.id)}
                  className="flex flex-col items-center gap-1.5 group"
                >
                  <div className={`${btn.color} w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {btn.icon}
                  </div>
                  <span className="text-xs text-muted-foreground">{btn.label}</span>
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default CampanhaDetalhe;
