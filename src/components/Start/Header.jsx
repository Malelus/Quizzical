const Header = ({ setStart, description }) => {
  return (
    <header className='header'>
      <h1 className='header__title'>Quizzical</h1>
      <p className='header__desc'>{description}</p>

      <button className='btn' onClick={() => setStart(true)}>
        Start quiz
      </button>
    </header>
  );
};

export default Header;
