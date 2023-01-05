import React,{useState, useEffect} from "react";
import { db } from "../firebase";
import { collection,getDocs } from "firebase/firestore";

function Items({ menuItem }) {
  const exploreCommunity = () => {
    window.location.href = "/add-community";
  };

  const communityListRef = collection(db, "communityList");
  const [communityList, setcommunityList] = useState([])

  useEffect(() => {
    const getdata = async () => {
      const data = await getDocs(communityListRef);
      try {
        setcommunityList(data);
        console.log(communityList.docs);
      } catch (err) {
        console.log(err)
      }
    };
    getdata();
  }, []);

  return (
    <div>
      <div className="container">
        <div className=" flex items-center justify-center flex-wrap pt-8 pb-12 bg-gray-900 transition-all">
          {menuItem.map((item) => {
            return (
              <div
                class=" lg:w-1/4 md:w-1/2 sm:w-full transition-all p-4 mx-auto overflow-hidden"
                key={item.id}
              >
                <div
                  class=" bg-purple-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 p-6 rounded-lg transition-all shadow hover:shadow-lg"
                  style={{ maxHeight: "500px", minHeight: "480px" }}
                >
                  <img
                    class=" h-40 rounded w-full object-cover object-top mb-6"
                    src={item.image}
                    alt="content"
                  />
                  <div className="flex items-end justify-between mb-4">
                    <div className="">
                      <h3 class="tracking-widest text-purple-400 text-xs font-medium title-font uppercase mb-1">
                        {item.category}
                      </h3>
                      <h2 class="text-lg text-white font-medium title-font">
                        {item.title.slice(0, 40)}
                      </h2>
                    </div>
                    <div className="flex items-center justify-start pb-2">
                      {item.discord ? (
                        <a
                          href={item.discord}
                          class="text-purple-100 items-center mx-2 inline-flex"
                        >
                          <i class="fa-brands fa-discord"></i>
                        </a>
                      ) : (
                        <a
                          href={item.discord}
                          class="text-purple-100 items-center mx-2 hidden"
                        >
                          <i class="fa-brands fa-discord"></i>
                        </a>
                      )}
                      {item.twitter ? (
                        <a
                          href={item.twitter}
                          class="text-purple-100 items-center mx-2 inline-flex"
                        >
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                      ) : (
                        <a
                          href={item.twitter}
                          class="text-purple-100 items-center mx-2 hidden"
                        >
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                      )}
                      {item.website ? (
                        <a
                          href={item.website}
                          class="text-purple-100 items-center mx-2 inline-flex"
                        >
                          <i class="fa-solid fa-globe"></i>
                        </a>
                      ) : (
                        <a
                          href={item.website}
                          class="text-purple-100 items-center mx-2 hidden"
                        >
                          <i class="fa-solid fa-globe"></i>
                        </a>
                      )}
                    </div>
                  </div>
                  <p class="leading-relaxed text-base text-gray-400">
                    {item.description.slice(0, 230) + ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div class="container px-5 py-24 mx-auto bg-slate-800">
        <div class="lg:w-3/4 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-100">
            Add your community to the list, it's free!
          </h1>
          <button
            class="flex-shrink-0 text-white bg-gradient-to-tr from-purple-700 to-purple-900 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg mt-10 sm:mt-0"
            onClick={exploreCommunity}
          >
            Add Community
          </button>
        </div>
      </div>
    </div>
  );
}

export default Items;
