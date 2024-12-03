import React, { useState, useEffect } from "react";
import profileimage1 from "../../assets/profileimage1.jpg";
import profileimage2 from "../../assets/profileimage2.jpg";
import TextChange from "../TextChange";

const Home = () => {
    const [currentImage, setCurrentImage] = useState(profileimage1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle between images every 3 seconds (3000ms)
      setCurrentImage((prevImage) =>
        prevImage === profileimage1 ? profileimage2 : profileimage1
      );
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-evenly items-center p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter ">
         <TextChange/>
         
        </h1>
        <p className="text-sm md:text-2xl tracking-tight"> <br></br>
        A passionate front-end web developer. I create clean, responsive websites using HTML, CSS, and JavaScript, and I'm currently learning React to build dynamic web applications. Always eager to learn and excited to bring ideas to life through code. Let's connect and create something great
  together!
        </p>
        <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 hover:opacity-80 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#191d2c]">Contact Me</button>
      </div>
      <div className="mt-6 md:mt-0 md:ml-4 lg:ml-6 flex justify-center">
        <img className="w-48 md:w-56 lg:w-64 rounded-full" src={currentImage} alt="profile"/>
      </div>
    </div>
  );
};

export default Home;
