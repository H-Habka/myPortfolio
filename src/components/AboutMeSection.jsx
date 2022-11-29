import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
import { FaMedal } from "react-icons/fa";

const AboutMeSection = () => {
  return (
    <div
      id="about"
      className="w-screen lg:h-screen flex flex-col gap-4 items-center pt-10"
    >
      <div
        data-aos="zoom-out"
        data-aos-offset="200"
        className="flex flex-col gap-2 items-center text-center"
      >
        <div className="text-lg text-four">Get To Know</div>
        <div className="text-3xl text-two">About Me</div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 w-11/12 md:w-8/12 mx-auto relative mt-10">
        <div data-aos="fade-right" data-aos-offset="150" className=" flex-1">
          <div className="rounded-3xl  -z-10 w-60 h-[320px] absolute bg-gradient-to-tr from-transparent to-transparent via-two"></div>
          <img
            src={require("../images/aboutme.webp")}
            alt="asd"
            className=" w-60 -rotate-12 hover:rotate-0 duration-500 ease-in-out  rounded-3xl h-[320px] bg-gradient-to-br from-transparent to-transparent via-two"
          />
        </div>
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex justify-between gap-2 ">
            <div
              data-aos="zoom-in"
              data-aos-offset="250"
              data-aos-delay="0"
              className="flex-1 hover:text-five py-4 border-two hover:bg-transparent duration-1000 transition-all ease-in-out  border-2 rounded-xl bg-two flex flex-col gap-2 items-center text-center"
            >
              <div>
                <FaMedal className="text-xl md:text-3xl" />
              </div>
              <div>Experince</div>
              <div>+2 year</div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-offset="250"
              data-aos-delay="200"
              className="flex-1 hover:text-five py-4 border-two hover:bg-transparent duration-1000 ease-in-out  border-2 rounded-xl bg-two flex flex-col gap-2 items-center text-center"
            >
              <div>
                <MdPeopleOutline className="text-xl md:text-3xl" />
              </div>
              <div>Followers</div>
              <div>+1000 followers</div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-offset="250"
              data-aos-delay="400"
              className="flex-1 hover:text-five py-4 border-two hover:bg-transparent duration-1000 ease-in-out border-2 rounded-xl bg-two flex flex-col gap-2 items-center text-center"
            >
              <div>
                <AiOutlineProject className="text-xl md:text-3xl" />
              </div>
              <div>Projetcs</div>
              <div>+30 Completed</div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            className="text-five font-normal  backdrop-blur-sm p-2 rounded-xl"
          >
            <p>
              I am a FrontEnd Developer Fully Able to Work Under Work and Time
              Preasure, I Can Handle Any{" "}
              <span className="font-black text-gray-400 ">Problem Solving</span>{" "}
              Issues, Able to Write Clean and Managable Code. well acquainted
              with <span className="font-black text-gray-400 ">SOLID</span>{" "}
              Principles and{" "}
              <span className="font-black text-gray-400">Design Patterns</span>
              ,worked on multiple sites such as{" "}
              <span className="font-black text-gray-400">CMS</span>, and I Have
              alot Of Experience of working with a Team.
            </p>
            <p>
              I Achieved{" "}
              <span className="font-black text-gray-400">Albasel Award</span>{" "}
              Four Times in my Study as Being in the First Three Places, I
              Achieved the First Place in my First, Second, Fourth and Fifth
              Year and i Graduated With Graduation Rate of{" "}
              <span className="font-black text-gray-400">91.1%</span>.
            </p>
          </div>
          <div data-aos="fade-left" data-aos-offset="90" data-aos-delay="300">
            <a
              href="#Contact"
              className="text-two px-4 py-2 border-2 border-five rounded-xl text-xl font-bold hover:border-transparent hover:text-five"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
