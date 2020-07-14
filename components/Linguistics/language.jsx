import React from "react";
import { chevronDown } from "../../Assets/svg/dynamic-svg";
import { motion, AnimatePresence } from "framer-motion";
import DetailsSection from "./detailsSection";

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
        <span className="flex items-center px-2 rounded capitalize text-xs text-gray-700 ml-2 bg-gray-100">{level}</span>
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
