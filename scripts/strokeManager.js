"use strict";

var characterIndex = 0;

var strokeManager = {
    SUCCESS: 0,
    FINISHED: 1,
    FAILED: 2,
    line: [],
    _strokeList: [],
    strokesGen: function (strokeList) {
        this.line = $('<div>');
        this._strokeList = strokeList;
        this.strokeIndex = 0;
        for (var idx in strokeList) {
            var stroke = strokeList[idx];
            var wrapper = $('<span>').text(stroke);
            this.line.append(wrapper);
        }
        $(this.line.children().get(this.strokeIndex)).addClass('current');
        return this.line;
    },
    strokeIndex: 0,
    forward: function (userInput) {
        if (this.validate(userInput)) {
            this.strokeIndex++;
            if (this._strokeList.length === this.strokeIndex) {
                return this.FINISHED;
            } else {
                $(this.line.children().get(this.strokeIndex - 1)).addClass('success').removeClass('current');
                $(this.line.children().get(this.strokeIndex)).addClass('current');
                return this.SUCCESS;
            }
        } else {
            $(this.line.children().get(this.strokeIndex)).addClass('failed');
            return this.FAILED;
        }
    },

    validate: function (userInput) {
        return (userInput) == (this._strokeList[this.strokeIndex]);
    },

    currentStroke: function () {
        return this._strokeList[this.strokeIndex];
    }

};


function keypress() {

    var userInput = $(this).attr('data-value');
    var status = strokeManager.forward(userInput);

    if (status == strokeManager.FINISHED) {
        characterIndex++;
        wordsManager.updateIndex();
    }
}

function loadDataToUI(previousWord, currentWord, nextWord) {
    var $previousCharacter = $('#character .previous').empty(),
        $currentCharacter = $('#character .current').empty(),
        $nextCharacter = $('#character .next').empty();

    if (!currentWord) {
        alert("恭喜你，通过闯关测试！");
        return;
    }

    if (previousWord) {
        $previousCharacter.html(previousWord["name"]);
    }

    $currentCharacter.html(currentWord["name"]);

    if (nextWord) {
        $nextCharacter.html(nextWord["name"]);
    }

    $('#strokes').empty().append(strokeManager.strokesGen(currentWord["strokes"].split(' ')));
}

$(document).ready(function () {
    $('.key-wrapper').click(keypress);
});



