import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'manifesto' | 'contact'>('home');
  const [activeFilm, setActiveFilm] = useState(0);

  const films = [
    {
      id: 1,
      title: "21 Days Til Launch",
      year: "2026",
      type: "FEATURE LENGTH DOCUMENTARY",
      description: "Embedded documentary with Replit.",
      image: "/images/film-1.jpg",
      trailerUrl: "https://x.com/amasad/status/2029251832460263632",
      ctaLabel: "Watch Trailer"
    },
    {
      id: 2,
      title: "Write with Blood",
      year: "2026",
      type: "Short Film",
      description: "The emotional truth of building a startup.",
      image: "/images/film-2.jpg",
      trailerUrl: "https://x.com/hf0/status/2026350458126958939/video/1",
      ctaLabel: "WATCH FILM"
    },
    {
      id: 3,
      title: "Dear Founder",
      year: "2025",
      type: "Short Film",
      description: "A message for founders.",
      image: "/images/film-3.jpg",
      trailerUrl: "https://x.com/davefontenot/status/1986874442610581617/video/1",
      ctaLabel: "WATCH FILM"
    },
  ];

  return (
    <div className="h-[100dvh] w-screen overflow-hidden relative bg-primary text-primary-foreground selection:bg-primary-foreground selection:text-primary">
      {films.map((film, index) => (
        <motion.div
          key={film.id}
          animate={{ opacity: activeFilm === index ? 0.4 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-0"
          style={{ pointerEvents: "none" }}
        >
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply z-10" />
          <img 
            src={film.image} 
            alt={film.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary via-primary/20 to-primary/60 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent pointer-events-none w-3/4 hidden lg:block" />

      <div className="absolute inset-0 z-10 flex flex-col p-6 md:p-8 lg:p-16">
        
        <header className="flex justify-between items-start shrink-0">
          <div className="flex flex-col z-20">
            <h1 
              className="font-serif text-lg md:text-3xl tracking-widest uppercase cursor-pointer" 
              onClick={() => setActiveTab('home')}
              data-testid="link-home"
            >
              New Renaissance
            </h1>
            <span className="font-sans text-[9px] md:text-xs tracking-[0.3em] uppercase opacity-60 mt-1">
              ART STUDIO
            </span>
          </div>

          <nav className="flex gap-5 md:gap-12 font-sans text-[9px] md:text-xs tracking-widest uppercase z-20 pt-1">
            <button 
              onClick={() => setActiveTab('home')}
              data-testid="button-works"
              className={`hover:opacity-100 transition-opacity ${activeTab === 'home' ? 'opacity-100 border-b border-primary-foreground pb-1' : 'opacity-50'}`}
            >
              Works
            </button>
            <button 
              onClick={() => setActiveTab('manifesto')}
              data-testid="button-manifesto"
              className={`hover:opacity-100 transition-opacity ${activeTab === 'manifesto' ? 'opacity-100 border-b border-primary-foreground pb-1' : 'opacity-50'}`}
            >
              Manifesto
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              data-testid="button-contact"
              className={`hover:opacity-100 transition-opacity ${activeTab === 'contact' ? 'opacity-100 border-b border-primary-foreground pb-1' : 'opacity-50'}`}
            >
              Contact
            </button>
          </nav>
        </header>

        <div className="flex flex-col lg:flex-row flex-1 min-h-0 justify-end lg:justify-between lg:items-end gap-8 lg:gap-0 pb-2 lg:pb-8">
          
          <div className="w-full lg:w-1/2 max-w-2xl z-20">
            <AnimatePresence mode="wait">
              {activeTab === 'home' && (
                <motion.div
                  key={`works-${activeFilm}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex items-center gap-3 mb-3 md:mb-6 opacity-70 font-sans text-[9px] md:text-xs tracking-widest uppercase">
                    <span>{films[activeFilm].year}</span>
                    <span className="w-6 md:w-8 h-[1px] bg-primary-foreground"></span>
                    <span>{films[activeFilm].type}</span>
                  </div>
                  <h2 className="text-3xl md:text-7xl font-serif mb-3 md:mb-6 leading-tight" data-testid="text-film-title">
                    {films[activeFilm].title}
                  </h2>
                  <p className="font-sans opacity-80 leading-relaxed text-sm md:text-lg max-w-md mb-6 md:mb-10">
                    {films[activeFilm].description}
                  </p>
                  <a 
                    href={films[activeFilm].trailerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-watch"
                    className="flex items-center gap-4 md:gap-6 font-sans text-[10px] md:text-xs tracking-widest uppercase group hover:opacity-70 transition-all w-fit"
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-primary-foreground flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-primary transition-colors duration-500">
                      <Play className="w-3 h-3 md:w-4 md:h-4 ml-0.5" />
                    </div>
                    <span>{films[activeFilm].ctaLabel}</span>
                  </a>
                </motion.div>
              )}

              {activeTab === 'manifesto' && (
                <motion.div
                  key="manifesto"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <h2 className="text-2xl md:text-5xl font-serif leading-tight italic" data-testid="text-manifesto">
                    "The narrative we cultivate is the narrative that wins."
                  </h2>
                </motion.div>
              )}

              {activeTab === 'contact' && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <h2 className="text-4xl md:text-7xl font-serif mb-6 md:mb-8 leading-tight" data-testid="text-contact-heading">
                    art. <span className="italic opacity-80">not videos.</span>
                  </h2>
                  <a href="mailto:jordan@findingfugami.com" data-testid="link-email" className="block font-sans text-base md:text-2xl border-b border-primary-foreground pb-2 w-fit hover:opacity-70 transition-opacity mb-8 md:mb-12">
                    jordan@findingfugami.com
                  </a>
                  <div className="flex gap-6 md:gap-12 font-sans text-[10px] md:text-xs tracking-widest uppercase opacity-70">
                    <a href="https://instagram.com/byjmitch" target="_blank" rel="noopener noreferrer" data-testid="link-instagram" className="hover:opacity-100 transition-opacity">Instagram</a>
                    <a href="https://x.com/byjmitch" target="_blank" rel="noopener noreferrer" data-testid="link-x" className="hover:opacity-100 transition-opacity">X</a>
                    <a href="https://substack.com/@byjmitch" target="_blank" rel="noopener noreferrer" data-testid="link-substack" className="hover:opacity-100 transition-opacity">Substack</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="w-full lg:w-auto flex flex-row lg:flex-col gap-4 md:gap-6 lg:items-end z-20 overflow-x-auto pb-1 lg:pb-0">
            {films.map((film, index) => (
              <div 
                key={film.id}
                onMouseEnter={() => {
                  if (activeTab === 'home') setActiveFilm(index);
                }}
                onClick={() => {
                  setActiveTab('home');
                  setActiveFilm(index);
                }}
                data-testid={`button-film-${film.id}`}
                className={`cursor-pointer transition-all duration-300 flex items-center gap-4 lg:gap-6 group shrink-0 ${activeFilm === index && activeTab === 'home' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <div className={`h-[1px] bg-primary-foreground transition-all duration-500 hidden lg:block ${activeFilm === index && activeTab === 'home' ? 'w-16' : 'w-0 group-hover:w-8'}`} />
                <h3 className="font-serif text-base md:text-xl lg:text-3xl text-right whitespace-nowrap">
                  {film.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
