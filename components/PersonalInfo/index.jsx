import React from "react";
import { mail, locationPin, code } from "../../Assets/svg/dynamic-svg";

const Picture = () => <img className="w-40 h-40 shadow-lg md:w-36 md:h-36 object-cover object-center rounded-full" src={`/profile.jpg`} />;

const Name = (props) => <h1 className="text-2xl font-serif tracking-wide lg:text-2xl lg:text-center">{props.name}</h1>;

const JobTitle = (props) => <span className="text-base font-sans font-normal tracking-wide lg:text-base">{props.title}</span>;

const InfoItem = (props) => (
  <li className="py-2 leading-relaxed px-4 flex items-center">
    <span className="w-3 h-3 mr-3">{props.icon}</span>
    <a href={props.link} target="_blank" className="hover:text-blue-400">
      {props.value}
    </a>
  </li>
);

const InfoList = (props) => {
  return (
    <ul className="text-xs divide-y py-4 rounded px-8 shadow md:shadow-none">
      <InfoItem icon={props.email.icon} link={`mailto:${props.email.value}`} value={props.email.value} />
      <InfoItem icon={props.location.icon} link={`https://goo.gl/maps/a86eeqDQjDMDjGDo7`} value={props.location.value} />
      <InfoItem icon={props.code.icon} link={props.code.value} value={`Github`} />
    </ul>
  );
};

function PersonalInfo(props) {
  const { name, title, email, github, location } = props.data;
  return (
    <section className="my-8 mb-20 flex flex-col items-center lg:flex-row lg:pl-0 lg:flex-col lg:my-0">
      <Picture />
      <section className="flex flex-col my-5 items-center font-serif lg:mt-3 lg:items-center lg:ml-0">
        <Name name={name} />
        <JobTitle title={title} />
      </section>
      <InfoList
        email={{ icon: mail, value: email }}
        location={{ icon: locationPin, value: location }}
        code={{ icon: code, value: github }}
      />
    </section>
  );
}

export default PersonalInfo;
