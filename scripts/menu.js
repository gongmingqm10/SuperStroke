var historyPageHide = $("<div>").addClass("btn btn-primary").text("close");
var historyPage = $("<div>").addClass("historyPage").text("History");


var menu = {
    historyButton : $("<div>").addClass("navi btn btn-default").text("查"),
    switchButton : $("<a>").addClass("navi btn btn-default").text("换"),


    "init":function(href){
        $("#menu").addClass("contianer");
        $("#menu").append(this.historyButton);
        $("#menu").append(this.switchButton);

        historyPage.hide();
        $("body").prepend(historyPage);

        this.switchButton.attr("href", href);

        this.historyButton.on("click", function(){

            historyPage.empty();
            historyPage.append(resultManager.report());
            historyPage.append(historyPageHide);
            historyPageHide.on("click",function(){
                historyPage.hide();
            });
            historyPage.show();
            console.log("haha");
        });
    }
};
