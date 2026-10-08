import React from 'react';
import { Calendar, Shield, Award, CheckCircle2, ChevronRight, Wind, Sparkles, MapPin } from 'lucide-react';
import heroImage from '../assets/images/hero_sash_window_1791445146114.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenGallery }) => {
  return (
    <section className="relative bg-[#062A4D] text-white overflow-hidden border-b border-[#0b3d6d]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#6EC1E4] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#61CE70] rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Compelling Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Kicker & Location with Anchor Text */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0b3d6d]/80 border border-[#6EC1E4]/30 rounded-full text-xs font-medium text-[#6EC1E4]">
                <MapPin className="w-3.5 h-3.5 text-[#61CE70]" />
                <span>35 Berkeley Square, London W1J 5BF · Phone: 020 7692 8973</span>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#6EC1E4]/15 hover:bg-[#6EC1E4]/25 border border-[#6EC1E4]/30 rounded-full text-xs font-semibold text-[#6EC1E4] hover:text-white transition-colors"
                title="Sash Window repair and restore"
              >
                <span>Homepage:</span>
                <span className="underline underline-offset-2">Sash Window repair and restore</span>
              </a>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
              Restore My Window LTD: Restoring British Heritage Windows with Master Craftsmanship.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
              We eliminate whistling draughts, rattling frames, and rotten sills without replacing your original timber. Upgrade to slimline heritage double glazing and whisper-smooth counterweights while preserving your home's historic soul across London and nearby areas.
            </p>

            {/* Value Propositions / Key Proof Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#61CE70] shrink-0" />
                <span>10-Year Timber Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#61CE70] shrink-0" />
                <span>Conservation Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#61CE70] shrink-0" />
                <span>Save 70% vs New Frames</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-3 bg-[#61CE70] hover:bg-[#52be61] text-[#062A4D] font-bold px-7 py-3.5 rounded transition-all shadow-md active:scale-[0.98] text-base"
              >
                <Calendar className="w-5 h-5 text-[#062A4D]" />
                <span>Book Free Survey & Quote</span>
              </button>

              <button
                onClick={onOpenGallery}
                className="flex items-center justify-center gap-2 bg-[#0b3d6d]/80 hover:bg-[#0b3d6d] text-white border border-[#6EC1E4]/40 hover:border-[#6EC1E4] px-6 py-3.5 rounded transition-colors text-sm font-semibold"
              >
                <span>View 15 Gallery Projects</span>
                <ChevronRight className="w-4 h-4 text-[#6EC1E4]" />
              </button>
            </div>

            {/* Quantitative stats row */}
            <div className="pt-8 border-t border-[#0b3d6d] grid grid-cols-3 gap-4">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#6EC1E4] tabular-nums">3,500+</p>
                <p className="text-xs text-slate-300 mt-0.5">Windows Restored</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#61CE70] tabular-nums">98%</p>
                <p className="text-xs text-slate-300 mt-0.5">Draught Elimination</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#6EC1E4] tabular-nums">4.9 / 5</p>
                <p className="text-xs text-slate-300 mt-0.5">Homeowner Rating</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-[#0b3d6d] bg-[#031b32] shadow-2xl">
              <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden bg-slate-950">
                <img
                  src={heroImage}
                  alt="Restored Victorian timber sash window in a heritage townhouse with brass fittings"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                
                {/* Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062A4D]/90 via-[#062A4D]/25 to-transparent"></div>

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 bg-[#062A4D]/85 backdrop-blur-md border border-[#6EC1E4]/40 px-3 py-1.5 rounded text-xs text-slate-100 flex items-center gap-2 shadow">
                  <span className="w-2 h-2 rounded-full bg-[#61CE70] animate-pulse"></span>
                  <span>London & Nearby Areas</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-[#062A4D]/90 backdrop-blur-md border border-[#6EC1E4]/30 p-4 rounded text-left">
                    <p className="text-xs uppercase tracking-wider text-[#6EC1E4] font-semibold">Featured Masterpiece</p>
                    <p className="text-sm font-medium text-white mt-0.5">Mayfair Period Townhouse Sash Restoration</p>
                    <div className="flex items-center gap-3 text-xs text-slate-300 mt-1">
                      <span>Berkeley Square</span>
                      <span>·</span>
                      <span>Slim Double Glazing</span>
                      <span>·</span>
                      <span>10-Yr Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick teaser footer */}
              <div className="p-3.5 bg-[#031b32] flex items-center justify-between text-xs text-slate-300 border-t border-[#0b3d6d]">
                <span className="flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5 text-[#6EC1E4]" />
                  Concealed draught seals tested to BS 6375
                </span>
                <span className="text-[#61CE70] font-semibold">Free Survey</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
