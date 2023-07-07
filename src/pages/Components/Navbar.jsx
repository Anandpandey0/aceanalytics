import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import BookAppointment from "./BookAppointment";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <nav className=" p-2 bg-gray-300 text-white font-semibold sticky top-0">
        <div className="w-5/6 mx-auto  p-2 flex items-center justify-between">
          <div className="h-full w-fit ">Logo</div>
          <div className="hidden navbar-links xl:flex  w-1/3 p-2 justify-evenly items-center ">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Services</Link>
            <BookAppointment />
          </div>
          <div className="xl:hidden">
            <Button colorScheme="blue" onClick={onOpen}>
              {isOpen ? <HiBars3BottomRight /> : <HiBars3 />}
            </Button>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">
                  Ace Analytics
                </DrawerHeader>
                <DrawerBody className="flex flex-col gap-4">
                  <Link href="/">Home</Link>
                  <Link href="/">About</Link>
                  <Link href="/">Services</Link>
                  <BookAppointment />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
