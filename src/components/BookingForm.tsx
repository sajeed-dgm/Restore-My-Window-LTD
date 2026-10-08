import React, { useState, useEffect } from 'react';
import { BookingFormData } from '../types';
import { Calendar, CheckCircle, Clock, MapPin, ShieldCheck, Upload, AlertCircle, ArrowRight } from 'lucide-react';

interface BookingFormProps {
  initialService?: string;
  initialWindowCount?: number;
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService,
  initialWindowCount = 4,
  isOpenModal = false,
  onCloseModal
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    postcode: '',
    address: '',
    propertyType: 'victorian',
    windowType: 'sliding-sash',
    windowCount: initialWindowCount,
    servicesNeeded: initialService ? [initialService] : ['Draught Proofing & Overhaul'],
    preferredDate: '',
    preferredTimeSlot: 'morning',
    urgency: 'routine',
    notes: '',
    hasPhotos: false
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Update if props change
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({
        ...prev,
        servicesNeeded: Array.from(new Set([...prev.servicesNeeded, initialService]))
      }));
    }
    if (initialWindowCount) {
      setFormData(prev => ({ ...prev, windowCount: initialWindowCount }));
    }
  }, [initialService, initialWindowCount]);

  const serviceOptions = [
    'Draught Proofing & Overhaul',
    'Heritage Slimline Double Glazing',
    'Timber Rot Repair & Sill Splicing',
    'Cord Replacement & Weight Rebalancing',
    'Acoustic Noise Reduction Glass',
    'Breathable Exterior Hand Painting'
  ];

  const handleServiceToggle = (svc: string) => {
    setFormData(prev => {
      const exists = prev.servicesNeeded.includes(svc);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter(s => s !== svc)
          : [...prev.servicesNeeded, svc]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in your name, email, and phone number.');
      return;
    }
    if (!formData.postcode.trim()) {
      setErrorMsg('Please provide your property postcode for surveyor scheduling.');
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);

    // Simulate submission to backend / booking system
    setTimeout(() => {
      const refNumber = `RMW-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedRef(refNumber);
      setIsSubmitting(false);
    }, 800);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      postcode: '',
      address: '',
      propertyType: 'victorian',
      windowType: 'sliding-sash',
      windowCount: 4,
      servicesNeeded: ['Draught Proofing & Overhaul'],
      preferredDate: '',
      preferredTimeSlot: 'morning',
      urgency: 'routine',
      notes: '',
      hasPhotos: false
    });
  };

  return (
    <section id="booking" className="py-24 bg-[#062A4D] text-white border-b border-[#0b3d6d]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0b3d6d] border border-[#6EC1E4]/30 rounded-full text-xs text-[#6EC1E4] font-medium mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#61CE70]" />
            <span>Complimentary On-Site Survey & Inspection</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Book Your Free Window Survey & Quote
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light mt-3 leading-relaxed">
            One of our senior joiners will inspect your window frames, test for timber rot, evaluate cords & counterweights, and provide an exact itemized quotation with zero obligation. Serving London & nearby areas.
          </p>
        </div>

        {/* Confirmation Screen */}
        {submittedRef ? (
          <div className="bg-[#031b32] border border-[#61CE70]/50 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-[#61CE70]/20 text-[#61CE70] border border-[#61CE70] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Inspection Request Confirmed
              </h3>
              <p className="text-sm text-slate-300 max-w-lg mx-auto">
                Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Your survey request has been registered in our schedule.
              </p>
            </div>

            <div className="max-w-md mx-auto bg-[#062A4D] border border-[#0b3d6d] rounded-xl p-5 text-left space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-[#0b3d6d]">
                <span className="text-slate-400">Survey Reference:</span>
                <span className="font-mono text-sm font-bold text-[#6EC1E4]">{submittedRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="text-slate-200">{formData.postcode.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Estimated Windows:</span>
                <span className="text-slate-200">{formData.windowCount} Windows ({formData.propertyType})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Preferred Slot:</span>
                <span className="text-slate-200 capitalize">
                  {formData.preferredDate || 'Earliest available date'} ({formData.preferredTimeSlot})
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Our chief surveyor will telephone you on <strong className="text-slate-200">{formData.phone}</strong> to confirm your arrival window.
            </p>

            <button
              onClick={handleReset}
              className="bg-[#61CE70] hover:bg-[#52be61] text-[#062A4D] font-bold px-6 py-2.5 rounded-lg text-xs transition-colors shadow"
            >
              Book Another Inspection
            </button>
          </div>
        ) : (
          /* Form Container */
          <form 
            onSubmit={handleSubmit}
            className="bg-[#031b32] border border-[#0b3d6d] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8"
          >
            {errorMsg && (
              <div className="bg-rose-950/80 border border-rose-800 text-rose-200 p-4 rounded-xl text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Step 1: Services & Windows */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#6EC1E4] border-b border-[#0b3d6d] pb-2">
                1. Services & Window Scope
              </h3>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-200">
                  Select Required Restoration Services:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {serviceOptions.map(svc => {
                    const isChecked = formData.servicesNeeded.includes(svc);
                    return (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => handleServiceToggle(svc)}
                        className={`p-3 rounded-lg border text-left text-xs font-medium transition-all ${
                          isChecked
                            ? 'border-[#61CE70] bg-[#61CE70]/15 text-white ring-1 ring-[#61CE70]'
                            : 'border-[#0b3d6d] bg-[#062A4D]/60 text-slate-300 hover:border-[#6EC1E4]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                            isChecked ? 'border-[#61CE70] bg-[#61CE70] text-[#062A4D]' : 'border-slate-500'
                          }`}>
                            {isChecked && <CheckCircle className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span>{svc}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Window count slider */}
              <div className="pt-2">
                <div className="flex justify-between items-center mb-1 text-xs">
                  <span className="font-semibold text-slate-200">Estimated Number of Windows:</span>
                  <span className="font-mono text-sm text-[#6EC1E4] font-bold">{formData.windowCount} windows</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={formData.windowCount}
                  onChange={(e) => setFormData({ ...formData, windowCount: parseInt(e.target.value, 10) })}
                  className="w-full h-2 bg-[#062A4D] rounded-lg appearance-none cursor-pointer accent-[#6EC1E4]"
                />
              </div>

              {/* Property & Window Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Property Architectural Era:
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                    className="w-full bg-[#062A4D] border border-[#0b3d6d] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4]"
                  >
                    <option value="victorian">Victorian (1837 - 1901)</option>
                    <option value="georgian">Georgian (1714 - 1837)</option>
                    <option value="edwardian">Edwardian (1901 - 1914)</option>
                    <option value="listed">Grade II Listed / Conservation Area</option>
                    <option value="other">Modern / Post-War</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Primary Window Construction:
                  </label>
                  <select
                    value={formData.windowType}
                    onChange={(e) => setFormData({ ...formData, windowType: e.target.value as any })}
                    className="w-full bg-[#062A4D] border border-[#0b3d6d] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4]"
                  >
                    <option value="sliding-sash">Traditional Box Sash Windows</option>
                    <option value="bay-sash">Multi-Faceted Bay Windows</option>
                    <option value="casement">Hinged Timber Casements</option>
                    <option value="french-doors">Period French Timber Doors</option>
                    <option value="mixed">Mixed Styles</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Preferred Survey Date & Urgency */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#6EC1E4] border-b border-[#0b3d6d] pb-2">
                2. Preferred Inspection Schedule
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Preferred Date:
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#062A4D] border border-[#0b3d6d] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Preferred Time Window:
                  </label>
                  <select
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value as any })}
                    className="w-full bg-[#062A4D] border border-[#0b3d6d] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4]"
                  >
                    <option value="morning">Morning (8:00 AM – 1:00 PM)</option>
                    <option value="afternoon">Afternoon (1:00 PM – 5:00 PM)</option>
                    <option value="flexible">Flexible / Any Time</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Urgency Level:
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                    className="w-full bg-[#062A4D] border border-[#0b3d6d] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4]"
                  >
                    <option value="routine">Routine Survey (Next 1-2 weeks)</option>
                    <option value="urgent">Urgent Repair / Water Leak</option>
                    <option value="within-month">Planning Ahead (This Month)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Contact & Location */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#6EC1E4] border-b border-[#0b3d6d] pb-2">
                3. Your Property & Contact Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#062A4D] border border-[#0b3d6d] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#062A4D] border border-[#0b3d6d] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="07123 456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#062A4D] border border-[#0b3d6d] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. W1J 5BF"
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    className="w-full bg-[#062A4D] border border-[#0b3d6d] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4] uppercase font-mono"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Street Address (Optional):
                  </label>
                  <input
                    type="text"
                    placeholder="House number & street name"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#062A4D] border border-[#0b3d6d] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  Specific issues or symptoms (e.g. whistling draft, stuck bottom sash, rotten sill):
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your window conditions or specific requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#062A4D] border border-[#0b3d6d] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4]"
                />
              </div>
            </div>

            {/* Submission CTA */}
            <div className="pt-4 border-t border-[#0b3d6d] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#61CE70]" />
                <span>Zero obligation · Free written report · No sales pressure</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#61CE70] hover:bg-[#52be61] text-[#062A4D] font-bold px-8 py-3.5 rounded-lg text-sm transition-all shadow-xl active:scale-98 flex items-center justify-center gap-2"
              >
                <span>{isSubmitting ? 'Confirming Survey Slot...' : 'Confirm Free Window Survey'}</span>
                <ArrowRight className="w-4 h-4 text-[#062A4D]" />
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
