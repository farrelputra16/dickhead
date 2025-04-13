import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { gsap, Expo } from "gsap";

function App() {
  useEffect(() => {
    gsap.to(".overlay span", {
      duration: 2,
      opacity: 0,
      y: -60,
      ease: Expo.easeInOut,
    });
    gsap.to(".overlay img", {
      duration: 2,
      delay: 0.3,
      opacity: 0,
      y: -60,
      ease: Expo.easeInOut,
    });
    gsap.to(".overlay", {
      duration: 2,
      delay: 1,
      top: "-100%",
      ease: Expo.easeInOut,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Overlay />
        <div className="layout">
          <HeroSection />
        </div>
      </main>
    </div>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-4 py-6 md:px-8 md:py-10">
      <div className="logo flex items-center">
        <img
          className="w-6 h-6 md:w-8 md:h-8"
          src="images/full-window.png"
          alt="logo"
        />
        <span className="ml-3 uppercase text-lg tracking-widest md:text-xl">
          suck my dick
        </span>
      </div>
      <button
        className="lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Icon icon="dashicons:menu-alt3" className="w-8 h-8" />
      </button>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
      >
        <button className="w-full lg:w-[111px] h-10 bg-salmon text-sm md:text-[13px] flex items-center justify-center mt-2 lg:mt-0">
          Buy
        </button>
      </div>
    </nav>
  );
};

const Overlay = () => {
  return (
    <div className="overlay">
      <img src="images/logo-3x.png" alt="logo" />
      <span>suck my dick</span>
    </div>
  );
};

const BubbleChat = () => {
  useEffect(() => {
    gsap.to(".bubble-chat", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="bubble-chat">
      <span>I AM DICK!!</span>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="mt-8 md:mt-12 lg:grid lg:grid-cols-2 relative gap-6">
      <div className="image-container mx-auto">
        <img src="images/logo-3x.png" alt="logo" />
        <BubbleChat />
      </div>
      <section>
        <div className="max-w-[540px] mx-auto">
          <h1>Suck My Wallet</h1>
          <p>
            Suck My Wallet (SMW) is a bold, irreverent memecoin on the Solana
            blockchain, designed for those who embrace edgy humor and crypto
            culture. Its developer wallet starts with 'DICK,' adding a cheeky nod
            to its provocative name. Built for fun and community vibes, SMD aims
            to shake up the meme token space with its unapologetic attitude.
          </p>
          <div className="flex justify-center gap-3 px-4 md:px-0">
            <button>Get it on Pump</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;