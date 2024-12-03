import React from 'react';
import { FaDatabase, FaPython, FaHtml5, FaCss3, FaJsSquare, FaReact } from 'react-icons/fa';  

const Experience = () => {
  return (
    <div id="Skills" className='p-10 md:p-24'>
        <h1 className='text-2xl md:text-4xl text-white font-bold mb-8'>Skills</h1>
        <div className='flex flex-wrap items-center justify-around'>
        <div className='grid grid-cols-3 gap-8 md:grid-cols-3 lg:grid-cols-3'>
                
                <div className='flex flex-col items-center'>
                    <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-2xl'>
                        <FaHtml5 color="#E34F26" className='md:text-6xl text-4xl'/>
                    </span>
                    <span className='text-white mt-3 text-lg md:text-xl font-semibold'>HTML</span>
                </div>

                <div className='flex flex-col items-center'>
                    <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-2xl'>
                        <FaCss3 color="#2965F1" className='md:text-6xl text-4xl'/>
                    </span>
                    <span className='text-white mt-3 text-lg md:text-xl font-semibold'>CSS</span>
                </div>

                <div className='flex flex-col items-center'>
                    <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-2xl'>
                        <FaJsSquare color="#F7DF1E" className='md:text-6xl text-4xl'/>
                    </span>
                    <span className='text-white mt-3 text-lg md:text-xl font-semibold'>JavaScript</span>
                </div>

                <div className='flex flex-col items-center'>
                    <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-2xl'>
                        <FaReact color="#61DAFB" className='md:text-6xl text-4xl'/>
                    </span>
                    <span className='text-white mt-3 text-lg md:text-xl font-semibold'>React</span>
                </div>

                <div className='flex flex-col items-center'>
                    <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-2xl'>
                        <FaPython color="#306998" className='md:text-6xl text-4xl'/>
                    </span>
                    <span className='text-white mt-3 text-lg md:text-xl font-semibold'>Python</span>
                </div>

                <div className='flex flex-col items-center'>
                    <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-2xl'>
                        <FaDatabase color="#00758F" className='md:text-6xl text-4xl'/>
                    </span>
                    <span className='text-white mt-3 text-lg md:text-xl font-semibold'>MySQL</span>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Experience;
