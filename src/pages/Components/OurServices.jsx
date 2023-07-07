import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const OurServices = () => {
  return (
    <div className="bg-pink-200 h-fit lg:h-[100vh]">
      <h1 className="text-5xl text-center mt-16 lg:mt-36 font-semibold text-orange-600 p-2">
        Our Services
      </h1>
      <div className=" lg:w-1/2 mt-8 h-5/6 mx-auto grid lg:grid-cols-2 lg:grid-rows-2 gap-4">
        <div className="bg-white p-4 rounded-3xl px-8">
          <div className="bg-gray-300 w-1/4 h-[80px] rounded-full mx-auto"></div>
          <h1 className="text-orange-500 text-2xl text-center mt-2 font-semibold">
            Political Intel Report
          </h1>
          <p className="text-center mt-2 font-medium">
            A thorough study of the political landscape of the targeted
            zone/constituency....
          </p>
          <button className="bg-orange-500 text-white px-8 py-1 mx-auto flex justify-center mt-4">
            Read more
            <AiOutlineArrowRight className="mt-1" />
          </button>
        </div>
        <div className="bg-white p-4 rounded-3xl px-8">
          <div className="bg-gray-300 w-1/4 h-[80px] rounded-full mx-auto"></div>
          <h1 className="text-orange-500 text-2xl text-center mt-2 font-semibold">
            Political Intel Report
          </h1>
          <p className="text-center mt-2 font-medium">
            A thorough study of the political landscape of the targeted
            zone/constituency....
          </p>
          <button className="bg-orange-500 text-white px-8 py-1 mx-auto flex justify-center mt-4">
            Read more
            <AiOutlineArrowRight className="mt-1" />
          </button>
        </div>
        <div className="bg-white p-4 rounded-3xl px-8">
          <div className="bg-gray-300 w-1/4 h-[80px] rounded-full mx-auto"></div>
          <h1 className="text-orange-500 text-2xl text-center mt-2 font-semibold">
            Political Intel Report
          </h1>
          <p className="text-center mt-2 font-medium">
            A thorough study of the political landscape of the targeted
            zone/constituency....
          </p>
          <button className="bg-orange-500 text-white px-8 py-1 mx-auto flex justify-center mt-4">
            Read more
            <AiOutlineArrowRight className="mt-1" />
          </button>
        </div>
        <div className="bg-white p-4 rounded-3xl px-8">
          <div className="bg-gray-300 w-1/4 h-[80px] rounded-full mx-auto"></div>
          <h1 className="text-orange-500 text-2xl text-center mt-2 font-semibold">
            Political Intel Report
          </h1>
          <p className="text-center mt-2 font-medium">
            A thorough study of the political landscape of the targeted
            zone/constituency....
          </p>
          <button className="bg-orange-500 text-white px-8 py-1 mx-auto flex justify-center mt-4">
            Read more
            <AiOutlineArrowRight className="mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
