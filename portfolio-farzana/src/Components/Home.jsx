import { Link } from "react-router-dom";
import Contact from "./Contact";
import EducationExperience from "./EducationExperience";
import Projects from "./Projects";
import SkillsResume from "./SkillsResume";
import profile from "../../public/IMG_7517.jpg";
import { useRef } from "react";

const Home = () => {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [stateMessage, setStateMessage] = useState(null);
  // const sendEmail = (e) => {
  //   e.persist();
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   emailjs
  //     .sendForm(
  //       process.env.REACT_APP_SERVICE_ID,
  //       process.env.REACT_APP_TEMPLATE_ID,
  //       e.target,
  //       process.env.REACT_APP_PUBLIC_KEY
  //     )
  //     .then(
  //       () => {
  //         setStateMessage("Message sent!");
  //         setIsSubmitting(false);
  //         setTimeout(() => {
  //           setStateMessage(null);
  //         }, 5000); // hide message after 5 seconds
  //       },
  //       () => {
  //         setStateMessage("Something went wrong, please try again later");
  //         setIsSubmitting(false);
  //         setTimeout(() => {
  //           setStateMessage(null);
  //         }, 5000); // hide message after 5 seconds
  //       }
  //     );

  //   // Clears the form after sending the email
  //   e.target.reset();
  // };

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref4 = useRef(null);

  const handleSkills = () => {
    ref1.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleEducation = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleProjects = () => {
    ref4.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleContact = () => {
    ref4.current?.scrollIntoView({ behavior: "smooth" });
  };

  const pageLinks = (
    <>
      <li className='text-lg'>
        <button onClick={handleSkills}>Skills & Resume</button>
      </li>
      <li className='text-lg'>
        <button onClick={handleEducation}>Education & Experience</button>
      </li>
      <li className='text-lg'>
        <button onClick={handleProjects}>Projects</button>
      </li>
      <li className='text-lg'>
        <button onClick={handleContact}>Contact</button>
      </li>
    </>
  );

  return (
    <div>
      {/* navbar */}
      <div className='navbar bg-[#5a1120] mt-5 py-8 text-white px-10'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost lg:hidden'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-36 lg:w-52'
            >
              {pageLinks}
            </ul>
          </div>
          <a className='text-[#ffe4ea] text-2xl lg:text-4xl font-bold tracking-[10px]'>
            PORTFOLIO
          </a>
        </div>
        <div className='navbar-end hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{pageLinks}</ul>
        </div>
        {/* <div className='navbar-end gap-2 mr-5 lg:mr-auto'>
          <a className='btn text-white bg-[#23BE0A] text-xs lg:text-base rounded-3xl'>
            Sign In
          </a>
          <a className='btn text-white bg-teal-500 text-xs lg:text-base rounded-3xl '>
            Sign Up
          </a>
        </div> */}
      </div>

      {/* about */}
      <div className='grid grid-cols-1 lg:grid-cols-4 h-full'>
        {/* first column */}
        <div className='col-span-1 bg-[#3f212b] text-white py-10 space-y-8 pl-14'>
          <h2 className='text-[#f78da7] text-2xl pt-5'>NAME</h2>
          <h2 className='font-bold text-xl pb-10'>Farzana Mohsin</h2>
          <h2 className='text-[#f78da7] text-2xl'>ROLE</h2>
          <h2 className='font-bold text-xl pb-10'>
            Customer Support Specialist
          </h2>
          <h2 className='text-[#f78da7] text-2xl'>Email</h2>
          <h2 className='font-bold text-xl pb-10'>
            farzanamohsinmohona@gmail.com
          </h2>
          <h2 className='text-[#f78da7] text-2xl'>PHONE</h2>
          <h2 className='font-bold text-xl pb-10'>+12345678</h2>
        </div>
        {/* second column */}
        <div className='bg-[#f7e3ff] py-20 pl-16 col-span-2'>
          <div>
            <h2 className='text-5xl'>Hello! My name is</h2>
            <h2 className='text-7xl space-x-16 space-y-11 font-extrabold text-[#f37b83] my-16 tracking-[16px]'>
              Farzana <br />
              Mohsin
            </h2>
            <p className='w-[85%] text-[#57383f]'>
              A dedicated Customer Support Specialist with a passion for solving
              problems and helping customers. Recently, I&apos;ve taken a leap
              into the world of web development, acquiring skills in HTML, CSS,
              JavaScript, and other modern web technologies.
              <br />
              <br />
              I&apos;m eager to transition into a web developer role, where I
              can combine my problem-solving abilities with my new technical
              skills to create impactful and user-friendly web applications.
              I&apos;m excited about the possibilities ahead and am looking
              forward to contributing to a dynamic team!
            </p>
          </div>

          <div className='flex space-x-14 my-10 text-lg'>
            <Link to='https://www.linkedin.com/in/farzana-mohsin/'>
              <p className='text-[#302729] font-bold hover:text-gray-400 tracking-widest'>
                LinkedIn
              </p>
            </Link>
            <Link to='https://www.linkedin.com/in/farzana-mohsin/'>
              <p className='text-[#302729] font-bold hover:text-gray-400 tracking-widest'>
                Email
              </p>
            </Link>

            {/* <p className='text-[#302729] font-bold hover:text-gray-400 tracking-widest'>
              Email
            </p> */}

            <p className='text-[#302729] font-bold hover:text-gray-400 tracking-widest'>
              Instagram
            </p>
          </div>
        </div>
        {/* third column */}
        <div className='bg-[#302729] col-span-1'>
          <img
            className='w-full h-full'
            src={profile}
            alt=''
          />
        </div>
      </div>
      <div ref={ref1}>
        <SkillsResume></SkillsResume>
      </div>

      <div ref={ref2}>
        <EducationExperience></EducationExperience>
      </div>
      <div>
        <Projects ref={ref4}></Projects>
      </div>
      <div ref={ref4}>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
