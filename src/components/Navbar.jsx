import { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-scroll";

//import logo
import logo from "../assets/Logo.svg";

//import menuicon from react icons
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //toggle menubtn
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //function for making navbar stickey when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="w-full fixed top-0 left-0 right-0 ">
      <nav
        className={`py-4 md:px-12 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white " : ""
        } `}
      >
        {/* for large devices */}
        <div className="flex items-center justify-between">
          {/* for logo */}
          <div className="cursor-pointer">
            <img src={logo} alt="" className="h-10" />
          </div>
          {/* menu items  for large devices */}
          <div className="lg:flex items-center gap-3 hidden text-body text-lg ">
            <Link
              to="home"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400 
                        "
            >
              Home
            </Link>
            <Link
              to="skills"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block py-2 px-4 cursor-pointer hover:text-gray-400 
                        "
            >
              Skills
            </Link>
            <Link
              to="about"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block py-2 px-4 cursor-pointer hover:text-gray-400 
                        "
            >
              About Me
            </Link>
            <Link
              to="portfolio"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block py-2 px-4 cursor-pointer hover:text-gray-400 
                        "
            >
              Portfolio
            </Link>
            <Link
              to="testimonials"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block py-2 px-4 cursor-pointer hover:text-gray-400 
                        "
            >
              Testimonials
            </Link>
          </div>
          {/* contact me btn */}
          <div className="lg:block hidden">
            <button className="outlineBtn">Contact Me</button>
          </div>
          {/* menu btn for mobile devices */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-body text-3xl "
          >
            <HiMenu />
          </button>
        </div>
        {/* menu items for small devices  */}
        {isMenuOpen && (
          <div className="mt-4 p-4 bg-body rounded-lg text-white ">
            <Link
              to="home"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400 
                        "
            >
              Home
            </Link>
            <Link
              to="skills"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block py-2 px-4 cursor-pointer hover:text-gray-400 
                        "
            >
              Skills
            </Link>
            <Link
              to="about"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block py-2 px-4 cursor-pointer hover:text-gray-400 
                        "
            >
              About Me
            </Link>
            <Link
              to="portfolio"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block py-2 px-4 cursor-pointer hover:text-gray-400 
                        "
            >
              Portfolio
            </Link>
            <Link
              to="testimonials"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block py-2 px-4 cursor-pointer hover:text-gray-400 
                        "
            >
              Testimonials
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
