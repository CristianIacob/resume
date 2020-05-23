import React from "react";
import Group from "../Group";

function PersonalInfo() {
  return (
    <Group>
      <section className="w-full flex items-center px-12 py-12">
        <img className="w-32 rounded-full h-32 object-cover" src={`/profile.jpg`} />
        <section className="flex flex-col ml-4 font-serif">
          <span>NAME_PLACEHOLDER</span>
          <span>PROFESSION_PLACEHOLDER</span>
        </section>
      </section>
    </Group>
  );
}

export default PersonalInfo;
