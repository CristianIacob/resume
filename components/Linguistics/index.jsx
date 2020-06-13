import React from "react";
import Group from "../Group";
import { translate, flagRomania, flagUSA, flagGermany } from "../../Assets/svg/dynamic-svg";

const ListItem = (props) => {
  return (
    <li>
      <i className="mr-2">{props.text}</i> <b>{props.value}</b>
    </li>
  );
};

const Languages = (props) => {
  return (
    <>
      {props.lang.map((language, i) => {
        return (
          <span key={`lang-${i}`} className="flex flex-col mb-2">
            <h4 className="mr-2 capitalize font-bold">{language.name}</h4>
            <ul className="list-inside capitalize text-xs">
              <li>
                <span className="capitalize mr-2">speaking</span>
                <span>{`${language.speaking.interaction}(Interaction) - ${language.speaking.production}(Production)`}</span>
              </li>
              <ul>
                <li>understanding</li>
                <ul className="ml-4 list-inside list-disc text-xs mb-2">
                  <ListItem text={"listening"} value={language.understanding.listening} />
                  <ListItem text={"reading"} value={language.understanding.reading} />
                </ul>
              </ul>
              <li>
                <span className="capitalize mr-2">writing</span>
                <span className="font-bold">{`${language.writing}`}</span>
              </li>
            </ul>
          </span>
        );
      })}
    </>
  );
};

function Linguistics(props) {
  return (
    <Group title="Languages" icon={translate}>
      <section className="w-full flex-col items-center">
        <div className="flex items-center mt-8">
          <span className="w-5 h-5 flex mr-2">{flagRomania}</span>
          <h1 className="text-xl font-sans capitalize">{props.data.native}</h1>
        </div>
        <div className="flex items-center mt-8">
          <span className="w-5 h-5 flex mr-2">{flagUSA}</span>
          <h1 className="text-xl font-sans capitalize">English</h1>
        </div>
        <div className="flex items-center mt-8">
          <span className="w-5 h-5 flex mr-2">{flagGermany}</span>
          <h1 className="text-xl font-sans capitalize">German</h1>
        </div>
        {/* <Languages lang={props.data.language} /> */}
      </section>
    </Group>
  );
}

export default Linguistics;
