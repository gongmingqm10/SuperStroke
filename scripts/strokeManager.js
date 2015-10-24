"use strict"

var characterIndex = 0;
var strokeIndex = 0;

var strokeManager = {
    SUCCESS: 0,
    FINISHED: 1,
    FAILED: 2,
    line: [],
    _strokeList: [],
    strokesGen: function(strokeList){
        this.line = $("<div>");
        this._strokeList = strokeList;
        this.strokeIndex = 0;
        for (var idx in strokeList) {
            var stroke = strokeList[idx];
            var wrapper = $('<span>').text(stroke);
            this.line.append(wrapper);
        }
        $(this.line.children().get(this.strokeIndex)).addClass("current");
        return this.line;
    },
    strokeIndex:0,
    forword:function(userInput){
        if ( this.validate(userInput) ){
            this.strokeIndex++;
            if (this._strokeList.length === this.strokeIndex) {
                return this.FINISHED;
            } else {
                $(this.line.children().get(this.strokeIndex - 1)).addClass("success").removeClass("current");
                $(this.line.children().get(this.strokeIndex)).addClass("current");
                return this.SUCCESS;
            }
        } else {
            $(this.line.children().get(this.strokeIndex)).addClass("failed");
            return this.FAILED;
        }
    },
        
    validate: function(userInput){
        return (userInput)==(this._strokeList[this.strokeIndex]);
    },

    currentStroke: function() {
        return this._strokeList[this.strokeIndex];
    }
    
};

function keypress () {
    
	var userInput = $(this).attr('data-value');
    //var currentStroke = strokeManager.currentStroke();
    var statu = strokeManager.forword(userInput);
    
    if ( statu == strokeManager.FINISHED ){
        //TODO
        characterIndex++;
        //initUI();
        wordsManager.updateIndex();
    }
    console.log(userInput);
};

function initUI() {
    $('#character').html(demoSentence[characterIndex]);
    $('#strokes').empty();
    $('#strokes').append(strokeManager.strokesGen(demoStroke[characterIndex]));
}

function loadDataToUI(word) {
    if (word == null) {
        alert("恭喜你，通过闯关测试！");
        return;
    }
    $('#character').html(word["name"]);
    $('#strokes').empty();
    $('#strokes').append(strokeManager.strokesGen(word["strokes"].split(' ')));
}

$(document).ready(function() {
    $('.key-wrapper').click(keypress);
});



