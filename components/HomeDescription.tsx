"use client";

import { useTypeWriter } from "@/hooks/use-type-writer";
import { useEffect, useState } from "react";
import { motion } from "motion/react";  

const HomeDescription = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const description =
    " I design and build scalable software solutions, develop robust backend systems, solve complex problems, and create intuitive user experiences. Passionate about turning ideas into functional and impactful applications using modern technologies.";
  const { displayedText, isComplete } = useTypeWriter(description, 30);

  useEffect(()=>{
    setHasLoaded(true)
  },[])

  return (
    <motion.p
      className="w-auto font-normal leading-7 mb-6 min-h-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {hasLoaded ? (
        displayedText.split("").map((char, index) => (
          <motion.span key={index} initial={{ color: "rgb(156 163 175)" }}
            animate={{color:isComplete?"rgb(255 255 255)":"rgb(156 163 175)"}}
            transition={{duration:0.5, delay:index * 0.03}}
          >
            {char}
          </motion.span>
        ))
      ) : (
        <span>{description}</span>
      )}
    </motion.p>
  );
};

export default HomeDescription;
