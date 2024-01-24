import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { H1 } from "@/components/Heading";

const Hero = () => {
  const backgroundStyles = {
    backgroundPosition: "center 15rem",
  };
  return (
    <>
      <div
        className="min-h-[65vh] w-full relative md:bg-[url('/images/home/intro.png')] bg-bottom bg-fit bg-no-repeat md:px-0 px-3"
        style={backgroundStyles}
      >
        <div className="flex flex-col items-center mt-16">
          <H1 className="text-center">Business made easy</H1>
          <p className="max-w-[30rem] my-3 font-montserrat text-lg leading-[23px] text-center text-[#182022]">
            Ilaktra is a one-stop platform for buyers and sellers. Gathering a
            wide range of industries under one platform, business couldn&#39;t
            be any easier. Want to showcase your services on a large scale?
            Ilaktra is the right platform for you.
          </p>
          <div className="flex space-x-4 mt-2">
            <button className="border-black border rounded-lg  hover:bg-black hover:text-white px-5 py-3">
              Get Started
            </button>
            <button className="border-black border rounded-lg bg-black text-white hover:bg-transparent hover:text-black px-5 py-3">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Link
        href="/signup"
        className="md:flex bg-[#030303] text-primary w-[172px] h-[48px] rounded-xl absolute right-5 2xl:bottom-20 lg:bottom-10 hidden  items-center justify-center space-x-4"
      >
        <FontAwesomeIcon
          icon={faUserPlus}
          className="w-[27px] h-[27px] text-primary"
        />
        <p>Sign Up</p>
      </Link>
    </>
  );
};

export default Hero;
