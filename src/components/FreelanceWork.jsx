import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Icons from "./Icons";

const Details = ({ contri, company, link, work, isLightMode }) => {
    const ref = useRef(null);

    // Function to convert text to bullet points and handle hyphen-prefixed lines
    const convertToBulletPoints = (text) => {
        return text.split("\n").map((line, index) => {
            // Check if the line starts with a hyphen
            const check = line.split("&")[0].trim();
            console.log('kokokkokok', check) // Remove the hyphen and trim whitespace
            if (check === 'sub') {
                const content = line.split("&")[1].trim(); // Remove the hyphen and trim whitespace
                return <li key={index} className="list-none ml-6">- {content}</li>;
            } else {
                return <li key={index}>{line}</li>;
            }
        });
    };

    // Convert the work text to bullet points
    const bulletPoints = Array.isArray(work) ? work : convertToBulletPoints(work);

    return (
        <li
            ref={ref}
            className="my-8 md:w-[80%] w-full mx-auto flex flex-col justify-between"
        >
            <Icons isLightMode={isLightMode} reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            >
                <h3 className="flex flex-wrap font-bold text-2xl sm:text-xl max-[640px]:text-lg">
                    {contri}&nbsp;<span className="text-sky-600">@{company}&nbsp;</span>
                </h3>
                <span
                    className={`break-all font-medium max-[640px]:text-sm ${isLightMode ? "text-sky-700" : "text-gray-400"
                        } `}
                >
                    <a href={link} target="_blank" rel="noreferrer">
                        {link}
                    </a>
                </span>
                <ul className="list-disc list-inside md:text-sm">
                    {bulletPoints}
                </ul>
            </motion.div>
        </li>
    );
};


export default function Freelance({ isLightMode }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className="mb-36 mt-10">
            <h2 className="font-bold text-5xl mb-20 w-full text-center md:text-3xl max-[640px]:text-2xl">
                Freelance Work
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%]">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className={`absolute left-[36px] max-[770px]:left-0 top-0 w-[4px] h-full origin-top ${isLightMode ? "bg-sky-950" : "bg-orange-50"
                        } `}
                />
                <div className="mx-2">
                    <ul className="w-full flex flex-col items-start justify-evenly ml-4">
                        <Details
                            isLightMode={isLightMode}
                            contri="Freelance for"
                            company="XMR Casino"
                            link=""
                            work={`Developed a platform for XMR Casino, a premier online gaming platform offering a diverse range of casino games and entertainment options.
                                Designed an engaging and user-friendly interface to enhance player experience and streamline navigation across various game categories.
                                Implemented features such as real-time game updates, secure payment gateways, and interactive game tutorials to enrich the user experience.
                                Integrated various casino games, including slots, table games, and live dealer options, ensuring a comprehensive and immersive gaming environment.
                                Delivered a robust and visually appealing online presence that aligns with XMR Casino's goal of providing top-notch entertainment and a seamless gaming experience.`}
                        />
                        <Details
                            isLightMode={isLightMode}
                            contri="Freelance for"
                            company="Abhiyaan Wealth"
                            // link="https://www.abhiyaanwealth.com/"
                            work={`Developed a comprehensive website for Abhiyaan Wealth, a financial advisory firm focused on investments and wealth creation.
                                Designed a user-friendly interface with clean design and intuitive navigation to enhance the user experience.
                                Implemented custom features to highlight the company's expertise, including sections for financial planning, investment insights, and client testimonials.
                                Created a suite of financial calculators, including:
                                sub&SIP / Step Up SIP / Lumpsum Calculator for estimating returns on regular and one-time investments.
                                sub&Retirement Calculator to plan savings for early retirement.
                                sub&SWP Calculator for tracking systematic withdrawals from mutual funds.
                                sub&Home Buy vs Rent Calculator to compare financial effects of renting versus buying a house.
                                sub&Loan Repayment vs Investment Calculator to decide between investing extra money or paying off loans early.
                                sub&Goal Based SIP Calculator for planning investments to achieve specific financial goals.
                                Delivered a polished, professional online presence aligned with Abhiyaan Wealth's mission to promote financial literacy and assist clients in their wealth creation journey.`}
                        />
                        <Details
                            isLightMode={isLightMode}
                            contri="Freelance for"
                            company="Fint"
                            Subject="Added an auto deploy Supabase migration on main merge"
                            link="https://fintapp.in/"
                            work={`Developed a comprehensive website for a financial company, focusing on delivering an all-in-one solution for Gen Z's financial needs.
                                Designed an intuitive interface with modern design elements and integrated animations using libraries such as Framer Motion and Aceternity Ui to enhance user engagement and bring the website to life.
                                Implemented interactive features and animations that highlight financial education, investment options, and dynamic elements, providing users with a visually appealing experience.
                                Delivered a functional and impactful platform aligned with the company's mission to promote financial literacy and empower the younger generation.`}
                        />
                        <Details
                            isLightMode={isLightMode}
                            contri="Freelance for"
                            company="Wealthup"
                            Subject="Added option to display reload button in IOS and Android."
                            link="https://www.wealthup.me/"
                            work={`Developed and integrated the MFcentral service into the Wealthup platform to enhance user financial management.
                                Implemented a seamless process to retrieve and store user details from MFcentral, ensuring accurate data handling and security.
                                Designed and developed features to calculate and display financial details, allowing users to track, manage, and analyze their investments.
                                Created interactive graphs and visualizations to present financial data in an intuitive and engaging manner.
                                Delivered a comprehensive solution that enables users to efficiently manage their financial portfolios and gain insights through visual data representation.`}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
