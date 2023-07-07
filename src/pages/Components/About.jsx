import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-orange-500 text-5xl font-semibold text-center p-4 px-10">
        About Us
      </h1>
      <div className="flex flex-col lg:flex-row h-fit lg:h-[80vh] w-5/6 gap-4 mx-auto">
        <div className=" lg:w-1/2 ">
          <div className="lg:w-2/3 h-fit mt-14 ">
            <p>
              We are a team of young professionals, led by IIT graduates, having
              vast experience of political consultation and execution of
              electoral campaigns.
            </p>
            <p className="mt-10">
              Our founders have held leadership positions at most of the
              renowned political consultancy firms like I-PAC, Mindshare and ABM
              Our team members have played important roles in the designing and
              execution of some of the biggest political campaigns, like West
              Bengal 2021, Goa 2022, Punjab 2022 and Uttar Pradesh 2022
            </p>
            <ul className="list-disc ml-4 mt-10">
              <li>Telangana | BRS | 119 AC</li>
              <li>Rajasthan | INC | 100 AC</li>
              <li>WB | AITC | 44 AC</li>
              <li>Orissa | BJP | 7AC</li>
              <li>UP | BJP | 8 AC</li>
              <li>Goa | INC | 5 AC</li>
              <li>Uk | INC | 5 AC</li>
              <li>Punjab|Akali|1AC</li>
            </ul>
          </div>
        </div>
        <div className=" lg:w-1/2 h-[70vh] w-full">
          <div className="bg-gray-300 h-1/2 lg:w-1/2 mx-auto my-24 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
