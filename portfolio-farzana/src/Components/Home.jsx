const Home = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3'>
      {/* first column */}
      <div className='col-span-1'>
        <h2>NAME</h2>
        <h2>Farzana Mohsin</h2>
        <h2>ROLE</h2>
        <h2>Customer Support Specialist</h2>
        <h2>Email</h2>
        <h2>test@gmail.com</h2>
        <h2>PHONE</h2>
        <h2>+12345678</h2>
      </div>
      {/* second column */}
      <div>
        <h2>Hello! My name is</h2>
        <h2 className='text-4xl'>Farzana Mohsin</h2>
        <p>
          A full stack all around designer that may or may not include a guide
          for specific creative potential methods who framing and evaluating
          moves.
        </p>
        <p>LinkedIn</p>
        <p>Email</p>
        <p>Instagram</p>
      </div>
      {/* third column */}
      <div>
        <h2>banner image</h2>
        <h2>photo</h2>
      </div>
    </div>
  );
};

export default Home;
