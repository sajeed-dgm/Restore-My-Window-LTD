import React from 'react';
import { servicesData } from '../data/servicesData';
import { CheckCircle2, Clock, Shield, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#6EC1E4]">
            Specialist Craftsmanship
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#062A4D] tracking-tight mt-2">
            Restoration, Thermal Upgrades & Historic Joinery
          </h2>
          <p className="text-[#54595F] text-base sm:text-lg mt-4 leading-relaxed font-light">
            We don't replace historic timber windows unless genuinely beyond salvation. Our restorative approach protects architectural character while providing the draft-free comfort of modern construction.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between bg-slate-50 hover:bg-slate-100/90 border border-slate-200 hover:border-[#6EC1E4] rounded-xl p-7 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Index & Title */}
                <div className="flex items-center justify-between text-xs text-[#7A7A7A] mb-3">
                  <span className="font-mono text-[#062A4D] font-bold tracking-wider">
                    {String(index + 1).padStart(2, '0')}. SERVICE
                  </span>
                  <div className="flex items-center gap-1 text-[#54595F]">
                    <Clock className="w-3.5 h-3.5 text-[#6EC1E4]" />
                    <span>{service.typicalDuration}</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#062A4D] group-hover:text-[#0b3d6d] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-semibold text-[#6EC1E4] mt-1">
                  {service.tagline}
                </p>

                <p className="text-sm text-[#54595F] mt-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Points */}
                <ul className="mt-5 space-y-2.5 text-xs text-[#54595F]">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#61CE70] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Warranty & CTA */}
              <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#54595F]">
                  <Shield className="w-3.5 h-3.5 text-[#062A4D]" />
                  <span className="font-medium">{service.warranty}</span>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#062A4D] hover:text-[#6EC1E4] group-hover:translate-x-0.5 transition-all"
                >
                  <span>Book Survey</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6EC1E4]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 bg-[#062A4D] text-white rounded-xl p-8 sm:p-10 border border-[#0b3d6d] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display text-2xl font-bold text-[#6EC1E4]">
              Preserve your original timber frames — Guaranteed for 10 Years
            </h4>
            <p className="text-slate-300 text-sm max-w-2xl font-light">
              Every overhaul includes detailed timber inspection, Accoya splice repairs, brass sash furniture, and free post-restoration tuning. Serving London & nearby areas.
            </p>
          </div>

          <button
            onClick={() => onSelectService('All Window Restoration Services')}
            className="bg-[#61CE70] hover:bg-[#52be61] text-[#062A4D] font-bold px-6 py-3.5 rounded text-sm transition-all whitespace-nowrap active:scale-[0.98] shadow"
          >
            Request Free Home Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
