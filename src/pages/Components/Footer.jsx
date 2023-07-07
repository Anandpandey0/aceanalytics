import Link from "next/link";
import React from "react";
import { AiOutlineFacebook, AiOutlineMail } from "react-icons/ai";
import { LiaTwitterSquare } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white flex lg:h-[30vh]  mt-10">
      <div className="w-1/2 h-full flex flex-col justify-evenly ml-10">
        <h1 className="text-2xl">Ace Analytics</h1>
        <address>Address:</address>
        <div className="flex gap-2 items-center">
          <AiOutlineFacebook className="text-2xl" />
          <LiaTwitterSquare className="text-2xl" />
          <Link href="mailto:info@poltek.com">
            <AiOutlineMail className="text-2xl" />
          </Link>
        </div>
      </div>
      <div className="w-1/2  flex flex-col justify-evenly">
        <Link href="/">Home</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Services</Link>
      </div>
    </div>
  );
};

export default Footer;
