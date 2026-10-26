import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Intro from './components/Intro.jsx';
import Collection from './components/Collection.jsx';
import Finder from './components/Finder.jsx';
import Showcase from './components/Showcase.jsx';
import HowToOrder from './components/HowToOrder.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useReveal } from './hooks/useReveal.js';

export default function App() {
  useReveal();

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Intro />
        <Collection />
        <Finder />
        <Showcase />
        <HowToOrder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
