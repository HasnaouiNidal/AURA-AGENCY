import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Chronos Heritage',
    collection: 'The Legacy Series',
    price: 12500,
    description: 'A masterpiece of precision and elegance, the Chronos Heritage features a hand-wound movement and a timeless dial design inspired by the golden age of horology.',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=1000',
    thumbnails: [
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1508685096489-7aac291ba597?auto=format&fit=crop&q=80&w=400'
    ],
    specs: [
      { label: 'Case Diameter', value: '40mm' },
      { label: 'Movement', value: 'Manual Wind Caliber A1' },
      { label: 'Power Reserve', value: '48 Hours' },
      { label: 'Water Resistance', value: '50m' },
      { label: 'Material', value: '18k Rose Gold' }
    ],
    colors: ['Rose Gold', 'Silver', 'Black'],
    straps: ['Alligator Leather', 'Oyster Steel', 'Rubber']
  },
  {
    id: '2',
    name: 'Oceanic Deep',
    collection: 'Explorer Edition',
    price: 8900,
    description: 'Engineered for the abyss, the Oceanic Deep combines rugged durability with sophisticated aesthetics. A true divers companion with unmatched legibility.',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=1000',
    thumbnails: [
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1526045431048-f857369aba09?auto=format&fit=crop&q=80&w=400'
    ],
    specs: [
      { label: 'Case Diameter', value: '42mm' },
      { label: 'Movement', value: 'Automatic Caliber O2' },
      { label: 'Power Reserve', value: '72 Hours' },
      { label: 'Water Resistance', value: '300m' },
      { label: 'Material', value: 'Grade 5 Titanium' }
    ],
    colors: ['Deep Blue', 'Stealth Black', 'Titanium'],
    straps: ['Rubber', 'Titanium Bracelet', 'NATO Strap']
  },
  {
    id: '3',
    name: 'Aether Minimalist',
    collection: 'Modernist Collection',
    price: 15200,
    description: 'Stripped of all non-essentials, the Aether Minimalist is a study in pure form. Featuring a ultra-thin profile and a sapphire crystal case back.',
    image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&q=80&w=1000',
    thumbnails: [
      'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1508685096489-7aac291ba597?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400'
    ],
    specs: [
      { label: 'Case Diameter', value: '38mm' },
      { label: 'Movement', value: 'Ultra-thin Manual' },
      { label: 'Power Reserve', value: '40 Hours' },
      { label: 'Water Resistance', value: '30m' },
      { label: 'Material', value: 'Platinum' }
    ],
    colors: ['Platinum', 'White Gold'],
    straps: ['Suede Leather', 'Milanese Mesh']
  },
  {
    id: '4',
    name: 'Vanguard Chrono',
    collection: 'Racing Spirit',
    price: 11000,
    description: 'Inspired by the high-octane world of vintage racing, the Vanguard Chrono features a tachymeter scale and high-contrast sub-dials.',
    image: 'https://images.unsplash.com/photo-1508685096489-7aac291ba597?auto=format&fit=crop&q=80&w=1000',
    thumbnails: [
      'https://images.unsplash.com/photo-1508685096489-7aac291ba597?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=400'
    ],
    specs: [
      { label: 'Case Diameter', value: '41mm' },
      { label: 'Movement', value: 'Chrono-Automatic C3' },
      { label: 'Power Reserve', value: '60 Hours' },
      { label: 'Water Resistance', value: '100m' },
      { label: 'Material', value: 'Stainless Steel' }
    ],
    colors: ['Panda', 'Reverse Panda', 'Blue'],
    straps: ['Perforated Leather', 'Steel Bracelet']
  },
  {
    id: '5',
    name: 'Lunar Phase',
    collection: 'Celestial Series',
    price: 18500,
    description: 'A poetic complication that tracks the journey of the moon across the night sky. Encased in precious metals with a meteorite dial.',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=1000',
    thumbnails: [
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1548171916-c0ea9869936e?auto=format&fit=crop&q=80&w=400'
    ],
    specs: [
      { label: 'Case Diameter', value: '39mm' },
      { label: 'Movement', value: 'Moonphase Automatic' },
      { label: 'Power Reserve', value: '45 Hours' },
      { label: 'Water Resistance', value: '30m' },
      { label: 'Material', value: 'Yellow Gold' }
    ],
    colors: ['Meteorite', 'Sunray Blue'],
    straps: ['Crocodile Leather', 'Gold Bracelet']
  },
  {
    id: '6',
    name: 'Stealth Aviator',
    collection: 'Military Spec',
    price: 7500,
    description: 'The ultimate tool for the modern pilot. Ceramic case, anti-magnetic movement, and a dial designed for instant readability in any condition.',
    image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&q=80&w=1000',
    thumbnails: [
      'https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1548171916-c0ea9869936e?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400'
    ],
    specs: [
      { label: 'Case Diameter', value: '44mm' },
      { label: 'Movement', value: 'High-Beat Automatic' },
      { label: 'Power Reserve', value: '50 Hours' },
      { label: 'Water Resistance', value: '60m' },
      { label: 'Material', value: 'Matte Black Ceramic' }
    ],
    colors: ['Matte Black', 'Olive Drab'],
    straps: ['Kevlar Strap', 'Rubber']
  }
];
