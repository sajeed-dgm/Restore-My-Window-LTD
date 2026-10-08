import React, { useEffect, useCallback } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Image as ImageIcon } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  allItems: GalleryItem[];
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
  onBookThisStyle: (windowTitle: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  allItems,
  onClose,
  onSelectNext,
  onSelectPrev,
  onBookThisStyle
}) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!item) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onSelectNext();
    if (e.key === 'ArrowLeft') onSelectPrev();
  }, [item, onClose, onSelectNext, onSelectPrev]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!item) return null;

  const currentIndex = allItems.findIndex(i => i.id === item.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/95 backdrop-blur-md animate-in fade-in">
      
      {/* Close button top right */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-stone-900/80 text-stone-200 hover:text-white hover:bg-stone-800 transition-colors border border-stone-700"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next navigation buttons */}
      <button
        onClick={onSelectPrev}
        aria-label="Previous project"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-stone-900/80 text-stone-200 hover:text-white hover:bg-stone-800 border border-stone-700 transition-all hover:scale-105 hidden sm:flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onSelectNext}
        aria-label="Next project"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-stone-900/80 text-stone-200 hover:text-white hover:bg-stone-800 border border-stone-700 transition-all hover:scale-105 hidden sm:flex items-center justify-center"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Card Content */}
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#031b32] border border-[#0b3d6d] rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row text-white">
        
        {/* Left: High-Resolution Media */}
        <div className="lg:w-2/3 bg-slate-950 relative flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full max-h-[75vh] object-contain object-center"
          />

          {/* Slot index watermark */}
          <div className="absolute bottom-4 left-4 bg-[#062A4D]/85 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-[#6EC1E4] border border-[#0b3d6d]">
            Project {currentIndex + 1} of {allItems.length}
          </div>
        </div>

        {/* Right: Architectural & Restoration Notes */}
        <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[40vh] lg:max-h-none border-t lg:border-t-0 lg:border-l border-[#0b3d6d]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#6EC1E4]">
                {item.category.replace('-', ' ')}
              </span>
              <span className="text-slate-500">·</span>
              <span className="text-xs text-slate-300">{item.period}</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              {item.title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#61CE70] shrink-0" />
              <span>{item.location}</span>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed font-light">
              {item.description}
            </p>

            {/* Specification Highlights */}
            <div className="bg-[#062A4D] p-3.5 rounded-lg border border-[#0b3d6d] space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-300">Draught Proofing:</span>
                <span className="text-[#6EC1E4] font-medium">Concealed Brush Pile</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Timber Guarantee:</span>
                <span className="text-white font-medium">10-Year Full Warranty</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Hardware:</span>
                <span className="text-white font-medium">Solid Heritage Brass</span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-8 pt-4 border-t border-[#0b3d6d] space-y-3">
            <button
              onClick={() => {
                onClose();
                onBookThisStyle(item.title);
              }}
              className="w-full bg-[#61CE70] hover:bg-[#52be61] text-[#062A4D] font-bold py-3 rounded-lg text-sm transition-all shadow-md active:scale-98"
            >
              Book Inspection for This Style
            </button>

            {/* Mobile Prev / Next */}
            <div className="flex sm:hidden items-center justify-between pt-1">
              <button
                onClick={onSelectPrev}
                className="text-xs text-slate-300 hover:text-white"
              >
                ← Previous
              </button>
              <button
                onClick={onSelectNext}
                className="text-xs text-slate-300 hover:text-white"
              >
                Next →
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
