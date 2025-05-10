import React, { useEffect, useRef, useState } from "react";
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
          <AudioSection />
          <TikTokSection />
          <SocialSection />
        </div>
      </main>
    </div>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-4 py-6 md:px-8 md:py-10">
      <div className="logo flex items-center">
        <img
          className="w-6 h-6 md:w-8 md:h-8"
          src="images/full-window.png"
          alt="logo"
        />
        <span className="ml-3 uppercase text-lg tracking-widest md:text-xl">
          tung tung sahur
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
        } lg:flex flex-col lg:flex-row items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-dark lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
      >
        <button
          onClick={handlePlay}
          className="w-full lg:w-[111px] h-10 bg-salmon text-sm md:text-[13px] flex items-center justify-center mt-2 lg:mt-0"
        >
          Play Sound
        </button>
        <audio ref={audioRef} src="/tung-tung-sahur.mp3" preload="auto" />
      </div>
    </nav>
  );
};

const Overlay = () => {
  return (
    <div className="overlay fixed inset-0 bg-dark z-50 flex flex-col justify-center items-center">
      <img src="images/full-window.png" alt="logo" />
      <span className="text-xl mt-4 font-bold">TUNG TUNG SAHUR</span>
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
    <div className="bubble-chat mt-4">
      <span className="text-salmon font-semibold">I AM TUNG TUNG SAHUR!!</span>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="mt-8 md:mt-12 lg:grid lg:grid-cols-2 relative gap-6 px-4 md:px-8">
      <div className="image-container mx-auto">
        <img src="images/logo-3x.png" alt="logo" className="max-w-xs" />
        <BubbleChat />
      </div>
      <section>
        <div className="max-w-[540px] mx-auto">
          <h1 className="text-3xl font-bold mb-4">TUNG TUNG SAHUR OFFICIAL</h1>
          <p className="mb-4">
            Tung Tung Sahur is a Solana-based meme token inspired by the haunting
            urban legend of Anomali Tung Tung Tung Sahur With 100K Followers on
            Tiktok — a mysterious entity that combines the tradition of waking
            people for sahur with elements of suspense, folklore, and supernatural
            warning. According to legend, if one ignores the call of "Tung Tung
            Tung Sahur" three times, the anomaly appears — blending cultural myth
            with a chilling twist. TTS captures this eerie yet iconic tale in
            crypto form, building a unique community powered by storytelling,
            humor, and horror.
          </p>
          <div className="flex justify-center gap-3">
            <button className="bg-black text-white px-4 py-2 rounded">
              CA : Coming Soon
            </button>
            <a
              href="https://pump.fun/tungtungsahur"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-salmon text-white px-4 py-2 rounded hover:bg-red-500"
            >
              Buy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const TikTokSection = () => {
  return (
    <section className="mt-12 md:mt-16 py-10 bg-dark">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              100K Followers on TikTok
            </h2>
            <img
              src="images/tiktokpage.jpg"
              alt="TikTok page"
              className="mx-auto max-w-xs md:max-w-sm"
            />
          </div>
          <div className="tiktok-embed-container w-full">
            <iframe
              src="https://www.tiktok.com/embed/v2/7490657987959311638"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ width: "100%", height: "800px", border: "none" }}
              title="TikTok Video 1"
            ></iframe>
          </div>
          <div className="tiktok-embed-container w-full">
            <iframe
              src="https://www.tiktok.com/embed/v2/7491067726903954710"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ width: "100%", height: "800px", border: "none" }}
              title="TikTok Video 2"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const AudioSection = () => {
  const audioRef = useRef(null);

  const handleTalk = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    gsap.to(".floating-image", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="mt-12 md:mt-16 py-10 bg-dark text-center">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <img
          src="images/full-window.png"
          alt="Full Window"
          className="floating-image mx-auto max-w-xs md:max-w-3xl"
        />
        <button
          onClick={handleTalk}
          className="mt-6 w-full lg:w-[111px] h-10 bg-salmon text-sm md:text-[13px] flex items-center justify-center mx-auto"
        >
          Talk
        </button>
        <audio ref={audioRef} src="/tung-tung-sahur.mp3" preload="auto" />
      </div>
    </section>
  );
};

const SocialSection = () => {
  return (
    <footer className="mt-20 py-10 bg-dark text-center">
      <h2 className="text-xl font-semibold mb-4">Join Our Community</h2>
      <div className="flex justify-center gap-6">
        <a
          href="https://www.tiktok.com/@real.tungsahur?_t=ZN-8wEkcXVf6Oc&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-salmon"
        >
          <Icon icon="ic:baseline-tiktok" className="w-8 h-8" />
        </a>
        <a
          href="https://t.me/Sahuronsolana"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-salmon"
        >
          <Icon icon="mdi:telegram" className="w-8 h-8" />
        </a>
        <a
          href="https://x.com/tungtungsahur"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-salmon"
        >
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zM16.69 20.714h2.042L7.306 3.36H5.148l11.542 17.354z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default App;