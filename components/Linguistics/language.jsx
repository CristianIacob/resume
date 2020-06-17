import React from "react";
import { chevronDown, chevronUp, read, write, hear, speak, interaction } from "../../Assets/svg/dynamic-svg";
import { motion, AnimatePresence } from "framer-motion";

const Skill = (props) => (
  <motion.div whileHover={{ scale: 1.1 }} title={props.title} className="flex items-center mr-4 mt-4">
    <span className="w-8 h-8 flex fill-current text-gray-500 mr-2 border border-gray-500 rounded-full p-1">{props.icon}</span>
    <span>{props.value}</span>
  </motion.div>
);

const DetailsSection = (props) => (
  <motion.div className="py-3 text-sm flex flex-wrap">
    <Skill key={0} icon={hear} title="listening" value={props.understanding?.listening || "native"} />
    <Skill key={1} icon={read} title="listening" value={props.understanding?.reading || "native"} />
    <Skill key={2} icon={interaction} title="speaking interaction" value={props.speaking?.interaction || "native"} />
    <Skill key={3} icon={speak} title="speaking production" value={props.speaking?.production || "native"} />
    <Skill key={4} icon={write} title="writing" value={props.writing || "native"} />
  </motion.div>
);

function Language(props) {
  const { i, expanded, setExpanded, icon, title, level, understanding, speaking, writing } = props;
  const isOpen = i === expanded;

  const wrapper = {
    open: { opacity: 1, height: "auto", transition: { delayChildren: 0.3, duration: 0.5 } },
    collapsed: { opacity: 0, height: 0, transition: { duration: 0.2, delay: 0.2 } },
  };

  return (
    <div className="flex flex-col shadow p-2 rounded-lg mt-8">
      <buttton onClick={() => setExpanded(isOpen ? false : i)} className="flex select-none cursor-pointer items-center">
        <span className="w-5 h-5 flex">{icon}</span>
        <h1 className="text-xl font-sans capitalize ml-2">{title}</h1>
        <span className="flex items-center px-2 rounded capitalize flex text-xs text-gray-600 ml-2 bg-gray-100">{level}</span>
        <motion.span
          animate={isOpen ? "open" : "collapsed"}
          variants={{ collapsed: { rotate: 0, transition: { duration: 0.3 } }, open: { rotate: 180, transition: { duration: 0.5 } } }}
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
              <DetailsSection understanding={understanding} speaking={speaking} writing={writing} />
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Language;
