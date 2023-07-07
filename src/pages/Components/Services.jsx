import React from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
const Services = () => {
  return (
    <div className="flex flex-col lg:flex-row z-2 h-fit  lg:h-[45vh] mt-[-100px]  w-5/6 mx-auto bg-gray-600 rounded-3xl text-white">
      <div className=" lg:w-1/3  flex flex-col items-center    p-4 py-8 gap-4    px-8 ">
        <div className=" px-4 mt-8 py-4 rounded-lg text-white bg-orange-600 ">
          <HiOutlineTrophy className="text-6xl " />
        </div>
        <h1 className="font-bold text-xl">Brand Building </h1>
        <div className="text-center lg:text-left  lg:px-20 ">
          Our team of experts will work with you to craft a compelling brand
          story.
        </div>
      </div>
      <div className=" lg:w-1/3  flex flex-col items-center  p-4 py-8 gap-4     px-8 ">
        <div className=" px-4 mt-8 py-4 rounded-lg text-white bg-orange-600 ">
          <CiGlobe className="text-6xl " />
        </div>
        <h1 className="font-bold text-xl">Brand Building </h1>
        <div className="text-center lg:text-left lg:px-20">
          Our team of experts will work with you to craft a compelling brand
          story.
        </div>
      </div>
      <div className="lg:w-1/3  flex flex-col items-center   p-4  py-8 gap-4  px-8  ">
        <div className=" px-4 mt-8 py-4 rounded-lg text-white bg-orange-600 ">
          <FiSettings className="text-6xl " />
        </div>
        <h1 className="font-bold text-xl">Brand Building </h1>
        <div className="text-center lg:text-left lg:px-20 ">
          Our team of experts will work with you to craft a compelling brand
          story.
        </div>
      </div>
    </div>
  );
};

export default Services;
