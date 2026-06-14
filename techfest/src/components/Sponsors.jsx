import { SPONSORS } from '../data/conFretData';

function Sponsors() {
  return (
    <section id="sponsors" className="py-section-padding-y bg-background border-t-2 border-on-background">
      <div className="px-4 md:px-margin-desktop">
        <div className="mb-12">
          <span className="font-label-caps text-label-caps text-primary uppercase block mb-2">- OUR SPONSORS</span>
          <h2 className="font-h1-section text-h1-section">Supported by Industry Leaders</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter">
          {SPONSORS.map((sponsor) => (
            <div 
              key={sponsor}
              className="flex items-center justify-center p-8 border border-on-background/10 hover:border-primary-container hover:bg-surface-container-low group transition-all duration-300 cursor-pointer aspect-square"
            >
              <span className="font-hero-title-mobile text-on-background/20 group-hover:text-on-background transition-colors">
                {sponsor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
