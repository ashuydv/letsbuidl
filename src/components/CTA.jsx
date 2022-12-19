import React from "react";

const CTA = () => {
  return (
    <div>
      <section class="text-gray-400 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Are you a community, looking for collaborations?
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              We are a network of communities, which believes in helping each
              other and growing together. We will help you find the right
              collaborators for your projects and events.
            </p>
          </div>
          <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
            <div class="relative sm:mb-0 flex-grow w-full">
              <label for="full-name" class="leading-7 text-sm text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Full Name"
                class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div class="relative sm:mb-0 flex-grow w-full">
              <label for="email" class="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="xyz@gmail.com"
                class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div class="relative sm:mb-0 flex-grow w-1/3">
              <input
                type="submit"
                id="submit"
                class="flex mx-auto mt-16 text-white bg-gradient-to-tr from-purple-600 to-purple-900 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
                value="Explore Opportunities"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
