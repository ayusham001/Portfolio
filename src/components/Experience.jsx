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
        transition={{ duration: 0.8, delay:0.5,type: "spring" }}
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
              company="CodeQuotient's SuperCoder Program"
              position="Full Stack Developer"
              duration="June 2023 - Present"
              address="Mohali, Punjab"
              work={`Actively participating in the CodeQuotient's SuperCoder Program, demonstrating exceptional coding skills and a passion for problem-solving.
                            Engaged in a challenging series of assessments, honing expertise in JavaScript and its frameworks.
                            Collaborated with fellow participants and mentors, fostering teamwork and effective communication while tackling complex coding projects and real-world software challenges.`}
            />
            <Details
              isLightMode={isLightMode}
              company="Google Developer Students Clubs"
              position="Marketing Manager"
              duration="Aug 2022 - June 2023"
              address=" Prayagraj, UP"
              work={`Managed and skillfully executed dynamic marketing strategies to increase awareness and enthusiastic participation in GDSC events and activities.
                        Developed and implemented digital marketing campaigns, including social media, email, and content marketing, resulting in increased engagement and event registrations.
                        Created compelling marketing collateral, such as flyers, and promotional materials, to effectively communicate GDSC's value proposition to the target audience`}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
