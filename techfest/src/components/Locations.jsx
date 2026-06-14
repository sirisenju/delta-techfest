import { useState } from 'react';
import { CITIES } from '../data/conFretData';

function Locations() {
  const [activeCity, setActiveCity] = useState('Jakarta');

  const activeCityImg = CITIES.find(c => c.name === activeCity)?.img || '/images/image_5.jpg';

  return (
    <section id="locations" className="bg-inverse-surface text-pure-white py-section-padding-y relative overflow-hidden">
      <div className="px-4 md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-stack-gap-lg">
        <div className="md:col-span-12 mb-8">
          <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-[0.3em]">- EVENT IN MANY COUNTRIES</span>
        </div>
        <div className="md:col-span-7 relative">
          <div className="aspect-[16/9] overflow-hidden">
            <img 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src={activeCityImg} 
              alt={`${activeCity} Landscape Dusk`} 
            />
          </div>
          <div className="absolute top-4 left-4 bg-inverse-surface/85 px-4 py-2 border border-white/10 font-label-caps text-xs">
            ACTIVE CITY // {activeCity.toUpperCase()}
          </div>
        </div>
        <div className="md:col-span-5 flex flex-col justify-center">
          <ul className="space-y-6">
            {CITIES.map((city) => {
              const isActive = activeCity === city.name;
              return (
                <li 
                  key={city.name}
                  onClick={() => setActiveCity(city.name)}
                  className="group cursor-pointer flex items-center justify-between border-b border-white/10 pb-4 transition-all"
                >
                  <span className={`font-h1-section text-3xl md:text-5xl uppercase transition-all duration-300 ${
                    isActive 
                      ? 'text-primary-container translate-x-4' 
                      : 'text-white/40 group-hover:text-primary-container group-hover:translate-x-4'
                  }`}>
                    {city.name}
                  </span>
                  <span className={`material-symbols-outlined transition-all duration-300 ${
                    isActive 
                      ? 'text-primary-container opacity-100' 
                      : 'opacity-0 group-hover:opacity-100 group-hover:text-primary-container'
                  }`}>
                    {isActive ? 'arrow_forward' : 'north_east'}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Staggered Transition Block */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-1">
        <svg className="w-full h-auto" fill="none" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120H200V80H400V40H600V0H1440V120H0Z" fill="#faf9f9"></path>
        </svg>
      </div>
    </section>
  );
}

export default Locations;
