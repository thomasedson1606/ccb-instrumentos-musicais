import { Instrument } from '@/data/instruments';
import { Music, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface InstrumentCardProps {
  instrument: Instrument;
  onClick: () => void;
  index: number;
}

const familyColors: Record<string, string> = {
  cordas: 'before:bg-amber-800/40',
  madeiras: 'before:bg-emerald-800/40',
  metais: 'before:bg-yellow-700/40',
  teclas: 'before:bg-indigo-800/40',
};

export default function InstrumentCard({ instrument, onClick, index }: InstrumentCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <button
      onClick={onClick}
      style={{ animationDelay: `${index * 80}ms` }}
      className="group relative w-full text-left overflow-hidden bg-card border border-border/60 hover:border-primary/40 transition-all duration-500"
    >
      <div className="relative h-56 sm:h-72 overflow-hidden bg-muted">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
            <Music size={32} className="text-muted-foreground/30" />
          </div>
        )}
        <img
          src={instrument.image}
          alt={instrument.name}
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-3 left-3">
          <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-sans text-primary bg-background/90 px-3 py-1">
            {instrument.family}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div className="gold-divider" />

        <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-400">
          {instrument.name}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2 font-sans font-light">
          {instrument.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/70 font-sans">
            <Music size={12} />
            <span>{instrument.videos.length} vídeo{instrument.videos.length !== 1 ? 's' : ''}</span>
          </div>
          <span className="flex items-center gap-1 text-xs font-serif italic text-primary/70 group-hover:text-primary transition-colors duration-400">
            Explorar <ChevronRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </button>
  );
}
