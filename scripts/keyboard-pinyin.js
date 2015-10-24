"use strict";


$(document).ready(function () {

    var buttonList = [
        {
            "content": "'",
            "number": "1",
            "value": "",
            "size": ""
        },
        {
            "content": "abc",
            "number": "2",
            "value": "abc",
            "size": ""

        },
        {
            "content": "def",
            "number": "3",
            "value": "def",
            "size": ""
        },
        {
            "content": "D",
            "number": "",
            "value": "",
            "size": ""
        },
        {
            "content": "ghi",
            "number": "4",
            "value": "ghi",
            "size": ""
        },
        {
            "content": "jkl",
            "number": "5",
            "value": "jkl",
            "size": ""
        },
        {
            "content": "mno",
            "number": "6",
            "value": "mno",
            "size": ""
        },
        {
            "content": "C",
            "number": "",
            "value": "",
            "size": ""
        },
        {
            "content": "pqrs",
            "number": "7",
            "value": "pqrs",
            "size": ""
        },
        {
            "content": "tuv",
            "number": "8",
            "value": "tuv",
            "size": ""
        },
        {
            "content": "wxyz",
            "number": "9",
            "value": "wxyz",
            "size": ""
        },
        {
            "content": "OK",
            "number": "",
            "value": "",
            "size": ""
        }
    ];
    var ButtonBuilder = function (buttonConfig) {
        var button = $("<div>").addClass("key-wrapper btn btn-primary").attr("data-value", buttonConfig.value);
        if (buttonConfig.value.length == 0) {
            button.attr("disabled", "disabled");
        }

        var content = $("<div>").addClass("content").text(buttonConfig.content);
        if (buttonConfig.size.length > 0) {
            content.addClass('font-small');
        }

        var number = $("<div>").addClass("number").text(buttonConfig.number);
        if (buttonConfig.number.length == 0) {
            number.addClass('empty');
        }

        button.append([number, content]);
        return button;
    };

    $("#keyboard").append($("<div>").addClass("kb-wrapper container"));

    for (var idx in buttonList) {
        var wrapper = $("<div>").addClass("col-xs-3");
        wrapper.append(ButtonBuilder(buttonList[idx]));
        $("#keyboard .kb-wrapper").append(wrapper);
    };

    var KeyboardBuilder = function(dom){
        return {
            keyboard: dom,
            clearErrors: function(){
                $('#keyboard .kb-wrapper .key-wrapper').removeClass('error');
            }
        }
    };

    window.keyboard = KeyboardBuilder($("#keyboard .kb-wrapper"));
});