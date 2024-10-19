import Navigation from '@/app/components/Navigation';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <section>About Section</section>
      <Gallery />
      <Contact />
    </>
  );
}
