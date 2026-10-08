import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenVercelGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenVercelGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner with NAP & Homepage Anchor Text */}
      <div className="bg-[#031b32] text-xs text-slate-300 py-1.5 px-4 border-b border-[#0b3d6d]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Homepage:</span>
            <a 
              href="#" 
              className="font-semibold text-[#6EC1E4] hover:text-white transition-colors underline-offset-2 hover:underline"
              title="Sash Window repair and restore"
            >
              Sash Window repair and restore
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:inline items-center gap-1">
              <MapPin className="w-3 h-3 text-[#6EC1E4] inline mr-1" />
              35 Berkeley Square, London W1J 5BF
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:inline text-slate-400">Mon–Sat 8am–5pm (Sun Closed)</span>
            <a 
              href="tel:02076928973" 
              className="text-[#61CE70] font-bold hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>020 7692 8973</span>
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-[#062A4D] border-b border-[#0b3d6d] text-white transition-all shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Zone 1: Brand Wordmark */}
            <a href="#" className="flex items-center gap-3 group" title="Sash Window repair and restore">
              <div className="w-10 h-10 rounded bg-[#0b3d6d] border border-[#6EC1E4]/50 flex items-center justify-center text-[#6EC1E4] font-serif font-bold text-xl group-hover:border-[#6EC1E4] group-hover:scale-105 transition-all shadow-sm">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-[#6EC1E4] transition-colors leading-tight">
                  Restore My Window LTD
                </span>
                <span className="text-[11px] text-[#6EC1E4] font-medium tracking-wide">
                  Sash Window repair and restore
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
              <a href="#double-glaze" className="hover:text-[#6EC1E4] transition-colors flex items-center gap-1 font-semibold text-[#6EC1E4]">
                <span>Double Glaze Sash</span>
              </a>
              <a href="#services" className="hover:text-[#6EC1E4] transition-colors">
                Services
              </a>
              <a href="#gallery" className="hover:text-[#6EC1E4] transition-colors">
                Gallery (15 Projects)
              </a>
              <a href="#comparison" className="hover:text-[#6EC1E4] transition-colors">
                Before & After
              </a>
              <a href="#estimator" className="hover:text-[#6EC1E4] transition-colors">
                Cost Estimator
              </a>
              <a href="#contact" className="hover:text-[#6EC1E4] transition-colors">
                Contact & NAP
              </a>
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="hidden sm:flex items-center gap-4">
              <a 
                href="tel:02076928973" 
                className="hidden md:flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-200 hover:text-[#6EC1E4] transition-colors py-2 px-3 rounded border border-[#6EC1E4]/30 hover:border-[#6EC1E4] whitespace-nowrap bg-[#0b3d6d]/60"
              >
                <Phone className="w-3.5 h-3.5 text-[#6EC1E4]" />
                <span>020 7692 8973</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 bg-[#61CE70] hover:bg-[#52be61] text-[#062A4D] font-bold text-sm px-4 py-2.5 rounded transition-all shadow-md whitespace-nowrap active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Inspection</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="sm:hidden bg-[#61CE70] text-[#062A4D] font-bold text-xs px-3 py-2 rounded"
              >
                Book Survey
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#062A4D] border-b border-[#0b3d6d] px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-3 text-base font-medium text-slate-200">
              <a 
                href="#" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#6EC1E4] transition-colors py-1 text-xs text-[#6EC1E4] font-semibold"
              >
                Homepage: Sash Window repair and restore
              </a>
              <a 
                href="#double-glaze" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#6EC1E4] transition-colors py-1 font-semibold text-[#6EC1E4]"
              >
                Double Glaze & Re-Glaze Existing Sash
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#6EC1E4] transition-colors py-1"
              >
                Services & Craftsmanship
              </a>
              <a 
                href="#gallery" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#6EC1E4] transition-colors py-1 flex items-center justify-between"
              >
                <span>Photo Gallery</span>
                <span className="text-xs text-[#062A4D] bg-[#6EC1E4] font-semibold px-2 py-0.5 rounded">15 Photos</span>
              </a>
              <a 
                href="#comparison" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#6EC1E4] transition-colors py-1"
              >
                Before & After Comparison
              </a>
              <a 
                href="#estimator" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#6EC1E4] transition-colors py-1"
              >
                Instant Cost Estimator
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#6EC1E4] transition-colors py-1"
              >
                Contact & NAP (35 Berkeley Sq)
              </a>
            </nav>

            <div className="pt-3 border-t border-[#0b3d6d] flex flex-col gap-3">
              <a 
                href="tel:02076928973" 
                className="flex items-center justify-center gap-2 py-2.5 rounded bg-[#0b3d6d] text-[#6EC1E4] font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-[#6EC1E4]" />
                <span>Call Direct: 020 7692 8973</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#61CE70] hover:bg-[#52be61] text-[#062A4D] font-bold text-sm py-3 rounded"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Survey & Inspection</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVercelGuide();
                }}
                className="text-xs text-slate-300 hover:text-white text-center py-1"
              >
                Deploy to Vercel Guide →
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

