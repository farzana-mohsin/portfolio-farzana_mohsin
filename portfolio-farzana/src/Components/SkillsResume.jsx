const SkillsResume = () => {
  return (
    <div>
      <h2 className='font-bold text-center my-6'>Skills and Resume Section</h2>
      <div className='flex justify-around'>
        <div>
          {/* Skills Section */}
          <div>
            <h2>HTML</h2>
          </div>
          <div>
            <h2>CSS</h2>
          </div>
          <div>
            <h2>Javascript</h2>
          </div>
          <div>
            <h2>React</h2>
          </div>
        </div>
        <div>
          {/* Resume Section */}
          <button className='btn btn-outline'>Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default SkillsResume;
