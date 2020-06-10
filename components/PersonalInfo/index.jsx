import React from "react";
import Group from "../Group";

/**
 * TODO: need contact info somewhere here; maybe right-side?
 * need email, phone, github, linkedin(?)
 * maybe takeout the workplace from here
 * */

function PersonalInfo(props) {
  const { name, title, workplace } = props.data;
  return (
    <section className="w-full mt-8 mb-8 flex flex-col items-center md:flex-row lg:flex-col">
      <img className="w-32 h-32 shadow-lg md:w-36 md:h-36 lg:w-24 lg:h-24 object-cover object-center rounded-full" src={`/profile.jpg`} />
      <section className="flex flex-col mt-3 items-center md:items-start md:ml-12 md:mt-0 lg:mt-3 font-serif lg:items-center lg:ml-0">
        <h1 className="text-2xl lg:text-lg font-sans font-bold">{name}</h1>
        <span className="text-base font-sans font-medium text-blue-700 lg:text-sm">{title}</span>
      </section>
    </section>
  );
}

export default PersonalInfo;
