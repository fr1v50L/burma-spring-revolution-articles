import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pageNames = [
    { id: uuidv4(), name: "We Resist - Burma", link: "/we-resist" },
    { id: uuidv4(), name: "ငရဲခွေးကြီး အမိဖမ်းမည်", link: "/hell-hound" },
    { id: uuidv4(), name: "BBP - Resistance", link: "/bbp-resistance" },
  ];

  const burgerSvg = (
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  const closeSvg = (
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  const menuStyle = !open
    ? "hidden md:block md:flex md:pr-4"
    : "md:block md:flex md:pr-4";

  return (
    <React.Fragment>
      <header className="bg-black sticky top-0">
        <nav className="max-w-screen-lg mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between text-lg text-red-600 font-semibold p-4">
            <div>
              <h1>
                <a href="/">Burma Spring Revolution Articles</a>
              </h1>
            </div>
            <div className="md:hidden">
              <button
                className="align-middle"
                onClick={() => setOpen((prevOpen) => !prevOpen)}
              >
                {!open ? burgerSvg : closeSvg}
              </button>
            </div>
          </div>

          <div className={menuStyle}>
            {pageNames.map((pn) => (
              <a
                className="block text-red-600 hover:text-black hover:bg-red-600 text-center py-2 md:p-2 md:ml-4 md:rounded"
                key={pn.id}
                href={pn.link}
              >
                {pn.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}
