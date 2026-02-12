
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
    <div className="w-full glass rounded-3xl p-6 mb-8 shadow-lg shadow-pink-50/50 border border-pink-50">
      <div className="flex items-center space-x-2 mb-4">
        <Sparkles className="w-5 h-5 text-pink-500" />
        <h2 className="font-serif text-xl italic text-stone-800">Mirene IA Assistant</h2>
      </div>
      <p className="text-stone-500 text-[11px] mb-4 uppercase tracking-wider">Trouvez l'objet parfait pour votre intérieur.</p>
      
      <form onSubmit={handleConsult} className="relative mb-6">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="ex: 'Un cadeau pour une pendaison de crémaillère'"
          className="w-full bg-white border border-stone-100 rounded-xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-pink-200 transition-all outline-none"
        />
        <button
          type="submit"
          disabled={loading || !prompt.trim()}
          className="absolute right-2 top-1.5 p-2 ig-gradient text-white rounded-lg hover:opacity-90 disabled:opacity-50 transition-all"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        </button>
      </form>

      {suggestions.length > 0 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
          {suggestions.map((s, idx) => (
            <div key={idx} className="bg-white/50 rounded-xl p-4 border border-stone-50 hover:border-pink-100 transition-colors">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest ig-gradient-text">{s.style}</span>
              </div>
              <h4 className="font-medium text-stone-800 text-sm mb-1">{s.item}</h4>
              <p className="text-xs text-stone-600 italic">"{s.reason}"</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
