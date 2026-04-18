'use client';
import Link from 'next/link';
import { BookOpen, Brain, Settings } from 'lucide-react';
import type { CSSProperties } from 'react';

const petals = [
  { left: '4%', delay: '0s', duration: '14s', drift: '7.2s', size: '16px', opacity: 0.7 },
  { left: '12%', delay: '-6s', duration: '16s', drift: '8.4s', size: '12px', opacity: 0.55 },
  { left: '21%', delay: '-2s', duration: '13s', drift: '6.8s', size: '18px', opacity: 0.68 },
  { left: '29%', delay: '-11s', duration: '17s', drift: '8.8s', size: '14px', opacity: 0.6 },
  { left: '38%', delay: '-4s', duration: '15s', drift: '7.1s', size: '15px', opacity: 0.5 },
  { left: '48%', delay: '-9s', duration: '18s', drift: '9.2s', size: '19px', opacity: 0.72 },
  { left: '57%', delay: '-1s', duration: '12s', drift: '6.4s', size: '13px', opacity: 0.58 },
  { left: '66%', delay: '-7s', duration: '16s', drift: '7.9s', size: '17px', opacity: 0.62 },
  { left: '74%', delay: '-3s', duration: '14s', drift: '7.5s', size: '12px', opacity: 0.48 },
  { left: '82%', delay: '-10s', duration: '19s', drift: '9.6s', size: '18px', opacity: 0.66 },
  { left: '90%', delay: '-5s', duration: '15s', drift: '7s', size: '14px', opacity: 0.57 },
  { left: '96%', delay: '-13s', duration: '17s', drift: '8.2s', size: '16px', opacity: 0.64 },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#fff8fb_0%,_#fff1f5_42%,_#ffe4ea_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.2)_30%,rgba(255,255,255,0.65))]" />
        {petals.map((petal, index) => (
          <span
            key={`${petal.left}-${index}`}
            className="sakura-petal"
            style={
              {
                left: petal.left,
                animationDelay: petal.delay,
                animationDuration: petal.duration,
                '--petal-drift-duration': petal.drift,
                '--petal-size': petal.size,
                '--petal-opacity': petal.opacity,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Typing Dojo</h1>
        </div>

        <div className="w-full max-w-md space-y-4">
          <Link href="/practice" className="flex items-center rounded-xl border border-white/80 bg-white/85 p-4 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div className="mr-4 rounded-lg bg-blue-100 p-3">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Practice Mode</h2>
              <p className="text-sm text-gray-500">Type Japanese while seeing Japanese and romaji</p>
            </div>
          </Link>

          <Link href="/memorize" className="flex items-center rounded-xl border border-white/80 bg-white/85 p-4 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div className="mr-4 rounded-lg bg-purple-100 p-3">
              <Brain className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Memorization Mode</h2>
              <p className="text-sm text-gray-500">Type from Thai and English hints with step-by-step reveals</p>
            </div>
          </Link>

          <Link href="/manage" className="flex items-center rounded-xl border border-white/80 bg-white/85 p-4 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div className="mr-4 rounded-lg bg-gray-100 p-3">
              <Settings className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Phrase Manager</h2>
              <p className="text-sm text-gray-500">Edit the Japanese, romaji, Thai, and English dataset</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
