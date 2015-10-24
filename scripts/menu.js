var historyPageHide = $("<div>").addClass("btn btn-primary").text("close");
var historyPage = $("<div>").addClass("historyPage").text("History");


var menu = {
    historyButton : $("<div>").addClass("nav btn btn-small btn-default").text("H"),
    switchButton : $("<a>").addClass("nav btn btn-small btn-default").text("S"),


    "init":function(href){
        $("#menu").addClass("contianer");
        $("#menu").append(this.historyButton);
        $("#menu").append(this.switchButton);

        historyPage.hide();
        $("body").prepend(historyPage);

        this.switchButton.attr("href",href );

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
