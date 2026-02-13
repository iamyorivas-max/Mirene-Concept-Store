
import React from 'react';
import { LinkCard } from './components/LinkCard.tsx';
import { STORE_LINKS, CONTACT_LINKS } from './constants.tsx';
import { Instagram, Share2 } from 'lucide-react';

const App: React.FC = () => {
  const shareApp = () => {
    if (navigator.share) {
      navigator.share({
        title: 'MIRENE Concept Store',
        text: 'Linge de maison, Vaisselle raffinée & Objets du monde.',
        url: window.location.href,
      });
    }
  };

  const logoUrl = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1770901116/575688674_17861573631531069_8928603550330864963_n_memxv1.jpg";

  return (
    <div className="min-h-screen max-w-lg mx-auto px-6 py-10 flex flex-col items-center selection:bg-black selection:text-white">
      {/* Header with Minimal Border */}
      <div className="flex flex-col items-center mb-10 text-center w-full">
        <div className="relative mb-6">
          <div className="relative p-1 bg-stone-100 rounded-full float-anim">
            <div className="w-28 h-28 rounded-full border-[2px] border-black shadow-sm overflow-hidden bg-white flex items-center justify-center">
              <img 
                src={logoUrl} 
                alt="MIRENE Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <button 
            onClick={shareApp}
            className="absolute -bottom-1 -right-1 p-2 bg-white rounded-full shadow-md text-stone-400 hover:text-black transition-colors border border-stone-100"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        <h1 className="font-serif text-4xl font-bold tracking-tight text-stone-900 mb-1">MIRENE</h1>
        <p className="text-stone-400 text-[10px] font-bold tracking-[0.2em] mb-4 uppercase">Concept Store</p>
        
        <div className="flex flex-col items-center text-stone-600 text-[13px] space-y-1 mb-8">
           <p className="flex items-center gap-2 font-light italic">Linge de maison • Vaisselle raffinée</p>
           <p className="font-light italic">Bougies • Art de vivre & cadeaux</p>
           <p className="flex items-center gap-1 font-light italic">Objets inspirés du monde</p>
        </div>
      </div>

      {/* Main Action Links (Now Black & White) */}
      <div className="w-full space-y-2 mb-12">
        {STORE_LINKS.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>

      {/* Footer Branding */}
      <div className="mt-auto pt-10 pb-6 text-center w-full">
        <a 
          href={CONTACT_LINKS.instagram} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-8 py-3 rounded-full bg-black text-white text-sm font-semibold shadow-xl hover:bg-stone-800 transition-all border border-black"
        >
          <Instagram className="w-4 h-4" />
          <span>Voir sur Instagram</span>
        </a>
        <p className="text-stone-300 text-[10px] mt-12 uppercase tracking-[0.4em] font-medium">
          MIRENE © 2026
        </p>
      </div>
      
      {/* Background Accents (Neutral Monochrome) */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-5">
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-stone-200 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-stone-100 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default App;
