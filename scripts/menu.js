var historyPageHide = $("<div>").addClass("btn btn-primary").text("close");
var historyChart = $("<div id='historyChart'></div>").text("Chart").css("margin", "0 auto");
var historyPage = $("<div>").addClass("historyPage").text("History");


function chartMaker(report){
    var chart = new CanvasJS.Chart("historyChart", {
            title: {
                text: "敲击时的反应时间"
            },
            animationEnabled: true,
            axisX: {
                interval: 1,
                gridThickness: 0,
                labelFontSize: 10,
                labelFontStyle: "normal",
                labelFontWeight: "normal",
                labelFontFamily: "Lucida Sans Unicode"
            },
            axisY2: {
                interlacedColor: "rgba(1,77,101,.2)",
                gridColor: "rgba(1,77,101,.1)"
            },
            data: [
                {
                    type: "bar",
                    name: "companies",
                    axisYType: "secondary",
                    color: "#014D65",
                    dataPoints: report
                }
            ]
        });
    chart.render();
}

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

            historyPage.append(historyPageHide);
            historyPageHide.on("click",function(){
                historyPage.hide();
            });

            historyPage.append(historyChart);
            chartMaker(resultManager.report());




            historyPage.show();
            console.log("haha");
        });
    }
};
