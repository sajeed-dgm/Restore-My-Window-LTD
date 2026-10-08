import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can you double-glaze my existing timber sashes without replacing the frames?",
      a: "Yes, in 90% of properties! We specialize in retrofitting ultra-slim 11mm or 12mm vacuum and argon-filled double glazing directly into your original period sashes. We precision-rebate the timber sashes, retain the outer box frames, and rebalance the counterweights with extra lead to ensure effortless sliding."
    },
    {
      q: "Will this work comply with Listed Building or Conservation Area restrictions?",
      a: "Yes. In Conservation Areas, restoring original frames and installing slimline double glazing with authentic narrow glazing bars is virtually always permitted because the exterior architectural sightlines are unchanged. For Grade II listed buildings, we work closely with conservation officers and provide detailed timber specifications."
    },
    {
      q: "How noisy and dusty is the restoration process in our home?",
      a: "We operate a strict 'clean home' protocol. Sashes are carefully removed to our mobile containment workshop or treated with HEPA-filtered extraction joinery tools inside. We tape heavy-duty floor and furniture protection sheets, and clean up thoroughly at the end of each day. You do not need to move out."
    },
    {
      q: "Why should I restore old timber instead of getting modern UPVC sash windows?",
      a: "Original slow-grown Baltic pine and pitch pine timber found in Georgian and Victorian houses is vastly superior in density to modern softwoods. Furthermore, replacing authentic timber with plastic UPVC destroys property character and can reduce the market value of period homes by up to 15%. Restoring is also 60-70% cheaper than total replacement."
    },
    {
      q: "What guarantee do you provide on restoration and draught-proofing?",
      a: "We provide a comprehensive craftsmanship guarantee on all draught-proofing brush pile seals, sash cords, and new joinery. Spliced Accoya timber carries a 20-year anti-rot manufacturer warranty, ensuring your investment is completely protected."
    },
    {
      q: "How soon can you carry out the free physical survey?",
      a: "We typically have surveyors visiting London, Surrey, and Home Counties properties within 3 to 7 working days. You will receive an exact, itemized written proposal within 24 hours of the survey."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#6EC1E4]">
            Frequently Asked Questions
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#062A4D] tracking-tight">
            Restoration & Conservation Insights
          </h2>
          <p className="text-[#54595F] text-sm font-light">
            Answers to common questions regarding historic joinery, thermal improvements, and planning considerations across London and nearby areas.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-[#062A4D] hover:text-[#6EC1E4] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#6EC1E4]' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[#54595F] leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
