import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Icons from "./Icons";

const Details = ({
  contri,
  company,
  link,
  work,
  isLightMode,
  Subject,
}) => {
  const ref = useRef(null);
  const convertToBulletPoints = (text) => {
    return text.split("\n").map((line, index) => <li key={index}>{line}</li>);
  };
  const bulletPoints = Array.isArray(work) ? work : convertToBulletPoints(work);

  return (
    <li
      ref={ref}
      className="my-8 md:w-[80%] w-full mx-auto flex flex-col  justify-between"
    >
      <Icons isLightMode={isLightMode} reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, delay:0.5,type: "spring" }}
      >
        <h3 className="flex flex-wrap font-bold text-2xl sm:text-xl max-[640px]:text-lg">
          {contri}&nbsp;<span className="text-sky-600">@{company}:&nbsp;</span>
          <span className={`break-all font-medium max-[640px]:text-sm  ${isLightMode ? "text-sky-700" : "text-gray-400"}`}>{Subject}</span>
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
            Subject="Integrated Million.js into OpenSauced/hot Project"
            link="https://github.com/open-sauced/hot"
            work={`Contributed to the OpenSauced/hot project by integrating Million.js, a high-performance virtual DOM library, to enhance the project's rendering capabilities and improve user experience.
                Worked collaboratively with the project's maintainers and contributors, ensuring seamless integration of Million.js into the existing codebase.
                This contribution improved the overall performance and responsiveness of the OpenSauced/hot project, benefiting the open-source community.`}
          />
            <Details
                isLightMode={isLightMode}
                contri="Contributed to"
                company="Capgo"
                Subject="Added a blog article for Quasar configuration."
                link="https://github.com/Cap-go/capacitor-inappbrowser"
                work={`Authored an in-depth blog article discussing Quasar configuration, highlighting key aspects.
                    Configuration best practices and guidelines for Quasar projects.
                    Step-by-step instructions for optimizing performance through proper configuration settings.
                    Troubleshooting common configuration-related issues and their solutions.`}
            />
            <Details
                isLightMode={isLightMode}
                contri="Contributed to"
                company="Capgo"
                Subject="Added an auto deploy Supabase migration on main merge"
                link="https://github.com/Cap-go/capacitor-inappbrowser"
                work={`Implemented an automated process for Supabase migrations to deploy seamlessly upon merging to the main branch.
                Integrated a streamlined deployment mechanism, ensuring smooth migration execution following main branch merges.
                Worked collaboratively with the development team to devise and implement this automated deployment process.
                Successfully enhanced the development workflow by reducing manual intervention in the migration process, ensuring efficient and error-free deployment of changes to the Supabase database.`}
            />
            <Details
                isLightMode={isLightMode}
                contri="Contributed to"
                company="Capgo"
                Subject="Added option to display reload button in IOS and Android."
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
