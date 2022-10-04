import React, { Suspense } from "react";
import { Icon } from "@iconify/react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="layout">
        <div className="mt-[48px] lg:grid lg:grid-cols-2 r">
          <Suspense
            fallback={
              <div className="spinner">
                <Spinner />
              </div>
            }
          >
            <Spline
              className="mx-auto lg:scale-125"
              scene="https://prod.spline.design/Y6SvrdEe2tk-ipda/scene.splinecode"
            />
          </Suspense>
          <section>
            <div className="max-w-[540px] mx-auto      ">
              <h1>A Simple Bookmark Manager</h1>
              <p>
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
              <div className="flex gap-[14px] px-[32px] lg:px-0">
                <button>Get it on Chrome</button>
                <button className="text-grayDark bg-[#F7F7F7]">
                  Get it on Firefox
                </button>
              </div>
            </div>
          </section>
        </div>

        <section>
          <h2>Features</h2>
          <p className="text-center ">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
          <ul className="flex flex-wrap mx-auto lg:flex-nowrap lg:whitespace-nowrap lg:translate-x-[-25%]">
            <li>
              <a href="#">Simple Bookmarking</a>
            </li>
            <li>
              <a href="#">Speedy Searching</a>
            </li>
            <li>
              <a href="#">Easy Sharing</a>
            </li>
          </ul>
        </section>

        <div className="md:grid md:grid-cols-2">
          <div className="relative mb-[69px]">
            <img
              className="relative z-10 mx-[32px] xl:w-[536px] xl:h-[346px] xl:mx-0 xl:ml-auto"
              src="images/full-window.png"
              alt="Mockup"
            />
            <div className="absolute top-[25%] translate-x-[-50%] left-[0] right-[0] w-[577px] h-[203px] rounded-[316px] bg-blue xl:w-[1000px] xl:h-[352px] xl:translate-x-[-45%] 2xl:translate-x-[-35%]"></div>
          </div>
          <section className="my-auto">
            <h3 className="md:text-left">Bookmark in one click</h3>
            <p className="md:text-left md:px-0">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <div className="flex">
              <button className="mx-auto md:mx-0">More Info</button>
            </div>
          </section>
        </div>

        <section className="mt-[77px]">
          <h4 className="lg:mt-[150px]">Download the extension</h4>
          <p className="text-center">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </section>

        <div className="max-w-[911px] mx-auto mb-[140px] flex flex-col gap-[34px] lg:flex-row">
          <BrowserCard
            key={"Chrome"}
            imgSrc="images/chrome.png"
            browserName="Chrome"
            version="62"
          />
          <BrowserCard
            classes="mt-[40px]"
            key={"Firefox"}
            imgSrc="images/firefox.png"
            browserName="Firefox"
            version="55"
          />
          <BrowserCard
            classes="mt-[88px]"
            key={"Opera"}
            imgSrc="images/opera.png"
            browserName="Opera"
            version="46"
          />
        </div>

        <section>
          <h5>Frequently Asked Questions</h5>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
          <ul className="px-[24px]">
            <li className="flex justify-between border-t-0 px-0 py-[20px] text-[15px] text-left">
              What is a bookmark?{" "}
              <Icon className="chevron" icon="akar-icons:chevron-down" />
            </li>
            <li className="flex justify-between border-t-0 px-0 py-[20px] text-[15px] text-left">
              How can I request a new browser?
              <Icon className="chevron" icon="akar-icons:chevron-down" />
            </li>
            <li className="flex justify-between border-t-0 px-0 py-[20px] text-[15px] text-left">
              Is there a mobile app?{" "}
              <Icon className="chevron" icon="akar-icons:chevron-down" />
            </li>
            <li className="flex justify-between border-t-0 px-0 py-[20px] text-[15px] text-left">
              What about other Chromium browsers?
              <Icon className="chevron" icon="akar-icons:chevron-down" />
            </li>
          </ul>
          <div className="flex">
            <button className="mx-auto mt-[48px] mb-[123px]">More Info</button>
          </div>
        </section>
      </div>
      <div className="px-[32px] py-[60px] bg-blue">
        <form className="max-w-[442px] mx-auto flex flex-col justify-center">
          <span className="font-medium tracking-[4.61539px] text-[12px] text-white text-center leading-[40px]">
            35,000+ ALREADY JOINED
          </span>
          <h6 className="text-white leading-[28px] md:leading-[40px]">
            Stay up-to-date with what we're doing
          </h6>
          <div className="md:flex md:gap-[16px] md:mt-[36px]">
            <input
              className="w-full h-[48px] mt-[32px] md:mt-0"
              type="text"
              placeholder="Enter your email address"
            />
            <button
              className="w-full h-[48px] my-[16px] bg-[#FA5959] md:w-[170px] md:px-[24px] md:py-[10px] md:my-0 md:text-[14px]"
              type="submit"
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>

      <footer className="w-full py-[40px] bg-[#242a45] flex">
        <ul className="max-w-[1200px] w-full mx-auto md:flex md:flex-row justify-center items-center">
          <li className="flex justify-center items-center mb-[40px] md:mb-0">
            <img
              className="w-[25px] h-[25px]"
              src="images/icon-bookmark.png"
              alt="bookmark"
            />
            <span className="ml-[12px] uppercase text-xl text-white tracking-widest">
              bookmark
            </span>
          </li>
          <li>FEATURES</li>
          <li>PRICING</li>
          <li>CONTACT</li>
          <li className="flex justify-center gap-[40px] ml-auto">
            <Icon
              className="text-white"
              icon="dashicons:facebook"
              width="25px"
            />
            <Icon
              className="text-white"
              icon="akar-icons:twitter-fill"
              width="25px"
            />
          </li>
        </ul>
      </footer>
    </div>
  );
}

const Spinner = () => <div id="html-spinner"></div>;

const Navbar = () => {
  return (
    <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-[32px] py-[40px]">
      <div className="flex">
        <img
          className="w-[25px] h-[25px]"
          src="images/icon-bookmark.png"
          alt="bookmark"
        />
        <span className="ml-[12px] uppercase text-xl tracking-widest">
          bookmark
        </span>
      </div>
      <Icon className="lg:hidden" icon="dashicons:menu-alt3" />
      <div className="hidden lg:block">
        <a className="text-grayDark text-[13px]" href="#">
          FEATURES
        </a>
        <a className="text-grayDark text-[13px]" href="#">
          PRICING
        </a>
        <a className="text-grayDark text-[13px]" href="#">
          CONTACT
        </a>
        <button className="bg-salmon px-[34px] py-[12px] text-[13px]">
          Login
        </button>
      </div>
    </nav>
  );
};

const BrowserCard = ({ classes, imgSrc, browserName, version }) => {
  return (
    <div
      className={`${classes} w-[280px] h-[371px] flex flex-col mx-auto px-[24px] rounded-[15px] shadow-lg`}
    >
      <img className="mx-auto py-[50px]" src={imgSrc} alt="chrome" />
      <span className="text-center font-[20px] text-[#242A45] font-medium">
        Add to {browserName}
      </span>
      <span className="mb-[32px] text-center text-[12px] font-[#242A45] opacity-[.5]">
        Minimum version {version}
      </span>
      <span className="w-full border-t-4 border-dotted"></span>
      <button className="my-[24px]">Add & Install Extension</button>
    </div>
  );
};

export default App;
