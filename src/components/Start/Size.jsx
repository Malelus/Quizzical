import React from 'react';

const Size = ({ quizSize, setQuizSize }) => {
  return (
    <section className='quiz-options__size'>
      <button className='btn btn--small' onClick={() => setQuizSize((prev) => (quizSize > 1 ? prev - 1 : prev))}>
        <i className='fa-solid fa-minus'></i>
      </button>

      <span>{quizSize}</span>

      <button className='btn btn--small' onClick={() => setQuizSize((prev) => (quizSize < 50 ? prev + 1 : prev))}>
        <i className='fa-solid fa-plus'></i>
      </button>

      <button className='btn btn--small' onClick={() => setQuizSize(5)}>
        <i className='fa-solid fa-arrow-rotate-right rotate'></i>
      </button>
    </section>
  );
};

export default Size;
