import React from "react";
import { menulists } from "../assets/data/data";
import CustomNavLink from "./customcomponents";

const Header = () => {
  return (
    <header className="header px-12 py-3 bg-[#f3f3f3] relative z-20">
      <nav className="p-4 flex justify-between items-center relative">
        <div className="flex items-center gap-14">
          <div>
            <img
              src="https://fakeimg.pl/100x100/5b868a/0a0101?text=logo&font=lobster"
              alt="logoImage"
              className="h-22"
            />
          </div>
          <div className="hidden lg:flex items-center justify-between gap-8">
            {menulists.map((list) => (
              <li key={list.id} className="uppercase list-none">
                <a href={list.path}>{list.link}</a>
              </li>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-8 icons">
          <CustomNavLink>Login</CustomNavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;