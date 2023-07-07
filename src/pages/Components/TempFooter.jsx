import React from "react";
import BookAppointment from "./BookAppointment";
import BookFooter from "./BookFooter";

const TempFooter = () => {
  return (
    <div className="bg-orange-500 lg:h-[30vh] mt-10 flex flex-col gap-6 p-4">
      <h1 className="lg:w-1/3 text-3xl mx-auto text-center font-semibold">
        Poltek Solution{" "}
      </h1>
      <h3 className="lg:w-1/3  mx-auto text-center font-semibold">
        Political Advantage You Need. 72% Winning Rate.
      </h3>
      <BookFooter />
    </div>
  );
};

export default TempFooter;
