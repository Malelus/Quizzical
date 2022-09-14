const QuizCheck = ({ checkAnswers, setStart }) => {
  return (
    <>
      <button className='quiz__check quiz__btn  btn' onClick={checkAnswers}>
        Check answers
      </button>

      <button className='quiz__reset btn btn--small' onClick={() => setStart(false)}>
        <i className='fa-solid fa-arrows-rotate rotate'></i>
      </button>
    </>
  );
};

export default QuizCheck;
