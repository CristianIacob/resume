import React from "react";
import Group from "../Group";
import { library } from "../../Assets/svg/dynamic-svg";
import TimeFrame from "../TimeFrame";

function Education(props) {
  const education = props.data;

  return (
    <Group title="Education" icon={library}>
      <section className="w-full flex flex-col items-start">
        {education.map((education, i) => {
          return (
            <TimeFrame
              key={`workplace-${i}`}
              title={education.award}
              subTitle={education.name}
              period={{ startDate: education.startDate, endDate: education.endDate }}
              activities={education.skills}
            />
          );
        })}
      </section>
    </Group>
  );
}

export default Education;
