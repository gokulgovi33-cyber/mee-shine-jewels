import React from 'react';
import type { ModelKey } from '../config/jewelleryModels';

interface DevModelSwitcherProps {
  activeModel: ModelKey;
  onSelectModel: (key: ModelKey) => void;
}

export const DevModelSwitcher: React.FC<DevModelSwitcherProps> = ({
  activeModel,
  onSelectModel
}) => {
  // Only render in development mode
  if (!import.meta.env.DEV) return null;

  const models: { key: ModelKey; label: string }[] = [
    { key: 'ring01', label: 'Ring' },
    { key: 'bracelet01', label: 'Bracelet' },
    { key: 'chain01', label: 'Chain' },
    { key: 'earring01', label: 'Earring' }
  ];

  return (
    <aside
      aria-label="Development 3D Model Switcher"
      className="fixed bottom-4 left-4 z-[999] bg-white/95 border border-[#B68D40]/40 backdrop-blur-md p-3 rounded-xl shadow-xl text-xs font-sans text-[#111111] select-none hidden sm:block"
    >
      <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#8A6D3B] font-bold mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>DEV MODEL SWITCHER</span>
      </div>
      <div className="flex items-center space-x-1.5">
        {models.map((m) => (
          <button
            key={m.key}
            onClick={() => onSelectModel(m.key)}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
              activeModel === m.key
                ? 'bg-[#9E7B34] text-white shadow-sm'
                : 'bg-[#FAF9F6] border border-[#E8E4DC] hover:bg-[#F4F1EA] text-[#3D3B38]'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
    </aside>
  );
};
