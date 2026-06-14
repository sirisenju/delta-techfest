function Hero() {
  return (
    <header className="relative h-screen w-full flex items-center overflow-hidden bg-inverse-surface">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover opacity-60 scale-105" 
          src="/images/image_1.jpg" 
          alt="Cinematic shot of massive creative conference main stage"
        />
      </div>
      <div className="relative z-10 w-full px-4 md:px-margin-desktop mt-12">
        <div className="max-w-5xl">
          <h1 className="font-hero-title-mobile md:font-hero-title text-hero-title-mobile md:text-hero-title text-pure-white mb-stack-gap-md uppercase">
            Discover Creative Sparks <span className="text-primary-container">Through Ideas</span> That Inspire Action
          </h1>
          <a className="inline-flex items-center bg-primary-container text-on-primary-fixed font-button-text text-button-text px-8 py-4 rounded-full hover:scale-105 transition-transform" href="#events">
            Get Started <span className="material-symbols-outlined ml-2 text-sm">north_east</span>
          </a>
        </div>
      </div>
      
      {/* Floating Info Card */}
      <div className="absolute bottom-12 right-4 md:right-margin-desktop z-20 bg-pure-white/10 backdrop-blur-lg border border-white/20 p-6 md:p-8 max-w-xs shadow-2xl rounded-2xl">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container">location_on</span>
            <p className="font-label-caps text-label-caps text-pure-white/60 uppercase">Jakarta, Indonesia</p>
          </div>
          <p className="font-h2-subheading text-xl leading-tight text-pure-white">Innovation Summit 2024</p>
          <div className="flex -space-x-3 overflow-hidden mt-2">
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white/30 object-cover" alt="Attendee Avatar 1" src="/images/image_2.jpg" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white/30 object-cover" alt="Attendee Avatar 2" src="/images/image_3.jpg" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white/30 object-cover" alt="Attendee Avatar 3" src="/images/image_4.jpg" />
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-container text-on-primary-fixed font-bold text-xs ring-2 ring-white/30">+2k</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
