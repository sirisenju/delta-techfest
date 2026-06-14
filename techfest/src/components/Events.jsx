import { useRef } from 'react';
import { EVENTS } from '../data/conFretData';

function Events() {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 480; // Card width + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="events" className="py-section-padding-y relative overflow-hidden bg-background">
      <div className="absolute top-20 left-0 w-full pointer-events-none select-none overflow-hidden">
        <h2 className="font-display-watermark text-display-watermark text-watermark-gray whitespace-nowrap uppercase">
          Delta-TechFest Event Delta-TechFest
        </h2>
      </div>
      <div className="px-4 md:px-margin-desktop mb-12 flex justify-between items-end relative z-10">
        <div>
          <span className="font-label-caps text-label-caps text-primary uppercase mb-2 block">// UPCOMING SESSION</span>
          <h3 className="font-h1-section text-h1-section">Featured Events</h3>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => scrollCarousel('left')}
            className="w-12 h-12 rounded-full border-2 border-on-background flex items-center justify-center hover:bg-on-background hover:text-background transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button 
            onClick={() => scrollCarousel('right')}
            className="w-12 h-12 rounded-full border-2 border-on-background flex items-center justify-center hover:bg-on-background hover:text-background transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <div 
        ref={carouselRef}
        className="flex overflow-x-auto hide-scrollbar gap-gutter px-4 md:px-margin-desktop relative z-10 scroll-smooth"
      >
        {EVENTS.map((event, index) => (
          <div key={index} className="flex-none w-[320px] md:w-[450px] group cursor-pointer">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden rounded-none mb-6">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src={event.img} 
                alt={event.alt}
              />
              <div className="absolute top-0 left-0 p-6">
                <span className="bg-primary-container text-on-primary-fixed px-4 py-1 font-label-caps text-xs uppercase">
                  {event.category}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h4 className="font-h2-subheading text-2xl group-hover:text-primary transition-colors">
                  {event.title}
                </h4>
                <span className="material-symbols-outlined text-primary">north_east</span>
              </div>
              <p className="font-body-md text-secondary">{event.location}</p>
              <p className="font-button-text text-on-background font-bold uppercase mt-4">
                Speaker: {event.speaker}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
