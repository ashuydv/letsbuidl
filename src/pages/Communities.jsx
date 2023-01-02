import React, { useState } from "react";
import Courses from "../components/Courses";
import axios from "axios";

const Communities = () => {
  const [data, setData] = useState({
    communityName: "",
    category: "",
    file: "",
    description: "",
    twitterHandle: "",
    telegramHandle: "",
    whatsapp: "",
    discordHandle: "",
    instagram: "",
    website: "",
  });

  const token = JSON.stringify(import.meta.env.VITE_TELEGRAM_TOKEN);
  // console.log(JSON.stringify(import.meta.env.VITE_TELEGRAM_TOKEN));
  const chatId = JSON.stringify(import.meta.env.VITE_TELEGRAM_CHAT_ID);

  //  const MySwal = withReactContent(Swal);

  const sendMessage = (e) => {
    e.preventDefault();

    let communityName = document.getElementById("community-name").value;
    let category = document.getElementById("category").value;
    let file = document.getElementById("file").value;
    let description = document.getElementById("description").value;
    let twitterHandle = document.getElementById("twitter").value;
    let telegramHandle = document.getElementById("telegram").value;
    let whatsapp = document.getElementById("whatsapp").value;
    let discordHandle = document.getElementById("discord").value;
    let instagram = document.getElementById("instagram").value;
    let website = document.getElementById("website").value;

    if (
      communityName === "" ||
      category === "" ||
      file === "" ||
      description === "" ||
      twitterHandle === "" ||
      telegramHandle === "" ||
      whatsapp === "" ||
      discordHandle === "" ||
      instagram === "" ||
      website === ""
    ) {
      alert("Please fill all the fields");
    } else {
      axios.post(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=A community wants to get added !!, 
        %0A1️⃣ Community Name: ${communityName},
        %0A2️⃣ Category: ${category},
        %0A3️⃣ File: ${file},
        %0A4️⃣ Description: ${description},
        %0A5️⃣ Twitter Handle: ${twitterHandle},
        %0A6️⃣ Telegram Handle: ${telegramHandle},
        %0A7️⃣ Whatsapp: ${whatsapp},
        %0A8️⃣ Discord Handle: ${discordHandle},
        %0A9️⃣ Instagram: ${instagram},
        %0A🔟 Website: ${website},
        `
      );

      console.log(data);

      alert("Message Sent Successfully"); // This is just a placeholder, you can replace it with your own code.

      document.getElementById("community-name").value = "";
      document.getElementById("category").value = "";
      document.getElementById("file").value = "";
      document.getElementById("description").value = "";
      document.getElementById("twitter").value = "";
      document.getElementById("telegram").value = "";
      document.getElementById("discord").value = "";
      document.getElementById("instagram").value = "";
      document.getElementById("website").value = "";
    }
  };

  return (
    <div>
      {/* <Courses /> */}
      <section class="text-gray-400 bg-gray-900 body-font relative">
        <div class="container px-5 py-24 pt-32 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Communities will be added soon !!
            </h1>
            <p class=" w-full md:w-2/4 mx-auto leading-relaxed text-base">
              In order to add your community or communities here, just add all
              the relevant details in the form below and we will add it here.
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 sm:w-full mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 md:w-1/2 mb-2 w-full">
                <div class="relative">
                  <label
                    for="name"
                    class="leading-7 text-sm text-gray-100 mb-2"
                  >
                    Community Name
                  </label>
                  <input
                    type="text"
                    id="community-name"
                    name="community-name"
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-purple-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-thin"
                  />
                </div>
              </div>
              <div class="p-2 md:w-1/2 mb-2 w-full">
                <div class="relative">
                  <label
                    for="text"
                    class="leading-7 text-sm text-gray-100 mb-2"
                  >
                    Category of Community
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-purple-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-thin"
                  />
                </div>
              </div>
              <div class="p-2 md:w-1/2 mb-2 w-full">
                <div class="relative">
                  <label
                    for="file"
                    class="leading-7 text-sm text-gray-100 mb-2"
                  >
                    Community Logo or Image
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-purple-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-thin"
                  />
                </div>
              </div>
              <div class="p-2 md:w-1/2 mb-2 w-full">
                <div class="relative">
                  <label
                    for="discord"
                    class="leading-7 text-sm text-gray-100 mb-2"
                  >
                    Discord Handle
                  </label>
                  <input
                    type="text"
                    id="discord"
                    name="discord"
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-purple-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-thin"
                  />
                </div>
              </div>
              <div class="p-2 md:w-1/2 mb-2 w-full">
                <div class="relative">
                  <label
                    for="telegram"
                    class="leading-7 text-sm text-gray-100 mb-2"
                  >
                    Telegram Handle
                  </label>
                  <input
                    type="text"
                    id="telegram"
                    name="telegram"
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-purple-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-thin"
                  />
                </div>
              </div>
              <div class="p-2 md:w-1/2 mb-2 w-full">
                <div class="relative">
                  <label
                    for="twitter"
                    class="leading-7 text-sm text-gray-100 mb-2"
                  >
                    Twitter Handle
                  </label>
                  <input
                    type="text"
                    id="twitter"
                    name="twitter"
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-purple-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-thin"
                  />
                </div>
              </div>
              <div class="p-2 md:w-1/3 mb-2 w-full">
                <div class="relative">
                  <label
                    for="whatsapp"
                    class="leading-7 text-sm text-gray-100 mb-2"
                  >
                    Whatsapp
                  </label>
                  <input
                    type="text"
                    id="whatsapp"
                    name="whatsapp"
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-purple-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-thin"
                  />
                </div>
              </div>
              <div class="p-2 md:w-1/3 mb-2 w-full">
                <div class="relative">
                  <label
                    for="instagram"
                    class="leading-7 text-sm text-gray-100 mb-2"
                  >
                    Instagram
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-purple-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-thin"
                  />
                </div>
              </div>
              <div class="p-2 md:w-1/3 mb-2 w-full">
                <div class="relative">
                  <label
                    for="website"
                    class="leading-7 text-sm text-gray-100 mb-2"
                  >
                    Website
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-purple-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-thin"
                  />
                </div>
              </div>
              <div class="p-2 md:w-full mb-2 w-full">
                <div class="relative">
                  <label
                    for="description"
                    class="leading-7 text-sm text-gray-100 mb-2"
                  >
                    Tell us more about the community?
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 p-2 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 md:w-full mb-2 w-full">
                <button
                  class="flex mx-auto text-white bg-gradient-to-tr from-purple-600 to-purple-900 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
                  onClick={sendMessage}
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

export default Communities;
