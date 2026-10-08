import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Award, Globe, Clock, Compass } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenVercelGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenVercelGuide }) => {
  return (
    <footer className="bg-[#031b32] text-slate-300 border-t border-[#0b3d6d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Craft Statement */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3 group" title="Sash Window repair and restore">
              <div className="w-9 h-9 rounded bg-[#062A4D] border border-[#6EC1E4]/50 flex items-center justify-center text-[#6EC1E4] font-serif font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
                R
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-[#6EC1E4] transition-colors">
                Restore My Window LTD
              </span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed">
              Specialist timber window restorers preserving Victorian, Georgian, and Edwardian architectural joinery. Retaining historical character with modern thermal efficiency across London and nearby areas.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <a href="tel:02076928973" className="flex items-center gap-2 hover:text-[#6EC1E4] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#61CE70]" />
                <span className="font-semibold text-white">020 7692 8973</span>
              </a>
              <a href="mailto:info@restoremywindow.com" className="flex items-center gap-2 hover:text-[#6EC1E4] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#6EC1E4]" />
                <span>info@restoremywindow.com</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#6EC1E4]" />
                <span>35 Berkeley Square, London W1J 5BF</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-[#61CE70]" />
                <span>Mon–Sat 8:00 am–5:00 pm · Sun Closed</span>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6EC1E4]">
              Specialist Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#double-glaze" className="hover:text-[#6EC1E4] text-[#6EC1E4] font-medium transition-colors">Double Glaze & Re-Glaze Existing Sash</a></li>
              <li><a href="#services" className="hover:text-[#6EC1E4] transition-colors">Sash Window Draught-Proofing</a></li>
              <li><a href="#services" className="hover:text-[#6EC1E4] transition-colors">Heritage Slim Double Glazing</a></li>
              <li><a href="#services" className="hover:text-[#6EC1E4] transition-colors">Rotten Sill & Accoya Timber Splicing</a></li>
              <li><a href="#services" className="hover:text-[#6EC1E4] transition-colors">Acoustic Sound-Deadening Glass</a></li>
              <li><a href="#services" className="hover:text-[#6EC1E4] transition-colors">Period Cord & Weight Rebalancing</a></li>
            </ul>
          </div>

          {/* Quick Navigation & Tools */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6EC1E4]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#" className="text-[#6EC1E4] hover:underline font-semibold block transition-colors" title="Sash Window repair and restore">
                  Sash Window repair and restore
                </a>
              </li>
              <li><a href="#double-glaze" className="hover:text-[#6EC1E4] transition-colors">Double Glazing</a></li>
              <li><a href="#comparison" className="hover:text-[#6EC1E4] transition-colors">Before & After Slider</a></li>
              <li><a href="#estimator" className="hover:text-[#6EC1E4] transition-colors">Cost Estimator</a></li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-[#6EC1E4] transition-colors text-left font-medium text-[#61CE70]">
                  Book Free Survey
                </button>
              </li>
              <li>
                <a href="https://restoremywindow.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6EC1E4] transition-colors flex items-center gap-1">
                  <span>Official Website</span>
                  <Globe className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button onClick={onOpenVercelGuide} className="text-[#6EC1E4] hover:underline text-left">
                  Deploy to Vercel Guide →
                </button>
              </li>
            </ul>
          </div>

          {/* Trust & Accreditations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6EC1E4]">
              London & Nearby Areas
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Compass className="w-4 h-4 text-[#61CE70] shrink-0 mt-0.5" />
                <span>Serving London and nearby areas from 35 Berkeley Square</span>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-[#6EC1E4] shrink-0 mt-0.5" />
                <span>Accoya Certified Joiners with 20-year anti-rot timber warranty</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#0b3d6d] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Restore My Window LTD · 35 Berkeley Square, London W1J 5BF. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors text-[#6EC1E4] font-medium" title="Sash Window repair and restore">
              Sash Window repair and restore
            </a>
            <button onClick={onOpenVercelGuide} className="hover:text-white transition-colors">
              Vercel Deployment
            </button>
            <a href="https://restoremywindow.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              restoremywindow.com
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Terms & Privacy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
