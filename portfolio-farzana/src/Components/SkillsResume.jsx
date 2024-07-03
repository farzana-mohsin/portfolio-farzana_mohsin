// import { forwardRef } from "react";
import html from "../../public/Screenshot 2024-07-02 at 8.28.10 AM.png";
import Javascript from "../../public/Screenshot 2024-07-01 at 10.37.06 PM.png";
import react from "../../public/Screenshot 2024-07-01 at 10.37.16 PM.png";
import mongodb from "../../public/Screenshot 2024-07-02 at 8.25.40 AM.png";

const SkillsResume = () => {
  return (
    <div className='mt-96 mx-auto'>
      <h2 className='font-bold text-center my-6'>Skills and Resume Section</h2>
      <div className='flex items-center'>
        <div className='grid grid-cols-2'>
          {/* Skills Section */}
          <div className='card bg-base-100 w-96 shadow-xl'>
            <figure>
              <img
                className='w-[15%]'
                src={html}
                alt='html'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title text-center mx-auto'>HTML</h2>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            </div>
          </div>
          <div className='flex items-center justify-center flex-col'>
            <img
              className='w-[15%]'
              src={Javascript}
            />
            <h2>Javascript</h2>
          </div>
          <div className='flex items-center justify-center flex-col'>
            <img
              className='w-[15%]'
              src={react}
            />
            <h2>React</h2>
          </div>
          <div className='flex items-center justify-center flex-col'>
            <img
              className='w-[15%] h-[80%]'
              src={mongodb}
            />
            <h2>MongoDB</h2>
          </div>
        </div>
        <div>
          {/* Resume Section */}
          <button className='btn btn-outline'>Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default SkillsResume;
