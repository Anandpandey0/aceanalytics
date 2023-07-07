import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

const BookFooter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value;
    // Remove any non-digit characters from the input
    const sanitizedInput = input.replace(/\D/g, "");

    // Limit the input to 10 characters
    const limitedInput = sanitizedInput.slice(0, 10);

    // Check if the phone number starts with a valid Indian area code (excluding 0)
    const isValidNumber = limitedInput.match(/^(?!0)(7[0-9]{9})$/);

    if (isValidNumber) {
      setPhoneNumber(limitedInput);
    }
  };
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <button
        className="bg-white lg:w-1/3 w-5/6 mx-auto py-3  font-semibold text-orange-500 rounded-lg"
        onClick={onOpen}
      >
        Book Appointment Now
      </button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book an appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Your name</FormLabel>
              <Input ref={initialRef} placeholder="Please enter your name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Phone number</FormLabel>
              <Input
                placeholder="Please enter your number"
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email Id</FormLabel>
              <Input placeholder="raj@gmail.com" type="email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Message</FormLabel>
              <div className="border-2 border-solid p-2 h-[15vh]">
                <textarea
                  name=""
                  id=""
                  className="resize-none w-full h-full p-2 outline-none  overflow-y-scroll scrollbar-hide"
                />
              </div>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookFooter;
