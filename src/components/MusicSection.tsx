import React from 'react';
import { Music, Play } from 'lucide-react';

export default function MusicSection() {
  return (
    <section id="music" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest Release</h2>
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Music className="w-20 h-20" />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">Think About You</h3>
              <p className="text-gray-300">Singer: Srujith (Acender)</p>
              <p className="text-gray-300">Producer: Prem Sagar Siddoju</p>
              <a
                href="https://social.tunecore.com/linkShare?linkid=Hrj6daz8dRvSWlujxglJJA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                <Play className="w-5 h-5" />
                Listen Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}