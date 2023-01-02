import { useState } from "react";
import items from "./allData";
import Items from "./Items";
import MenuItems from "./MenuItems";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

console.log(allCategories);

function Courses() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }
    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <div className="Courses bg-gray-900">
      <div className="py-4 pb-16">
        <MenuItems button={buttons} filter={filter} />
        <Items menuItem={menuItem} />
      </div>
    </div>
  );
}

export default Courses;
