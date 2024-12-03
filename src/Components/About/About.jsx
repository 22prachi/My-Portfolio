import React from "react";
import AboutImg from "../../assets/AboutImg.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 " src={AboutImg} alt="About image"></img>
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I'm a frontend developer with a focus on creating clean,
                  functional, and engaging websites. With a strong foundation in
                  HTML, CSS, and JavaScript, I design responsive and accessible
                  web experiences that work seamlessly on any device. Currently,
                  I am diving deeper into React.js to enhance my skills in
                  building dynamic, interactive web applications. I thrive on
                  solving challenges, optimizing performance, and constantly
                  learning new technologies to keep up with the ever-evolving
                  web development landscape. Let’s build something great
                  together!
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
