import { useState } from 'react';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  return (
    <>
      <footer className={`footer ${showFooter ? 'footer--visible' : ''}`} onBlur={() => setShowFooter(false)}>
        <a href='https://github.com/Malelus' target='_blank' className='btn btn--icon'>
          Author <i className='fa-brands fa-github' />
        </a>

        <a href='https://github.com/Malelus/Quizzical' target='_blank' className='btn btn--icon'>
          Project <i className='fa-brands fa-github' />
        </a>

        <button className='btn btn--icon footer__toggle' onClick={() => setShowFooter((prev) => !prev)}>
          <i className='fa-brands fa-github' />
        </button>
      </footer>

      <a href='https://opentdb.com/' target='_blank' className='footer__source'>
        API <i className='fa-solid fa-globe' />
      </a>
    </>
  );
};

export default Footer;
