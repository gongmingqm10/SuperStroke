var pyManager = (function(){

    var init = function(){
        wordsManager.fracList.forEach(function(py){
            var pyBox = $('<span>').addClass("error").text(py);
            $("#pyList").append(pyBox);
        });
    };

    return {"init":init};
})();