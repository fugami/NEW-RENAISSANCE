import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Play, Camera, Film } from "lucide-react";

export default function Home() {
  const films = [
    {
      id: 1,
      title: "The Florence Awakening",
      year: "2025",
      type: "Short Film",
      description: "A profound journey through the eyes of a modern artisan trapped in the echoes of the past.",
      image: "/images/film-1.png",
    },
    {
      id: 2,
      title: "Symmetry of Shadows",
      year: "2024",
      type: "Feature",
      description: "An architectural thriller exploring the duality of human nature against the backdrop of neoclassical ruins.",
      image: "/images/film-2.png",
    },
    {
      id: 3,
      title: "Velvet Horizons",
      year: "2023",
      type: "Documentary",
      description: "A testament to the creators who are building the foundations of a new cultural era.",
      image: "/images/film-3.png",
    },
  ];

  return (
    <div className="min-h-screen relative w-full overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-primary-foreground">
        <Link href="/" className="font-serif text-xl tracking-wider cursor-pointer">
          N. RENAISSANCE
        </Link>
        <div className="flex gap-8 font-sans text-sm tracking-widest uppercase">
          <a href="#work" className="hover:opacity-70 transition-opacity">Work</a>
          <a href="#manifesto" className="hover:opacity-70 transition-opacity">Manifesto</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center px-8 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl z-10"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] mb-6">
            <span className="block italic">The New</span>
            <span className="block font-bold">Renaissance.</span>
          </h1>
          <p className="font-sans text-lg md:text-xl max-w-xl leading-relaxed mt-12 border-l-2 border-foreground pl-6 opacity-90">
            Telling the self-fulfilling narrative of a cultural rebirth through the cinematic lens.
          </p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-24 w-64 h-64 border border-foreground/20 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute bottom-1/4 right-48 w-32 h-32 border border-foreground/30 rotate-45" />
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-32 px-8 lg:px-24 bg-foreground text-background">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="text-5xl md:text-7xl">Selected <br/><span className="italic opacity-80">Works</span></h2>
          <p className="font-sans text-sm tracking-widest uppercase opacity-70 max-w-xs text-right">
            Visual poetry crafted for the modern era.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {films.map((film, index) => (
            <motion.div 
              key={film.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-center`}
            >
              <div className="w-full md:w-3/5 group overflow-hidden relative aspect-[16/9] md:aspect-[4/3] bg-background/10">
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-foreground/40 backdrop-blur-sm cursor-pointer">
                  <div className="w-20 h-20 rounded-full border border-background flex items-center justify-center">
                    <Play className="w-8 h-8 text-background ml-1" />
                  </div>
                </div>
                <img 
                  src={film.image} 
                  alt={film.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1600`;
                  }}
                />
              </div>
              
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6 opacity-70 font-sans text-xs tracking-widest uppercase">
                  <span>{film.year}</span>
                  <span className="w-8 h-[1px] bg-background"></span>
                  <span>{film.type}</span>
                </div>
                <h3 className="text-4xl md:text-5xl mb-6 leading-tight">{film.title}</h3>
                <p className="font-sans opacity-80 leading-relaxed mb-12 text-lg">
                  {film.description}
                </p>
                <button className="flex items-center gap-4 font-sans text-sm tracking-widest uppercase group w-fit hover:opacity-70 transition-opacity">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-40 px-8 lg:px-24 flex flex-col items-center justify-center text-center">
        <Camera className="w-12 h-12 mb-12 opacity-50" />
        <h2 className="text-4xl md:text-6xl max-w-4xl leading-tight italic mb-12">
          "We are not merely documenting reality; we are conjuring the visual vocabulary of tomorrow."
        </h2>
        <div className="w-[1px] h-24 bg-foreground/30 mb-12"></div>
        <p className="font-sans text-lg max-w-2xl leading-relaxed opacity-90">
          The new renaissance demands an honest, visceral, and unapologetic reflection of the human spirit. Through the interplay of light and shadow, we craft narratives that transcend time—anchored in classical beauty, yet fiercely modern.
        </p>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-foreground text-background py-24 px-8 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        <div>
          <h2 className="text-5xl md:text-7xl mb-8">Let's Create<br/><span className="italic opacity-80">History.</span></h2>
          <a href="mailto:studio@newrenaissance.film" className="font-sans text-xl md:text-2xl border-b border-background pb-2 hover:opacity-70 transition-opacity">
            studio@newrenaissance.film
          </a>
        </div>
        
        <div className="flex flex-col gap-4 font-sans text-sm tracking-widest uppercase">
          <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Vimeo</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Journal</a>
        </div>
      </footer>
    </div>
  );
}
