import { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll handler for navigation bar transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Navigation */}
      <nav 
        id="top-nav"
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-margin-desktop py-6 transition-all duration-300 ${
          isScrolled 
            ? 'bg-inverse-surface/90 backdrop-blur-md border-b border-white/10 shadow-lg py-4' 
            : 'bg-transparent'
        }`}
      >
        <a className="font-h1-section text-h1-section tracking-tighter text-pure-white leading-none hover:text-primary-container transition-colors" href="#">
          Delta-TechFest
        </a>
        <div className="flex items-center gap-stack-gap-md">
          <a className="hidden md:block font-button-text text-button-text text-pure-white hover:text-primary-container transition-all" href="#">
            My Events (4)
          </a>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="font-button-text text-button-text text-pure-white hover:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span className="text-xl">=</span> Menu
          </button>
        </div>
      </nav>

      {/* Slide-out Fullscreen Navigation Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-inverse-surface/95 backdrop-blur-md flex flex-col justify-center items-center text-pure-white transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 right-8 text-2xl font-bold hover:text-primary-container transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-4xl">close</span>
        </button>
        <nav className="flex flex-col gap-8 text-center">
          <a href="#" onClick={() => setIsMenuOpen(false)} className="font-h1-section text-3xl md:text-5xl hover:text-primary-container transition-colors">Home</a>
          <a href="#locations" onClick={() => setIsMenuOpen(false)} className="font-h1-section text-3xl md:text-5xl hover:text-primary-container transition-colors">Locations</a>
          <a href="#events" onClick={() => setIsMenuOpen(false)} className="font-h1-section text-3xl md:text-5xl hover:text-primary-container transition-colors">Featured Events</a>
          <a href="#speakers" onClick={() => setIsMenuOpen(false)} className="font-h1-section text-3xl md:text-5xl hover:text-primary-container transition-colors">Speakers</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="font-h1-section text-3xl md:text-5xl hover:text-primary-container transition-colors">Showcase</a>
          <a href="#sponsors" onClick={() => setIsMenuOpen(false)} className="font-h1-section text-3xl md:text-5xl hover:text-primary-container transition-colors">Sponsors</a>
          <a href="#insights" onClick={() => setIsMenuOpen(false)} className="font-h1-section text-3xl md:text-5xl hover:text-primary-container transition-colors">Insights</a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
