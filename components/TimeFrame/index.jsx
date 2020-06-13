import React from "react";

import Group from "../Group";
import moment from "moment";
import { calendar, building } from "../../Assets/svg/dynamic-svg";

const Position = (props) => {
  return (
    <div className="flex flex-row w-full justify-between sm:flex-row sm:items-center md:w-1/3">
      <span>
        <h1 className="text-xl font-sans">{props.name}</h1>
        <span className="hidden md:flex">
          <h2 className="inline-block relative w-full md:self-start text-sm mt-1 font-sans text-gray-500">
            <span className="w-3 h-3 mt-1 absolute fill-current text-gray-400">{building}</span>
            <span className="ml-4">{props.company}</span>
          </h2>
        </span>
      </span>
      <div className="flex items-center justify-end">
        <h4 className="flex text-xs h-auto items-center font-sans tracking-wide mt-2 text-gray-600 md:hidden bg-gray-100 px-2 py-px rounded">
          <span className="w-3 h-full mr-1 fill-current text-gray-500">{calendar}</span>
          {props.startDate} - {props.endDate}
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

const Job = (props) => {
  return (
    <section className="flex flex-col md:ml-4 md:w-2/3">
      <div className="flex md:hidden">
        <h2 className="flex items-center text-sm mt-1 font-sans text-gray-500">
          <span className="w-3 mt-px mr-1 fill-current text-gray-400">{building}</span>
          {props.company}
        </h2>
      </div>
      <div className="hidden md:flex">
        <h4 className="text-xs  w-auto font-sans tracking-wide mt-2 text-gray-600 items-center h-full bg-gray-100 px-2 py-px rounded">
          <span className="inline-block w-3 h-full mr-1 fill-current text-gray-500">{calendar}</span>
          {props.startDate} - {props.endDate}
        </h4>
      </div>
      <Activities data={props.activities} company={props.company} />
    </section>
  );
};

const formatDate = (date) => (date !== "present" ? moment(date, "DD.MM.YYYY").format("MMM YYYY") : date);

function TimeFrame(props) {
  const { title, subTitle, period, activities } = props;
  return (
    <section className="w-full flex flex-col items-start">
      <section className={`flex w-full text-left items-start flex-col md:flex-row mt-8`}>
        <Position name={title} company={subTitle} startDate={formatDate(period.startDate)} endDate={formatDate(period.endDate)} />
        <Job company={subTitle} startDate={formatDate(period.startDate)} endDate={formatDate(period.endDate)} activities={activities} />
      </section>
    </section>
  );
}

export default TimeFrame;
