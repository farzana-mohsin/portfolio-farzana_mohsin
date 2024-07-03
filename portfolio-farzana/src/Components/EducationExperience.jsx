const EducationExperience = () => {
  return (
    <div className='text-lg'>
      <h2 className='font-bold my-6'>Work and Education Section</h2>
      <div className='flex flex-col lg:flex-row justify-center gap-0'>
        <div>
          {/* Work Experience */}
          <ul className='steps steps-vertical'>
            <div className='flex gap-10 items-center mt-5 mb-10'>
              <li className='step step-neutral'>2019</li>
              <p className='w-1/3'>
                Customer Service Associate, Dollarama
                <p>Nov 2018 - Apr 2019</p>
                <p>Toronto, Ontario, Canada</p>
              </p>
            </div>
            <div className='flex gap-10 items-center my-5'>
              <li className='step step-neutral'>2020</li>
              <p className='w-1/3'>
                Customer Service Specialist The Travel Corporation
                <p>Feb 2020 - Aug 2020</p>
                <p>Toronto, Ontario, Canada</p>
              </p>
            </div>
            <div className='flex gap-10 items-center my-5'>
              <li className='step step-neutral '>2021</li>
              <p className='w-1/3'>
                Technical Support Specialist, UserTesting
                <p>Jun 2021 - Present</p>
                <p>Remote, Mountain View, California, United States</p>
              </p>
            </div>

            {/* <li className='step'>Receive Product</li> */}
          </ul>
        </div>
        <div className='mt-5'>
          {/* Education Background */}
          <h2>Bachelors of Business Administration,</h2>
          <p> North South University, Dhaka Bangladesh</p>
          <p>Jan 2012 - Apr 2016</p>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
