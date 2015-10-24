"user strict";

var groupManager = {
    dictionary: [],
    fracMap: {},
    fracList: {},

    fracScore: {},

    setDictionary:function(dict){
        this.dictionary = dict;
        var self = this;
        this.words.forEach(function(word){
            word.strokes = "";

            self.wordMap[word.name] = word;
            self.fracScore[word.name] = 0.0;

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
        //this.fracList.sort();
    },
    getGroup:function(){
        var tmpList = [];
        var cnt = 10;
        while ( cnt > 0 ){
            var p = getRandomIntInclusive(0, fracMap.size()-1);
            
        }
    }
};
