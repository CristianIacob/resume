import React from "react";
import Group from "../Group";
import { skills } from "../../Assets/svg/dynamic-svg";

const Pills = (props) => (
  <div className="mt-8">
    <span className="capitalize text-xl font-sans">{props.title}</span>
    <ul className="mt-3 py-2 text-sm flex flex-wrap items-start whitespace-no-wrap">
      {props.values.map((skill) => (
        <li className="px-2 mb-2 mr-2 border bg-blue-400 text-white rounded-lg">{skill}</li>
      ))}
    </ul>
  </div>
);

function Skills(props) {
  const { frontEnd, backEnd, devOps } = props.data;
  return (
    <Group title="Skills" icon={skills}>
      <Pills title={"frontend"} values={frontEnd} />
      <Pills title={"backend"} values={backEnd} />
      <Pills title={"devops"} values={devOps} />
    </Group>
  );
}

export default Skills;
