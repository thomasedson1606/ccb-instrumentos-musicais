import { Instrument } from '@/data/instruments';
import { X, Music, Clock, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

interface InstrumentDetailProps {
  instrument: Instrument;
  onClose: () => void;
}

export default function InstrumentDetail({ instrument, onClose }: InstrumentDetailProps) {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const getYoutubeId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : '';
  };

  const currentVideo = instrument.videos[selectedVideoIndex];
  const youtubeId = getYoutubeId(currentVideo.url);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${visible ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent pointer-events-none'}`}
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-background max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-300 border border-primary/20 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div className="sticky top-0 z-10 bg-background border-b border-border/50">
          <div className="flex items-center justify-between p-6 pb-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-primary">
                {instrument.family}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                {instrument.name}
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
            >
              <X size={20} />
            </button>
          </div>
          <div className="gold-divider" />
        </div>

        <div className="p-6 space-y-8">
          <div className="relative overflow-hidden bg-muted">
            <img
              src={instrument.image}
              alt={instrument.name}
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          <p className="text-base leading-relaxed text-foreground/80 font-sans font-light">
            {instrument.descriptionLong}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {instrument.origin && (
              <div className="flex items-start gap-3 p-4 bg-muted/50 border border-border/30">
                <Globe size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-muted-foreground">Origem</p>
                  <p className="text-sm font-serif text-foreground mt-0.5">{instrument.origin}</p>
                </div>
              </div>
            )}
            <div className="flex items-start gap-3 p-4 bg-muted/50 border border-border/30">
              <Music size={16} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-muted-foreground">Vídeos</p>
                <p className="text-sm font-serif text-foreground mt-0.5">{instrument.videos.length} disponíveis</p>
              </div>
            </div>
          </div>

          {instrument.curiosidade && (
            <div className="p-4 border border-primary/20 bg-primary/[0.03]">
              <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-primary mb-1">Curiosidade</p>
              <p className="text-sm font-serif italic text-foreground/80">{instrument.curiosidade}</p>
            </div>
          )}

          {youtubeId && (
            <div className="space-y-4">
              <div className="gold-divider" />
              <h3 className="text-lg font-serif font-semibold text-foreground">Vídeo</h3>
              <div className="aspect-video overflow-hidden bg-black border border-border/30">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={currentVideo.title || instrument.name}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {instrument.videos.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  {instrument.videos.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVideoIndex(index)}
                      className={`px-4 py-2 text-xs font-sans uppercase tracking-wider transition-all duration-300 ${
                        selectedVideoIndex === index
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      Vídeo {index + 1}
                      {video.title && <span className="ml-1 opacity-60">· {video.title}</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
