// phew… not a lot going on here. Please add some code!
console.clear();
const firstCard = document.querySelector('[data-js="card1"]');
const bookmarkButton = document.querySelector('[data-js="bookmark_button_1"]');
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});
const answerButton1 = document.querySelector(
  '[data-js="card__button-answer_1"]'
);
const answerCard1 = document.querySelector('[data-js="answer_card_1"]');
answerButton1.addEventListener("click", () => {
  answerCard1.classList.toggle("card__answer--active");
});
