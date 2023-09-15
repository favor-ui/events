import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import logo from "./no_bg.svg";

export default function Navbar() {
  const [clickedLogo, setClickedLogo] = useState(false);
  const [navbarTransparent, setNavbarTransparent] = useState(false);

  function scrollToAbout() {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scrollToContact() {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setNavbarTransparent(false);
      } else {
        setNavbarTransparent(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("load", () => {
      scrollToAbout();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleLogoClick() {
    setClickedLogo(true);

    setTimeout(() => {
      setClickedLogo(false);
    }, 500);

    scrollToAbout();
  }

  return (
    <header
      id="navbar"
      className={`fixed top-0 w-full transition-all duration-300 ${
        navbarTransparent ? "bg-gray-800" : "bg-gray-800"
      } h-20`}
      style={{ zIndex: 1000 }}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          href="#"
          className={`title-font font-medium text-white mb-4 md:mb-0 relative z-20 cursor-pointer ${
            clickedLogo ? "opacity-70" : ""
          }`}
          onClick={handleLogoClick}
        >
          <img
            src={logo}
            alt="Logo"
            className={`ml-3 h-14 ${
              clickedLogo ? "border border-white rounded" : ""
            }`}
          />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          {/* <a href="#about" className="mr-5 hover:text-white">
            About
          </a> */}
          <a href="#services" className="mr-5 hover:text-white">
            Services
          </a>
        </nav>
        <div
          role="button"
          tabIndex={0}
          onClick={scrollToContact}
          className="cursor-pointer inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </div>
      </div>
    </header>
  );
}
