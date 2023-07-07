import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
const PersonalisedComponent = () => {
  return (
    <div className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row-reverse  w-5/6 mx-auto h-fit lg:h-[60vh] mt-24 justify-between">
      <div className="left   lg:w-2/5 w-full ">
        <h1 className="text-5xl p-2 px-3 font-bold">Personalised Solution</h1>
        <div className="flex flex-col gap-4  mt-8  text-black">
          <div className="flex gap-2">
            <GoDotFill className="text-orange-500 text-3xl" />
            <p>
              Poltek Solutions understands that every political campaign is
              unique.
            </p>
          </div>
          <div className="flex gap-2">
            <GoDotFill className="text-orange-500 text-3xl" />
            <p>
              The team provides personalized solutions tailored to meet specific
              needs.
            </p>
          </div>
          <div className="flex gap-2">
            <GoDotFill className="text-orange-500 text-3xl" />
            <p>
              We works closely with clients to understand campaign objectives.
            </p>
          </div>
          <div className="flex gap-2">
            <GoDotFill className="text-orange-500 text-3xl" />
            <p>The team develops a strategy that aligns with client goals.</p>
          </div>
          <div className="flex gap-2">
            <GoDotFill className="text-orange-500 text-3xl" />
            <p>
              Poltek Solutions &apos; personalized approach ensures the best.
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
      <div className="left   lg:w-2/5 rounded-3xl bg-gray-300 h-[50vh] ">
        {/* <div className="border-2 border-solid border-black h-full"></div> */}
      </div>
    </div>
  );
};

export default PersonalisedComponent;
