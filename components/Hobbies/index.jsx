import React from "react";
import Group from "../Group";
import { boardGames, movieCamera, puzzle, travelBag, videoGames, psychology, designUIUX, mindfulness } from "../../Assets/svg/dynamic-svg";

function getIcon(text) {
  switch (text) {
    case "board games":
      return boardGames;
    case "mindfulness":
      return mindfulness;
    case "movies":
      return movieCamera;
    case "psychology":
      return psychology;
    case "traveling":
      return travelBag;
    case "UI/UX":
      return designUIUX;
    case "video games":
      return videoGames;
  }
}

const Title = (props) => {
  return (
    <div className="flex flex-col w-full sm:flex-row sm:items-center md:w-1/4">
      <h1 className="text-xl font-sans capitalize">{props.name}</h1>
    </div>
  );
};

const Item = (props) => {
  return (
    <div className="group flex w-16 h-full flex-col items-center mt-5">
      <span className="w-8 h-8 rounded-full border border-gray-400 group-hover:border-blue-400 p-1">
        <span className="fill-current text-gray-500 group-hover:text-blue-500">{props.icon}</span>
      </span>
      <span className="text-sm mt-2 text-center group-hover:text-blue-500">{props.text}</span>
    </div>
  );
};

const HobbySection = (props) => (
  <section className={`mt-2 flex w-full text-left items-start flex-col`}>
    <Title name={props.title} />
    <div className="flex flex-row space-x-12 w-full">
      {props.items.map((activity) => console.log("activity", activity) || <Item icon={getIcon(activity)} text={activity} />)}
    </div>
  </section>
);

function Hobbies(props) {
  const { activities, interests } = props.data;
  return (
    <Group title="Hobbies" icon={puzzle}>
      <section className="w-full flex flex-col items-start mt-8">
        <HobbySection title="activities" items={activities} />
        <HobbySection title="interests" items={interests} />
      </section>
    </Group>
  );
}

export default Hobbies;
