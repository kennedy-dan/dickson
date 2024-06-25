import React from "react";
import { MdDataExploration } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { FaDatabase } from "react-icons/fa";
import { MdDataThresholding, MdPermDataSetting } from "react-icons/md";


const Services = () => {
  return (
    <div className="lg:mx-32 md:mx-24 px-4">
      <div className="md:flex justify-center text-center mt-32 ">
        <div>
          <p className="text-[#36a2c6] text-4xl font-bold">MY SERVICE</p>
          <p className="text-white mt-3 mb-2 text-xl">
            What I <span className="text-[#36a2c6]">Do</span>
          </p>
          {/* <p className="text-gray-600 text-sm">
            Criativo – Creative Agency & Portfolio Created Especially For Agency
            Business, Agency, Agency Portfolio, Agency{" "}
          </p> */}
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-16">
        <div class=" bg-gradient-to-r text-white text-center pt-6 pb-8 px-2  from-gray-900 to-slate-950 mb-4">
          <div className="flex justify-center pb-2">
            <MdDataExploration className="w-12 h-12 text-[#36a2c6]" />
          </div>
          <p className="text-base font-bold">BI Solutions </p>
          {/* <p className="text-sm text-gray-500 pt-2">
            rtfolio Created Especially For Agency
          </p> */}
        </div>
        <div class=" bg-gray-900 text-white text-center pt-6 pb-8 mt-4 px-2">
          <div className="flex justify-center pb-2">
            <MdPermDataSetting  className="w-12 h-12 text-[#36a2c6]" />
          </div>
          <p className="text-base font-bold">Data Engineering</p>
          {/* <p className="text-sm text-gray-500">
            rtfolio Created Especially For Agency
          </p> */}
        </div>
        <div class=" bg-gradient-to-r text-white text-center pt-6 pb-8  from-gray-900 to-slate-950 mb-4 px-2">
          <div className="flex justify-center pb-2">
            <FaDatabase className="w-12 h-12 text-[#36a2c6] " />
          </div>
          <p className="text-base font-bold">Process Automation (ERP) </p>
          {/* <p className="text-sm text-gray-500 ">
            rtfolio Created Especially For Agency
          </p> */}
        </div>
        <div class=" bg-gray-900 text-white text-center pt-4 pb-8 mt-4 px-2 ">
          <div className="flex justify-center pb-2">
            <MdDataThresholding className="w-12 h-12 text-[#36a2c6]" />
          </div>
          <p className="text-base font-bold">Data Analytics</p>
          {/* <p className="text-sm text-gray-500">
            rtfolio Created Especially For Agency
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
