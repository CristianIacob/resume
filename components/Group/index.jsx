import React from "react";

function Group(props) {
  return (
    <main className="w-full flex flex-col items-start py-10">
      <div className="flex items-center justify-start w-full">
        <span className="h-10 flex items-center relative">
          {props.icon && (
            <span className="group-icon absolute flex justify-center items-center w-10 h-10 p-2 fill-current rounded-full bg-blue-600 text-white mr-3">
              {props.icon}
            </span>
          )}
          {props.title && (
            <h1 className="ml-16 text-2xl font-serif text-blue-600 font-bold pb-1 w-full tracking-wider lg:text-xl">{props.title}</h1>
          )}
        </span>
      </div>
      {props.children}
    </main>
  );
}

export default Group;
