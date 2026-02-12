
import React from 'react';
import { ShoppingBag, Instagram, MapPin, MessageCircle, Star, Utensils, Flame, Shirt, Globe } from 'lucide-react';
import { LinkItem, CategoryItem } from './types.ts';

export const STORE_LINKS: LinkItem[] = [
  {
    id: 'location',
    title: 'Localisation du magasin',
    description: 'Venez découvrir notre boutique physique',
    url: 'https://maps.app.goo.gl/45uMyvgKYDJPaT7J6',
    icon: 'map',
    highlight: true,
  },
  {
    id: 'whatsapp',
    title: 'Nous contacter sur WhatsApp',
    description: 'Une question ? Échangeons en direct',
    url: 'https://wa.me/212600000000',
    icon: 'whatsapp',
    highlight: true,
  },
];

export const MIRENE_CATEGORIES: CategoryItem[] = [
  { id: 'vaisselle', title: 'Vaisselle rafin', imageUrl: 'https://picsum.photos/seed/tableware/200/200' },
  { id: 'bougie', title: 'Bougie', imageUrl: 'https://picsum.photos/seed/candle/200/200' },
  { id: 'avis', title: 'Avis clients', imageUrl: 'https://picsum.photos/seed/review/200/200' },
  { id: 'linge', title: 'Linge de mais...', imageUrl: 'https://picsum.photos/seed/linen/200/200' },
  { id: 'mykonos', title: 'Mykonos', imageUrl: 'https://picsum.photos/seed/island/200/200' },
];

export const CONTACT_LINKS = {
  instagram: 'https://www.instagram.com/mirene_concept.store/',
  location: 'https://maps.app.goo.gl/45uMyvgKYDJPaT7J6',
  address: 'MIRENE Concept Store, Localisation',
};

export const getIcon = (name: string) => {
  switch (name) {
    case 'map': return <MapPin className="w-5 h-5" />;
    case 'whatsapp': return <MessageCircle className="w-5 h-5" />;
    case 'vaisselle': return <Utensils className="w-5 h-5" />;
    case 'bougie': return <Flame className="w-5 h-5" />;
    case 'linge': return <Shirt className="w-5 h-5" />;
    case 'monde': return <Globe className="w-5 h-5" />;
    case 'star': return <Star className="w-5 h-5" />;
    default: return <ShoppingBag className="w-5 h-5" />;
  }
};
