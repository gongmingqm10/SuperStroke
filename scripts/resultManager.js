"use strict";

var resultManager = {
    result: {
        '一': {"average":0.0},
        '丨': {"average":0.0},
        '丿': {"average":0.0},
        '丶': {"average":0.0},
        'ㄥ': {"average":0.0},
        '＊': {"average":0.0}
    },
    sortedResult: [],
    startTime: 0,
    resultList: {},
    _getTimeSecons:function(){
        var date = new Date();
        return date.getTime();
    },
    resetStartTime: function () {
        this.startTime = this._getTimeSecons();
    },
    calculateTimeCost: function () {
        var dateSecond = this._getTimeSecons();
        var cost = dateSecond - this.startTime;
        return cost;
    },
    initResultList: function( pyList ){
        var self = this;
        pyList.forEach(function(py){
            self.resultList[py] = {"key":py, "average": 0.0};
        });
    },
    checkStrokePoint: function( stroke ){
        var cost = this.calculateTimeCost();
        var aver = this.result[stroke].average;
        if ( aver == 0.0 ){
            this.result[stroke].average = cost;
        }else {
            this.result[stroke].average = (aver + cost) / 2.0;
        }
        console.log(stroke, this.result[stroke].average, cost);
    },
    checkPinyinPoint: function( word ){
        var cost = this.calculateTimeCost();
        var aver = this.resultList[word].average;
        if ( aver == 0.0 ){
            this.resultList[word].average = cost;
        }else {
            this.resultList[word].average = (aver + cost) / 2.0;
        }
        console.log(word, this.resultList[word].average );
    },
    storeResult: function (stroke) {
        //this.result[stroke].push(this.calculateTimeCost());
        //this.sortResult();
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
    report: function(){
        var reportList = [];
        for ( var key in this.result){
            var obj = this.result[key];
            reportList.push({label:key, y: obj.average/1000});
        }
        for ( var key in this.resultList){
            var obj = this.resultList[key];
            reportList.push({label:key, y: obj.average/1000});
        }
        return reportList;
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
