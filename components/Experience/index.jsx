import React from "react";
import Group from "../Group";
import moment from "moment";
import { briefcase, calendar, building } from "../../Assets/svg/dynamic-svg";
import TimeFrame from "../TimeFrame";

function Experience(props) {
  const workplaces = props.data;
  return (
    <Group title="Work Experience" icon={briefcase}>
      {workplaces.map((work, i) => {
        return (
          <TimeFrame
            key={`workplace-${i}`}
            title={work.position}
            subTitle={work.company}
            period={{ startDate: work.startDate, endDate: work.endDate }}
            activities={work.responsabilities}
          />
        );
      })}
    </Group>
  );
}

export default Experience;
