import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { Expand, Link2, SlidersHorizontal, Image as ImageIcon, MapPin, Sparkles } from 'lucide-react';

interface GallerySectionProps {
  galleryItems: GalleryItem[];
  onOpenLightbox: (item: GalleryItem) => void;
  onOpenUrlManager: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  galleryItems,
  onOpenLightbox,
  onOpenUrlManager
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [imageErrorMap, setImageErrorMap] = useState<Record<number, boolean>>({});

  const categories = [
    { id: 'all', label: `All Projects (${galleryItems.length})` },
    { id: 'sash', label: 'Sash Windows' },
    { id: 'double-glazing', label: 'Slim Double Glazing' },
    { id: 'rot-repair', label: 'Timber Rot & Sills' },
    { id: 'casement', label: 'Casements & Doors' },
    { id: 'heritage', label: 'Heritage & Listed' }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleImageError = (id: number) => {
    setImageErrorMap(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="py-24 bg-[#062A4D] text-white border-b border-[#0b3d6d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with URL Manager Utility */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0b3d6d] border border-[#6EC1E4]/30 rounded-full text-xs text-[#6EC1E4] font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#61CE70]" />
              <span>Project Portfolio · 15 Documented Restorations</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              High-Quality Restoration Gallery
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Explore authentic craftsmanship across period properties. Click any project to view high-resolution photography, architectural era details, and conservation techniques applied.
            </p>
          </div>

          {/* Quick Action: Provide/Paste Image URLs Modal */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenUrlManager}
              className="inline-flex items-center gap-2 bg-[#0b3d6d] hover:bg-[#0f4e8a] text-[#6EC1E4] border border-[#6EC1E4]/40 hover:border-[#6EC1E4] px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-[0.98]"
              title="Click to paste or update your 10-15 custom image URLs"
            >
              <Link2 className="w-4 h-4 text-[#61CE70]" />
              <span>Update My 10-15 Image URLs</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#61CE70] text-[#062A4D] shadow-sm font-bold'
                  : 'bg-[#0b3d6d]/80 text-slate-200 hover:bg-[#0b3d6d] hover:text-white border border-[#0f4e8a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (15 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const hasError = imageErrorMap[item.id];

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group relative bg-[#031b32] rounded-xl overflow-hidden border border-[#0b3d6d] hover:border-[#6EC1E4] transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Image Container with Fallback Protection */}
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-950">
                  {!hasError ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(item.id)}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    /* High-craft SVG Fallback Container if user URL hasn't loaded */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#062A4D] to-[#031b32] border-b border-[#0b3d6d]">
                      <div className="w-12 h-12 rounded-full bg-[#0b3d6d] flex items-center justify-center text-[#6EC1E4] mb-3 border border-[#0f4e8a]">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                      <p className="text-xs font-semibold text-slate-200">Image Slot #{item.id}</p>
                      <p className="text-[11px] text-slate-400 mt-1 max-w-[200px]">
                        Awaiting custom URL or connection. Click to update URLs.
                      </p>
                    </div>
                  )}

                  {/* Gradient Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062A4D]/90 via-transparent to-black/20 opacity-80 group-hover:opacity-95 transition-opacity pointer-events-none"></div>

                  {/* Slot identifier badge */}
                  <div className="absolute top-3 left-3 bg-[#062A4D]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-[#6EC1E4] border border-[#0b3d6d]">
                    Slot {String(item.id).padStart(2, '0')} / 15
                  </div>

                  {/* Period tag */}
                  <div className="absolute top-3 right-3 bg-[#062A4D]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-slate-200 border border-[#0b3d6d]">
                    {item.period}
                  </div>

                  {/* Hover expand overlay affordance */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#062A4D]/50 backdrop-blur-[2px]">
                    <div className="bg-[#61CE70] text-[#062A4D] px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xl">
                      <Expand className="w-4 h-4 text-[#062A4D]" />
                      <span>View Project Photos</span>
                    </div>
                  </div>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#6EC1E4] font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#61CE70]" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#6EC1E4] transition-colors line-clamp-1">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#0b3d6d] flex items-center justify-between text-[11px] text-slate-400">
                    <span className="capitalize text-slate-300">{item.category.replace('-', ' ')}</span>
                    <span className="text-[#6EC1E4] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                      Inspect Details →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Helper Notice for Homeowner/Admin */}
        <div className="mt-12 bg-[#031b32] border border-[#0b3d6d] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#6EC1E4]/10 border border-[#6EC1E4]/30 flex items-center justify-center text-[#6EC1E4] shrink-0">
              <Link2 className="w-4 h-4 text-[#61CE70]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Ready to add your 10–15 images?
              </p>
              <p className="text-xs text-slate-300">
                Use our built-in URL manager to paste image URLs directly, or replace them in <code className="text-[#6EC1E4]">src/data/galleryData.ts</code>.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenUrlManager}
            className="w-full sm:w-auto bg-[#61CE70] hover:bg-[#52be61] text-[#062A4D] font-bold px-5 py-2.5 rounded text-xs transition-colors shrink-0 shadow"
          >
            Open URL Manager
          </button>
        </div>

      </div>
    </section>
  );
};
