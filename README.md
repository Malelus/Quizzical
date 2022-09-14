# Quizzical - test your knowledge about anything!

> ### [Page link](https://malelus-quizzical.netlify.app/)

---

#### The project was built using vite, frontend of the site was written in ReactJS and SCSS to write to CSS code, used icons from https://fontawesome.com/

- used fonts:
  - [Inter](https://fonts.google.com/specimen/Inter)
  - [Karla](https://fonts.google.com/specimen/Karla)
  - [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)

---

#### Structure:

- the website has been designed in a responsive way so that it can be used freely and comfortably on any device:

| Smartphone                                                  | Mobile                                                                                           |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| < 768px                                                     | >= 768px                                                                                         |
| View adapted for use on a smartphone (initial site design), | Mobile view, fixed navigation bar on top, fonts resize and fit of animations for larger screens. |

- open graph tags (page preview in pasted link) in the head of the page,

- button at the top of the page to change the theme of the page, and the selected theme is saved to local storage,

- under the title there is a dynamic description of the quiz which is currently selected,

- START QUIZ button after which the quiz is displayed,

- panel to change the number of questions in the quiz (The maximum number is 50 questions),

- panel to select the category (Any is default option), available:

  - Sports,

  - History,

  - Animals,

  - General Knowledge,

  - Entertaiment: Video Games,

  - Entertaiment: Cartoon & Animations.

- at the very top of the quiz is the name of the selected category, when the basic category is selected the name of the category is displayed under its question,

- the quiz consists of a question number and 4 answers,

- when solving the quiz in the lower right corner there is a button to return to the main screen,

- after scrolling to the very bottom of the quiz there is a button to check it,

- after checking the quiz, the points scored are displayed and the answers are colored accordingly:

  - dark green - correctly selected answer,

  - green - correct answer,

  - red - wrong answer.

- github links are located in bottom left corner under button,

- all questions come from [opentdb.com](https://opentdb.com/) (link is located in bottom left corner) and were inserted using API.

#### Look:

- changed scrollbar design,

- changed text selection design.

#### Extras:

- ability to disable completely the animations present on the page.

  > (To disable animations: Settings > Accessibility > Display > Show animations in Windows (Disable)) (The setting is found in the \_reset.scss file).

---

#### Made by: Mateusz Narowski

#### Date: 05.09.2022
