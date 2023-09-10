import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Icons from "./Icons";

const Details = ({
  contri,
  company,
  link,
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
        <h3 className="flex flex-wrap font-bold text-2xl sm:text-xl max-[640px]:text-lg">
          {contri}&nbsp;<span className="text-sky-600">@{company}</span>
        </h3>
        <span
          className={`break-all font-medium max-[640px]:text-sm ${
            isLightMode ? "text-sky-700" : "text-gray-400"
          } `}
        >
          <a href={link} target='_blank'>{link}</a>
        </span>
        <ul className="list-disc list-inside md:text-sm">{bulletPoints}</ul>
      </motion.div>
    </li>
  );
};

export default function OpenSource({ isLightMode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mb-36 mt-10">
      <h2 className="font-bold text-5xl mb-20 w-full text-center md:text-3xl max-[640px]:text-2xl">
      Open Source Contributions
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
            contri="Contributed to"
            company="Open Sauced"
            link="https://github.com/open-sauced/hot"
            work={`Contributed to the OpenSauced/hot project by integrating Million.js, a high-performance virtual DOM library, to enhance the project's rendering capabilities and improve user experience.
                Worked collaboratively with the project's maintainers and contributors, ensuring seamless integration of Million.js into the existing codebase.
                This contribution improved the overall performance and responsiveness of the OpenSauced/hot project, benefiting the open-source community.`}
          />
          <Details
            isLightMode={isLightMode}
            contri="Contributed to"
            company="Trigger.dev"
            link="https://github.com/triggerdotdev/trigger.dev"
            work={`Built comprehensive support for Express.js into the Trigger.dev platform, significantly enhancing its capabilities for handling complex Express.js applications.
                Collaborated with the Trigger.dev team to design and implement the integration, ensuring seamless compatibility with Express.js.
                Leveraged my expertise in JavaScript and web development to optimize performance and ensure a smooth user experience.
                This contribution extended the functionality of Trigger.dev, providing valuable support for developers working with Express.js applications.`}
            />
            <Details
                isLightMode={isLightMode}
                contri="Contributed to"
                company="Capgo"
                link="https://github.com/Cap-go/capacitor-inappbrowser"
                work={`Contributed to the Capgo project by implementing a feature that allows users to display a reload button in both iOS and Android versions of the application.
                    Collaborated with the Capgo development team to understand user requirements and design specifications.
                    Developed and tested the feature, ensuring cross-platform compatibility and a seamless user experience.
                    This contribution enhanced the usability of the Capgo application, providing users with a convenient way to refresh content.`}
            />


          </ul>
        </div>
      </div>
    </div>
  );
}
