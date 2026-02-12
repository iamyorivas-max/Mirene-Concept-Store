
import React from 'react';
import { LinkItem } from '../types';
import { getIcon } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface LinkCardProps {
  link: LinkItem;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block w-full p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl glass mb-4 overflow-hidden border ${
        link.highlight ? 'border-pink-100 shadow-sm' : 'border-stone-50'
      }`}
    >
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-xl transition-all duration-300 ${
            link.highlight 
              ? 'ig-gradient text-white' 
              : 'bg-stone-50 text-stone-500 group-hover:bg-stone-800 group-hover:text-white'
          }`}>
            {getIcon(link.icon)}
          </div>
          <div>
            <h3 className="font-semibold text-stone-800 text-sm tracking-wide uppercase">{link.title}</h3>
            <p className="text-stone-500 text-xs mt-0.5">{link.description}</p>
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
          <ArrowUpRight className="w-5 h-5 text-stone-300" />
        </div>
      </div>
    </a>
  );
};
