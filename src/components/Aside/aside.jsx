import React, { useState } from "react";
import categories from "../../json/categories.json";

export default function Aside({setCurrTab}) {
  const [active, setActive] = useState(1);

  return (
    <aside className="max-w-64 border-r border-gray-300 h-screen relative mt-24">
      <ul>
            {categories.map((element) => {
              const handleActiveTab = (e) => {
                e.preventDefault();
                setActive(element?.id);
                setCurrTab(element.id)
              };
              return (
                  <a href={element?.link} onClick={handleActiveTab}>
                    <li
                      key={element?.id}
                      className={`${
                        active === element?.id
                          ? "text-orange-500"
                          : "text-white"
                      } font-semibold p-4 cursor-pointer border-b border-gray-400`}
                    >
                      {element?.name}
                    </li>
                  </a>
              );
            })}
      </ul>
    </aside>
  );
}
