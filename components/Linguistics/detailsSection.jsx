import React from "react";
import { motion } from "framer-motion";
import { read, write, hear, speak, interaction } from "../../Assets/svg/dynamic-svg";

const Skill = (props) => (
  <motion.div
    variants={{
      open: {
        scale: 1,
      },
      collapsed: {
        scale: 0,
      },
    }}
    title={props.title}
    className="flex items-center mr-4 mt-4">
    <span className="w-8 h-8 flex fill-current text-gray-500 mr-2 border border-gray-500 rounded-full p-1">{props.icon}</span>
    <span>{props.value}</span>
  </motion.div>
);

const DetailsSection = (props) => (
  <div className="py-3 text-sm">
    {props.level === "native" ? (
      <span>{props.description}</span>
    ) : (
      <motion.div
        variants={{
          open: {
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
          },
        }}
        className="flex flex-wrap">
        <Skill key={`language-skill-0`} icon={hear} title="listening" value={props.understanding?.listening} />
        <Skill key={`language-skill-1`} icon={read} title="reading" value={props.understanding?.reading} />
        <Skill key={`language-skill-2`} icon={interaction} title="speaking interaction" value={props.speaking?.interaction} />
        <Skill key={`language-skill-3`} icon={speak} title="speaking production" value={props.speaking?.production} />
        <Skill key={`language-skill-4`} icon={write} title="writing" value={props.writing} />
      </motion.div>
    )}
  </div>
);

export default DetailsSection;
