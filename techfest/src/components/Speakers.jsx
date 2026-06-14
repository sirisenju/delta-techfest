import { useState } from 'react';
import { SPEAKERS } from '../data/conFretData';

const FILTER_OPTIONS = [
  { label: 'ALL TOPIC', value: 'ALL' },
  { label: 'DESIGN STRATEGY', value: 'DESIGN STRATEGY' },
  { label: 'CREATIVE CODING', value: 'CREATIVE CODING' },
  { label: 'BRAND ARCHITECTURE', value: 'BRAND ARCHITECTURE' },
  { label: 'FUTURE FORECASTING', value: 'FUTURE FORECASTING' }
];

function Speakers() {
  const [activeSpeakerTopic, setActiveSpeakerTopic] = useState('ALL');
  const [hoveredSpeaker, setHoveredSpeaker] = useState(1); // Julian Thorne (index 1) default active

  // Filter speakers based on selected topic
  const filteredSpeakers = SPEAKERS.filter(s => 
    activeSpeakerTopic === 'ALL' || s.topic === activeSpeakerTopic
  );

  return (
    <section id="speakers" className="py-section-padding-y border-t-2 border-on-background bg-background">
      <div className="px-4 md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-gap-lg">
          <div className="md:col-span-3">
            <h3 className="font-h1-section text-3xl mb-12 uppercase tracking-tight">Speakers</h3>
            <nav className="flex flex-col gap-6">
              {FILTER_OPTIONS.map((opt) => {
                const isActive = activeSpeakerTopic === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setActiveSpeakerTopic(opt.value);
                      setHoveredSpeaker(0); // reset active card to first in list on filter change
                    }}
                    className={`text-left font-button-text flex items-center gap-2 transition-colors duration-200 cursor-pointer ${
                      isActive ? 'text-primary' : 'text-on-background/40 hover:text-on-background'
                    }`}
                  >
                    <span className={isActive ? 'text-on-background' : 'text-transparent'}>//</span> {opt.label}
                  </button>
                );
              })}
            </nav>
          </div>
          
          <div className="md:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filteredSpeakers.length > 0 ? (
              filteredSpeakers.map((speaker, index) => {
                const isHoveredOrActive = hoveredSpeaker === index;
                return (
                  <div 
                    key={speaker.name}
                    onMouseEnter={() => setHoveredSpeaker(index)}
                    className="relative aspect-square bg-surface-container overflow-hidden group cursor-pointer"
                  >
                    <img 
                      className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-110" 
                      src={speaker.img} 
                      alt={speaker.alt} 
                    />
                    <div 
                      className={`absolute inset-0 bg-on-background/90 transition-opacity duration-300 p-6 flex flex-col justify-end ${
                        isHoveredOrActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      <p className="text-primary-container font-label-caps text-xs mb-2">{speaker.topic}</p>
                      <h5 className="text-pure-white font-h2-subheading text-xl mb-4">{speaker.name}</h5>
                      <span className="material-symbols-outlined text-pure-white">arrow_forward</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-3 py-12 text-center text-secondary border border-dashed border-on-background/20 font-body-md">
                No speakers scheduled under this track yet. Check back soon!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Speakers;
