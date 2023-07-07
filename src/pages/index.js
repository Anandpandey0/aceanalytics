// import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
// import Navbar from "./Components/Header";
// import Header from "./Components/Navbar";
import Navbar from "./Components/Navbar";

import FrontPage from "./Components/FrontPage";
import Services from "./Components/Services";
import ExpertiseComponent from "./Components/ExpertiseComponent";
import PersonalisedComponent from "./Components/PersonalisedComponent";
import WorkEthics from "./Components/WorkEthics";
import OurServices from "./Components/OurServices";
import About from "./Components/About";
import AboutMe from "./Components/AboutMe";
import TempFooter from "./Components/TempFooter";
import Footer from "./Components/Footer";
import Copyrights from "./Components/Copyrights";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      {/* <HomePage /> */}
      <FrontPage />

      <Services />
      <ExpertiseComponent />
      <PersonalisedComponent />
      <WorkEthics />
      <OurServices />
      <About />
      <AboutMe />
      <TempFooter />
      <Footer />
      <Copyrights />
    </>
  );
}
