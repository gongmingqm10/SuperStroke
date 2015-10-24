"use strict"
var buttonList = [
    {
        "content": "一",
        "number": "1",
        "value": "一"
    },
    {
        "content": "丨",
        "number": "2",
        "value": "丨"
    },
    {
        "content": "丿",
        "number": "3",
        "value": "丿"
    },
    {
        "content": "丶",
        "number": "4",
        "value": "丶"
    },
    {
        "content": "ㄥ",
        "number": "5",
        "value": "ㄥ"
    },
    {
        "content": "*",
        "number": "6",
        "value": "*"
    },
    ];


$(document).ready(function () {
    var ButtonBuilder = function (buttonConfig) {
        var button = $("<div>").addClass("key-wrapper btn btn-primary").attr("data-value",buttonConfig.value);
        var content = $("<div>").addClass("content").text(buttonConfig.content);
        var name = $("<div>").addClass("number").text(buttonConfig.number);
        button.append([name, content]);
        return button;
    };

    $("#keyboard").append($("<div>").addClass("kb-wrapper container"));

    for (var idx in buttonList) {
        var wrapper = $("<div>").addClass("col-xs-4");
        wrapper.append(ButtonBuilder(buttonList[idx]));
        $("#keyboard .kb-wrapper").append(wrapper);
    };
});