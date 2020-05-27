import React from "react";

function Group(props) {
  return (
    <main className={`w-full flex flex-col ${props.title ? "mb-4 " : ""}items-start rounded-sm px-4 py-4 sm:mb-1 sm:shadow`}>
      {props.title && <h1 className="text-xl font-bold mb-6 pb-1 border-gray-400 border-b w-full">{props.title}</h1>}
      {props.children}
    </main>
  );
}

export default Group;
