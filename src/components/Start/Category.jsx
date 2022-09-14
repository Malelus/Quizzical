import React from 'react';

const Category = ({ categories, quizCategory, setQuizCategory }) => {
  return (
    <section className='quiz-options__category'>
      <label htmlFor='category'>Choose category:</label>

      <select
        id='category'
        className='btn'
        onChange={(event) => setQuizCategory(parseInt(event.target.value))}
        value={quizCategory}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Category;
