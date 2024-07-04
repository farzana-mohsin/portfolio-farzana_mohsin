const EducationExperience = () => {
  return (
    <div className='text-lg bg-[#ffeff3] py-16'>
      <div className='flex flex-col lg:flex-row lg:justify-between container mx-auto'>
        <div className='ml-10 lg:ml-0 lg:mr-0'>
          {/* Work Experience */}
          <h1 className='text-4xl font-bold text-center text-[#952940] pb-0 mb-10 lg:mb-0'>
            Work Experience
          </h1>

          <ul className='timeline timeline-vertical'>
            <li>
              <div className='timeline-end text-2xl'>2019</div>
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-start timeline-box my-7 p-5 m-4 w-full shadow-2xl'>
                <p className='text-xl font-bold'>
                  Administrative Assistant, Canadian Centre for Information and
                  Knowledge
                </p>
                <p>May 2019 - Nov 2019</p>
                <p>Toronto, Ontario, Canada</p>
                <br />

                <ul className='list-disc space-y-3 text-base'>
                  <li>
                    Prepared and maintained filing system from manual to
                    computer-based, creating a user-friendly and reducing data
                    retrieval time by 15%
                  </li>
                  <li>
                    Gained organizational, analytical, and problem-solving
                    skills by coordinating photography and painting contests,
                    workshops on tree plantation, healthy living, recruitment
                    events, etc.
                  </li>
                  <li>
                    Crafted professional responses to stakeholder queries
                    through email and phone call
                  </li>
                </ul>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-end text-2xl'>2020</div>
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-start timeline-box my-7 p-5 m-4 w-full shadow-2xl'>
                <p className='font-bold text-xl'>
                  Customer Service Specialist, The Travel Corporation
                </p>
                <p>Feb 2020 - Aug 2020</p>
                <p>Toronto, Ontario, Canada</p>
                <ul className='list-disc space-y-3 text-base my-5'>
                  <li>
                    Professionally handled phone calls and emails by responding
                    to customer issues based on priority, by simultaneously
                    checking and accurately updating client details in
                    Salesforce, processing cheque and credit card transaction
                  </li>
                  <li>
                    Demonstrated empathy and patience in every customer
                    interaction while negotiating with over 50 valued customers
                    per day, still continually achieved 95% quality assurance
                    scores by adhering to company policies and guidelines
                  </li>
                  <li>
                    Mastered line of company products to promote trips to
                    clients, identified and analyzed patterns, and suggested
                    packages accordingly, directed follow up calls, and kept up
                    to date with evolving rules
                  </li>
                  <li>
                    Met the company goal of not missing a single call for 6
                    months straight and convincing 90% of the customers to
                    reschedule or take travel voucher for their trips
                  </li>
                  <li>
                    Resolved challenging situations and found solutions by
                    communicating with Sales manager, fostering a sense of
                    teamwork and collaboration
                  </li>
                </ul>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-end text-2xl'>2021</div>
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='timeline-start timeline-box my-3 p-5 m-4 w-full shadow-2xl'>
                <p className='text-xl font-bold'>
                  Technical Support Specialist, UserTesting
                </p>
                <p>Jun 2021 - Present</p>
                <p>Remote, Toronto, Ontario, Canada</p>
                <ul className='list-disc space-y-3 text-base my-5'>
                  <li>
                    Prepared and maintained filing system from manual to
                    computer-based, creating a user-friendly and reducing data
                    retrieval time by 15%
                  </li>
                  <li>
                    Gained organizational, analytical, and problem-solving
                    skills by coordinating photography and painting contests,
                    workshops on tree plantation, healthy living, recruitment
                    events, etc.
                  </li>
                  <li>
                    Crafted professional responses to stakeholder queries
                    through email and phone call
                  </li>
                </ul>
              </div>
              <hr />
            </li>
          </ul>
        </div>
        <div className='ml-10 mr-10 lg:ml-0 lg:mr-0 lg:w-full my-10 lg:my-1'>
          {/* Education Background */}
          <h1 className='text-4xl font-bold text-[#952940] lg:pb-10 '>
            Education Background
          </h1>
          <h2 className='mt-8 font-bold text-xl'>
            Bachelors of Business Administration,
          </h2>
          <p className='font-bold text-xl'>North South University</p>
          <p>Jan 2012 - Apr 2016</p>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
