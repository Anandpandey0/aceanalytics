import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
const ExpertiseComponent = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row  w-5/6 mx-auto h-fit lg:h-[50vh] mt-24 justify-between">
      <div className="left   lg:w-2/5 w-full ">
        <h1 className="text-3xl p-2 font-bold">Expertise</h1>
        <div className="flex flex-col gap-4  mt-8  text-black">
          <div className="flex gap-2">
            <GoDotFill className="text-orange-500 text-3xl" />
            <p>
              Poltek Solutions believes in hard work and delivering the best
              results for clients.
            </p>
          </div>
          <div className="flex gap-2">
            <GoDotFill className="text-orange-500 text-3xl" />
            <p>
              Poltek Solutions believes in hard work and delivering the best
              results for clients.
            </p>
          </div>
          <div className="flex gap-2">
            <GoDotFill className="text-orange-500 text-3xl" />
            <p>
              Poltek Solutions believes in hard work and delivering the best
              results for clients.
            </p>
          </div>
          <div className="flex gap-2">
            <GoDotFill className="text-orange-500 text-3xl" />
            <p>
              Poltek Solutions believes in hard work and delivering the best
              results for clients.
            </p>
          </div>
        </div>
        <button className="bg-orange-500 p-2 px-8 py-2 mt-6  text-white font-semibold flex gap-2 items-center ">
          Discover more{" "}
          <span>
            <AiOutlineArrowRight className="mt-1" />
          </span>
        </button>
      </div>
      <div className="left   lg:w-2/5 rounded-3xl bg-gray-300 h-[50vh]">
        {/* <div className="border-2 border-solid border-black h-full"></div> */}
      </div>
    </div>
  );
};

export default ExpertiseComponent;
