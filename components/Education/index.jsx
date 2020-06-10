import React from "react";
import Group from "../Group";
import { library } from "../../Assets/svg/dynamic-svg";

const Title = (props) => {
  return (
    <div className="flex flex-col w-full sm:flex-row sm:items-center md:w-1/4">
      <h1 className="text-base text-base font-bold">{props.name}</h1>
      <h4 className="flex text-xs font-sans mt-1 items-center h-full sm:hidden">
        {props.startDate} - {props.endDate}
      </h4>
    </div>
  );
};

const Skills = (props) => {
  return (
    <ul className="text-xs mt-2">
      {props.skills.map((skill, i) => {
        return (
          <li key={`skill-${i}`} className="list-inside list-disc">
            {skill}
          </li>
        );
      })}
    </ul>
  );
};

const Summary = (props) => {
  return (
    <section className="flex flex-col md:ml-4">
      <h2 className="text-sm italic mt-1 ">{props.institution}</h2>
      <h4 className="text-sm font-sans text-sm font-sans hidden sm:block">
        {props.startDate} - {props.endDate}
      </h4>
      <Skills skills={props.skills} />
    </section>
  );
};

function Education(props) {
  const education = props.data;

  return (
    <Group title="Education" icon={library}>
      <section className="w-full flex flex-col items-start">
        {education.map((education, i) => {
          return (
            <section key={`education-${i}`} className="flex w-full text-left items-start flex-col md:flex-row">
              <Title name={education.award} startDate={education.startDate} endDate={education.endDate} />
              <Summary
                institution={education.name}
                startDate={education.startDate}
                endDate={education.endDate}
                description={education.description}
                skills={education.skills}
              />
            </section>
          );
        })}
      </section>
    </Group>
  );
}

export default Education;
