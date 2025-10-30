import React from 'react';
import { Rocket, Star, Heart } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast Setup',
    description:
      'Start building in seconds with an optimized developer experience and zero boilerplate noise.',
  },
  {
    icon: Star,
    title: 'Beautiful by Default',
    description:
      'Polished typography, subtle gradients, and thoughtful spacing make everything feel premium.',
  },
  {
    icon: Heart,
    title: 'Delightful to Use',
    description:
      'Clean components with sensible defaults that are easy to extend and customize.',
  },
];

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Why you’ll love it</h2>
        <p className="mt-3 text-gray-600">A tiny set of building blocks to move from idea to interface—fast.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="mt-3 text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
