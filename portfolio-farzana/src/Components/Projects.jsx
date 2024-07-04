import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h2 className='text-5xl font-bold text-center text-[#952940] my-16'>
        My Projects
      </h2>
      <div className=' flex flex-col lg:flex-row'>
        <div className='max-w-xl px-6 py-16 mx-auto space-y-12'>
          <article className='space-y-8 bg-[#302729] text-gray-50 p-5 rounded-2xl'>
            <div className='space-y-6'>
              <h1 className='text-4xl font-bold md:tracking-tight md:text-5xl'>
                Crown Art
              </h1>
              <div className='flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-200'>
                <div className='flex items-center md:space-x-2 px-4'>
                  <ul className='list-disc'>
                    <li>View all & user&apos;s own arts & crafts</li>
                    <li>Ability to add a craft</li>
                    <li>Ability to update or delete user&apos;s own crafts</li>
                    <li>Data will be saved in MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='text-gray-100 text-sm'>
              <p>
                This project is a web application that allows users to browse
                through an arts and crafts website, browse painting and drawing
                of different categories, a button to view individual art
                details, and track their progress by logging in. They can also
                view their added arts and crafts in My Arts & Crafts private
                route.
              </p>
            </div>
          </article>
          <div>
            <div className='flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-700'>
              <a
                rel='noopener noreferrer'
                href='#'
                className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
              >
                #HTML
              </a>
              <a
                rel='noopener noreferrer'
                href='#'
                className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
              >
                #Javascript
              </a>
              <a
                rel='noopener noreferrer'
                href='#'
                className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
              >
                #TailwindCSS
              </a>
              <a
                rel='noopener noreferrer'
                href='#'
                className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
              >
                #React
              </a>
              <a
                rel='noopener noreferrer'
                href='#'
                className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
              >
                #DaisyUI
              </a>
              <a
                rel='noopener noreferrer'
                href='#'
                className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
              >
                #MongoDB
              </a>
            </div>
            <div className='space-y-2'>
              <h4 className='text-xl font-semibold'>Project Links</h4>
              <ul className='ml-4 space-y-1 list-disc'>
                <li>
                  <Link
                    className='hover:bg-[#f78da7]'
                    to='https://assignment-ten-7654f.web.app/'
                  >
                    Live Site
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:bg-[#f78da7]'
                    to='https://github.com/farzana-mohsin/assignment-ten-client'
                  >
                    Client Side Link
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:bg-[#f78da7]'
                    to='https://github.com/farzana-mohsin/assignment-ten-server'
                  >
                    Server Side Link
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className='max-w-xl px-6 py-16 mx-auto space-y-12'>
            <article className='space-y-8 bg-[#302729] text-gray-50 p-5 rounded-2xl'>
              <div className='space-y-6'>
                <h1 className='text-4xl font-bold md:tracking-tight md:text-5xl'>
                  Holity Social Support
                </h1>
                <div className='flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-200'>
                  <div className='flex items-center md:space-x-2 px-4'>
                    <ul className='list-disc'>
                      <li>View user&apos;s volunteer posts and requests</li>
                      <li>Card and table layout for volunteer posts</li>
                      <li>
                        Ability to create, update or delete user&apos;s posts
                      </li>
                      <li>Ability to cancel user&apos;s volunteer request</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='text-gray-100 text-sm'>
                <p>
                  This project is a web application that allows users to browse
                  through a volunteer website, browse different volunteer
                  options. Users need to be logged in to view private routes.
                  Once logged in, users can add a volunteer post, users can also
                  apply to be a volunteer on other&apos;s posts. Users can view
                  details of a volunteer post.
                </p>
              </div>
            </article>
            <div>
              <div className='flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-700'>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
                >
                  #Javascript
                </a>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
                >
                  #TailwindCSS
                </a>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
                >
                  #React
                </a>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
                >
                  #DaisyUI
                </a>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
                >
                  #NodeJS
                </a>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
                >
                  #MongoDB
                </a>
              </div>
              <div className='space-y-2'>
                <h4 className='text-xl font-semibold'>Project Links</h4>
                <ul className='ml-4 space-y-1 list-disc'>
                  <li>
                    <Link
                      className='hover:bg-[#f78da7]'
                      to='https://assignment-eleven-a257a.web.app/'
                    >
                      Live Site
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:bg-[#f78da7]'
                      to='https://github.com/farzana-mohsin/holity-client'
                    >
                      Client Side Link
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:bg-[#f78da7]'
                      to='https://github.com/farzana-mohsin/holity-server'
                    >
                      Server Side Link
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='max-w-xl px-6 py-16 mx-auto space-y-12'>
            <article className='space-y-8 bg-[#302729] text-gray-50 p-5 rounded-2xl'>
              <div className='space-y-6'>
                <h1 className='text-4xl font-bold md:tracking-tight md:text-5xl'>
                  Blissful Trails
                </h1>
                <div className='flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-200'>
                  <div className='flex items-center md:space-x-2 px-4'>
                    <ul className='list-disc'>
                      <li>
                        Admin, tour guide, and tourist separate user interfaces
                      </li>
                      <li>Admin has the ability to manage users</li>
                      <li>
                        Tourist can book a trip and once accepted, can pay for
                        the trip using Stripe
                      </li>
                      <li>Tour guide can accept or reject a tour request</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='text-gray-100 text-sm'>
                <p>
                  This project is a web application that allows users to browse
                  through a tourism website, browse different tour type options.
                  Users need to be logged in to view private routes. Once logged
                  in, users can book a tourist package, all users can also
                  access the dashboard depending on their roles.
                </p>
              </div>
            </article>
            <div>
              <div className='flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-700'>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
                >
                  #HTML
                </a>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
                >
                  #Javascript
                </a>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
                >
                  #TailwindCSS
                </a>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
                >
                  #React
                </a>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
                >
                  #DaisyUI
                </a>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
                >
                  #MerakiUI
                </a>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
                >
                  #MambaUI
                </a>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
                >
                  #MongoDB
                </a>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900'
                >
                  #Stripe
                </a>
              </div>
              <div className='space-y-2'>
                <h4 className='text-xl font-semibold'>Project Links</h4>
                <ul className='ml-4 space-y-1 list-disc'>
                  <li>
                    <Link
                      className='hover:bg-[#f78da7]'
                      to='https://blissful-trails.web.app/'
                    >
                      Live Site
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:bg-[#f78da7]'
                      to='https://github.com/farzana-mohsin/blissful-trails-client'
                    >
                      Client Side Link
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:bg-[#f78da7]'
                      to='https://github.com/farzana-mohsin/blissful-trails-server'
                    >
                      Server Side Link
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
