function Showcase() {
  return (
    <section id="gallery" className="bg-inverse-surface py-section-padding-y overflow-hidden relative">
      <div className="px-4 md:px-margin-desktop mb-16 relative z-20 text-center">
        <h2 className="font-h1-section text-h1-section text-pure-white max-w-4xl mx-auto uppercase mb-8">
          Creative Moments From Our Global Showcase
        </h2>
        <button className="bg-primary-container text-on-primary-fixed px-10 py-5 rounded-full font-button-text text-button-text flex items-center gap-2 mx-auto hover:scale-105 transition-transform cursor-pointer">
          View Gallery <span className="material-symbols-outlined">north_east</span>
        </button>
      </div>
      <div className="relative flex flex-col gap-8 w-full overflow-hidden">
        {/* Row 1: Left to Right Continuous */}
        <div className="flex whitespace-nowrap animate-scroll-right">
          <div className="flex gap-4 px-2">
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_12.jpg" alt="Showcase moment 1" />
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_13.jpg" alt="Showcase moment 2" />
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_14.jpg" alt="Showcase moment 3" />
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_15.jpg" alt="Showcase moment 4" />
          </div>
          {/* Duplicated for infinite effect */}
          <div className="flex gap-4 px-2" aria-hidden="true">
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_12.jpg" alt="Showcase moment 1" />
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_13.jpg" alt="Showcase moment 2" />
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_14.jpg" alt="Showcase moment 3" />
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_15.jpg" alt="Showcase moment 4" />
          </div>
        </div>
        
        {/* Row 2: Right to Left Continuous */}
        <div className="flex whitespace-nowrap animate-scroll-left">
          <div className="flex gap-4 px-2">
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_16.jpg" alt="Showcase moment 5" />
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_6.jpg" alt="Showcase moment 6" />
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_7.jpg" alt="Showcase moment 7" />
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_8.jpg" alt="Showcase moment 8" />
          </div>
          {/* Duplicated for infinite effect */}
          <div className="flex gap-4 px-2" aria-hidden="true">
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_16.jpg" alt="Showcase moment 5" />
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_6.jpg" alt="Showcase moment 6" />
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_7.jpg" alt="Showcase moment 7" />
            <img className="w-[300px] md:w-[450px] aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/image_8.jpg" alt="Showcase moment 8" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
