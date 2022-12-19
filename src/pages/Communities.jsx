import React from "react";

const Communties = () => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={logo} 
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl uppercase mb-4 font-medium text-white">
              Communties and Development Resources all at once !!
            </h1>
            <p class="leading-relaxed mb-8">
              Are you confused to join which communities? Which communities
              suits you the most or to which communties you belong, no worries,
              we are here to help you figure it out!! You can just checkout the
              communities listed here and if you had any new, that you think
              might be listed here, just fill the form and we will add it to the
              list.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-gradient-to-tr from-purple-900 to-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Explore Communities
              </button>
              <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Add Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Communties;
