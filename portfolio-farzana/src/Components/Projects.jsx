import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h2 className='text-5xl font-bold text-center'>My Projects</h2>
      <div className='my-20 flex flex-col lg:flex-row'>
        <div className='max-w-xl px-6 py-16 mx-auto space-y-12'>
          <article className='space-y-8 bg-[#302729] text-gray-50 p-5 rounded-2xl'>
            <div className='space-y-6'>
              <h1 className='text-4xl font-bold md:tracking-tight md:text-5xl'>
                Crown Arts
              </h1>
              <div className='flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-200'>
                <div className='flex items-center md:space-x-2 px-4'>
                  <ul className='list-disc'>
                    <li>View user's arts & crafts</li>
                    <li>Ability to add a craft</li>
                    <li>Ability to update or delete user's own crafts</li>
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
                view their added arts and crafts in "My Arts & Crafts" private
                route.
              </p>
            </div>
          </article>
          <div>
            <div className='flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-700'>
              <a
                rel='noopener noreferrer'
                href='#'
                className='px-3 py-1 rounded-sm hover:underline bg-[#f78da7] text-gray-900'
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
                  Crown Arts
                </h1>
                <div className='flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-200'>
                  <div className='flex items-center md:space-x-2 px-4'>
                    <ul className='list-disc'>
                      <li>View user's arts & crafts</li>
                      <li>Ability to add a craft</li>
                      <li>Ability to update or delete user's own crafts</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='text-gray-100 text-sm'>
                <p>
                  This project is a web application that allows users to browse
                  through an arts and crafts website, browse painting and
                  drawing of different categories, a button to view individual
                  art details, and track their progress by logging in. They can
                  also view their added arts and crafts in "My Arts & Crafts"
                  private route.
                </p>
              </div>
            </article>
            <div>
              <div className='flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-700'>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-[#f78da7] text-gray-900'
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
        </div>
        <div>
          <div className='max-w-xl px-6 py-16 mx-auto space-y-12'>
            <article className='space-y-8 bg-[#302729] text-gray-50 p-5 rounded-2xl'>
              <div className='space-y-6'>
                <h1 className='text-4xl font-bold md:tracking-tight md:text-5xl'>
                  Crown Arts
                </h1>
                <div className='flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-200'>
                  <div className='flex items-center md:space-x-2 px-4'>
                    <ul className='list-disc'>
                      <li>View user's arts & crafts</li>
                      <li>Ability to add a craft</li>
                      <li>Ability to update or delete user's own crafts</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='text-gray-100 text-sm'>
                <p>
                  This project is a web application that allows users to browse
                  through an arts and crafts website, browse painting and
                  drawing of different categories, a button to view individual
                  art details, and track their progress by logging in. They can
                  also view their added arts and crafts in "My Arts & Crafts"
                  private route.
                </p>
              </div>
            </article>
            <div>
              <div className='flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-700'>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='px-3 py-1 rounded-sm hover:underline bg-[#f78da7] text-gray-900'
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
