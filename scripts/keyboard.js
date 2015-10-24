"use strict";


$(document).ready(function () {

    var buttonList = [
        {
            "content": "一",
            "number": "1",
            "value": "一",
            "size": ""
    },
        {
            "content": "丨",
            "number": "2",
            "value": "丨",
            "size": ""

    },
        {
            "content": "丿",
            "number": "3",
            "value": "丿",
            "size": ""
    },
        {
            "content": "D",
            "number": "",
            "value": "",
            "size": ""
    },
        {
            "content": "丶",
            "number": "4",
            "value": "丶",
            "size": ""
    },
        {
            "content": "ㄥ",
            "number": "5",
            "value": "ㄥ",
            "size": ""
    },
        {
            "content": "通配",
            "number": "6",
            "value": "＊",
            "size": "font-small"
    },
        {
            "content": "C",
            "number": "",
            "value": "",
            "size": ""
    },
        {
            "content": "分词",
            "number": "7",
            "value": "",
            "size": "font-small"
    },
        {
            "content": "，",
            "number": "8",
            "value": "",
            "size": ""
    },
        {
            "content": "。",
            "number": "9",
            "value": "",
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
    }
    
    window.keyboard = KeyboardBuilder($("#keyboard .kb-wrapper"));
});