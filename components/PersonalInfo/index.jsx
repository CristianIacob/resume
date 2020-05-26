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
      <section className='w-full flex flex-col items-center px-4 py-4 md:flex-row lg:flex-row'>
        <img className='w-32 h-32 md:w-36 md:h-36 lg:w-36 lg:h-36 object-cover object-center rounded-full' src={`/profile.jpg`} />
        <section className='flex flex-col items-center md:items-start md:ml-4 font-serif mt-4 md:mt-0'>
          <span>{name}</span>
          <span>{title}</span>
          <span>{workplace}</span>
        </section>
      </section>
    </Group>
  );
}

export default PersonalInfo;
