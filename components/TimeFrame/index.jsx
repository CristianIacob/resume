import React from "react";
import { calendar, building } from "../../Assets/svg/dynamic-svg";

const Title = (props) => {
  return (
    <div className="relative flex flex-row w-full justify-between sm:flex-row sm:items-center md:w-1/3">
      <span className="w-7/12 md:w-auto">
        <h1 className="text-xl font-sans">{props.name}</h1>
        <span className="hidden md:flex">
          <h2 className="inline-block relative w-full md:self-start text-sm mt-1 font-sans text-gray-700">
            <span style={{ top: 5 }} className="w-3 h-3 absolute fill-current text-gray-500">
              {building}
            </span>
            <span className="ml-4 text-gray-700">{props.company}</span>
          </h2>
        </span>
      </span>
      <div className="absolute right-0 items-center justify-end">
        <h4 className="flex text-xs h-auto items-center font-sans tracking-wide mt-2 text-gray-600 md:hidden bg-gray-100 px-2 py-px rounded">
          <span className="w-3 h-3 mr-2 fill-current text-gray-500">{calendar}</span>
          <span className="text-gray-700">
            {props.startDate} &#8209; {props.endDate}
          </span>
        </h4>
      </div>
    </div>
  );
};

const Activities = (props) => {
  return (
    <ul className="text-sm mt-5 leading-6">
      {props.data.map((activity, i) => {
        return (
          <li key={`activity-${props.company}-${i}`} className="list-inside list-disc">
            {activity}
          </li>
        );
      })}
    </ul>
  );
};

const Subtitle = (props) => {
  return (
    <section className="flex flex-col md:ml-4 md:w-2/3">
      <div className="flex md:hidden">
        <h2 className="flex items-center text-sm tracking-wide mt-1 font-sans text-gray-500">
          <span className="w-3 h-3 mt-px mr-1 fill-current text-gray-500">{building}</span>
          <span className="text-gray-700">{props.company}</span>
        </h2>
      </div>
      <div className="hidden md:flex">
        <h4 className="flex text-xs h-auto font-sans tracking-wide mt-2 text-gray-600 items-center bg-gray-100 px-2 py-px rounded">
          <span className="w-3 h-3 mr-2 fill-current text-gray-500">{calendar}</span>
          <span className="text-gray-700">
            {props.startDate} &#8209; {props.endDate}
          </span>
        </h4>
      </div>
      <Activities data={props.activities} company={props.company} />
    </section>
  );
};

function TimeFrame(props) {
  const { title, subTitle, period, activities } = props;
  return (
    <section className="w-full flex flex-col items-start">
      <section className={`flex w-full text-left items-start flex-col md:flex-row mt-8`}>
        <Title name={title} company={subTitle} startDate={period.startDate} endDate={period.endDate} />
        <Subtitle company={subTitle} startDate={period.startDate} endDate={period.endDate} activities={activities} />
      </section>
    </section>
  );
}

export default TimeFrame;
