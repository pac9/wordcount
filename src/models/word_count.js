const PubSub = require('../helpers/pub_sub.js');


const WordCount = function(){

};


WordCount.prototype.countWords = function (words) {
   const splitWords = words.split(" ");
   const result = splitWords.length;
   return result;
};

WordCount.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:words-inputted', (evt) => {
    const inputWords = evt.detail;
    const result = this.countWords(inputWords);
    // console.log(result);
    PubSub.publish('WordCount:result', result);
  })

};
module.exports = WordCount;
