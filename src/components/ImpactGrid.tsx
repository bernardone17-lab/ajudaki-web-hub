import impactMeals from "@/assets/impact-meals.jpg";
import impactFamilies from "@/assets/impact-families.jpg";
import impactTrees from "@/assets/impact-trees.jpg";
import impactPeople from "@/assets/impact-people.jpg";

const stats = [
  {
    number: "+18.500",
    label: "refeições distribuídas",
    image: impactMeals,
    overlay: "from-primary/80 to-primary-dark/70",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    number: "+12.000",
    label: "famílias assistidas",
    image: impactFamilies,
    overlay: "from-accent/80 to-accent/60",
    className: "md:col-span-1",
  },
  {
    number: "+10.000",
    label: "árvores plantadas",
    image: impactTrees,
    overlay: "from-primary-dark/80 to-primary/60",
    className: "md:col-span-1",
  },
  {
    number: "+50.000",
    label: "pessoas impactadas",
    image: impactPeople,
    overlay: "from-accent/70 to-primary/60",
    className: "md:col-span-2",
  },
];

const ImpactGrid = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Nosso Impacto
      </h2>
      <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
        Com a ajuda de milhares de doadores, transformamos vidas todos os dias.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`relative rounded-2xl overflow-hidden min-h-[200px] flex items-end p-6 group ${stat.className}`}
          >
            <img
              src={stat.image}
              alt={stat.label}
              loading="lazy"
              width={800}
              height={600}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${stat.overlay}`} />
            <div className="relative z-10">
              <p className="font-heading text-3xl md:text-4xl font-extrabold text-primary-foreground">
                {stat.number}
              </p>
              <p className="text-primary-foreground/90 text-sm font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactGrid;
