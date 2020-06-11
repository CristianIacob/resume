import React from "react";

function Group(props) {
  return (
    <main className="w-full flex flex-col items-start rounded-sm px-5 py-5">
      <div className="flex items-center mb-6 h-6">
        {props.icon && <span className="w-6 fill-current text-blue-600 mr-3">{props.icon} </span>}
        {props.title && <h1 className="text-lg text-blue-600 font-bold pb-1 w-full tracking-wide">{props.title}</h1>}
      </div>
      {props.children}
    </main>
  );
}

export default Group;
