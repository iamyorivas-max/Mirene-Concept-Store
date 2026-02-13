
import React, { useState } from 'react';
import { getDesignSuggestions } from '../services/geminiService';
import { DesignSuggestion } from '../types';
import { Sparkles, Loader2, Send } from 'lucide-react';

export const DesignAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<DesignSuggestion[]>([]);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    const results = await getDesignSuggestions(prompt);
    setSuggestions(results);
    setLoading(false);
  };

  return (
    <div className="w-full glass rounded-3xl p-6 mb-8 shadow-sm border border-stone-100">
      <div className="flex items-center space-x-2 mb-4">
        <Sparkles className="w-5 h-5 text-black" />
        <h2 className="font-serif text-xl italic text-stone-800">Mirene IA Assistant</h2>
      </div>
      <p className="text-stone-400 text-[11px] mb-4 uppercase tracking-wider">Trouvez l'objet parfait pour votre intérieur.</p>
      
      <form onSubmit={handleConsult} className="relative mb-6">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="ex: 'Un cadeau pour une pendaison de crémaillère'"
          className="w-full bg-stone-50 border border-stone-100 rounded-xl py-3 pl-4 pr-12 text-sm focus:ring-1 focus:ring-black transition-all outline-none text-stone-800 placeholder:text-stone-300"
        />
        <button
          type="submit"
          disabled={loading || !prompt.trim()}
          className="absolute right-2 top-1.5 p-2 bg-black text-white rounded-lg hover:bg-stone-800 disabled:opacity-30 transition-all"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        </button>
      </form>

      {suggestions.length > 0 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
          {suggestions.map((s, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 border border-stone-100 hover:border-black transition-colors shadow-sm">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{s.style}</span>
              </div>
              <h4 className="font-medium text-stone-900 text-sm mb-1">{s.item}</h4>
              <p className="text-xs text-stone-600 italic">"{s.reason}"</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
