import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Senior Software Developer"
              company="Brandworks Global FZCO"
              companyLink="https://habeebiglobal.com"
              time="2023-04 to Present"
              address="DAFZA, DUBAI"
              work="Led the process of launching new startups, 
              driving growth and success. Provided leadership and guidance in IT 
              projects, fostering team success"
            />

            <Details
              position="Software Developer & Team Lead"
              company="Retrostacks FZCO"
              companyLink="http://retrostacks.com/"
              time="2022-09 to 2023-04"
              address="DAFZA, DUBAI"
              work="Established and nurtured client 
              relationships, providing regular project 
              status updates and deliverable reports.Engineered customized APIs to seamlessly 
              integrate with IoT devices."
            />

            <Details
              position="Software Developer"
              company="Finekube"
              companyLink="https://amazon.com"
              time="2021-03 to 2022-09"
              address="Kochi Kerala, India"
              work="Designed and implemented RESTful APIs to 
              support the functionality of chat bots and 
              mobile applications.Identified critical vulnerabilities that posed 
              a significant threat to the security of 
              payment and sensitive information on 
              different platform."
            />

            <Details
              position="Back-End Developer"
              company="Calcus Technologies"
              companyLink="https://calcus.in/"
              time="2019-06 to 2021-03"
              address="Thrissur Kerala, India"
              work="Created and implemented back-end 
              components including stored procedures, 
              REST APIs, and Cron Jobs for a customized 
              Laboratory Information Management 
              System (LIMS) software."
            />

            {/* <Details
              position="Teaching Assistant"
              company="MIT"
              companyLink="https://mit.edu"
              time="Fall 2018"
              address="Massachusetts Ave, Cambridge, MA."
              work="Assisted in teaching a course on computer programming, held office
              hours to help students with assignments, and graded exams and
              assignments."
            /> */}
          </ul>
        </div>
        </div>
    );
};

export default Experience;
