import React from "react";
import Group from "../Group";

/**
 * TODO: need contact info somewhere here; maybe right?
 * need email, phone, github, linkedin(?)
 * */

function PersonalInfo(props) {
  const { name, title, workplace } = props.data;
  return (
    <Group>
      <section className="w-full flex flex-col items-center px-12 py-12 md:flex-row lg:flex-row">
        <img className="w-24 h-24 md:w-36 md:h-36 lg:w-36 lg:h-36 object-cover rounded-full" src={`/profile.jpg`} />
        <section className="flex flex-col ml-4 font-serif">
          <span>{name}</span>
          <span>{title}</span>
          <span>{workplace}</span>
        </section>
      </section>
    </Group>
  );
}

export default PersonalInfo;
