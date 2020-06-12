import React from "react";

function Group(props) {
  return (
    <main className="w-full flex flex-col items-start rounded-sm p-5 mb-12">
      <div className="flex items-center mb-6 justify-center md:justify-start w-full">
        <span className="h-6 flex items-center">
          {props.icon && <span className="w-6 fill-current text-blue-600 mr-3 lg:w-8">{props.icon} </span>}
          {props.title && <h1 className="text-lg text-blue-600 font-bold pb-1 w-full tracking-wider lg:text-xl">{props.title}</h1>}
        </span>
      </div>
      {props.children}
    </main>
  );
}

export default Group;
