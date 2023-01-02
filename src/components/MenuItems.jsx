import React from "react";

function MenuItems({ button, filter }) {
  return (
    <div className="container">
      <div className="overflow-hidden">
        <div className=" flex items-start overflow-x-scroll">
          {button.map((cat, i) => { 
            return (
              <button
                type="button"
                onClick={() => filter(cat)}
                className="border-2 border-gray-500 px-6 py-1.5 pt-1 rounded-md hover:cursor-pointer transition-all hover:bg-gray-700 hover:border-transparent text-gray-50 hover:text-gray-100 ml-4 mr-1 mb-2 w-full"
                key={i}
                style={{ width: "100% !important" }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
