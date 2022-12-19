import React from "react";
import navLogo from "../assets/nav-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header class="text-gray-400 bg-gradient-to-tr from-transparent to-gray-900 body-font fixed w-full backdrop-filter backdrop-blur-2xl z-50">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <img
              src={navLogo}
              class="w-10 h-10 text-white p-0.5 bg-gradient-to-tr from-purple-700 to-purple-900 rounded-full"
            />
            <span class="ml-3 text-xl">
              Commbuidl<span className="text-purple-300">.in</span>{" "}
            </span>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" class="mr-5 hover:text-white">
              Home
            </Link>
            <Link to="/communities" class="mr-5 hover:text-white">
              Communities
            </Link>
            <Link to="/resources" class="mr-5 hover:text-white">
              Developer Resources
            </Link>
            <Link to="/blogs" class="mr-5 hover:text-white">
              Blogs & Threads
            </Link>

            {/* <Link to="/hack-events" class="mr-5 hover:text-white">
              Hackathons & Events
            </Link> */}
          </nav>
          <button class="inline-flex items-center text-white bg-gradient-to-tr from-purple-600 to-purple-900 border-0 py-1 px-4 shadow-inner focus:outline-none hover:bg-purple-600 transition-all rounded text-lg mt-4 md:mt-0">
            <span className="xl:block md:hidden sm:hidden">
              Explore Opportunities
            </span>
            <span className="xl:hidden md:block sm:block font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
