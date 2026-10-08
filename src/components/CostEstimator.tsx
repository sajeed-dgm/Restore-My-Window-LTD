import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, TrendingDown, Flame, ShieldAlert } from 'lucide-react';

interface CostEstimatorProps {
  onApplyToBooking: (estimateDetails: {
    windowCount: number;
    serviceName: string;
    style: string;
  }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onApplyToBooking }) => {
  const [windowCount, setWindowCount] = useState<number>(4);
  const [serviceType, setServiceType] = useState<string>('draught-proofing');
  const [windowStyle, setWindowStyle] = useState<string>('victorian-sash');

  // Rates approximation based on UK heritage window restoration benchmarks
  const baseServiceRates: Record<string, { label: string; perWindow: number; desc: string }> = {
    'draught-proofing': {
      label: 'Draught Proofing & Full Overhaul',
      perWindow: 260,
      desc: 'Includes concealed weather seals, new cords, weight balance, and easing'
    },
    'double-glazing': {
      label: 'Heritage Slimline Double Glazing',
      perWindow: 680,
      desc: 'Slim 11mm vacuum/argon glass retrofitted into original timber sashes'
    },
    'rot-repair': {
      label: 'Rot Repair & Accoya Sill Splicing',
      perWindow: 390,
      desc: 'Excavation of decay, rot-proof Accoya timber splice & epoxy resin rebuild'
    },
    'acoustic': {
      label: 'Acoustic Soundproofing Upgrade',
      perWindow: 620,
      desc: 'Specialist acoustic laminate PVB glass cut to reduce 38dB traffic noise'
    }
  };

  const styleMultipliers: Record<string, number> = {
    'victorian-sash': 1.0,
    'georgian-sash': 1.25, // Multi-pane requires more delicate work
    'bay-sash': 1.15,
    'casement': 0.95
  };

  const currentService = baseServiceRates[serviceType];
  const multiplier = styleMultipliers[windowStyle] || 1.0;
  
  const estimatedCost = Math.round(windowCount * currentService.perWindow * multiplier);
  const minCost = Math.round(estimatedCost * 0.92);
  const maxCost = Math.round(estimatedCost * 1.12);

  // New hardwood sash complete replacement costs approx £1,800 - £2,400 per window in UK
  const newReplacementEstimate = windowCount * 1950;
  const savings = Math.max(0, newReplacementEstimate - estimatedCost);

  // Estimated annual heating savings (approx £45 - £95 per window annually)
  const annualEnergySavings = windowCount * (serviceType === 'double-glazing' ? 85 : 45);

  const handleProceed = () => {
    onApplyToBooking({
      windowCount,
      serviceName: currentService.label,
      style: windowStyle
    });
  };

  return (
    <section id="estimator" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#6EC1E4]">
            Transparent Pricing
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#062A4D] tracking-tight mt-2">
            Instant Window Restoration Estimator
          </h2>
          <p className="text-[#54595F] text-base sm:text-lg mt-3 leading-relaxed font-light">
            Restoring your timber sashes typically costs 60%–70% less than new replacement windows while preserving the character and valuation of your period home.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            
            {/* 1. Window Count */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-[#062A4D]">
                  Number of Windows to Restore:
                </label>
                <span className="font-serif text-2xl font-bold text-[#062A4D] tabular-nums">
                  {windowCount} {windowCount === 1 ? 'Window' : 'Windows'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="16"
                value={windowCount}
                onChange={(e) => setWindowCount(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#6EC1E4]"
              />
              <div className="flex justify-between text-[11px] text-[#7A7A7A] mt-1">
                <span>1 Single Sash</span>
                <span>4 (Average Flat)</span>
                <span>8 (Typical House)</span>
                <span>16+ Whole Villa</span>
              </div>
            </div>

            {/* 2. Service Selection */}
            <div>
              <label className="block text-sm font-semibold text-[#062A4D] mb-2">
                Primary Restoration Service Required:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(baseServiceRates).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setServiceType(key)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      serviceType === key
                        ? 'border-[#6EC1E4] bg-[#6EC1E4]/10 ring-2 ring-[#6EC1E4]'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <p className="text-xs font-bold text-[#062A4D]">{item.label}</p>
                    <p className="text-[11px] text-[#54595F] mt-1 line-clamp-2">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Window Architectural Style */}
            <div>
              <label className="block text-sm font-semibold text-[#062A4D] mb-2">
                Window Architectural Style:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {[
                  { id: 'victorian-sash', label: 'Victorian Sash' },
                  { id: 'georgian-sash', label: 'Georgian Multi-Pane' },
                  { id: 'bay-sash', label: 'Bay Window Set' },
                  { id: 'casement', label: 'Timber Casement' }
                ].map(style => (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setWindowStyle(style.id)}
                    className={`py-2 px-3 rounded-lg border text-center font-medium transition-colors ${
                      windowStyle === style.id
                        ? 'border-[#062A4D] bg-[#062A4D] text-white shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-[#54595F] hover:bg-slate-100'
                    }`}
                  >
                    {style.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-[#062A4D] text-white p-6 sm:p-8 rounded-2xl border border-[#0b3d6d] shadow-xl space-y-6">
            
            <div>
              <span className="text-xs uppercase tracking-widest text-[#6EC1E4] font-semibold">
                Estimated Restoration Range
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-white tabular-nums">
                  £{minCost.toLocaleString()} – £{maxCost.toLocaleString()}
                </span>
                <span className="text-xs text-slate-300">+ VAT</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Subject to free on-site physical survey and timber condition check.
              </p>
            </div>

            {/* Comparison with complete replacement */}
            <div className="p-4 rounded-xl bg-[#031b32] border border-[#0b3d6d] space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Total Complete Replacement:</span>
                <span className="text-slate-300 line-through tabular-nums">
                  £{newReplacementEstimate.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-[#61CE70] pt-1 border-t border-[#0b3d6d]">
                <span className="flex items-center gap-1.5">
                  <TrendingDown className="w-4 h-4 text-[#61CE70]" />
                  Estimated Savings by Restoring:
                </span>
                <span className="text-sm font-bold tabular-nums">
                  Save approx £{savings.toLocaleString()} ({(Math.round((savings / newReplacementEstimate) * 100))}% less)
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-[#6EC1E4] pt-1 border-t border-[#0b3d6d]">
                <span className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#6EC1E4]" />
                  Est. Annual Heating Bill Savings:
                </span>
                <span className="font-bold tabular-nums">
                  ~£{annualEnergySavings}/year
                </span>
              </div>
            </div>

            {/* What's included checklist */}
            <div className="space-y-2 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#61CE70] shrink-0" />
                <span>Full on-site survey and itemized written quotation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#61CE70] shrink-0" />
                <span>Traditional timber craftsmanship & weather seal guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#61CE70] shrink-0" />
                <span>Zero mess guarantee: dust-sheeted & vacuumed daily</span>
              </div>
            </div>

            {/* Proceed to Booking */}
            <button
              onClick={handleProceed}
              className="w-full bg-[#61CE70] hover:bg-[#52be61] text-[#062A4D] font-bold py-3.5 rounded-lg text-sm transition-all flex items-center justify-center gap-2 shadow-lg active:scale-98"
            >
              <span>Transfer Estimate to Free Survey Booking</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
