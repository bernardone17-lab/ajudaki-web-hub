import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { campaigns, formatCurrency } from "@/data/campaigns";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const categories = ["Todas", "Educação", "Saúde", "Assistência Social"];

const CampanhasPage = () => {
  const [active, setActive] = useState("Todas");

  const filtered = active === "Todas" ? campaigns : campaigns.filter((c) => c.tag === active);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Explorar Campanhas
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Descubra causas que precisam da sua ajuda e faça a diferença hoje.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-10">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="container mx-auto px-4 pb-20 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((c) => {
            const pct = Math.round((c.raised / c.goal) * 100);
            return (
              <Link
                key={c.id}
                to={`/campanhas/${c.id}`}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary hover:bg-primary">{c.tag}</Badge>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-heading font-semibold text-foreground text-lg leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {c.description}
                  </p>
                  <Progress value={pct} className="h-2.5 bg-muted [&>div]:bg-primary" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{pct}% arrecadado</span>
                    <span className="text-muted-foreground">{c.daysLeft} dias restantes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-foreground">{formatCurrency(c.raised)}</span>
                    <span className="text-sm text-muted-foreground">Meta: {formatCurrency(c.goal)}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">
            Nenhuma campanha encontrada nesta categoria.
          </p>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default CampanhasPage;
