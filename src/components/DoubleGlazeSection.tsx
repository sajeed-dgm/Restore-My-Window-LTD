import React from 'react';
import { ShieldCheck, Flame, VolumeX, CheckCircle, ArrowRight, Layers, Sparkles, Scale, ThermometerSnowflake } from 'lucide-react';
import doubleGlazeImg from '../assets/images/gallery_heritage_double_glaze_1791445188493.jpg';

interface DoubleGlazeSectionProps {
  onBookDoubleGlazing: () => void;
}

export const DoubleGlazeSection: React.FC<DoubleGlazeSectionProps> = ({ onBookDoubleGlazing }) => {
  const steps = [
    {
      number: "01",
      title: "Survey & Architectural Assessment",
      description: "We inspect your existing sashes, test timber density, and measure frame depth to determine the optimal slimline unit specification."
    },
    {
      number: "02",
      title: "Precision Rebate Routing",
      description: "Original timber sashes are carefully removed and routed to create a deeper rebate for the slim double-glazed units without weakening the structural joinery."
    },
    {
      number: "03",
      title: "Slimline Double Glaze Fitting",
      description: "Low-E, argon or krypton gas-filled slim units (from 11mm) are bedded in silicone with traditional timber glazing beads matching the historic profile."
    },
    {
      number: "04",
      title: "Lead Counterbalance Re-Weighting",
      description: "Because double-glazed sashes are heavier, we calculate the exact weight differential and add precision lead sash weights into the box frames."
    },
    {
      number: "05",
      title: "Draught-Proofing & Re-Hanging",
      description: "Concealed brush pile weather seals are machined into staff and parting beads. Sashes are rehung with heavy-duty pre-stretched braided cords."
    }
  ];

  return (
    <section id="double-glaze" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
            <a 
              href="#" 
              className="text-[#6EC1E4] hover:text-[#062A4D] font-semibold hover:underline"
              title="Sash Window repair and restore"
            >
              Sash Window repair and restore
            </a>
            <span className="text-slate-400">/</span>
            <span className="text-[#54595F]">Double Glaze & Re-Glaze Existing Sash</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#6EC1E4]/15 border border-[#6EC1E4]/40 rounded-full text-xs font-semibold text-[#062A4D] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#61CE70]" />
            <span>Specialist Service · Restore My Window LTD · 35 Berkeley Square, London</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#062A4D] tracking-tight">
            Double Glaze & Re-Glaze Existing Sash Windows
          </h2>
          <p className="text-[#54595F] text-base sm:text-lg mt-4 leading-relaxed font-light">
            Keep your original historic timber box frames while achieving modern 21st-century thermal and acoustic insulation. Our specialist re-glazing retrofits ultra-slim double-glazed units directly into your existing period sashes across London and nearby areas.
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-[#062A4D]">
            <span className="font-semibold">Survey Desk:</span>
            <a href="tel:02076928973" className="text-[#61CE70] font-bold hover:underline">020 7692 8973</a>
            <span className="text-slate-400">·</span>
            <span className="text-[#54595F]">35 Berkeley Square, London W1J 5BF</span>
          </div>
        </div>

        {/* Feature Grid & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Key Benefits */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#6EC1E4]/15 flex items-center justify-center text-[#062A4D]">
                  <Layers className="w-5 h-5 text-[#062A4D]" />
                </div>
                <h3 className="font-semibold text-[#062A4D] text-sm">Ultra-Slim 11mm–14mm Units</h3>
                <p className="text-xs text-[#54595F] leading-relaxed">
                  Engineered with warm-edge spacers and gas fills to fit historic timber rebates without unsightly thick modern plastic frames.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#61CE70]/15 flex items-center justify-center text-[#062A4D]">
                  <ThermometerSnowflake className="w-5 h-5 text-[#062A4D]" />
                </div>
                <h3 className="font-semibold text-[#062A4D] text-sm">Thermal Performance (U: 1.3)</h3>
                <p className="text-xs text-[#54595F] leading-relaxed">
                  Reduces window heat loss by up to 70%, banishing morning glass condensation and significantly decreasing heating expenditures.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#062A4D]/10 flex items-center justify-center text-[#062A4D]">
                  <VolumeX className="w-5 h-5 text-[#062A4D]" />
                </div>
                <h3 className="font-semibold text-[#062A4D] text-sm">Acoustic Sound Deadening</h3>
                <p className="text-xs text-[#54595F] leading-relaxed">
                  Cuts outside road traffic noise, sirens, and urban commotion by up to 35dB for quiet, restful bedrooms and living rooms.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#6EC1E4]/15 flex items-center justify-center text-[#062A4D]">
                  <Scale className="w-5 h-5 text-[#062A4D]" />
                </div>
                <h3 className="font-semibold text-[#062A4D] text-sm">Exact Lead Counterbalancing</h3>
                <p className="text-xs text-[#54595F] leading-relaxed">
                  Counterweights inside the box frames are custom-weighted with lead to ensure double-glazed sashes glide with fingertip ease.
                </p>
              </div>

            </div>

            <div className="p-5 rounded-xl bg-[#062A4D] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div>
                <p className="font-semibold text-sm text-white">Conserves Conservation & Listed Character</p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Maintains authentic external sightlines, putty lines, and period joinery.
                </p>
              </div>
              <button
                onClick={onBookDoubleGlazing}
                className="bg-[#61CE70] hover:bg-[#52be61] text-[#062A4D] font-bold text-xs px-5 py-2.5 rounded transition-all whitespace-nowrap active:scale-95 shadow"
              >
                Request Re-Glaze Survey
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={doubleGlazeImg}
                  alt="Restored Georgian multi-pane sash window with slimline double glazing"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062A4D]/90 via-[#062A4D]/20 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#062A4D]/90 backdrop-blur-md p-4 rounded-xl border border-[#0b3d6d]">
                  <span className="text-[11px] font-semibold text-[#6EC1E4] uppercase tracking-wider">Official Service</span>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Double Glaze & Re-Glaze Existing Sash
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Zero disruption to interior plasterwork or exterior brick arches.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* The 5-Step Process */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6EC1E4]">Meticulous Joinery Protocol</p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#062A4D] mt-1">
              How We Re-Glaze Your Existing Sashes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((st, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 relative flex flex-col justify-between shadow-sm">
                <div>
                  <span className="font-mono text-xs font-bold text-[#6EC1E4] block mb-2">{st.number}</span>
                  <h4 className="font-bold text-xs text-[#062A4D] mb-1.5 leading-snug">{st.title}</h4>
                  <p className="text-[11px] text-[#54595F] leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#54595F]">
              <ShieldCheck className="w-4 h-4 text-[#61CE70]" />
              <span>10-Year Guarantee on all slimline double-glazed sealed units</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://restoremywindow.com/our-services/double-glaze-and-re-glaze-existing-sash/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#062A4D] hover:text-[#6EC1E4] transition-colors"
              >
                <span>Read Original Specification on restoremywindow.com</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6EC1E4]" />
              </a>
              <button
                onClick={onBookDoubleGlazing}
                className="inline-flex items-center gap-2 text-xs font-bold bg-[#61CE70] hover:bg-[#52be61] text-[#062A4D] px-4 py-2.5 rounded shadow transition-all active:scale-95"
              >
                <span>Book Double Glazing Survey</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#062A4D]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
