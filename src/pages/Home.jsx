import React, { useState } from "react";
import "../App.css";
import Hero from "../components/Hero";
import Community from "../components/Community";
import CTA from "../components/CTA";

const Home = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const token = "5683603719:AAFOaY0Y1aNrVDtYeIRbeUVeGYnBItAPGTU";
  const chatId = "-1001881469507";

  const submitData = (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
      fetch(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=Contact Form Submitted !!  %0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            alert("Message sent successfully");

            setContactData({
              name: "",
              email: "",
              message: "",
            });

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
          } else {
            alert("Something went wrong");
          }
        });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div>
      <Hero />
      <section class="text-gray-800 bg-gray-50 body-font">
        <div class="container px-5 py-28 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              How we can help you?
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-opacity-80">
              We have a curated list of communities along with development
              development resources, everything at one place. This will help you
              join any community and become a part of them along with learning
              and growing at a same time !!
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-gradient-to-tr from-purple-700 to-purple-900 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-900 text-purple-100 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-800 text-lg title-font font-medium mb-3">
                  Active Communities listed
                </h2>
                <p class="leading-relaxed text-base">
                  We have listed all the active communities here, our main goal
                  is to help you join community without wasting your time in
                  searching for them.
                </p>
                <a
                  href="/communities"
                  class="mt-3 text-purple-800 inline-flex items-center"
                >
                  View Community
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-900  text-purple-100 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-800 text-lg title-font font-medium mb-3">
                  Updated Development Resources
                </h2>
                <p class="leading-relaxed text-base">
                  Our development resources will help you to learn and grow in
                  your career. These resources are used and have been tested and
                  used by various blockchain developers.
                </p>
                <a
                  href="/resources"
                  class="mt-3 text-purple-800 inline-flex items-center"
                >
                  View Resources
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-900 text-purple-100 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-800 text-lg title-font font-medium mb-3">
                  Collaborate & Learn
                </h2>
                <p class="leading-relaxed text-base">
                  Main objective as a developer and community member is to help
                  these communities grow, by collaborations, hackathons and by
                  hosting events.
                </p>
                <a
                  href="#"
                  class="mt-3 text-purple-800 inline-flex items-center"
                >
                  Want to Collaborate?
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-100 bg-gray-800 body-font relative">
        <div class="container px-5 py-32 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">
              Have anything for us?
            </h1>
            <p class="w-2/3 sm:w-full mx-auto leading-relaxed text-base">
              We are always open to new ideas, suggestions, collaborations, Do
              let us know if you have anything for us.
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-100">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    class="w-full bg-gray-700 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-700 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-100">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    class="w-full bg-gray-700 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-700 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-100">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    class="w-full bg-gray-700 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-700 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  class="flex mx-auto text-white bg-gradient-to-br from-purple-500 to-purple-900 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
                  onClick={submitData}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
