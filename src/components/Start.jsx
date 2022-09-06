const Start = ({ setStart, description }) => {
  return (
    <div className='start'>
      <h1 className='start__title'>Quizzical</h1>
      <p className='start__desc'>{description}</p>

      <button className='start__btn btn' onClick={() => setStart(false)}>
        Start quiz
      </button>
    </div>
  );
};

export default Start;
