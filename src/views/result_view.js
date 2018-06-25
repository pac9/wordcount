const PubSub = require('../helpers/pub_sub');

const ResultView = function (){

};

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
   resultElement.textContent = `You entered ${result} words`
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('WordCount:result', (event) =>{
    const result = event.detail;
    // console.log(result);
    this.updateView(result);
  })

};

module.exports = ResultView;
