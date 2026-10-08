import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Navigation, Compass, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryEmail.trim()) return;

    setSentSuccess(true);
    setTimeout(() => {
      setInquiryName('');
      setInquiryPhone('');
      setInquiryEmail('');
      setInquiryMsg('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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
            <span className="text-[#54595F]">NAP & Direct Contact</span>
          </div>
          <p className="text-xs uppercase tracking-widest font-semibold text-[#6EC1E4]">
            Official NAP & Contact · Restore My Window LTD
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#062A4D] tracking-tight mt-2">
            Speak Directly with Our Window Specialists
          </h2>
          <p className="text-[#54595F] text-base sm:text-lg mt-3 leading-relaxed font-light">
            Whether you have a single sticking bedroom sash or a full period townhouse requiring conservation double glazing, Restore My Window LTD is at your service from Berkeley Square across London and nearby areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Workshop Details */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#6EC1E4]/15 text-[#062A4D] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#062A4D]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider">Phone</p>
                  <a 
                    href="tel:02076928973" 
                    className="font-serif text-xl font-bold text-[#062A4D] hover:text-[#6EC1E4] transition-colors block mt-1"
                  >
                    020 7692 8973
                  </a>
                  <p className="text-[11px] text-[#54595F] mt-1">Direct to Senior Joinery Desk</p>
                </div>
              </div>

              {/* Email & Web Card */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#61CE70]/15 text-[#062A4D] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#062A4D]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider">Email & Website</p>
                  <a 
                    href="mailto:info@restoremywindow.com" 
                    className="font-serif text-base font-bold text-[#062A4D] hover:text-[#6EC1E4] transition-colors block mt-1 break-all"
                  >
                    info@restoremywindow.com
                  </a>
                  <a 
                    href="https://restoremywindow.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-[#6EC1E4] hover:underline flex items-center gap-1 mt-1 font-medium"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>restoremywindow.com</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Address & Transit */}
            <div className="bg-slate-50 p-6 sm:p-7 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#062A4D] mt-1 shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-[#062A4D] text-sm">Headquarters & Survey Desk</h4>
                  <p className="font-bold text-sm text-[#062A4D] mt-1">Restore My Window LTD</p>
                  <p className="text-sm text-[#54595F] font-medium mt-0.5">
                    35 Berkeley Square, London W1J 5BF
                  </p>
                  <p className="text-xs font-semibold text-[#062A4D] mt-1">
                    Telephone: <a href="tel:02076928973" className="text-[#062A4D] hover:text-[#6EC1E4] hover:underline">020 7692 8973</a>
                  </p>
                  
                  {/* Transit times provided in brief */}
                  <div className="mt-2.5 inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-[#54595F]">
                    <Navigation className="w-3.5 h-3.5 text-[#6EC1E4] shrink-0" />
                    <span>Get there: <strong>24 mins</strong> · <strong>13 mins</strong> · <strong>41 mins</strong></span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                <Clock className="w-5 h-5 text-[#062A4D] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#062A4D] text-sm">Business Hours</h4>
                  <div className="text-xs text-[#54595F] mt-1.5 grid grid-cols-2 gap-x-4 gap-y-1">
                    <span>Monday: 8:00 am – 5:00 pm</span>
                    <span>Tuesday: 8:00 am – 5:00 pm</span>
                    <span>Wednesday: 8:00 am – 5:00 pm</span>
                    <span>Thursday: 8:00 am – 5:00 pm</span>
                    <span>Friday: 8:00 am – 5:00 pm</span>
                    <span>Saturday: 8:00 am – 5:00 pm</span>
                    <span className="col-span-2 text-[#7A7A7A] font-semibold mt-0.5">Sunday: Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Areas */}
            <div className="p-5 rounded-xl bg-[#062A4D]/5 border border-[#062A4D]/15 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#062A4D] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#6EC1E4]" />
                <span>Areas Served</span>
              </h4>
              <p className="text-xs text-[#54595F] leading-relaxed">
                London and nearby areas (Westminster, Kensington & Chelsea, Mayfair, Richmond, Wimbledon, Hampstead, Islington, Dulwich, Greenwich, Surrey, and Home Counties).
              </p>
            </div>

          </div>

          {/* Right Column: Direct Quick Inquiry Form */}
          <div className="lg:col-span-6 bg-[#062A4D] text-white p-8 sm:p-10 rounded-2xl border border-[#0b3d6d] shadow-xl">
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#6EC1E4]">
                <MessageSquare className="w-4 h-4 text-[#61CE70]" />
                <span>Fast Consultation Desk</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-300">
                Have a question about window restoration, double glazing, or rot repairs in London? Send us a quick message.
              </p>
            </div>

            {sentSuccess ? (
              <div className="bg-[#031b32] border border-[#61CE70]/50 p-6 rounded-xl text-center space-y-3 animate-in zoom-in-95">
                <CheckCircle2 className="w-10 h-10 text-[#61CE70] mx-auto" />
                <h4 className="font-display text-lg font-bold text-white">Message Dispatched</h4>
                <p className="text-xs text-slate-300">
                  Thank you! Our 35 Berkeley Square survey desk will contact you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickInquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-200 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Thomas Ashton"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full bg-[#031b32] border border-[#0b3d6d] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-200 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="thomas@example.com"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full bg-[#031b32] border border-[#0b3d6d] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-200 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="07987 654321"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full bg-[#031b32] border border-[#0b3d6d] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-200 mb-1">
                    How can we help your windows? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your property, window issues, or questions..."
                    value={inquiryMsg}
                    onChange={(e) => setInquiryMsg(e.target.value)}
                    className="w-full bg-[#031b32] border border-[#0b3d6d] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#61CE70] hover:bg-[#52be61] text-[#062A4D] font-bold py-3 rounded-lg text-xs transition-all flex items-center justify-center gap-2 shadow-lg active:scale-98"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry to 35 Berkeley Square Desk</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

