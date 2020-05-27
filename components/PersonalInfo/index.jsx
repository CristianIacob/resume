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
    <Group title="">
      <section className="w-full flex items-center py-4 md:flex-row lg:flex-row">
        <img className="w-24 h-24 md:w-36 md:h-36 lg:w-36 lg:h-36 object-cover object-center rounded-full" src={`/profile.jpg`} />
        <section className="flex flex-col ml-8 items-center md:items-start md:ml-12 font-serif md:mt-0">
          <h1 className="text-2xl font-sans font-medium">{name}</h1>
          <span className="text-base font-sans text-blue-700">{title}</span>
        </section>
      </section>
    </Group>
  );
}

export default PersonalInfo;
