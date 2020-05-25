import React from "react";
import Group from "../Group";

const Title = (props) => {
  return <h1 className="w-1/4">{props.name}</h1>;
};

const Skills = (props) => {
  return props.skills.map((skill, i) => {
    return (
      <span key={`skill-${i}`} className="text-xs">
        - {skill}
      </span>
    );
  });
};

const Summary = (props) => {
  return (
    <section className="flex flex-col ml-4">
      <h1>{props.description}</h1>
      <h1 className="text-sm font-sans">
        {props.startDate} - {props.endDate}
      </h1>
      <Skills skills={props.skills} />
    </section>
  );
};

function Education(props) {
  const education = props.data;
  console.log("Education -> education", education);

  return (
    <Group>
      <section className="w-full flex items-center ml-8">
        {education.map((education, i) => {
          return (
            <section key={`education-${i}`} className="flex flex-row w-full">
              <Title name={education.name} />
              <Summary
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
