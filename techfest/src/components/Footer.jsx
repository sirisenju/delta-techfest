function Footer() {
  return (
    <footer className="w-full px-4 md:px-margin-desktop py-section-padding-y flex flex-col gap-stack-gap-lg bg-background relative overflow-hidden border-t-2 border-on-background">
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-5 translate-y-1/2 select-none">
        <h2 className="font-display-watermark text-[300px] leading-none uppercase font-black">
          DELTA-TECHFEST
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-gap-lg relative z-10">
        <div className="md:col-span-5">
          <h2 className="font-h1-section text-4xl mb-8 uppercase max-w-sm">
            Join the creative revolution today.
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-4">
            <input 
              className="flex-grow bg-transparent border-b-2 border-on-background py-3 focus:outline-none focus:border-primary-container transition-colors" 
              placeholder="Email Address" 
              type="email"
              required
            />
            <button 
              type="submit"
              className="bg-on-background text-background hover:bg-primary hover:text-white px-6 py-2 rounded-full font-button-text transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
        
        <div className="md:col-span-3 md:col-start-8 flex flex-col gap-4 font-body-md text-secondary">
          <h4 className="font-bold text-on-background uppercase text-sm">// EXPLORE</h4>
          <a href="#locations" className="hover:text-primary transition-colors">Global Cities</a>
          <a href="#events" className="hover:text-primary transition-colors">Session Schedule</a>
          <a href="#speakers" className="hover:text-primary transition-colors">Speaker Panels</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Creative Gallery</a>
        </div>
        
        <div className="md:col-span-2 flex flex-col gap-4 font-body-md text-secondary">
          <h4 className="font-bold text-on-background uppercase text-sm">// CONTACT</h4>
          <span className="text-xs">hello@delta-techfest.com</span>
          <span className="text-xs">+62 21-5099-8080</span>
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-primary transition-colors">X</a>
            <a href="#" className="hover:text-primary transition-colors">IG</a>
            <a href="#" className="hover:text-primary transition-colors">YT</a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-on-background/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-secondary relative z-10">
        <p>© 2026 Delta-TechFest. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
