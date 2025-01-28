
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import CardOne from './Layout/cardOne';
import CardTwo from './Layout/cardTwo';
import CardThree from './Layout/cardThree';
import CardFour from './Layout/cardFour';
import CardFive from './Layout/cardFive';
import Header from './Layout/header';


function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      // smooth: true,
    });

    // Set reference
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);



  return (
    <div className="bg-[#FFFFF0] min-h-screen text-4xl relative">
      {/* Sticky Header */}
      <Header className="sticky top-0 bg-[#FFFFF0] shadow-md z-10 w-screen h-auto" />

      {/* Scrollable Content */}
      <div>
        <section className="relative">
          <div className="card-wrapper">
            <CardOne className="card " />
          </div>
          <div className="card-wrapper">
            <CardTwo className="card " />
          </div>
          <div className="card-wrapper">
            <CardThree className="card " />
          </div>
          <div className="card-wrapper">
            <CardFour className="card " />
          </div>
          <div className="card-wrapper">
            <CardFive className="card " />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
