const QuizScore = ({ quizScore, quizSize, setStart, scrollOnFinish }) => {
  return (
    <section className='quiz__finish'>
      <strong className='quiz__finish__score'>
        You scored {quizScore}/{quizSize} correct answers
      </strong>

      <button className='quiz__btn btn' onClick={() => setStart(false)} ref={scrollOnFinish}>
        Play again
      </button>
    </section>
  );
};

export default QuizScore;
