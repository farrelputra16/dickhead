import Navbar from "./components/Navbar";
import Spline from "@splinetool/react-spline";
import { Icon } from "@iconify/react";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Spline scene="https://prod.spline.design/Y6SvrdEe2tk-ipda/scene.splinecode" />
      <section className="mt-[48px]">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-[14px] px-[32px]">
          <button>Get it on Chrome</button>
          <button className="text-[#242a45c2] bg-[#F7F7F7]">
            Get it on Firefox
          </button>
        </div>
      </section>

      <section>
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <ul className="flex flex-wrap">
          <li>
            <a>Simple Bookmarking</a>
          </li>
          <li>
            <a>Speedy Searching</a>
          </li>
          <li>
            <a>Easy Sharing</a>
          </li>
        </ul>
      </section>
      <div className="relative mb-[69px]">
        <img
          className="relative z-10 mx-auto"
          src="images/full-window.png"
          alt="Mockup"
        />
        <div className="absolute translate-x-[-50%] top-[10%] left-0 w-[577px] h-[203px] rounded-[316px] bg-[#5267df] "></div>
      </div>
      <section>
        <h3>Bookmark in one click</h3>
        <p>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <div className="flex">
          <button className="mx-auto">More Info</button>
        </div>
      </section>
      <section>
        <h4>Download the extension</h4>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>

        <BrowserCard
          key={"Chrome"}
          imgSrc="images/chrome.png"
          browserName="Chrome"
          version="62"
        />
        <BrowserCard
          key={"Firefox"}
          imgSrc="images/firefox.png"
          browserName="Firefox"
          version="55"
        />
        <BrowserCard
          key={"Opera"}
          imgSrc="images/opera.png"
          browserName="Opera"
          version="46"
        />
      </section>

      <section>
        <h5>Frequently Asked Questions</h5>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
        <ul className="px-[24px]">
          <li className="flex justify-between border-t-0 px-0 py-[20px] text-[15px] text-left">
            What is a bookmark? <Icon icon="akar-icons:chevron-down" />
          </li>
          <li className="flex justify-between border-t-0 px-0 py-[20px] text-[15px] text-left">
            How can I request a new browser?
            <Icon icon="akar-icons:chevron-down" />
          </li>
          <li className="flex justify-between border-t-0 px-0 py-[20px] text-[15px] text-left">
            Is there a mobile app? <Icon icon="akar-icons:chevron-down" />
          </li>
          <li className="flex justify-between border-t-0 px-0 py-[20px] text-[15px] text-left">
            What about other Chromium browsers?
            <Icon icon="akar-icons:chevron-down" />
          </li>
        </ul>
        <div className="flex">
          <button className="mx-auto mt-[48px] mb-[123px]">More Info</button>
        </div>
      </section>

      <form className="flex flex-col justify-center bg-[#5267df] px-[32px] py-[60px]">
        <span className="font-medium tracking-[4.61539px] text-[12px] text-white text-center leading-[40px]">
          35,000+ ALREADY JOINED
        </span>
        <h6 className="text-white leading-[28px]">
          Stay up-to-date with what we’re doing
        </h6>
        <input
          className="mt-[16px]"
          type="text"
          placeholder="Enter your email address"
        />
        <button className="w-full my-[16px] bg-[#FA5959]" type="submit">
          Contact Us
        </button>
      </form>

      <footer className="w-full py-[40px] bg-[#242a45]">
        <div className="flex justify-center items-center mb-[40px]">
          <img
            className="w-[25px] h-[25px]"
            src="images/icon-bookmark.png"
            alt="bookmark"
          />
          <span className="ml-[12px] uppercase text-xl text-white tracking-widest">
            bookmark
          </span>
        </div>

        <ul>
          <li>FEATURES</li>
          <li>PRICING</li>
          <li>CONTACT</li>
        </ul>

        <div className="flex justify-center gap-[40px]">
          <Icon className="text-white" icon="dashicons:facebook" width="25px" />
          <Icon
            className="text-white"
            icon="akar-icons:twitter-fill"
            width="25px"
          />
        </div>
      </footer>
    </div>
  );
}

const BrowserCard = ({ imgSrc, browserName, version }) => {
  return (
    <div className="w-[280px] flex flex-col mx-auto mb-[40px] px-[24px] rounded-[15px] shadow-md">
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
