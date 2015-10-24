"use strict";

var characterIndex = 0;

var strokeManager = {
    SUCCESS: 0,
    FINISHED: 1,
    FAILED: 2,
    line: [],
    _strokeList: [],
    strokeIndex: 0,

    strokesGen: function (strokeList) {
        var self = this;
        this.line = $('<div>');
        this._strokeList = strokeList;
        this.strokeIndex = 0;
        this._strokeList.forEach(function (stroke) {
            var wrapper = $('<span>').text(stroke);
            self.line.append(wrapper);
        });
        $(this.line.children().get(this.strokeIndex)).addClass('current');
        return this.line;
    },

    forward: function (userInput) {
        if (this.validate(userInput)) {
            resultManager.storeResult(this.currentStroke());
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
        return userInput === this.currentStroke();
    },

    currentStroke: function () {
        return this._strokeList[this.strokeIndex];
    }

};
