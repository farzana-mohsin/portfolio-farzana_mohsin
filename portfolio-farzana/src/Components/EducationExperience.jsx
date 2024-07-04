const EducationExperience = () => {
  return (
    <div className='text-lg bg-[#ffeff3] py-16'>
      <div className='flex flex-col lg:flex-row justify-center container mx-auto'>
        <div className='ml-10 mr-10 lg:ml-0 lg:mr-0'>
          {/* Work Experience */}
          <h1 className='text-4xl font-bold text-center text-[#952940] pb-0 mb-10 lg:mb-0'>
            Work Experience
          </h1>
          <ul className='steps steps-vertical'>
            <div className='flex flex-col lg:flex-row gap-3 lg:gap-10 items-center'>
              <li className='step step-neutral text-xl'>2018</li>
              <p className='lg:w-1/3 text-xl'>
                Administrative Assistant, Canadian Centre for Information and
                Knowledge
                <p>May 2019 - Nov 2019</p>
                <p>Toronto, Ontario, Canada</p>
              </p>
              <ul className='list-disc lg:w-1/3 space-y-3 text-sm'>
                <li>
                  Prepared and maintained filing system from manual to
                  computer-based, creating a user-friendly and reducing data
                  retrieval time by 15%
                </li>
                <li>
                  Gained organizational, analytical, and problem-solving skills
                  by coordinating photography and painting contests, workshops
                  on tree plantation, healthy living, recruitment events, etc.
                </li>
                <li>
                  Crafted professional responses to stakeholder queries through
                  email and phone call
                </li>
              </ul>
            </div>
            <div className='flex flex-col lg:flex-row gap-3 lg:gap-10 items-center'>
              <li className='step step-neutral text-xl'>2020</li>
              <p className='lg:w-1/3 text-xl'>
                Customer Service Specialist, The Travel Corporation
                <p>Feb 2020 - Aug 2020</p>
                <p>Toronto, Ontario, Canada</p>
              </p>
              <ul className='list-disc lg:w-1/3 space-y-3 text-sm'>
                <li>
                  Professionally handled phone calls and emails by responding to
                  customer issues based on priority, by simultaneously checking
                  and accurately updating client details in Salesforce,
                  processing cheque and credit card transaction
                </li>
                <li>
                  Demonstrated empathy and patience in every customer
                  interaction while negotiating with over 50 valued customers
                  per day, still continually achieved 95% quality assurance
                  scores by adhering to company policies and guidelines
                </li>
                <li>
                  Mastered line of company products to promote trips to clients,
                  identified and analyzed patterns, and suggested packages
                  accordingly, directed follow up calls, and kept up to date
                  with evolving rules
                </li>
                <li>
                  Met the company goal of not missing a single call for 6 months
                  straight and convincing 90% of the customers to reschedule or
                  take travel voucher for their trips
                </li>
                <li>
                  Resolved challenging situations and found solutions by
                  communicating with Sales manager, fostering a sense of
                  teamwork and collaboration
                </li>
              </ul>
            </div>
            <div className='flex flex-col lg:flex-row gap-3 lg:gap-10 items-center'>
              <li className='step step-neutral text-xl'>2021</li>
              <p className='lg:w-1/3 text-xl'>
                Technical Support Specialist, UserTesting
                <p>Jun 2021 - Present</p>
                <p>Remote, Toronto, Ontario, Canada</p>
              </p>
              <ul className='list-disc lg:w-1/3 space-y-3 text-sm my-5'>
                <li>
                  Professionally handled phone calls and emails by responding to
                  customer issues based on priority, by simultaneously checking
                  and accurately updating client details in Salesforce,
                  processing cheque and credit card transaction
                </li>
                <li>
                  Demonstrated empathy and patience in every customer
                  interaction while negotiating with over 50 valued customers
                  per day, still continually achieved 95% quality assurance
                  scores by adhering to company policies and guidelines
                </li>
                <li>
                  Mastered line of company products to promote trips to clients,
                  identified and analyzed patterns, and suggested packages
                  accordingly, directed follow up calls, and kept up to date
                  with evolving rules
                </li>
                <li>
                  Met the company goal of not missing a single call for 6 months
                  straight and convincing 90% of the customers to reschedule or
                  take travel voucher for their trips
                </li>
                <li>
                  Resolved challenging situations and found solutions by
                  communicating with Sales manager, fostering a sense of
                  teamwork and collaboration
                </li>
              </ul>
            </div>

            {/* <li className='step'>Receive Product</li> */}
          </ul>
        </div>
        <div className='ml-10 mr-10 lg:ml-0 lg:mr-0 lg:w-1/2 my-10 lg:my-1'>
          {/* Education Background */}
          <h1 className='text-4xl font-bold text-[#952940] lg:pb-10 '>
            Education Background
          </h1>
          <h2 className='mt-8 lg:mt-16'>
            Bachelors of Business Administration,
          </h2>
          <p> North South University, Dhaka Bangladesh</p>
          <p>Jan 2012 - Apr 2016</p>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
