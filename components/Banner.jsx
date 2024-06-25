import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#030c0f] text-white text-[10px] flex items-center md:justify-around justify-between w-full lg:px-20 px-4 py-10 mt-32">
      <div className="md:flex space-x-1 items-center ">
      <img src="/powerbi.png" alt='' className="lg:w-20 lg:h-20 w-5 h-5 object-contain" />
       
        <p className='md:block hidden' >PowerBi</p>
      </div>
      <div className="md:flex space-x-1 items-center ">
      <img src="/python.png" alt='' className="lg:w-20 lg:h-20 w-5 h-5 object-contain" />

        <p className='md:block hidden'>Python</p>
      </div>

      <div className="md:flex space-x-1 items-center ">
        <img src="/datalake.png " alt='' className="lg:w-20 lg:h-20 w-5 h-5object-contain" />

        <p className='md:block hidden'>Data Lake</p>

      </div>
      <div>
        <img src="/sql.png" alt='' className="lg:w-20 lg:h-20 w-5 h-5 object-contain" />
      </div>
      <div className="md:flex space-x-1 items-center ">
        <img src="/bricks.png" alt='' className="lg:w-20 lg:h-20 w-5 h-5 object-contain" />

        <p className='md:block hidden'>Databricks</p>
      </div>

      <div className="md:flex space-x-1 items-center ">
        <img src="/azure.png" alt='' className="lg:w-20 lg:h-20 w-5 h-5 object-contain" />

        <p className='md:block hidden'>azure synapse analytics</p>
      </div>
      {/* <div className="grid grid-cols-4 gap-3"></div> */}
    </div>
  );
};

export default Banner;
