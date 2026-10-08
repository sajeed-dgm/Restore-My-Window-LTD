import React from 'react';
import { X, ExternalLink, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';

interface VercelGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VercelGuideModal: React.FC<VercelGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#031b32] border border-[#0b3d6d] rounded-2xl shadow-2xl p-6 sm:p-8 text-white">
        
        <div className="flex items-center justify-between pb-4 border-b border-[#0b3d6d]">
          <div>
            <h3 className="font-display text-xl font-bold text-[#6EC1E4]">
              How to Upload & Deploy on Vercel
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Follow these simple steps to deploy your Restore My Window website to your live Vercel domain.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-[#062A4D] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-5 text-xs text-slate-300">
          
          <div className="flex items-start gap-3 bg-[#062A4D] p-3.5 rounded-xl border border-[#0b3d6d]">
            <span className="w-6 h-6 rounded-full bg-[#6EC1E4] text-[#062A4D] font-bold flex items-center justify-center shrink-0 text-xs">1</span>
            <div>
              <p className="font-semibold text-white">Push this codebase to GitHub</p>
              <p className="text-slate-300 mt-0.5">
                Commit and push all project files to a new GitHub repository (public or private).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#062A4D] p-3.5 rounded-xl border border-[#0b3d6d]">
            <span className="w-6 h-6 rounded-full bg-[#6EC1E4] text-[#062A4D] font-bold flex items-center justify-center shrink-0 text-xs">2</span>
            <div>
              <p className="font-semibold text-white">Import Project in Vercel Dashboard</p>
              <p className="text-slate-300 mt-0.5">
                Go to <span className="text-[#6EC1E4]">vercel.com</span> → Click <strong>"Add New... Project"</strong> → Select your GitHub repository.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#062A4D] p-3.5 rounded-xl border border-[#0b3d6d]">
            <span className="w-6 h-6 rounded-full bg-[#6EC1E4] text-[#062A4D] font-bold flex items-center justify-center shrink-0 text-xs">3</span>
            <div>
              <p className="font-semibold text-white">Framework Settings & Install Command</p>
              <ul className="text-slate-300 mt-1 space-y-1 list-disc list-inside">
                <li>Framework Preset: <span className="font-mono text-[#6EC1E4]">Vite</span></li>
                <li>Install Command: <span className="font-mono text-[#6EC1E4]">npm install --legacy-peer-deps</span> (pre-configured in <span className="text-white font-mono">vercel.json</span> & <span className="text-white font-mono">.npmrc</span>)</li>
                <li>Build Command: <span className="font-mono text-[#6EC1E4]">npm run build</span></li>
                <li>Output Directory: <span className="font-mono text-[#6EC1E4]">dist</span></li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#062A4D] p-3.5 rounded-xl border border-[#0b3d6d]">
            <span className="w-6 h-6 rounded-full bg-[#61CE70] text-[#062A4D] font-bold flex items-center justify-center shrink-0 text-xs">4</span>
            <div>
              <p className="font-semibold text-white">Click "Deploy"</p>
              <p className="text-slate-300 mt-0.5">
                Vercel will compile the site and give you a live production URL (e.g. <span className="text-[#6EC1E4]">restoremywindow.vercel.app</span>) with free SSL and lightning-fast global CDN.
              </p>
            </div>
          </div>

        </div>

        <div className="pt-4 border-t border-[#0b3d6d] flex items-center justify-end">
          <button
            onClick={onClose}
            className="bg-[#61CE70] hover:bg-[#52be61] text-[#062A4D] font-bold px-5 py-2.5 rounded-lg text-xs transition-colors shadow"
          >
            Got It!
          </button>
        </div>

      </div>
    </div>
  );
};
