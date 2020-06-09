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
    <Group>
      <section className="w-full mt-4 flex flex-col items-center md:flex-row">
        <img className="w-32 h-32 shadow-lg md:w-36 md:h-36 lg:w-36 lg:h-36 object-cover object-center rounded-full" src={`/profile.jpg`} />
        <section className="flex flex-col mt-3 items-center md:items-start md:ml-12 font-serif md:mt-0">
          <h1 className="text-2xl font-sans font-bold">{name}</h1>
          <span className="text-base font-sans font-medium text-blue-700">{title}</span>
        </section>
      </section>
    </Group>
  );
}

export default PersonalInfo;
