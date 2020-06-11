import React from "react";
import { mail, locationPin, code } from "../../Assets/svg/dynamic-svg";

/**
 * TODO: need contact info somewhere here; maybe right-side?
 * need email, phone, github, linkedin(?)
 * maybe takeout the workplace from here
 * */

const Picture = () => <img className="w-32 h-32 shadow-lg md:w-36 md:h-36 object-cover object-center rounded-full" src={`/profile.jpg`} />;

const Name = (props) => <h1 className="text-2xl font-sans font-bold lg:text-2xl lg:text-center">{props.name}</h1>;

const JobTitle = (props) => <span className="text-base font-sans font-normal">{props.title}</span>;

const InfoItem = (props) => (
  <li className="py-2 px-4 flex items-center">
    <span className="w-3 h-3 mr-3">{props.icon}</span>
    {props.value}
  </li>
);

const InfoList = (props) => {
  return (
    <ul className="text-xs divide-y py-8">
      <InfoItem icon={props.email.icon} value={props.email.value} />
      <InfoItem icon={props.location.icon} value={props.location.value} />
      <InfoItem
        icon={props.code.icon}
        value={
          <a href={props.code.value} target="_blank">
            Github
          </a>
        }
      />
    </ul>
  );
};

function PersonalInfo(props) {
  const { name, title, email, github, location } = props.data;
  return (
    <section className="my-8 flex flex-col items-center lg:flex-row lg:pl-0 lg:flex-col lg:my-0">
      <Picture />
      <section className="flex flex-col mt-3 items-center font-serif lg:mt-3 lg:items-center lg:ml-0">
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
