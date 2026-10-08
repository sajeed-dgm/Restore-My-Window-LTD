import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Check, AlertTriangle, Sparkles } from 'lucide-react';
import restoredImage from '../assets/images/hero_sash_window_1791445146114.jpg';
import repairImage from '../assets/images/gallery_craftsman_repair_1791445171838.jpg';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <section id="comparison" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#062A4D]">
            Real Transformation Impact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#062A4D] tracking-tight">
            See the Restoration Difference
          </h2>
          <p className="text-[#54595F] text-sm sm:text-base leading-relaxed">
            Drag the slider below to contrast neglected, rotting timber and broken cords with our fully restored, draught-proofed, double-glazed finish.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div 
            ref={containerRef}
            className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-xl select-none cursor-ew-resize border border-slate-300 bg-[#062A4D]"
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Background: After (Fully Restored) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={restoredImage}
                alt="Fully restored Victorian sash window"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 right-4 bg-[#062A4D]/90 backdrop-blur-md text-[#61CE70] border border-[#61CE70]/40 px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 shadow">
                <Check className="w-3.5 h-3.5 text-[#61CE70]" />
                <span>AFTER: Restored & Draught-Proofed</span>
              </div>

              {/* Bottom label right */}
              <div className="absolute bottom-4 right-4 bg-[#062A4D]/85 backdrop-blur-md text-slate-200 text-xs px-3 py-1.5 rounded max-w-xs text-right hidden sm:block border border-slate-700">
                Whisper-smooth glide · Accoya rot-proof sill · Slimline double glazing
              </div>
            </div>

            {/* Foreground: Before (Weathered & Rotten) - clipped by sliderPos */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div 
                className="absolute inset-0"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              >
                <img
                  src={repairImage}
                  alt="Damaged and rotten timber window before repair"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter saturate-75 contrast-125"
                />
                {/* Visual grain/decay tint overlay */}
                <div className="absolute inset-0 bg-[#062A4D]/30"></div>

                <div className="absolute top-4 left-4 bg-rose-950/85 backdrop-blur-md text-rose-300 border border-rose-700/50 px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 shadow">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  <span>BEFORE: Rotting Sill & Snapped Cord</span>
                </div>

                <div className="absolute bottom-4 left-4 bg-[#062A4D]/85 backdrop-blur-md text-slate-200 text-xs px-3 py-1.5 rounded max-w-xs text-left hidden sm:block border border-slate-700">
                  Severe draughts · Water ingress · Peeling paint · Stuck sashes
                </div>
              </div>
            </div>

            {/* Vertical Divider Line & Draggable Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#6EC1E4] text-[#062A4D] flex items-center justify-center shadow-lg border-2 border-white pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                <ArrowLeftRight className="w-4 h-4 text-[#062A4D]" />
              </div>
            </div>

          </div>

          {/* Quick Comparison Metrics */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm text-left">
              <p className="text-xs font-bold uppercase text-[#7A7A7A]">Thermal Comfort</p>
              <p className="font-semibold text-[#062A4D] text-base mt-1">U-Value drops from 5.2 to 1.3</p>
              <p className="text-xs text-[#54595F] mt-1">Stops thermal bleeding through glass and air gaps.</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm text-left">
              <p className="text-xs font-bold uppercase text-[#7A7A7A]">Acoustic Reduction</p>
              <p className="font-semibold text-[#062A4D] text-base mt-1">-32dB to -38dB Noise Cut</p>
              <p className="text-xs text-[#54595F] mt-1">Dramatically muffles traffic, planes, and pedestrians.</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm text-left">
              <p className="text-xs font-bold uppercase text-[#7A7A7A]">Long-term Value</p>
              <p className="font-semibold text-[#062A4D] text-base mt-1">Heritage Value Protected</p>
              <p className="text-xs text-[#54595F] mt-1">Avoids devaluing historic properties with plastic UPVC.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
