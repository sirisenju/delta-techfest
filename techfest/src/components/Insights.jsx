import { ARTICLES } from '../data/conFretData';

function Insights() {
  return (
    <section id="insights" className="py-section-padding-y bg-background">
      <div className="px-4 md:px-margin-desktop">
        <div className="flex items-end gap-4 mb-16">
          <h2 className="font-h1-section text-h1-section uppercase">
            New <span className="text-on-background/20">Insight</span>
          </h2>
          <div className="flex-grow border-b-4 border-on-background mb-4"></div>
          <a className="font-button-text text-button-text flex items-center gap-2 mb-4 hover:text-primary transition-colors" href="#">
            View All <span className="material-symbols-outlined">east</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-gap-lg">
          {ARTICLES.map((article, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <img 
                  className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                  src={article.img} 
                  alt={article.title}
                />
              </div>
              <div className="space-y-4">
                <p className="font-label-caps text-xs text-secondary uppercase">{article.category}</p>
                <h3 className="font-h2-subheading text-2xl group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-on-background/60 line-clamp-3">
                  {article.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Insights;
