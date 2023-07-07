import React from "react";
import { AiFillSignal } from "react-icons/ai";
import { BsFillTrophyFill } from "react-icons/bs";
import BookAppointment from "./BookAppointment";

const FrontPage = () => {
  return (
    <div className="w-full h-full  bg-gray-500 " id="home ">
      <div className="lg:w-5/6 w-[95vw]  mx-auto  text-white   py-24 lg:mt-0 h-[100vh] lg:h-[90vh]   ">
        <div className="flex lg:flex-row flex-col gap-6 ">
          <div className="lg:w-1/2 lg:h-1/2  lg:my-auto lg:mt-16  ">
            <h1 className="text-4xl font-bold">Poltek Solution</h1>
            <h3 className="text-lg font-semibold mt-8 mb-2">
              Political Advantage You Need. 72% Winning Rate
            </h3>
            <hr className=" lg:mt-10 w-2/3" />
            <div className="flex flex-col lg:flex-row mt-8 gap-6">
              <div className="flex gap-4 items-center">
                <BsFillTrophyFill className="text-5xl " />
                <div>
                  <h1 className="text-2xl font-semibold">72%</h1>
                  <h3>Winning Rate</h3>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <AiFillSignal className="text-5xl " />
                <div>
                  <h1 className="text-2xl font-semibold">100%</h1>
                  <h3>Winning Rate</h3>
                </div>
              </div>
            </div>
            <div className="flex  py-4 flex-col gap-4 lg:flex-row mt-12 w-full lg:w-4/5 lg:justify-between ">
              <div className=" h-full lg:w-1/2 w-2/3 text-center  bg-orange-600 text-white p-1 lg:p-2 rounded-md">
                <BookAppointment />
              </div>
              <button className=" h-full p-3 w-2/3 lg:w-1/2 text-center lg:p-4 border-2 border-solid border-orange-600 hover:border-orange-800 px-18 rounded-md">
                Discover Me
              </button>
            </div>
          </div>
        </div>
        {/* <BookAppointment /> */}
        {/* <Services /> */}
      </div>
    </div>
  );
};

export default FrontPage;
