import { useState } from 'react';
import instruments, { instrumentFamilies } from '@/data/instruments';
import InstrumentCard from '@/components/InstrumentCard';
import InstrumentDetail from '@/components/InstrumentDetail';
import type { Instrument } from '@/data/instruments';
import { Music, ChevronDown } from 'lucide-react';

const familyIcons: Record<string, string> = {
  cordas: '♩',
  madeiras: '♪',
  metais: '♫',
  teclas: '♬',
};

const familyLabels: Record<string, string> = {
  cordas: 'Cordas',
  madeiras: 'Madeiras',
  metais: 'Metais',
  teclas: 'Teclas',
};

export default function Home() {
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);
  const [activeFamily, setActiveFamily] = useState<string | null>(null);

  const filtered = activeFamily
    ? instruments.filter((i) => i.family === activeFamily)
    : instruments;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50">
        <div className="container py-6 sm:py-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-px h-8 bg-primary/40" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-primary/70">
                Congregação Cristã no Brasil
              </span>
              <div className="w-px h-8 bg-primary/40" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance leading-tight">
              Instrumentos Musicais
            </h1>
            <div className="gold-divider max-w-xs mx-auto my-5" />
            <p className="text-base sm:text-lg text-muted-foreground font-sans font-light max-w-xl leading-relaxed">
              Conheça os instrumentos utilizados no louvor congregacional,
              suas histórias e particularidades.
            </p>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border/30">
        <div className="container py-3">
          <div className="flex items-center justify-center gap-1 overflow-x-auto">
            <button
              onClick={() => setActiveFamily(null)}
              className={`px-4 py-2 text-xs font-sans uppercase tracking-[0.15em] transition-all duration-300 whitespace-nowrap ${
                !activeFamily
                  ? 'text-primary border-b border-primary'
                  : 'text-muted-foreground hover:text-foreground border-b border-transparent'
              }`}
            >
              Todos
            </button>
            {instrumentFamilies.map((family) => (
              <button
                key={family.id}
                onClick={() => setActiveFamily(family.id === activeFamily ? null : family.id)}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-[0.15em] transition-all duration-300 whitespace-nowrap ${
                  activeFamily === family.id
                    ? 'text-primary border-b border-primary'
                    : 'text-muted-foreground hover:text-foreground border-b border-transparent'
                }`}
              >
                {family.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container py-10 sm:py-14">
        {activeFamily && (
          <div className="mb-10 text-center animate-fade-up">
            <span className="text-3xl text-primary/60 font-serif">{familyIcons[activeFamily]}</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mt-2">
              {familyLabels[activeFamily]}
            </h2>
            <p className="text-sm text-muted-foreground font-sans font-light mt-1 max-w-md mx-auto">
              {instrumentFamilies.find((f) => f.id === activeFamily)?.subtitle}
            </p>
            <div className="gold-divider max-w-[80px] mx-auto mt-4" />
          </div>
        )}

        {!activeFamily && (
          <div className="mb-12 text-center animate-fade-up">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <span className="text-xs font-sans uppercase tracking-[0.2em]">
                {instruments.length} instrumentos
              </span>
              <span className="w-px h-3 bg-border" />
              <span className="text-xs font-sans uppercase tracking-[0.2em]">
                {instrumentFamilies.length} famílias
              </span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border/30">
          {filtered.map((instrument, index) => (
            <div key={instrument.id} className="animate-fade-up" style={{ animationDelay: `${index * 60}ms` }}>
              <InstrumentCard
                instrument={instrument}
                onClick={() => setSelectedInstrument(instrument)}
                index={index}
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Music size={40} className="mx-auto text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground font-sans font-light">
              Nenhum instrumento encontrado nesta categoria.
            </p>
          </div>
        )}
      </main>

      <footer className="border-t border-border/30">
        <div className="container py-8 text-center">
          <div className="gold-divider max-w-[60px] mx-auto mb-6" />
          <p className="text-xs text-muted-foreground/60 font-sans uppercase tracking-[0.15em]">
            CCB Instrumentos Musicais
          </p>
          <p className="text-[10px] text-muted-foreground/40 font-sans mt-1">
            Uma ferramenta educativa para conhecimento dos instrumentos de louvor
          </p>
        </div>
      </footer>

      {selectedInstrument && (
        <InstrumentDetail
          instrument={selectedInstrument}
          onClose={() => setSelectedInstrument(null)}
        />
      )}
    </div>
  );
}
