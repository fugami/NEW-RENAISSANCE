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
      trailerUrl: "https://x.com/amasad/status/2029251832460263632"
    },
    {
      id: 2,
      title: "Write with Blood",
      year: "2026",
      type: "Short Film",
      description: "The emotional truth of building a startup.",
      image: "/images/film-2.jpg",
      trailerUrl: "#"
    },
    {
      id: 3,
      title: "Dear Founder",
      year: "2025",
      type: "Short Film",
      description: "A message for founders.",
      image: "/images/film-3.jpg",
      trailerUrl: "#"
    },
  ];

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-primary text-primary-foreground selection:bg-primary-foreground selection:text-primary">
      {/* Background Images */}
      {films.map((film, index) => (
        <motion.div
          key={film.id}
          animate={{ opacity: activeFilm === index ? 0.4 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
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

      {/* Vignette Overlay for readable text */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary via-transparent to-primary/40 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent pointer-events-none w-3/4" />

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 lg:p-16">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
          <div className="flex flex-col z-20">
            <h1 
              className="font-serif text-2xl md:text-3xl tracking-widest uppercase cursor-pointer" 
              onClick={() => setActiveTab('home')}
            >
              N. Renaissance
            </h1>
            <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-60 mt-2">
              Cinematic Portfolio
            </span>
          </div>

          <nav className="flex gap-8 md:gap-12 font-sans text-[10px] md:text-xs tracking-widest uppercase z-20">
            <button 
              onClick={() => setActiveTab('home')}
              className={`hover:opacity-100 transition-opacity ${activeTab === 'home' ? 'opacity-100 border-b border-primary-foreground pb-1' : 'opacity-50'}`}
            >
              Works
            </button>
            <button 
              onClick={() => setActiveTab('manifesto')}
              className={`hover:opacity-100 transition-opacity ${activeTab === 'manifesto' ? 'opacity-100 border-b border-primary-foreground pb-1' : 'opacity-50'}`}
            >
              Manifesto
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className={`hover:opacity-100 transition-opacity ${activeTab === 'contact' ? 'opacity-100 border-b border-primary-foreground pb-1' : 'opacity-50'}`}
            >
              Contact
            </button>
          </nav>
        </header>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 lg:gap-0 h-full pb-4 lg:pb-8 mt-16 lg:mt-0">
          
          {/* Dynamic Content based on Active Tab */}
          <div className="w-full lg:w-1/2 max-w-2xl flex-1 flex flex-col justify-end z-20">
            <AnimatePresence mode="wait">
              {activeTab === 'home' && (
                <motion.div
                  key="works"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-6 opacity-70 font-sans text-[10px] md:text-xs tracking-widest uppercase">
                    <span>{films[activeFilm].year}</span>
                    <span className="w-8 h-[1px] bg-primary-foreground"></span>
                    <span>{films[activeFilm].type}</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                    {films[activeFilm].title}
                  </h2>
                  <p className="font-sans opacity-80 leading-relaxed text-base md:text-lg max-w-md mb-10">
                    {films[activeFilm].description}
                  </p>
                  <a 
                    href={films[activeFilm].trailerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 font-sans text-xs tracking-widest uppercase group hover:opacity-70 transition-all w-fit"
                  >
                    <div className="w-14 h-14 rounded-full border border-primary-foreground flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-primary transition-colors duration-500">
                      <Play className="w-4 h-4 ml-1" />
                    </div>
                    <span>Watch Trailer</span>
                  </a>
                </motion.div>
              )}

              {activeTab === 'manifesto' && (
                <motion.div
                  key="manifesto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-5xl font-serif leading-tight italic mb-8">
                    "We are not merely documenting reality; we are conjuring the visual vocabulary of tomorrow."
                  </h2>
                  <p className="font-sans text-base md:text-lg leading-relaxed opacity-80 mb-6 max-w-lg">
                    The new renaissance demands an honest, visceral, and unapologetic reflection of the human spirit. 
                  </p>
                  <p className="font-sans text-base md:text-lg leading-relaxed opacity-80 max-w-lg">
                    Through the interplay of light and shadow, we craft narratives that transcend time—anchored in classical beauty, yet fiercely modern.
                  </p>
                </motion.div>
              )}

              {activeTab === 'contact' && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                    Let's Create <br/><span className="italic opacity-80">History.</span>
                  </h2>
                  <a href="mailto:studio@newrenaissance.film" className="block font-sans text-lg md:text-2xl border-b border-primary-foreground pb-2 w-fit hover:opacity-70 transition-opacity mb-12">
                    studio@newrenaissance.film
                  </a>
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 font-sans text-xs tracking-widest uppercase opacity-70">
                    <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
                    <a href="#" className="hover:opacity-100 transition-opacity">Vimeo</a>
                    <a href="#" className="hover:opacity-100 transition-opacity">Journal</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Film Selection / Right Column Menu */}
          <div className="w-full lg:w-auto flex flex-col gap-6 lg:items-end z-20 mt-12 lg:mt-0">
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
                className={`cursor-pointer transition-all duration-500 flex items-center justify-end gap-6 group ${activeFilm === index && activeTab === 'home' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <div className={`h-[1px] bg-primary-foreground transition-all duration-500 hidden lg:block ${activeFilm === index && activeTab === 'home' ? 'w-16' : 'w-0 group-hover:w-8'}`} />
                <h3 className="font-serif text-xl md:text-3xl text-right transition-transform duration-500 group-hover:translate-x-[-10px] lg:group-hover:translate-x-0">
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
