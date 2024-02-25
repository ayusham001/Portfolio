import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Icons from "./Icons";

const Details = ({
  position,
  company,
  address,
  duration,
  work,
  isLightMode,
}) => {
  const ref = useRef(null);
  const convertToBulletPoints = (text) => {
    return text.split("\n").map((line, index) => <li key={index}>{line}</li>);
  };
  const bulletPoints = Array.isArray(work) ? work : convertToBulletPoints(work);

  return (
    <li
      ref={ref}
      className="my-8 md:w-[80%] w-full mx-auto flex flex-col items-center justify-between"
    >
      <Icons isLightMode={isLightMode} reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
      >
        <h3 className="capitalize flex flex-wrap font-bold text-2xl sm:text-xl max-[640px]:text-lg">
          {position}&nbsp;<span className="text-sky-600">@{company}</span>
        </h3>
        <span
          className={`capitalize font-medium max-[640px]:text-sm ${
            isLightMode ? "text-sky-700" : "text-gray-400"
          } `}
        >
          {duration} | {address}
        </span>
        <ul className="list-disc list-inside md:text-sm">{bulletPoints}</ul>
      </motion.div>
    </li>
  );
};

export default function Experience({ isLightMode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mb-36 mt-10">
      <h2 className="font-bold text-5xl mb-20 w-full text-center md:text-3xl max-[640px]:text-2xl">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className={`absolute left-[36px] max-[770px]:left-0 top-0 w-[4px] h-full origin-top ${
            isLightMode ? "bg-sky-950" : "bg-orange-50"
          } `}
        />
        <div className="mx-2">
          <ul className="w-full flex flex-col items-start justify-evenly ml-4">
            <Details
              isLightMode={isLightMode}
              company="Decentraclasses"
              position="Frontend Developer"
              duration="Aug 2023 - Feb 2024"
              address="Ghaziabad, UP"
              work={`Spearheaded the design and development of user-friendly and visually appealing web interfaces for Decentraclasses, ensuring seamless user experiences and responsive layouts.
              Collaborated closely with cross-functional teams to translate design concepts into functional and interactive web applications, enhancing the overall user engagement and satisfaction.          
              Implemented innovative frontend solutions, leveraging cutting-edge technologies and best practices, to optimize website performance and deliver a modern, dynamic online learning environment.`}
            />
            <Details
              isLightMode={isLightMode}
              company="CodeQuotient"
              position="Full Stack Developer"
              duration="May 2023 - Aug 2023"
              address="Mohali, Punjab"
              work={`Actively participated in the CodeQuotient's SuperCoder Program, demonstrating exceptional coding skills and a passion for problem-solving.
                            Engaged in a challenging series of assessments, honing expertise in JavaScript and its frameworks.
                            Collaborated with fellow participants and mentors, fostering teamwork and effective communication while tackling complex coding projects and real-world software challenges.`}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
