import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";

// Note: Add these custom colors to your Tailwind config if needed
// tailwind.config.js:
// theme: {
//   extend: {
//     colors: {
//       beige: {
//         100: "#F5F5DC",
//       },
//       coral: {
//         100: "#FF6F61",
//         600: "#E63946",
//       },
//     },
//   },
// }

function App() {
  useEffect(() => {
    gsap.to(".overlay span", {
      duration: 2,
      opacity: 0,
      y: -60,
      ease: "expo.out",
    });

    gsap.to(".overlay img", {
      duration: 2,
      delay: 0.3,
      opacity: 0,
      y: -60,
      ease: "expo.out",
    });

    gsap.to(".overlay", {
      duration: 2,
      delay: 1,
      top: "-100%",
      ease: "expo.out",
    });

    // Create multiple floating images across the page
    const floatingImages = [];
    for (let i = 0; i < 10; i++) {
      const img = document.createElement("img");
      img.src = "images/full-window.png";
      img.className = "floating-img absolute w-12 h-12 opacity-70";
      img.style.left = `${Math.random() * 90}vw`;
      img.style.top = `${Math.random() * 90}vh`;
      document.body.appendChild(img);
      floatingImages.push(img);

      gsap.to(img, {
        y: "+=30",
        rotation: Math.random() * 360,
        repeat: -1,
        yoyo: true,
        duration: 3 + Math.random() * 2,
        ease: "sine.inOut",
        delay: Math.random() * 2,
      });
    }

    return () => {
      floatingImages.forEach((img) => img.remove());
    };
  }, []);

  return (
    <div className="App bg-white">
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
    <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-4 py-6 md:px-8 md:py-10 bg-white text-black">
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
        <Icon icon="dashicons:menu-alt3" className="w-8 h-8 text-black" />
      </button>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-white shadow-lg lg:shadow-none p-4 lg:p-0`}
      >
        <button
          onClick={handlePlay}
          className="w-full lg:w-[111px] h-10 bg-gray-200 text-sm md:text-[20px] flex items-center justify-center mt-2 lg:mt-0 text-black"
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
    <div className="overlay fixed inset-0 bg-white z-50 flex flex-col justify-center items-center">
      <img src="images/full-window.png" alt="logo" />
      <span className="text-xl mt-4 font-bold text-black">TUNG TUNG SAHUR</span>
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
      <span className="text-black font-semibold">I AM TUNG TUNG SAHUR!!</span>
    </div>
  );
};

const HeroSection = () => {
  useEffect(() => {
    gsap.to(".hero-tungtung", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="mt-8 md:mt-12 lg:grid lg:grid-cols-2 relative gap-6 px-4 md:px-8 bg-white">
      <div className="image-container mx-auto">
        <img src="images/logo-3x.png" alt="logo" className="max-w-xs" />
        <BubbleChat />
      </div>
      <section>
        <div className="max-w-[540px] mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-black">TUNG TUNG SAHUR</h1>
          <p className="mb-4 text-black">
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
            <button className="bg-gray-200 text-black px-4 py-2 rounded">
              CA : Coming Soon
            </button>
            <a
              href="https://pump.fun/tungtungsahur"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300"
            >
              Buy
            </a>
          </div>
        </div>
        <img src="images/full-window.png" alt="Tungtung" className="hero-tungtung max-w-xs mt-6" />
      </section>
    </div>
  );
};

const TikTokSection = () => {
  useEffect(() => {
    gsap.to(".tiktok-tungtung", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="mt-12 md:mt-16 py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
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
          <img src="images/full-window.png" alt="Tungtung" className="tiktok-tungtung max-w-xs mt-6" />
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
    <section className="mt-12 md:mt-16 py-10 bg-white text-center">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <img
          src="images/full-window.png"
          alt="Full Window"
          className="floating-image mx-auto max-w-xs md:max-w-3xl"
        />
        <button
          onClick={handleTalk}
          className="mt-6 w-full lg:w-[111px] h-10 bg-gray-200 text-sm md:text-[13px] flex items-center justify-center mx-auto text-black"
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
    <footer className="mt-20 py-10 bg-white text-center">
      <h2 className="text-xl font-semibold mb-4 text-black">Join Our Community</h2>
      <div className="flex justify-center gap-6">
        <a
          href="https://tiktok.com/@tungtungsahur"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-600"
        >
          <Icon icon="ic:baseline-tiktok" className="w-8 h-8" />
        </a>
        <a
          href="https://t.me/Sahuronsolana"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-600"
        >
          <Icon icon="mdi:telegram" className="w-8 h-8" />
        </a>
        <a
          href="https://x.com/tungtungsahur"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-600"
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