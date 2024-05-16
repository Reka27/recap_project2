console.clear();
const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');
const submitButton = document.querySelector('[data-js="submit_button"]');
//const formFieldset = document.querySelector('[data-js="fieldset"]');
const questionElement = document.querySelector('[data-js="question"]');
const answerElement = document.querySelector('[data-js="answer"]');
const characterLeftQuestion = document.querySelector(
  '[data-js="charLeft_question"]'
);
const characterLeftAnswer = document.querySelector(
  '[data-js="charLeft_answer"]'
);
const updateRemainingLength = (spanElement, remaininglength) => {
  spanElement.textContent = `${remaininglength} characters left`;
};
const maxlength = questionElement.getAttribute("maxlength");

//Calculate remaining length of textarea input and update
questionElement.addEventListener("input", (event) => {
  const remaininglength = maxlength - event.target.value.length;
  updateRemainingLength(characterLeftQuestion, remaininglength);
});
answerElement.addEventListener("input", (event) => {
  const remaininglength = maxlength - event.target.value.length;
  updateRemainingLength(characterLeftAnswer, remaininglength);
});

let questionInput;
let answerInput;
let tagInput;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //To read the input
  formElements = form.elements;
  questionInput = formElements.question.value;
  answerInput = formElements.answer.value;
  tagInput = formElements.tag.value;

  //Creating newCard with the userInput using DOM
  const newCard = document.createElement("l1");
  newCard.classList.add("card-list__item");
  newCard.innerHTML = `  <article class="card">
<h2 class="card__question">
  ${questionInput}
</h2>
<button
  class="card__button-answer"
  type="button"
  data-js="card__button-answer_1"
>
  Show answer
</button>
<p class="card__answer" data-js="answer_card_1">
${answerInput}
</p>
<ul class="card__tag-list">
  <li class="card__tag-list-item">${tagInput}</li>
</ul>
<div class="card__button-bookmark">
  <button
    class="bookmark"
    aria-label="bookmark"
    type="button"
    data-js="bookmark_button_1"
  >
    <svg
      class="bookmark__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewbox="0 0 24 24"
      data-js="bookmark_icon_1"
    >
      <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
    </svg>
  </button>
</div>
</article>`;
  main.append(newCard);
});
