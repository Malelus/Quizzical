import { useEffect, useState } from 'react';

import Header from './components/Start/Header';
import Size from './components/Start/Size';
import Category from './components/Start/Category';

import Quiz from './components/Quiz/Quiz';

import Footer from './components/Footer';

import categories from './data/categories.json';

const App = () => {
  // Change the site theme and save it to local storage
  const [darkTheme, setDarkTheme] = useState(() => JSON.parse(localStorage.getItem('darkTheme')) || false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkTheme);

    localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
  }, [darkTheme]);

  const toggleTheme = () => {
    darkTheme ? setDarkTheme(false) : setDarkTheme(true);
  };

  // Quiz settings
  const [start, setStart] = useState(false);

  const [quizSize, setQuizSize] = useState(5);
  const [quizCategory, setQuizCategory] = useState(1);

  const categoryDetails = categories.find((category) => category.id === quizCategory);

  return (
    <>
      <button className='theme-toggle-btn btn btn--small' onClick={() => toggleTheme((prev) => !prev)}>
        {darkTheme ? <i className='fa-solid fa-moon' /> : <i className='fa-solid fa-sun' />}
      </button>

      <div className='container-main'>
        {start ? (
          <Quiz quizSize={quizSize} categoryDetails={categoryDetails} setStart={setStart} />
        ) : (
          <main>
            <Header setStart={setStart} description={categoryDetails.description} />

            <section className='quiz-options'>
              <Size quizSize={quizSize} setQuizSize={setQuizSize} />
              <Category categories={categories} quizCategory={quizCategory} setQuizCategory={setQuizCategory} />
            </section>
          </main>
        )}

        <Footer />

        <img src='/blobs/blob-tr.png' alt='blob' className='blob blob-tr' />
        <img src='/blobs/blob-tl.png' alt='blob' className='blob blob-tl' />
        <img src='/blobs/blob-bl.png' alt='blob' className='blob blob-bl' />
        <img src='/blobs/blob-br.png' alt='blob' className='blob blob-br' />
      </div>
    </>
  );
};

export default App;
