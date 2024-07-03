import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className='my-20'>
      <div>
        <Link to='https://github.com/farzana-mohsin/assignment-ten-client'>
          <h2>Crown Arts</h2>
        </Link>
      </div>
      <div>
        <Link to='https://github.com/farzana-mohsin/holity-client'>
          <h2>Holity Social Support</h2>
        </Link>
      </div>
      <div>
        <Link to='https://github.com/farzana-mohsin/blissful-trails-client'>
          <h2>Blissful Trails</h2>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
