import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const navigation = [
  { name: "Home", to: "/" },
  { name: "Product", to: "/products" },
  { name: "About us", to: "/about" },
  { name: "Raise Query", to: "/query" },
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="h-20 w-full flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex flex-row items-center gap-4">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="300.000000pt"
            height="251.000000pt"
            viewBox="0 0 300.000000 251.000000"
            preserveAspectRatio="xMidYMid meet"
            className="h-12 w-12"
          >
            {" "}
            <g
              transform="translate(0.000000,251.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              {" "}
              <path d="M1367 2150 c-54 -55 -103 -100 -108 -100 -5 0 -9 -3 -9 -7 -1 -13 -107 -123 -119 -123 -6 0 -11 -6 -11 -14 0 -15 -27 -30 -50 -27 -13 2 -13 0 -1 -8 12 -8 12 -12 2 -25 -7 -9 -16 -14 -20 -12 -3 2 -19 -14 -36 -35 -16 -21 -35 -36 -41 -34 -6 2 -11 -4 -10 -13 0 -10 -6 -16 -16 -16 -10 1 -14 -4 -11 -12 3 -8 -1 -14 -8 -14 -8 -1 -25 -15 -39 -32 -55 -67 -256 -262 -269 -259 -7 1 -10 -2 -7 -7 9 -16 -83 -102 -102 -95 -11 5 -14 2 -9 -10 5 -13 -26 -49 -115 -137 -67 -66 -126 -120 -130 -120 -4 0 -8 -5 -8 -11 0 -6 -34 -43 -75 -84 -57 -55 -75 -79 -75 -100 0 -23 59 -86 337 -364 186 -186 346 -340 355 -344 10 -3 20 -2 23 4 4 5 11 7 16 4 5 -4 9 1 9 9 0 9 5 16 10 16 32 0 -5 49 -125 166 -74 73 -135 136 -135 141 0 5 -14 17 -31 27 -19 11 -28 23 -25 32 3 9 1 12 -5 9 -10 -7 -98 81 -99 98 0 5 -4 6 -9 3 -9 -6 -91 86 -91 103 0 6 -8 7 -17 4 -13 -5 -15 -2 -10 11 4 10 3 15 -3 11 -6 -4 -25 10 -44 30 l-34 35 21 26 c19 24 419 426 533 536 27 25 66 65 87 87 21 24 43 39 49 35 7 -5 8 -3 4 5 -10 15 191 214 207 204 6 -3 7 -1 3 5 -7 12 345 372 364 372 13 0 870 -858 870 -871 0 -5 5 -9 10 -9 6 0 97 -86 202 -191 l192 -192 -26 -22 c-14 -12 -31 -32 -37 -44 -7 -11 -19 -21 -27 -21 -8 0 -13 -3 -11 -7 7 -12 -88 -100 -103 -95 -7 3 -10 0 -6 -7 4 -6 -9 -24 -28 -42 -20 -17 -33 -36 -29 -42 3 -6 1 -7 -6 -3 -10 7 -39 -13 -44 -31 -4 -17 -87 -88 -98 -84 -6 2 -9 -1 -6 -6 6 -9 -75 -103 -89 -103 -9 0 -34 -28 -34 -39 0 -6 -5 -11 -11 -11 -13 0 -52 -39 -56 -55 -2 -6 -7 -10 -12 -10 -5 0 -13 -4 -18 -9 -5 -5 -3 -6 5 -2 15 9 15 5 1 -31 -5 -15 -7 -25 -4 -21 4 4 16 -2 28 -13 25 -23 43 -24 55 -2 6 10 16 14 26 10 10 -4 15 -3 11 3 -7 11 56 80 74 80 6 0 11 5 11 11 0 6 37 48 83 94 45 45 115 117 155 158 40 41 86 86 102 99 16 12 30 29 30 36 0 6 3 12 8 12 4 0 29 20 55 45 27 25 53 45 58 45 5 0 9 6 9 13 0 7 16 27 35 46 19 18 35 38 35 44 0 12 -33 46 -373 385 -130 130 -235 242 -233 249 3 7 0 10 -7 7 -10 -3 -96 74 -143 128 -6 7 -24 25 -40 39 -16 14 -41 39 -56 55 -15 16 -33 34 -40 40 -7 6 -36 36 -65 67 -29 31 -57 57 -62 57 -6 0 -11 4 -11 8 0 5 -21 29 -46 53 -135 129 -264 265 -260 275 3 6 -3 11 -12 10 -9 0 -16 4 -15 9 1 6 -15 11 -35 12 -35 2 -43 -4 -135 -97z m1165 -1637 c-273 -273 -348 -343 -363 -338 -10 4 -19 11 -19 17 0 6 146 157 325 336 179 179 324 326 323 328 -20 24 -1304 1304 -1308 1304 -3 0 -300 -295 -660 -655 -459 -460 -651 -658 -642 -664 7 -4 157 -151 332 -326 256 -255 317 -321 308 -332 -6 -8 -17 -13 -25 -11 -9 2 -693 676 -693 683 0 0 311 311 691 691 l691 690 691 -689 692 -690 -343 -344z" />{" "}
              <path d="M1645 2130 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6 0 -7 -4 -4 -10z" />{" "}
              <path d="M1750 2030 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z" />{" "}
              <path d="M1350 1969 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z" />{" "}
              <path d="M1245 1870 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0 -8 -4 -11 -10z" />{" "}
              <path d="M1140 1759 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z" />{" "}
              <path d="M2070 1723 c0 -6 8 -17 18 -24 16 -13 16 -13 2 6 -8 11 -16 22 -17 24 -2 2 -3 0 -3 -6z" />{" "}
              <path d="M1397 1662 c-16 -8 -27 -15 -25 -15 2 -1 55 0 118 3 125 6 130 17 10 22 -49 2 -85 -2 -103 -10z" />{" "}
              <path d="M1578 1621 c-15 -8 -29 -25 -32 -36 -3 -11 -6 -193 -6 -405 0 -333 2 -389 16 -408 15 -22 44 -30 44 -13 0 5 -7 14 -15 21 -14 11 -15 63 -15 396 2 361 3 384 21 419 11 21 19 38 17 39 -2 2 -15 -4 -30 -13z" />{" "}
              <path d="M1380 1621 c0 -5 9 -16 19 -25 19 -17 20 -36 21 -407 1 -392 -2 -429 -35 -429 -20 0 -19 -25 1 -44 15 -16 30 -21 49 -16 6 1 42 2 82 1 39 -1 74 3 78 9 6 10 -10 12 -137 14 -62 1 -93 16 -51 25 41 8 42 19 43 431 0 332 -2 399 -15 417 -14 20 -55 38 -55 24z" />{" "}
              <path d="M2490 1314 c0 -13 18 -39 24 -34 2 3 -2 14 -10 24 -8 11 -14 16 -14 10z" />{" "}
              <path d="M2670 890 c-9 -6 -10 -10 -3 -10 6 0 15 5 18 10 8 12 4 12 -15 0z" />{" "}
              <path d="M245 630 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7 -4 -4 -10z" />{" "}
              <path d="M1465 567 c-16 -5 -33 -14 -36 -20 -9 -12 -26 -14 -189 -17 -100 -1 -127 -4 -105 -11 47 -14 284 -5 326 13 30 13 39 13 60 2 29 -15 139 -27 139 -15 0 5 -22 11 -48 14 -27 3 -64 14 -83 25 -28 16 -40 18 -64 9z" />{" "}
              <path d="M851 525 c8 -8 78 -8 87 0 2 2 -19 5 -47 6 -32 3 -47 1 -40 -6z" />{" "}
              <path d="M1905 530 c-121 -3 -215 -9 -208 -13 14 -9 386 -7 423 3 49 13 1 15 -215 10z" />{" "}
              <path d="M961 526 c7 -8 129 -10 136 -3 3 4 -27 7 -67 7 -40 0 -71 -2 -69 -4z" />{" "}
              <path d="M850 479 c-27 -5 -19 -7 32 -8 37 0 69 3 72 7 5 9 -54 10 -104 1z" />{" "}
              <path d="M1050 479 c-20 -6 -17 -7 18 -8 23 -1 42 1 42 3 0 9 -37 12 -60 5z" />{" "}
              <path d="M1210 479 c-57 -5 -51 -6 44 -7 60 -1 106 1 102 5 -8 9 -63 10 -146 2z" />{" "}
              <path d="M1374 481 c3 -5 21 -12 40 -15 19 -4 39 -13 46 -21 17 -20 39 -19 75 5 20 13 48 20 85 21 40 0 50 3 35 9 -40 17 -111 11 -140 -11 -16 -13 -30 -18 -33 -12 -12 18 -50 33 -82 33 -17 0 -29 -4 -26 -9z" />{" "}
              <path d="M1845 480 l-160 -6 163 -2 c103 -1 162 2 162 8 0 6 -1 9 -2 8 -2 -1 -75 -5 -163 -8z" />{" "}
              <path d="M2110 479 c0 -5 9 -9 20 -9 11 0 20 2 20 4 0 2 -9 6 -20 9 -11 3 -20 1 -20 -4z" />{" "}
              <path d="M660 210 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z" />{" "}
            </g>{" "}
          </svg>
          <h1 className="text-xl font-light tracking-widest">IZRA GLOBAL</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row items-center gap-6">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-2 ${
                  isActive ? "text-[#2F6B3C]" : "text-slate-600"
                } font-bold hover:text-[#2F6B3C] duration-300 transition-all`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Contact and Mobile Menu Toggle */}
        <div className="hidden md:flex flex-row items-center gap-6">
          <button className="px-8 py-3 bg-white border text-black rounded-full border-[#F4B400] hover:bg-[#F4B400] hover:text-white duration-300 transition-all">
            contact@izraglobal.com
          </button>
          <button className="px-8 py-3 bg-white border text-black rounded-full border-[#F4B400] hover:bg-[#F4B400] hover:text-white duration-300 transition-all">
            9971207059
          </button>
        </div>

        {/* Hamburger Icon (Visible on mobile screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? "X" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default, shown when the hamburger menu is toggled) */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#fff] p-6">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="px-4 py-2 text-slate-600 font-bold hover:text-[#2F6B3C] duration-300 transition-all"
              onClick={() => setIsMenuOpen(false)} // Close menu when an item is clicked
            >
              {item.name}
            </NavLink>
          ))}
          <button className="px-8 py-3 bg-white border text-black rounded-full border-[#F4B400] hover:bg-[#F4B400] hover:text-white duration-300 transition-all mt-4">
            contact@izraglobal.com
          </button>
          <button className="px-8 py-3 bg-white border text-black rounded-full border-[#F4B400] hover:bg-[#F4B400] hover:text-white duration-300 transition-all mt-4">
            9971207059
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
