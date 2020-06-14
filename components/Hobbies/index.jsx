import React from "react";
import Group from "../Group";
import { boardGames, movieCamera, puzzle, travelBag, videoGames, psychology, designUIUX, mindfulness } from "../../Assets/svg/dynamic-svg";

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

function Hobbies(props) {
  const { activities, interests } = props.data;
  return (
    <Group title="Hobbies" icon={puzzle}>
      <section className="w-full flex flex-col items-start mt-8">
        <section className={`mt-2 flex w-full text-left items-start flex-col`}>
          <Title name={"activities"} />
          <div className="flex flex-row space-x-12 w-full">
            <Item icon={travelBag} text={"travel"} />
            <Item icon={movieCamera} text={"movies"} />
            <Item icon={videoGames} text={"video games"} />
            <Item icon={boardGames} text={"board games"} />
          </div>
        </section>
        <section className={`mt-2 flex w-full text-left items-start flex-col`}>
          <Title name={"interests"} />
          <div className="flex flex-row space-x-12 w-full">
            <Item icon={psychology} text={"psychology"} />
            <Item icon={designUIUX} text={"UI UX"} />
            <Item icon={mindfulness} text={"mindfulness"} />
          </div>
        </section>
      </section>
    </Group>
  );
}

export default Hobbies;
