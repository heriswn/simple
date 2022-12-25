import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby-link";

const Header = () => (
  <header className="w-full flex justify-center bg-primary border-b-[1.5px] border-solid border-borderClr dark:border-darkBorderClr dark:bg-darkPrimary">
    <div className="w-[400px] flex mt-6 mb-6 max-sm:block max-sm:text-center">
      <StaticImage
        src="../images/icon.png"
        alt="logo page"
        height={120}
        width={120}
      />
      <div className="text-center ml-5">
        <br />
        <span className="font-sans text-3xl font-normal text-black dark:text-white">
          Heri Setiawan
        </span>
        <div className="font-sans text-xl font-normal text-black dark:text-white pt-1">
          Marketing Planner, SCTV
        </div>
        <div className="font-sans text-base font-normal text-black dark:text-white pt-1">
          <Link to="/">Home</Link> | <Link to="/blog">Blog</Link> |{" "}
          <a
            href="https://twitter.com/swnheri"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin/in/heriswn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;