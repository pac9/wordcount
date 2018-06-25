const PubSub = require('../helpers/pub_sub');

const InputView = function(){

};

InputView.prototype.bindEvents = function () {

  const input = document.querySelector('#text');
  input.addEventListener('input', (evt) => {

    const inputWords = evt.target.value;

    // console.log('inputted words', inputWords);
    PubSub.publish('InputView:words-inputted', inputWords);

  });
};

module.exports = InputView;
