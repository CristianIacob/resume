import React, { useState } from "react";
import Group from "../Group";
import { translate, flagRomania, flagUSA, flagGermany } from "../../Assets/svg/dynamic-svg";
import Language from "./language";

function Linguistics(props) {
  const [expanded, setExpanded] = useState(false);

  const getIcon = (index) => {
    switch (index) {
      case 0:
        return flagRomania;
      case 1:
        return flagUSA;
      case 2:
        return flagGermany;
      default:
        return flagRomania;
    }
  };

  return (
    <Group title="Languages" icon={translate}>
      <section className="w-64 flex-col items-center">
        {props.data.language.map((lang, i) => {
          return (
            <Language
              i={i}
              expanded={expanded}
              setExpanded={setExpanded}
              icon={getIcon(i)}
              title={lang.name}
              level={lang.level}
              understanding={lang.understanding}
              speaking={lang.speaking}
              writing={lang.writing}
            />
          );
        })}
      </section>
    </Group>
  );
}

export default Linguistics;
