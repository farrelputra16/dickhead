import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[32px] py-[40px]">
      <div className="flex">
        <img
          className="pr-[12px]"
          src="images/icon-bookmark.png"
          alt="bookmark"
        />
        <span className="uppercase text-xl tracking-widest">bookmark</span>
      </div>
      <Icon icon="dashicons:menu-alt3" />
    </nav>
  );
};

export default Navbar;
