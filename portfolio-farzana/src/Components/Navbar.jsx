import { NavLink } from "react-router-dom";
// import { MdOutlineVolunteerActivism } from "react-icons/md";

const Navbar = () => {
  // const [setTheme] = useState("pastel");
  // const handleToggle = (e) => {
  //   if (e.target.checked) {
  //     setTheme("coffee");
  //   } else setTheme("pastel");
  // };

  const navLinks = (
    <>
      <li className=''>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? "font-bold text-amber-600 " : "font-bold text-[#ffcc05]"
          }
        >
          Home
        </NavLink>
      </li>
      {/* <li className=' lg:mr-0'>
        <NavLink
          to='/need-volunteers'
          className={({ isActive }) =>
            isActive ? "font-bold text-[#f77d5c]" : "font-bold"
          }
        >
          Volunteers Needed
        </NavLink>
      </li> */}

      {/* <div className='dropdown dropdown-hover px-2'>
        <div
          tabIndex={0}
          className='font-bold text-[#ffcc05]'
        >
          About Blissful Trails
        </div>
        <ul
          tabIndex={0}
          className='dropdown-content z-[3] menu p-2 w-48 bg-base-100 rounded-xl'
        >
          <li>
            <NavLink
              to='/community'
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-amber-600"
                  : "font-bold text-[#ffcc05]"
              }
            >
              Community
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about-us'
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-amber-600"
                  : "font-bold text-[#ffcc05]"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact-us'
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-amber-600"
                  : "font-bold text-[#ffcc05]"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div> */}
      {/* <li className='text-white'>
        <NavLink to='/all-items'>All Arts & Crafts</NavLink>
      </li> */}
      {/* {user && (
        <>
          <div className='dropdown dropdown-hover px-2'>
            <div
              tabIndex={0}
              className='font-bold text-[#ffcc05]'
            >
              My Profile
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content z-[3] menu p-2 w-48 bg-base-100 rounded-xl'
            >
              <li>
                <NavLink
                  to='/dashboard'
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-amber-600"
                      : "font-bold text-[#ffcc05]"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )} */}
    </>
  );

  return (
    <div>
      <div className='navbar mx-auto bg-black lg:px-8 text white'>
        <div className='navbar-start'>
          <div className='dropdown dropdown-hover'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost text-[#ffcc05] lg:hidden'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
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
              className='menu menu-md dropdown-content z-[3] p-2 shadow bg-base-100 rounded-box w-52 '
            >
              <li className=''>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? "font-bold text-[#ffcc05] " : "font-bold"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className=''>
                <NavLink
                  to='/dashboard'
                  className={({ isActive }) =>
                    isActive ? "font-bold text-[#ffcc05] " : "font-bold"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li className=' lg:mr-0'>
                <NavLink
                  to='/community'
                  className={({ isActive }) =>
                    isActive ? "font-bold text-[#ffcc05]" : "font-bold"
                  }
                >
                  Community
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about-us'
                  className={({ isActive }) =>
                    isActive ? "font-bold text-[#ffcc05]" : "font-bold"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/contact-us'
                  className={({ isActive }) =>
                    isActive ? "font-bold text-[#ffcc05]" : "font-bold"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <img
              className='w-[60%] lg:w-[30%] h-[35%] lg:h-[10%]'
              src='https://i.ibb.co/7Vf6NBt/Screenshot-2024-06-08-at-4-19-16-PM.png'
              alt=''
            />
          </div>
        </div>
        <div className='navbar-end hidden lg:flex'>
          <ul className='text-lg flex flex-row px-1 lg:space-x-5 justify-center items-center'>
            {navLinks}
          </ul>
        </div>
        <div className=' flex flex-col md:flex-row'>
          {/* {user ? (
            <div className='flex md:flex-row items-center gap-2'>
              <div
                className='tooltip tooltip-bottom border-none bg-none rounded-full mr-2 ml-0'
                data-tip={user?.displayName || "user not found"}
              >
                <button className='rounded-full bg-none border-none w-12 lg:w-10'>
                  <img
                    className=' md:block rounded-full bg-none border-none'
                    alt='image not found'
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/YDgsXWt/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.jpg"
                    }
                  />
                </button>
              </div>

              <button
                className='btn bg-[#ffcc05] hover:bg-[#b86f3b] text-black px-2  lg:px-4 lg:py-2 border-2 border-white text-xs lg:text-sm rounded-xl lg:mr-3'
                // onClick={() => handleSignOut()}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className='flex flex-row'>
              <Link to='/login'>
                <button className='btn bg-[#ffcc05] text-black lg:px-4 lg:py-2 border-2 text-sm rounded-xl lg:ml-2 hover:bg-[#b86f3b] border-white'>
                  Login
                </button>
              </Link>
              <Link to='/signup'>
                <button className='btn bg-[#ffcc05] text-black lg:px-4 lg:py-2 text-sm rounded-xl ml-2 hover:bg-[#b86f3b] border-2 border-white'>
                  Register
                </button>
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
