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
  return (
    <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-[32px] py-[40px]">
      <div className="logo flex">
        <img
          className="w-[25px] h-[25px]"
          src="images/full-window.png"
          alt="logo"
        />
        <span className="ml-[12px] uppercase text-xl tracking-widest">
          suck my dick
        </span>
      </div>
      <Icon className="lg:hidden" icon="dashicons:menu-alt3" />
      <div className="hidden lg:flex items-center">
        <button className="w-[111px] h-[40px] bg-salmon text-[13px] link flex items-center justify-center">
          Buy
        </button>
      </div>
    </nav>
  );
};

const Overlay = () => {
  return (
    <div className="overlay">
      <img
        className="w-[48px] lg:w-[108px]"
        src="images/logo-3x.png"
        alt="logo"
      />
      <span className="ml-[16px] text-[32px] uppercase lg:text-[72px] tracking-widest">
        suck my dick
      </span>
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
    <div className="mt-[48px] lg:grid lg:grid-cols-2 relative">
      <div className="image-container mx-auto lg:scale-125 relative mt-[80px]">
        <img
          className="w-[300px] h-[300px] object-contain"
          src="images/logo-3x.png"
          alt="logo"
        />
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
          <div className="flex gap-[14px] px-[32px] lg:px-0">
            <button>CA : </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;