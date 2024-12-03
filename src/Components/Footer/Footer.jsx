import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub, FaPhoneAlt } from 'react-icons/fa';  // Added FaPhoneAlt

const Footer = () => {
  return (
    <div id="Footer" className='flex flex-col md:flex-row justify-around bg-[#2a3049] text-white p-10 md:p-12 items-center'>
      
      <div className='text-center md:text-left mb-6 md:mb-0'>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel Free To Reach Out!</h3>
      </div>

      <ul className='text-sm md:text-xl flex flex-col gap-4'>
        <li className='flex items-center gap-2'>
          <FaPhoneAlt size={24} />   {/* Added contact symbol */}
          <span>8839498483</span>
        </li>
        <li className='flex items-center gap-2'>
          <MdOutlineEmail size={24} />
          <span>prachi.mukati22@gmail.com</span>
        </li>
        <li className='flex items-center gap-2'>
          <CiLinkedin size={24} />
          <a href='http://linkedin.com/in/prachi-mukati-7a6034261' target='_blank' rel='noopener noreferrer' className='hover:underline'>
            LinkedIn Profile
          </a>
        </li>
        <li className='flex items-center gap-2'>
          <FaGithub size={24} />
          <a href='https://github.com/22prachi' target='_blank' rel='noopener noreferrer' className='hover:underline'>
            GitHub Profile
          </a>
        </li>
      </ul>

    </div>
  );
};

export default Footer;
