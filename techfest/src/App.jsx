import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Locations from './components/Locations';
import Events from './components/Events';
import Speakers from './components/Speakers';
import Showcase from './components/Showcase';
import Sponsors from './components/Sponsors';
import Insights from './components/Insights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen">
      <Navbar />
      <Hero />
      <Locations />
      <Events />
      <Speakers />
      <Showcase />
      <Sponsors />
      <Insights />
      <Footer />
    </div>
  );
}

export default App;
