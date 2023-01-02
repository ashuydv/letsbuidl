import React from "react";
import logo from "../assets/logo.png";
import library from "../assets/library.png";
import developer from "../assets/developer.png";
import freelancer from "../assets/freelancer.png";
import Communities from "../pages/Communities";

const Hero = () => {

  const exploreCommunity = () => { 
    window.location.href = "/communities";
   }

  const addCommunity = () => {
    window.location.href = "/add-community";
  }

  return (
    <div>
      <section class="text-gray-100 bg-gray-900 body-font ">
        <div class="container mx-auto flex px-5 py-20 items-center justify-center flex-col min-h-screen">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl capitalize mb-1 font-medium text-gray-100">
              One stop for all the <span className="text-purple-400">communities</span> and <span className="text-purple-400">resources</span>
            </h1>
            <h1 class="title-font sm:text-4xl text-3xl capitalize mb-4 font-medium text-gray-100">
              all at once
            </h1>
            <p class="leading-relaxed mb-8">
              Builders !! As we see, there are large number of communities all
              over the internet, some are on twitter, discord, telegram, slack,
              etc. So, don't worry we are here for you guys !! We have bought
              you all the communities under one roof, where one can different
              communities to join, along with development resources to
              contribute with !!
              <br />
              <br />
              So, what are you waiting for, just checkout the communities and
              resources and join the ones you like the most !!
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-gradient-to-tr from-purple-900 to-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg" onClick={exploreCommunity} >
                Explore Communities
              </button>
              <button class="ml-4 inline-flex text-gray-400 bg-gradient-to-tr from-gray-800 to-gray-700 border-0 py-2 px-6 focus:outline-none cursor-pointer rounded text-lg" onClick={addCommunity} >
                Add Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
