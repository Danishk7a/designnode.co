'use client';
import Link from "next/link";

export default function COLORUI(){
    
    return (
            <div>
            <PalettesList />
            </div>
    )
}

function PalettesList() {
  const palettes = [
    {
      id: '1',
      name: 'Ocean Breeze',
      colors: ['#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e'],
      tags: ['blue', 'ocean', 'calm'],
      description: 'Inspired by ocean waves and coastal serenity'
    },
    {
      id: '2',
      name: 'Sunset Glow',
      colors: ['#f97316', '#ea580c', '#dc2626', '#b91c1c', '#991b1b'],
      tags: ['warm', 'sunset', 'energetic'],
      description: 'Warm tones reminiscent of a beautiful sunset'
    },
    {
      id: '3',
      name: 'Forest Harmony',
      colors: ['#16a34a', '#15803d', '#166534', '#14532d', '#052e16'],
      tags: ['green', 'nature', 'fresh'],
      description: 'Natural greens inspired by lush forests'
    },
    {
      id: '4',
      name: 'Lavender Dreams',
      colors: ['#a855f7', '#9333ea', '#7c3aed', '#6d28d9', '#5b21b6'],
      tags: ['purple', 'dreamy', 'elegant'],
      description: 'Soft purples for elegant and dreamy designs'
    },
    {
      id: '5',
      name: 'Coral Reef',
      colors: ['#fb7185', '#f43f5e', '#e11d48', '#be123c', '#9f1239'],
      tags: ['pink', 'vibrant', 'coral'],
      description: 'Vibrant coral and pink tones'
    },
    {
      id: '6',
      name: 'Golden Hour',
      colors: ['#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e'],
      tags: ['yellow', 'warm', 'golden'],
      description: 'Warm golden tones perfect for autumn themes'
    },
    {
      id: '7',
      name: 'Midnight Sky',
      colors: ['#1e293b', '#334155', '#475569', '#64748b', '#94a3b8'],
      tags: ['dark', 'sophisticated', 'neutral'],
      description: 'Sophisticated dark tones for modern designs'
    },
    {
      id: '8',
      name: 'Spring Meadow',
      colors: ['#84cc16', '#65a30d', '#4d7c0f', '#365314', '#1a2e05'],
      tags: ['green', 'spring', 'fresh'],
      description: 'Fresh spring greens full of life'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Color Palettes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {palettes.map((palette) => (
          <div
            key={palette.id}
            className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-xl"
          >
            <div className="flex">
              {palette.colors.map((color, idx) => (
                <div
                  key={idx}
                  style={{ backgroundColor: color }}
                  className="flex-1 h-24"
                />
              ))}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{palette.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{palette.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {palette.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
