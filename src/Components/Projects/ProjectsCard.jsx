import React from "react";


const ProjectsCard = ({ title ,main,demoLink,projectImage}) => {
  return (
    <div className="p-3 md:p-6 flex flex-col bg-[#0c0e19] shadow-slate-900 rounded-2xl items-center">
  <div className="flex justify-center items-center">
    <img className="p-4 w-48 md:w-56 lg:w-64" src={projectImage} alt="Tic-Tac-Toe" />
  </div>
  <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-center">
    {title}
  </h3>
  <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
  <div className="mt-2 py-2 md:p-4 flex gap-2 md:gap-4 justify-center">
  <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] ">
          View This Project
          </button>
        </a>
    
  </div>
</div>

  );
};

export default ProjectsCard;
