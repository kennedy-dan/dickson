import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-between mx-32 mt-20">
      <div>
        <img src="/contact.svg" alt='' className="w-[400px] h-[400px]" />
      </div>
      <div>
        <div>
          <input
            className="py-2 px-3 w-[310px] text-sm md:ml-4 bg-black rounded-md text-gray-900 placeholder:text-gray-400 border-[#36a2c6] border outline-none sm:text-sm sm:leading-6"
            placeholder="Name"
          />
        </div>
        <div className='mt-5'>
          <input
            className="py-2 px-3 w-[310px] text-sm md:ml-4 bg-black rounded-md text-gray-900 placeholder:text-gray-400 border-[#36a2c6] border outline-none sm:text-sm sm:leading-6"
            placeholder="Email"
          />
          <div className='mt-5'>
            <textarea className="py-2 px-3 w-[310px] text-sm md:ml-4 bg-black rounded-md text-gray-900 placeholder:text-gray-400 border-[#36a2c6] border outline-none sm:text-sm sm:leading-6" rows={9} placeholder="Message"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
