import React from "react";
import { chevronDown, read, write, hear, speak, interaction } from "../../Assets/svg/dynamic-svg";
import { motion, AnimatePresence } from "framer-motion";

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
          collapsed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
          },
        }}
        className="flex flex-wrap">
        <Skill key={0} icon={hear} title="listening" value={props.understanding?.listening} />
        <Skill key={1} icon={read} title="reading" value={props.understanding?.reading} />
        <Skill key={2} icon={interaction} title="speaking interaction" value={props.speaking?.interaction} />
        <Skill key={3} icon={speak} title="speaking production" value={props.speaking?.production} />
        <Skill key={4} icon={write} title="writing" value={props.writing} />
      </motion.div>
    )}
  </div>
);

function Language(props) {
  const { index, expanded, setExpanded, icon, title, level, description, understanding, speaking, writing } = props;

  const isOpen = index === expanded;

  const wrapper = {
    open: { opacity: 1, height: "auto", transition: { delayChildren: 0.2, duration: 0.3 } },
    collapsed: { opacity: 0, height: 0, transition: { delay: 0.2, duration: 0.3 } },
  };

  return (
    <div className="flex flex-col shadow p-2 rounded-lg mt-8">
      <buttton onClick={() => setExpanded(isOpen ? false : index)} className="flex select-none cursor-pointer items-center">
        <span className="w-5 h-5 flex">{icon}</span>
        <h1 className="text-xl font-sans capitalize ml-2">{title}</h1>
        <span className="flex items-center px-2 rounded capitalize flex text-xs text-gray-600 ml-2 bg-gray-100">{level}</span>
        <motion.span
          animate={isOpen ? "open" : "collapsed"}
          variants={{ collapsed: { rotate: 0 }, open: { rotate: 180 } }}
          transition={{ duration: 0.5 }}
          className="w-5 h-5 flex ml-auto text-gray-600">
          {chevronDown}
        </motion.span>
      </buttton>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            initial="collapsed"
            animate="open"
            exit="collapsed"
            transition={{ ease: [0.04, 0.62, 0.23, 0.98] }}
            variants={wrapper}>
            <motion.div variants={{ collapsed: { opacity: 0 }, open: { opacity: 1 } }} transition={{ duration: 0.3 }}>
              <DetailsSection level={level} description={description} understanding={understanding} speaking={speaking} writing={writing} />
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Language;
