import React from "react";
import Group from "../Group";
import { translate } from "../../Assets/svg/dynamic-svg";

const NativeLanguage = (props) => {
  return (
    <span className="flex flex-row items-center mb-2">
      <h4 className="mr-4 capitalize font-bold">{props.lang}</h4>
      <h4 className="text-sm">native</h4>
    </span>
  );
};

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
      <section className="w-full flex-col items-center mt-8">
        <NativeLanguage lang={props.data.native} />
        <Languages lang={props.data.language} />
      </section>
    </Group>
  );
}

export default Linguistics;
