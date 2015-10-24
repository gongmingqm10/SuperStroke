"use strict";

var wordsManager = {
    words: [],
    currentIndex: 0,
    wordList:[],
    wordMap: {},
    fracMap: {},
    fracList:[],
    setWords:function(_words){
        this.words = _words;
    },
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
    initStroke:function(){
        var self = this;
        this.words.forEach(function(word){
            word.frac = word.strokes;
        });
    },
    initPinyin:function(){
        var self = this;
        this.words.forEach(function(word){
            word.strokes = "";
            self.wordMap[word.name] = word;
            self.wordList.push(word.name);
            word.frac.forEach(function(frac){
                word.strokes+=frac;
                if (!self.fracMap[frac]) {
                    self.fracMap[frac] = [];
                }
                self.fracMap[frac].push(word);
            });
        });
        for ( var key in this.fracMap ){
            if (this.fracMap.hasOwnProperty(key)){
                this.fracList.push(key);
            }
        }
        this.fracList.sort();
    }
};

