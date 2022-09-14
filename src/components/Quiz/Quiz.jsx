import { useEffect, useRef, useState } from 'react';

import Loader from '../Loader/Loader';

import QuizQuestion from './QuizQuestion';
import QuizScore from './QuizScore';
import QuizCheck from './QuizCheck';

const Quiz = ({ quizSize, categoryDetails, setStart }) => {
  // Questions API
  const API = `https://opentdb.com/api.php?amount=${quizSize}&category=${categoryDetails.value}&type=multiple`;

  const [isLoading, setIsLoading] = useState(true);

  const showCategory = categoryDetails.value == 0 ? true : false;

  const [quizData, setQuizData] = useState([]);

  const [givenAnswer, setGivenAnswer] = useState();

  // Fetch questions from API
  useEffect(() => {
    const controller = new AbortController();

    const fetchQuiz = async () => {
      const res = await fetch(API, { signal: controller.signal });
      const data = await res.json();

      setQuizData(data.results);
      setIsLoading(false);
    };

    fetchQuiz();

    return () => controller.abort();
  }, []);

  // Update on changes to answers given
  const handleChange = (event, correct_answer) => {
    const { name, value } = event.target;

    setGivenAnswer((prevAnswer) => ({
      ...prevAnswer,
      [name]: { correct_answer: correct_answer, given_answer: value },
    }));
  };

  // Finishing the quiz, checking answers and assigning points
  const [isFinished, setIsFinished] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const checkAnswers = () => {
    if (!givenAnswer) {
      setIsFinished(true);
      return;
    }

    for (let i = 0; i < quizSize; i++) {
      if (!givenAnswer[i]?.given_answer) {
        setQuizScore((prevScore) => prevScore);
      } else if (givenAnswer[i].given_answer === givenAnswer[i].correct_answer) {
        setQuizScore((prevScore) => prevScore + 1);
      }
    }

    setIsFinished(true);
  };

  // Scroll to bottom of page to show entire summary
  const scrollOnFinish = useRef(null);

  useEffect(() => {
    scrollOnFinish.current?.scrollIntoView({ behavior: 'smooth' });
  }, [isFinished]);

  return isLoading ? (
    <Loader />
  ) : (
    <main className='container'>
      <h1 className='quiz__category'>{showCategory ? 'Quizzical' : categoryDetails.name}</h1>

      <section className='quiz__questions'>
        {quizData.map((question, id) => (
          <QuizQuestion
            key={id}
            id={id}
            {...question}
            handleChange={handleChange}
            isFinished={isFinished}
            showCategory={showCategory}
          />
        ))}
      </section>

      <section className='quiz__action'>
        {isFinished ? (
          <QuizScore quizScore={quizScore} quizSize={quizSize} setStart={setStart} scrollOnFinish={scrollOnFinish} />
        ) : (
          <QuizCheck checkAnswers={checkAnswers} setStart={setStart} />
        )}
      </section>
    </main>
  );
};

export default Quiz;
