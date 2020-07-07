import React from "react";
import Group from "../Group";
import { skills } from "../../Assets/svg/dynamic-svg";
import TechChart from "./chart";

const Pill = (props) => (
  <li className="px-2 mb-2 mr-2 border border-gray-400 bg-gray-100 text-gray-600 rounded-lg capitalize">{props.skill}</li>
);

const Pills = (props) => (
  <div className="mt-5">
    <span className="capitalize text-base font-sans">{props.title}</span>
    <ul className="mt-1 py-2 text-xs flex flex-wrap items-start whitespace-no-wrap">
      {props.values.map((skill, i) => (
        <Pill key={`tech-skill-${i}`} skill={skill} />
      ))}
    </ul>
  </div>
);

function Skills(props) {
  const { frontEnd, backEnd, devOps, general, softSkills } = props.data;
  return (
    <Group title="Skills" icon={skills}>
      <section className="mt-8">
        <h4 className="capitalize text-xl">Technical</h4>
        <TechChart />
        <Pills title={"frontend"} values={frontEnd} />
        <Pills title={"backend"} values={backEnd} />
        <Pills title={"devops"} values={devOps} />
        <Pills title={"general"} values={general} />
      </section>
      <section className="mt-8">
        <h4 className="text-xl">Soft skills</h4>
        <ul className="text-sm list-disc list-inside mt-5">
          {softSkills.map((skill, i) => (
            <li key={`soft-skill-${i}`}>{skill}</li>
          ))}
        </ul>
      </section>
    </Group>
  );
}

export default Skills;
