import { useEffect, useState } from 'react';

// Mixing correct answer with wrong answers to display
const shuffleAnswers = (answers) => {
  return [...answers].sort(() => Math.random() - 0.5);
};

// Visual representation of the correctness of the answer
const showResult = (id, correct_answer) => {
  const givenAnswer = document.getElementById(id);

  if (givenAnswer.checked && givenAnswer.value === correct_answer) return 'question-answer-correct';

  if (givenAnswer.value === correct_answer) return 'question-answer-proper';

  if (givenAnswer.checked) return 'question-answer-incorrect';

  return 'question-answer-neutral';
};

const QuizQuestion = (props) => {
  const { question, incorrect_answers, correct_answer, category, id, handleChange, isFinished, showCategory } = props;

  // Creating a structure for the question
  const [quizQuestion, setQuizQuestion] = useState({ question: '', answers: [], category: '' });

  useEffect(() => {
    setQuizQuestion({
      question: question,
      answers: shuffleAnswers([...incorrect_answers, correct_answer]),
      category: category,
    });
  }, []);

  return (
    <div className='question'>
      <h3 className='question__title' dangerouslySetInnerHTML={{ __html: `${id + 1}. ${quizQuestion.question}` }} />

      <section className='question__answers'>
        {quizQuestion.answers.map((answer, index) => (
          <span className='question__answer' key={index}>
            <input
              type='radio'
              name={id}
              id={`${id}-${index}`}
              className='question__answer-input'
              onChange={() => handleChange(event, quizQuestion.answers[quizQuestion.answers.indexOf(correct_answer)])}
              value={answer}
              disabled={isFinished}
            />
            <label
              htmlFor={`${id}-${index}`}
              id={isFinished ? showResult(`${id}-${index}`, correct_answer) : ''}
              className='question__answer-label'
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </span>
        ))}
      </section>

      {showCategory && <p className='question__category' dangerouslySetInnerHTML={{ __html: quizQuestion.category }} />}
    </div>
  );
};

export default QuizQuestion;
