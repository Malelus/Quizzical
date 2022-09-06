import { useEffect, useState } from 'react';
import Loader from './Loader/Loader';

import Question from './Question';

const QuizScreen = ({ amount, category, categoryName, setStart }) => {
  const URL = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple`;

  const [loading, setLoading] = useState(true);
  const [questionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      const res = await fetch(URL);
      const data = await res.json();

      setQuestionsData(data.results);
      setLoading(false);
    };

    fetchQuiz();
  }, []);

  console.log(questionsData);

  const [givenAnswer, setGivenAnswer] = useState();

  const handleChange = (event, correct_answer) => {
    const { name, value } = event.target;

    setGivenAnswer((prevAnswer) => ({
      ...prevAnswer,
      [name]: { correct_answer: correct_answer, given_answer: value },
    }));
  };

  const [showCategory, setShowCategory] = useState(true);

  useEffect(() => {
    setShowCategory(category == 0 ? true : false);
  }, [category]);

  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const checkAnswers = () => {
    if (!givenAnswer) {
      setFinished(true);
      setScore(0);
      return;
    }

    for (let i = 0; i < amount; i++) {
      if (!givenAnswer[i]?.given_answer) {
        setScore((prevScore) => prevScore);
      } else if (givenAnswer[i].given_answer === givenAnswer[i].correct_answer) {
        setScore((prevScore) => prevScore + 1);
      }
    }

    setFinished(true);
  };

  const questions = questionsData.map((question, index) => (
    <Question
      key={index}
      index={index}
      {...question}
      handleChange={handleChange}
      finished={finished}
      showCategory={showCategory}
    />
  ));

  return loading ? (
    <Loader />
  ) : (
    <main className='container'>
      {!showCategory && <h1 className='quiz__title'>{categoryName}</h1>}

      {questions}

      {finished ? (
        <section className='quiz__finish'>
          <strong className='quiz__finish__score'>
            You scored {score}/{amount} correct answers
          </strong>

          <button className='btn' onClick={() => setStart(true)}>
            Play again
          </button>
        </section>
      ) : (
        <>
          <button className='quiz__btn btn' onClick={checkAnswers}>
            Check answers
          </button>

          <button className='btn-back btn btn--small' onClick={() => setStart(true)}>
            <i className='fa-solid fa-arrows-rotate rotate'></i>
          </button>
        </>
      )}
    </main>
  );
};

export default QuizScreen;
