import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="bg-gray-900 z-50">
      <div className="container px-4 mx-auto md:items-center md:flex items-center justify-between">
        <div> 
          <div className="flex items-center justify-between py-4 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-xl text-white font-medium">
                LetsBuidl.<span className=" text-purple-100">tech</span>
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-100 rounded outline-none border-gray-100 bg-gradient-to-tr from-purple-700 to-purple-900 transition-all hover:text-purple-100"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className=" md:bg-transparent sm:bg-gray-800 rounded md:mb-2">
          <div
            className={`flex-1 justify-self-center pb-2 pt-4 md:block px-4 mx-0 transition-all ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 bg-transparent">
              <li className="text-gray-400 transition-all hover:text-purple-100">
                <Link to="/">Home</Link>
              </li>
              <li className="text-gray-400 transition-all hover:text-purple-100">
                <Link to="/communities">Communities</Link>
              </li>
              {/* <li className="text-gray-400 transition-all hover:text-purple-100">
                <Link to="/blogs">Blogs & Threads</Link>
              </li> */}
              <li className="text-gray-400 transition-all hover:text-purple-100">
                <Link to="/resources">Developer Resources</Link>
              </li>
              <li className="text-gray-100 bg-gradient-to-tr from-purple-700 to-purple-900 rounded transition-all hover:text-purple-100 px-3 py-2 ">
                <Link to="/add-community">Add Your Community</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
