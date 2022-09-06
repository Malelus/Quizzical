import { useState } from 'react';

import Start from './components/Start';
import Quiz from './components/Quiz';

const App = () => {
  const [start, setStart] = useState(true);

  const [amount, setAmount] = useState(5);
  const [category, setCategory] = useState(0);

  const categories = [
    { value: 0, name: 'Any', description: 'Test your knowledge in our quiz' },
    { value: 21, name: 'Sports', description: 'Quiz about sports' },
    { value: 23, name: 'History', description: 'Quiz about history' },
    { value: 27, name: 'Animals', description: 'Quiz about animals' },
    { value: 9, name: 'General Knowledge', description: 'Quiz about general knowledge' },
    { value: 15, name: 'Entertaiment: Video Games', description: 'Quiz about video games' },
    { value: 32, name: 'Entertaiment: Cartoon & Animations', description: 'Quiz about cartoon & animations' },
  ];

  return (
    <div className='blob-container'>
      {start ? (
        <main>
          <Start setStart={setStart} description={categories.find((item) => item.value == category).description} />

          <div className='options-wrapper'>
            <section className='amount-container'>
              <button className='btn btn--small' onClick={() => setAmount((prev) => (amount > 1 ? prev - 1 : prev))}>
                <i className='fa-solid fa-minus'></i>
              </button>

              <span>{amount}</span>

              <button className='btn btn--small' onClick={() => setAmount((prev) => (amount < 25 ? prev + 1 : prev))}>
                <i className='fa-solid fa-plus'></i>
              </button>

              <button className='btn btn--small' onClick={() => setAmount(5)}>
                <i className='fa-solid fa-arrow-rotate-right rotate'></i>
              </button>
            </section>

            <section className='category-container'>
              <label htmlFor='category'>Choose category:</label>

              <select id='category' onChange={(event) => setCategory(event.target.value)} value={category}>
                {categories.map((category, index) => (
                  <option key={index} value={category.value}>
                    {category.name}
                  </option>
                ))}
              </select>
            </section>
          </div>
        </main>
      ) : (
        <Quiz
          amount={amount}
          category={category}
          categoryName={categories.find((element) => element.value == category).name}
          setStart={setStart}
        />
      )}

      <img src='/images/blob-tr.png' alt='blob' className='blob blob-tr' />
      <img src='/images/blob-tl.png' alt='blob' className='blob blob-tl' />
      <img src='/images/blob-bl.png' alt='blob' className='blob blob-bl' />
      <img src='/images/blob-br.png' alt='blob' className='blob blob-br' />
      <footer className='footer'>
        <a href='https://opentdb.com/' target='_blank' className='footer__link'>
          Questions Source
        </a>
      </footer>
    </div>
  );
};

export default App;
