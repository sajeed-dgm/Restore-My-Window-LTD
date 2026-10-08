import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { X, Check, Copy, RefreshCw, ExternalLink, Sparkles } from 'lucide-react';

interface UrlManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  galleryItems: GalleryItem[];
  onSaveUrls: (updatedItems: GalleryItem[]) => void;
  onResetUrls: () => void;
}

export const UrlManagerModal: React.FC<UrlManagerModalProps> = ({
  isOpen,
  onClose,
  galleryItems,
  onSaveUrls,
  onResetUrls,
}) => {
  if (!isOpen) return null;

  const [mode, setMode] = useState<'individual' | 'bulk'>('bulk');
  const [copied, setCopied] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  // Individual slot URLs
  const [slotUrls, setSlotUrls] = useState<string[]>(
    galleryItems.map(item => item.imageUrl)
  );

  // Bulk textarea string
  const [bulkText, setBulkText] = useState<string>(
    galleryItems.map(item => item.imageUrl).join('\n')
  );

  const handleBulkChange = (text: string) => {
    setBulkText(text);
  };

  const handleApply = () => {
    let finalUrls: string[] = [];

    if (mode === 'bulk') {
      const lines = bulkText
        .split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 0);

      finalUrls = galleryItems.map((item, idx) => {
        return lines[idx] ? lines[idx] : item.imageUrl;
      });
    } else {
      finalUrls = slotUrls;
    }

    const updated = galleryItems.map((item, idx) => ({
      ...item,
      imageUrl: finalUrls[idx] || item.imageUrl,
      isPlaceholder: false
    }));

    onSaveUrls(updated);
    setSuccessToast(true);
    setTimeout(() => {
      setSuccessToast(false);
      onClose();
    }, 1200);
  };

  const handleCopyCode = () => {
    const urlsToUse = mode === 'bulk' 
      ? bulkText.split('\n').map(l => l.trim()).filter(Boolean)
      : slotUrls;

    const codeSnippet = `export const customImageUrls = ${JSON.stringify(urlsToUse, null, 2)};`;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#031b32] border border-[#0b3d6d] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#0b3d6d] flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[#6EC1E4] font-bold font-serif text-lg">Photo Gallery URL Manager</span>
              <span className="text-[11px] bg-[#062A4D] text-[#61CE70] border border-[#0b3d6d] px-2 py-0.5 rounded font-semibold">
                10 - 15 Image Slots
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Paste your image links below. They will immediately render across all 15 gallery cards on the site.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#062A4D] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle */}
        <div className="px-6 pt-4 pb-2 border-b border-[#0b3d6d] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={() => setMode('bulk')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                mode === 'bulk'
                  ? 'bg-[#61CE70] text-[#062A4D] font-bold'
                  : 'bg-[#062A4D] text-slate-200 hover:text-white border border-[#0b3d6d]'
              }`}
            >
              Bulk Paste (1 URL per line)
            </button>
            <button
              onClick={() => setMode('individual')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                mode === 'individual'
                  ? 'bg-[#61CE70] text-[#062A4D] font-bold'
                  : 'bg-[#062A4D] text-slate-200 hover:text-white border border-[#0b3d6d]'
              }`}
            >
              Slot-by-Slot Editor
            </button>
          </div>

          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 text-xs text-[#6EC1E4] hover:text-white font-medium py-1 px-2.5 rounded bg-[#062A4D] border border-[#0b3d6d]"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#61CE70]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied code!' : 'Copy Code Snippet'}</span>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {mode === 'bulk' ? (
            <div className="space-y-3">
              <label className="block text-xs font-semibold text-slate-200">
                Paste 10 to 15 Image URLs (One link per line):
              </label>
              <textarea
                value={bulkText}
                onChange={(e) => handleBulkChange(e.target.value)}
                rows={12}
                placeholder={`https://your-domain.com/window-photo-1.jpg\nhttps://your-domain.com/window-photo-2.jpg\n...`}
                className="w-full bg-[#062A4D] border border-[#0b3d6d] rounded-lg p-3 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-[#6EC1E4] leading-relaxed"
              />
              <p className="text-[11px] text-slate-400">
                Tip: Works with any publicly accessible image URLs (from your hosting, CDN, Google Drive direct links, Cloudinary, AWS S3, Imgur, or Vercel Blob).
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {galleryItems.map((item, index) => (
                <div key={item.id} className="bg-[#062A4D] border border-[#0b3d6d] p-3 rounded-lg flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="w-14 shrink-0 text-xs font-mono text-[#6EC1E4]">
                    Slot {String(index + 1).padStart(2, '0')}:
                  </div>
                  <div className="flex-1">
                    <input
                      type="url"
                      value={slotUrls[index] || ''}
                      onChange={(e) => {
                        const next = [...slotUrls];
                        next[index] = e.target.value;
                        setSlotUrls(next);
                      }}
                      placeholder={`Paste image URL for ${item.title}...`}
                      className="w-full bg-[#031b32] border border-[#0b3d6d] rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#6EC1E4] font-mono"
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 truncate max-w-[120px]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#0b3d6d] bg-[#031b32] flex items-center justify-between">
          <button
            onClick={onResetUrls}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white py-2 px-3 rounded hover:bg-[#062A4D] transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="flex items-center gap-2 bg-[#61CE70] hover:bg-[#52be61] text-[#062A4D] font-bold px-5 py-2.5 rounded-lg text-xs transition-all shadow-md active:scale-95"
            >
              <Check className="w-4 h-4 text-[#062A4D]" />
              <span>{successToast ? 'Applied Successfully!' : 'Apply to Gallery Now'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
