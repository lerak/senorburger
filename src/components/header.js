import {Link } from "gatsby";
import React, { useState } from "react";
import logo from '../images/logo.png';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  
  return (
    <header className="bg-black items-center flex flex-wrap justify-between border-b-4 border-yellow-500  " >
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
          <Link to="/" >
            <h1 className="flex items-center text-white no-underline">
              <img className="w-20" src={logo} />
              <span className="text-xl font-bold tracking-tight">
                Señor Burger
              </span>
            </h1>
          </Link>
          </div>
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        {/* <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <img className="w-20" src={logo} />
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link> */}

        <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/menu`,
              title: `Menú`
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-yellow-500 hover:text-white hover:scale-75 active:text-white no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
