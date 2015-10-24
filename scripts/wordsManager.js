"use strict";

var wordsManager = {
    words: [],
    currentIndex: 0,
    updateIndex: function () {
        this.currentIndex++;
        loadDataToUI(this.previousWord(), this.currentWord(), this.nextWord());
    },
    currentWord: function () {
        return this.words[this.currentIndex];
    },
    nextWord: function () {
        return this.words[this.currentIndex + 1];
    },
    previousWord: function () {
        return this.words[this.currentIndex - 1];
    }
};
