import React from "react";
import Group from "../Group";

const sectionStyle = {
  transition: "all ease-out 700ms",
};

const Company = (props) => {
  return <h1 className="text-lg w-1/4">{props.name}</h1>;
};

const Responsabilities = (props) => {
  return props.data.map((responsability, i) => {
    return (
      <span key={`responsability-${i}`} className="text-xs">
        - {responsability}
      </span>
    );
  });
};

const Job = (props) => {
  return (
    <section className="flex flex-col ml-4">
      <h2 className="text-base">{props.position}</h2>
      <h4 className="text-sm font-sans">
        {props.startDate} - {props.endDate}
      </h4>
      <Responsabilities data={props.responsabilities} />
    </section>
  );
};

function Experience(props) {
  const workplaces = props.data;
  return (
    <Group>
      <section style={sectionStyle} className="w-full flex flex-col items-start ml-8">
        {workplaces.map((work, i) => {
          return (
            <section key={`workplace-${i}`} className={`flex w-full flex-row${i < workplaces.length - 1 ? " mb-6" : ""}`}>
              <Company name={work.company} />
              <Job position={work.position} startDate={work.startDate} endDate={work.endDate} responsabilities={work.responsabilities} />
            </section>
          );
        })}
      </section>
    </Group>
  );
}

export default Experience;
