// console.log("loaded");
const InputView = require('./views/input_view');
const WordCount = require('./models/word_count');
const ResultView = require('./views/result_view');

document.addEventListener('DOMContentLoaded', () => {

  const inputView = new InputView();
  inputView.bindEvents();

  const wordCount = new WordCount();
  wordCount.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

})
