import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MessageCircle, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "(11) 99999-9999",
    subtitle: "Seg-Sex, 9h às 18h",
  },
  {
    icon: Mail,
    title: "E-mail",
    detail: "contato@ajudaki.com.br",
    subtitle: "Respondemos em até 24h",
  },
  {
    icon: Phone,
    title: "Telefone",
    detail: "(11) 3333-3333",
    subtitle: "Seg-Sex, 9h às 18h",
  },
  {
    icon: MapPin,
    title: "Endereço",
    detail: "São Paulo, SP",
    subtitle: "Brasil",
  },
];

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso!", {
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Fale Conosco
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos aqui para ajudar. Entre em contato com nossa equipe e responderemos o mais rápido possível.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            {/* Left — Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Card key={item.title} className="border-border/50 shadow-sm">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground text-sm">
                        {item.title}
                      </h3>
                      <p className="text-foreground text-sm">{item.detail}</p>
                      <p className="text-muted-foreground text-xs">{item.subtitle}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social */}
              <div className="pt-4">
                <h3 className="font-heading font-semibold text-foreground mb-3 text-sm">
                  Redes Sociais
                </h3>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <Card className="border-border/50 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(v) => setFormData({ ...formData, subject: v })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="duvida">Dúvida</SelectItem>
                          <SelectItem value="sugestao">Sugestão</SelectItem>
                          <SelectItem value="problema">Problema</SelectItem>
                          <SelectItem value="parceria">Parceria</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Escreva sua mensagem aqui..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
