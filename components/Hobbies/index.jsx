import React from "react";
import Group from "../Group";
import { puzzle } from "../../Assets/svg/dynamic-svg";

const Title = (props) => {
  return (
    <div className="flex flex-col w-full sm:flex-row sm:items-center md:w-1/4">
      <h1 className="text-base text-base font-bold capitalize">{props.name}</h1>
    </div>
  );
};

const List = (props) => {
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

const ListContainer = (props) => {
  return (
    <section className="flex flex-col md:ml-4">
      <List data={props.responsabilities} />
    </section>
  );
};

function Hobbies(props) {
  const { activities, interests } = props.data;
  return (
    <Group title="Hobbies" icon={puzzle}>
      <section className="w-full flex flex-col items-start">
        <section className={`mt-2 flex w-full text-left items-start flex-col`}>
          <Title name={"activities"} />
          <ListContainer responsabilities={activities} />
        </section>
        <section className={`mt-2 flex w-full text-left items-start flex-col`}>
          <Title name={"interests"} />
          <ListContainer responsabilities={interests} />
        </section>
      </section>
    </Group>
  );
}

export default Hobbies;
