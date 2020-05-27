import React from "react";
import Group from "../Group";

const Position = (props) => {
  return (
    <div className="flex flex-col w-full sm:flex-row sm:items-center md:w-1/4">
      <h1 className="text-base text-base font-bold">{props.name}</h1>
      <h4 className="flex text-xs font-sans mt-1 items-center h-full sm:hidden">
        {props.startDate} - {props.endDate}
      </h4>
    </div>
  );
};

const Responsabilities = (props) => {
  return (
    <ul className="text-xs mt-2">
      {props.data.map((responsability, i) => {
        return (
          <li key={`responsability-${i}`} className="list-inside list-disc">
            {responsability}
          </li>
        );
      })}
    </ul>
  );
};

const Job = (props) => {
  return (
    <section className="flex flex-col md:ml-4">
      <h2 className="text-sm italic mt-1 ">{props.company}</h2>
      <h4 className="text-sm font-sans hidden sm:block">
        {props.startDate} - {props.endDate}
      </h4>
      <Responsabilities data={props.responsabilities} />
    </section>
  );
};

function Experience(props) {
  const workplaces = props.data;
  return (
    <Group title="Experience">
      <section className="w-full flex flex-col items-start">
        {workplaces.map((work, i) => {
          return (
            <section
              key={`workplace-${i}`}
              className={`flex w-full text-left items-start flex-col md:flex-row${i < workplaces.length - 1 ? " mb-6" : ""}`}>
              <Position name={work.position} startDate={work.startDate} endDate={work.endDate} />
              <Job company={work.company} startDate={work.startDate} endDate={work.endDate} responsabilities={work.responsabilities} />
            </section>
          );
        })}
      </section>
    </Group>
  );
}

export default Experience;
