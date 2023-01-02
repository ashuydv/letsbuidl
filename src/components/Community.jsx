import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Communities = () => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 pb-0 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Web3 Communities
              </h1>
              <div class="h-1 w-20 bg-purple-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
              As we all know, web3 is on the verge to be accepted by the world,
              Here, is the list of amazing communities that are actively
              participating in the web3 ecosystem.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="  backdrop-filter backdrop-blur-md bg-opacity-40 p-6 rounded-lg transition-all shadow-2xl">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <div className="flex items-end justify-between mb-4">
                  <div className="">
                    <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font uppercase mb-1">
                      DEVELOPMENT
                    </h3>
                    <h2 class="text-lg text-white font-medium title-font">
                      Web3Devs
                    </h2>
                  </div>
                  <div className="flex items-center justify-start pb-2">
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-4"
                    >
                      <i class="fa-brands fa-discord"></i>
                    </a>
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-0"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <p class="leading-relaxed text-base">
                  Web3Devs is community of developer by a developer, where
                  everyone helps each other to learn more about blockchain, by
                  contributing on multiple projects from different parts of
                  world, along with some fun, memes, music and much more.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="  backdrop-filter backdrop-blur-md bg-opacity-40 p-6 rounded-lg transition-all shadow-2xl">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <div className="flex items-end justify-between mb-4">
                  <div className="">
                    <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font uppercase mb-1">
                      MARKETING & COMMUNITY
                    </h3>
                    <h2 class="text-lg text-white font-medium title-font">
                      Blockwee
                    </h2>
                  </div>
                  <div className="flex items-center justify-start pb-2">
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-4"
                    >
                      <i class="fa-brands fa-discord"></i>
                    </a>
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-0"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <p class="leading-relaxed text-base">
                  Blockwee offers clients specialized marketing services as well
                  as corporate consultancy for clients already in the field of
                  Web 3.0 or the ones wanting to integrate the features of Web
                  3.0 services into their existing offerings.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="  backdrop-filter backdrop-blur-md bg-opacity-40 p-6 rounded-lg transition-all shadow-2xl">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <div className="flex items-end justify-between mb-4">
                  <div className="">
                    <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font uppercase mb-1">
                      DEVELOPMENT
                    </h3>
                    <h2 class="text-lg text-white font-medium title-font">
                      Web3Devs
                    </h2>
                  </div>
                  <div className="flex items-center justify-start pb-2">
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-4"
                    >
                      <i class="fa-brands fa-discord"></i>
                    </a>
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-0"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <p class="leading-relaxed text-base">
                  It's a community of developers by the developer, where
                  everyone daily sits to solve bugs, issues, and problems, along
                  with memes, jokes, and fun.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="  backdrop-filter backdrop-blur-md bg-opacity-40 p-6 rounded-lg transition-all shadow-2xl">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <div className="flex items-end justify-between mb-4">
                  <div className="">
                    <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font uppercase mb-1">
                      DEVELOPMENT
                    </h3>
                    <h2 class="text-lg text-white font-medium title-font">
                      Web3Devs
                    </h2>
                  </div>
                  <div className="flex items-center justify-start pb-2">
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-4"
                    >
                      <i class="fa-brands fa-discord"></i>
                    </a>
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-0"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <p class="leading-relaxed text-base">
                  It's a community of developers by the developer, where
                  everyone daily sits to solve bugs, issues, and problems, along
                  with memes, jokes, and fun.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container px-5 py-24 pb-0 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Web2 Communities
              </h1>
              <div class="h-1 w-20 bg-purple-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
              While web3 communities are growing, but there are still many web2
              communities that are helping web3
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="  backdrop-filter backdrop-blur-md bg-opacity-40 p-6 rounded-lg transition-all shadow-2xl">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <div className="flex items-end justify-between mb-4">
                  <div className="">
                    <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font uppercase mb-1">
                      DEVELOPMENT
                    </h3>
                    <h2 class="text-lg text-white font-medium title-font">
                      Web3Devs
                    </h2>
                  </div>
                  <div className="flex items-center justify-start pb-2">
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-2"
                    >
                      <i class="fa-brands fa-discord"></i>
                    </a>
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-2"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-2"
                    >
                      <i class="fa-brands fa-telegram-plane"></i>
                    </a>
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center ml-2"
                    >
                      <i class="fa-solid fa-globe"></i>
                    </a>
                  </div>
                </div>
                <p class="leading-relaxed text-base">
                  It's a community of developers by the developer, where
                  everyone daily sits to solve bugs, issues, and problems, along
                  with memes, jokes, and fun.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="  backdrop-filter backdrop-blur-md bg-opacity-40 p-6 rounded-lg transition-all shadow-2xl">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <div className="flex items-end justify-between mb-4">
                  <div className="">
                    <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font uppercase mb-1">
                      DEVELOPMENT
                    </h3>
                    <h2 class="text-lg text-white font-medium title-font">
                      Web3Devs
                    </h2>
                  </div>
                  <div className="flex items-center justify-start pb-2">
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-4"
                    >
                      <i class="fa-brands fa-discord"></i>
                    </a>
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-0"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <p class="leading-relaxed text-base">
                  It's a community of developers by the developer, where
                  everyone daily sits to solve bugs, issues, and problems, along
                  with memes, jokes, and fun.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="  backdrop-filter backdrop-blur-md bg-opacity-40 p-6 rounded-lg transition-all shadow-2xl">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <div className="flex items-end justify-between mb-4">
                  <div className="">
                    <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font uppercase mb-1">
                      DEVELOPMENT
                    </h3>
                    <h2 class="text-lg text-white font-medium title-font">
                      Web3Devs
                    </h2>
                  </div>
                  <div className="flex items-center justify-start pb-2">
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-4"
                    >
                      <i class="fa-brands fa-discord"></i>
                    </a>
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-0"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <p class="leading-relaxed text-base">
                  It's a community of developers by the developer, where
                  everyone daily sits to solve bugs, issues, and problems, along
                  with memes, jokes, and fun.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="  backdrop-filter backdrop-blur-md bg-opacity-40 p-6 rounded-lg transition-all shadow-2xl">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <div className="flex items-end justify-between mb-4">
                  <div className="">
                    <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font uppercase mb-1">
                      DEVELOPMENT
                    </h3>
                    <h2 class="text-lg text-white font-medium title-font">
                      Web3Devs
                    </h2>
                  </div>
                  <div className="flex items-center justify-start pb-2">
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-4"
                    >
                      <i class="fa-brands fa-discord"></i>
                    </a>
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-0"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <p class="leading-relaxed text-base">
                  It's a community of developers by the developer, where
                  everyone daily sits to solve bugs, issues, and problems, along
                  with memes, jokes, and fun.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Developer Resources
              </h1>
              <div class="h-1 w-20 bg-purple-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="  backdrop-filter backdrop-blur-md bg-opacity-40 p-6 rounded-lg transition-all shadow-2xl">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <div className="flex items-end justify-between mb-4">
                  <div className="">
                    <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font uppercase mb-1">
                      DEVELOPMENT
                    </h3>
                    <h2 class="text-lg text-white font-medium title-font">
                      Web3Devs
                    </h2>
                  </div>
                  <div className="flex items-center justify-start pb-2">
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-4"
                    >
                      <i class="fa-brands fa-discord"></i>
                    </a>
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-0"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <p class="leading-relaxed text-base">
                  It's a community of developers by the developer, where
                  everyone daily sits to solve bugs, issues, and problems, along
                  with memes, jokes, and fun.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="  backdrop-filter backdrop-blur-md bg-opacity-40 p-6 rounded-lg transition-all shadow-2xl">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <div className="flex items-end justify-between mb-4">
                  <div className="">
                    <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font uppercase mb-1">
                      DEVELOPMENT
                    </h3>
                    <h2 class="text-lg text-white font-medium title-font">
                      Web3Devs
                    </h2>
                  </div>
                  <div className="flex items-center justify-start pb-2">
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-4"
                    >
                      <i class="fa-brands fa-discord"></i>
                    </a>
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-0"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <p class="leading-relaxed text-base">
                  It's a community of developers by the developer, where
                  everyone daily sits to solve bugs, issues, and problems, along
                  with memes, jokes, and fun.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="  backdrop-filter backdrop-blur-md bg-opacity-40 p-6 rounded-lg transition-all shadow-2xl">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <div className="flex items-end justify-between mb-4">
                  <div className="">
                    <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font uppercase mb-1">
                      DEVELOPMENT
                    </h3>
                    <h2 class="text-lg text-white font-medium title-font">
                      Web3Devs
                    </h2>
                  </div>
                  <div className="flex items-center justify-start pb-2">
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-4"
                    >
                      <i class="fa-brands fa-discord"></i>
                    </a>
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-0"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <p class="leading-relaxed text-base">
                  It's a community of developers by the developer, where
                  everyone daily sits to solve bugs, issues, and problems, along
                  with memes, jokes, and fun.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="  backdrop-filter backdrop-blur-md bg-opacity-40 p-6 rounded-lg transition-all shadow-2xl">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <div className="flex items-end justify-between mb-4">
                  <div className="">
                    <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font uppercase mb-1">
                      DEVELOPMENT
                    </h3>
                    <h2 class="text-lg text-white font-medium title-font">
                      Web3Devs
                    </h2>
                  </div>
                  <div className="flex items-center justify-start pb-2">
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-4"
                    >
                      <i class="fa-brands fa-discord"></i>
                    </a>
                    <a
                      href="#"
                      class="text-purple-100 inline-flex items-center mx-0"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <p class="leading-relaxed text-base">
                  It's a community of developers by the developer, where
                  everyone daily sits to solve bugs, issues, and problems, along
                  with memes, jokes, and fun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Communities;
