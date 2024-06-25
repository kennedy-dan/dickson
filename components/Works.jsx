import React,{useState} from "react";
import { MdDataExploration } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { FaDatabase } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

import { MdDataThresholding, MdPermDataSetting } from "react-icons/md";
const Card = ({ project, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`font-[Poppins] rounded-lg p-4 transition-transform transform ${
        isHovered ? "scale-105" : "scale-100"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative ">
        <a href="https://home-frontend.vercel.app/">
          <div>
            <img
              src={project.image}
              className="h-[200px] w-[670px] object-cover"
              alt=""
            />
          </div>
        </a>
        <div
          className={`bg-gray-800 flex items-center justify-center px-2 absolute inset-0 ${
            isHovered ? "opacity-90" : "opacity-0"
          } transition-opacity`}
        >
          <div>
            <p className="text-[#fa9a1c] font-bold text-center">
              {project.info}
            </p>
            <p className="text-[#fa9a1c] text-[10px] font-bold text-center">
              {project.desc}
            </p>
            {project.link &&   <div className="flex justify-center">
              <a
                href={`${project.link}`}
                className="rounded-lg py-2 px-2 outline-[#fa9a1c] outline-double mt-2"
              >
                
                <AiOutlineLink className="text-[#fa9a1c] text-center" />
              </a>
            </div>}
            
          
          </div>
        </div>
      </div>
    </div>
  );
};
const Works = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  }
  const projects = [
    {
      image: "/images/marketing.jpeg",
      info: "Marketing Campaign analysis ",
      desc: "An in dept analysis showcasing users interaction with marketing campaigns on various social media platforms details of the dashboard can be seen",
      link: "https://app.powerbi.com/view?r=eyJrIjoiNGE1ZDcwMWUtMTQyYi00NDY4LThmYTUtNWRjZTQzODM2MDRhIiwidCI6IjJmYWZhMTU2LTZjYTctNDFiNi05NmUxLTRkOWZjNDUyOWFhYiJ9",
    },
    {
      image: "/images/onlinestore.png",
      info: "Online Store Analysis ",
      desc: "An overview analysis of three major department in a sales store, showcasing the performance and its impact on the business in a detailed summary imbibing the principles of data story-telling techniques, details of the dashboard can be seen",
      link: "https://app.powerbi.com/view?r=eyJrIjoiNGUzZDhkN2UtYmVlNC00Yzk0LWIxOWUtMmMzODVmYzA0OGQ4IiwidCI6IjJmYWZhMTU2LTZjYTctNDFiNi05NmUxLTRkOWZjNDUyOWFhYiJ9&pageName=ReportSection",
    },
    {
      image: "/md.png",
      info: "Built a KPI monitoring dashboard ",
      desc: "that fetch data from all organisation ERP and monitoring platform. With that, the decision makers of the business was able to see and monitor the health of the organisation using the balance score card , where all employee's KPI is fed into all perspectives.",
      // link: "https://app.powerbi.com/view?r=eyJrIjoiNGUzZDhkN2UtYmVlNC00Yzk0LWIxOWUtMmMzODVmYzA0OGQ4IiwidCI6IjJmYWZhMTU2LTZjYTctNDFiNi05NmUxLTRkOWZjNDUyOWFhYiJ9&pageName=ReportSection",

    },
    {
      image: "/bim.png",
      info: "End to end implementation of Business intelligence solution ",
      desc: "including building of an EDW leveraging on Azure technologies and data bricks. Worked on integration of various ERPs like Zoho Helpdesk, MS Dynamics (Nav 17) and server monitoring application (Ops Manager) with Azure data lake.",
    },
    // {
    //   image: myArt,
    //   info: "Web app for buying art ",
    //   link: "https://myartstocks.com/"
    // },
  ];
  return (
    <div className="lg:mx-32 md:mx-24 px-4">
         <div className="md:flex justify-center text-center mt-32 ">
        <div>
          <p className="text-[#36a2c6] text-4xl font-bold">MY WORKS</p>
          {/* <p className="text-white mt-3 mb-2 text-xl">
            What I <span className="text-[#36a2c6]">Do</span>
          </p> */}
          <p className="text-gray-600 text-sm">
            Criativo – Creative Agency & Portfolio Created Especially For Agency
            Business, Agency, Agency Portfolio, Agency{" "}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-1 ">
        {projects.map((project, index) => (
          <Card
            key={index}
            project={project}
            isHovered={hoveredCard === index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
