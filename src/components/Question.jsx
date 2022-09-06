import { useEffect, useState } from 'react';

const createAnswers = (incorrectAnswers, correctAnswer) => {
  const answersArray = [correctAnswer];

  incorrectAnswers.forEach((answer, index) => {
    answersArray.splice(Math.floor(Math.random() * (index + 2)), 0, answer);
  });

  return answersArray;
};

const showResult = (index, correct_answer) => {
  const input = document.getElementById(index);

  if (input.checked && input.value === correct_answer) {
    return 'correct';
  }

  if (input.value === correct_answer) {
    return 'correct-answer';
  }

  if (input.checked) {
    return 'incorrect';
  }

  return 'neutral';
};

const Question = (props) => {
  const { question, incorrect_answers, correct_answer, category, index, handleChange, finished, showCategory } = props;

  const [quizQuestion, setQuizQuestion] = useState({ question: '', answers: [], category: '' });

  useEffect(() => {
    setQuizQuestion({
      question: question,
      answers: createAnswers(incorrect_answers, correct_answer),
      category: category,
    });
  }, []);

  return (
    <div className='quiz'>
      <h3 className='quiz__question' dangerouslySetInnerHTML={{ __html: `${index + 1}. ${quizQuestion.question}` }} />
      <div className='quiz__answers'>
        {quizQuestion.answers.map((answer, idx) => (
          <span className='quiz__answer' key={idx}>
            <input
              type='radio'
              id={`${index}-${idx}`}
              name={index}
              value={answer}
              onChange={() => handleChange(event, quizQuestion.answers[quizQuestion.answers.indexOf(correct_answer)])}
              disabled={finished}
            />
            <label
              htmlFor={`${index}-${idx}`}
              dangerouslySetInnerHTML={{ __html: answer }}
              className='quiz__answer__label'
              id={finished ? showResult(`${index}-${idx}`, correct_answer) : ''}
            />
          </span>
        ))}
      </div>
      {showCategory && <p className='quiz__category' dangerouslySetInnerHTML={{ __html: quizQuestion.category }} />}
    </div>
  );
};

export default Question;
