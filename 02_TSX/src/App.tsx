// import React, { useEffect } from 'react';
// import './App.css';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// import LocomotiveScroll from 'locomotive-scroll';

// import CardOne from './03_project_lenis/cardOne';
// import CardTwo from './03_project_lenis/cardTwo';
// import CardThree from './03_project_lenis/cardThree';
// import CardFour from './03_project_lenis/cardFour';
// import CardFive from './03_project_lenis/cardFive';

// function App() {
//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: document.querySelector('[data-scroll-container]') as HTMLElement,
//       smooth: true,
//       getDirection: true,
//     });

//     return () => {
//       scroll.destroy();
//     };
//   }, []);

//   return (
//     <div className="bg-slate-900">
//       {/* Locomotive-scroll container */}
//       <div data-scroll-container>
//         <section data-scroll-section>
//           <CardOne data-scroll data-scroll-speed="2" />
//           <CardTwo data-scroll data-scroll-speed="-2" />
//           <CardThree data-scroll data-scroll-speed="3" />
//           <CardFour data-scroll data-scroll-speed="-3" />
//           <CardFive data-scroll data-scroll-speed="1" />
//         </section>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useRef, useEffect } from 'react';
// import { Lenis } from '@studio-freight/react-lenis';
// import './App.css';

// import CardOne from './03_project_lenis/cardOne';
// import CardTwo from './03_project_lenis/cardTwo';
// import CardThree from './03_project_lenis/cardThree';
// import CardFour from './03_project_lenis/cardFour';
// import CardFive from './03_project_lenis/cardFive';

// function App() {
//   const cardsRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       cardsRef.current.forEach((card, index) => {
//         console.log(`Processing card at index ${index}`);
//         const rect = card.getBoundingClientRect();
//         const centerY = window.innerHeight / 2;

//         // Calculate overlap effect
//         const offset = Math.max(0, centerY - rect.top) / centerY;
//         card.style.transform = `translateY(-${offset * 50}px) scale(${
//           1 + offset * 0.2
//         })`;
//         card.style.zIndex = `${10 + Math.round(offset * 10)}`;
//       });
//     };

//     // Listen to scroll events
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <Lenis root>
//       <div className="bg-slate-900">
//         {/* Scroll container */}
//         <div>
//           <section className="scroll-section">
//             <div
//               ref={(el) => (cardsRef.current[0] = el!)}
//               className="card"
//               data-scroll
//             >
//               <CardOne />
//             </div>
//             <div
//               ref={(el) => (cardsRef.current[1] = el!)}
//               className="card"
//               data-scroll
//             >
//               <CardTwo />
//             </div>
//             <div
//               ref={(el) => (cardsRef.current[2] = el!)}
//               className="card"
//               data-scroll
//             >
//               <CardThree />
//             </div>
//             <div
//               ref={(el) => (cardsRef.current[3] = el!)}
//               className="card"
//               data-scroll
//             >
//               <CardFour />
//             </div>
//             <div
//               ref={(el) => (cardsRef.current[4] = el!)}
//               className="card"
//               data-scroll
//             >
//               <CardFive />
//             </div>
//           </section>
//         </div>
//       </div>
//     </Lenis>
//   );
// }

// export default App;
