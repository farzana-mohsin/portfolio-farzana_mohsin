// import { forwardRef } from "react";
import html from "../../public/Screenshot 2024-07-02 at 8.28.10 AM.png";
import Javascript from "../../public/Screenshot 2024-07-01 at 10.37.06 PM.png";
import react from "../../public/Screenshot 2024-07-01 at 10.37.16 PM.png";
import mongodb from "../../public/Screenshot 2024-07-02 at 8.25.40 AM.png";

const SkillsResume = () => {
  const onButtonClick = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1VpyCech3BvIclL20Cjo2FaHKgD1k15qV/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download =
      "https://drive.google.com/file/d/1VpyCech3BvIclL20Cjo2FaHKgD1k15qV/view?usp=drive_link"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='mx-auto my-24 container'>
      <h2 className='text-5xl font-bold text-center text-[#952940] pb-0 my-20'>
        Skills and Resume
      </h2>
      <div className='flex flex-col lg:flex-row items-center justify-evenly'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {/* Skills Section */}
          <div className='card bg-base-100 hover:bg-[#952940] w-96 h-full shadow-2xl p-4'>
            <figure>
              <img
                className='w-[17%]'
                src={html}
                alt='html'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title text-center mx-auto text-2xl'>HTML</h2>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            </div>
          </div>
          <div className='card bg-base-100 h-full hover:bg-[#952940] w-96 shadow-2xl p-4'>
            <figure>
              <img
                className='w-[18%]'
                src={Javascript}
                alt='javascript'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title text-center mx-auto text-2xl'>
                Javascript
              </h2>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            </div>
          </div>
          <div className='card bg-base-100 w-96 h-full hover:bg-[#952940] shadow-2xl p-4'>
            <figure>
              <img
                className='w-[20%]'
                src={react}
                alt='react'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title text-center mx-auto text-2xl'>React</h2>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            </div>
          </div>
          <div className='card bg-base-100 h-full hover:bg-[#952940] w-96 shadow-2xl p-4'>
            <figure>
              <img
                className='w-[25%]'
                src={mongodb}
                alt='mongodb'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title text-center mx-auto text-2xl'>
                MongoDB
              </h2>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            </div>
          </div>

          {/* <div className='flex items-center justify-center flex-col'>
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
          </div> */}
        </div>
        <div className='mt-20 lg:mt-0'>
          {/* Resume Section */}
          <button
            onClick={onButtonClick}
            className='btn btn-outline text-xl hover:bg-[#501773] bg-[#b62041] text-white px-5 pt-2 pb-3  rounded-2xl'
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsResume;
