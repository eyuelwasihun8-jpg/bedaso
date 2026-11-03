interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ image, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom-in"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative z-10 text-center text-white px-4">
        {breadcrumb && (
          <p className="text-accent-light text-sm font-medium tracking-wider uppercase mb-3 animate-fade-in-up">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
