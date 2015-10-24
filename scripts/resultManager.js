"use strict";

var resultManager = {
    result: {
        '一': [],
        '丨': [],
        '丿': [],
        '丶': [],
        'ㄥ': []
    },
    sortedResult: [],
    startTime: 0,
    resetStartTime: function () {
        this.startTime = new Date().getTime();
    },
    calculateTimeCost: function () {
        return new Date().getTime() - this.startTime;
    },
    storeResult: function (stroke) {
        this.result[stroke].push(this.calculateTimeCost());
        this.sortResult();
    },
    sortResult: function () {
        this.sortedResult = [];
        for (var k in this.result) {
            if (this.result.hasOwnProperty(k) && this.result[k].length > 0) {
                var sum = 0;
                this.result[k].forEach(function (time) {
                    sum += time;
                });
                this.sortedResult.push({
                    stroke: k,
                    time: sum / this.result[k].length
                })
            }
        }
        this.sortedResult.sort(function (a, b) {
            return a.time > b.time;
        });
        $('.fastest').html('最熟练的笔画：' + this.getFastestStroke());
        $('.slowest').html('最不熟练的笔画：' + this.getSlowestStroke());
    },
    getFastestStroke: function () {
        var fastestStroke = this.sortedResult[0];
        return fastestStroke ? fastestStroke.stroke : 'NA';
    },
    getSlowestStroke: function () {
        var slowestStroke = this.sortedResult[this.sortedResult.length - 1];
        return slowestStroke ? slowestStroke.stroke : 'NA';
    }
};
