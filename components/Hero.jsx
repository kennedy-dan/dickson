import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import { IoMail } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="md:flex md:px-0 px-4  justify-center items-center w-full">
      <div className="md:block flex justify-center">
        <img
          src="/profile.png "
          alt=''
          className="w-60 h-60 object-cover rounded-full"
        />
      </div>
      <div className="md:ml-5 md:mt-0 mt-10 md:text-left text-center ">
        <p className="text-[#36a2c6]">About Me</p>
        <p className="text-white text-2xl">Hello, I Am Daniel</p>
        <p className="text-[#36a2c6] text-2xl underline underline-offset-[10px]">
          Dickson
        </p>
        <p className="text-sm text-gray-500 mt-6">
          As a seasoned Business Intelligence Specialist, I bring <br /> a
          wealth of expertise in crafting cutting-edge solutions
          <br /> at the intersection of technology and business strategy.
        </p>
        <div className="flex md:justify-start  justify-center mt-4 text-[#36a2c6]">
          <div>
            <BsTwitterX />
          </div>
          <Link href="https://www.linkedin.com/in/ddanielnet">
            <div className="ml-2">
              <FaLinkedinIn />
            </div>
          </Link>

          <div className="ml-2">
            <a href="mailto:dickson.daniel.nz@gmail.com">
              <IoMail />
            </a>
          </div>
        </div>
        {/* <p className="text-gray-500 text-sm">
          Creative Agency & Portfolio Created Especially For <br/> Agency Business,
          Agency, Agency Portfolio, Agency Theme, Creative, Creative Agency,
          Design Agency,
        </p> */}
      </div>
    </div>
  );
};

export default Hero;
