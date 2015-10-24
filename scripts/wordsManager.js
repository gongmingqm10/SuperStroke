"use strict";

var wordsManager = {
    words: [],
    currentIndex: 0,
    fracMap: {},
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
    },
    init:function(){
        var self = this;
        this.words.forEach(function(word){
            word.stroke = "";
            word.frac.forEach(function(frac){
                word.stroke+=frac;
                if (!self.fracMap[frac]) {
                    self.fracMap[frac] = [];
                }
                self.fracMap[frac].push(word);
            })
        })
    }
};

