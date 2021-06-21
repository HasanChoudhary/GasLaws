var ptv = ["Preasure", "Tempreture", "Volume"];
var valuesOfBars = [$("#preasure").val(),$("#tempreture").val(),$("#volume").val()];
var barColors = ["#c5bddc","#c5bddc","#c5bddc"];

var myChart = new Chart($("#myChart"), {
    type: "bar",
    data:{
        labels: ptv,
        datasets:[{
            backgroundColor: barColors,
            data: valuesOfBars,
        }]
    },
    options:{
        legend: {display: false},
        title:{
            display: true,
            text: "Boyle's Law",
        },
        scales:{
            yAxes:[{ticks:{min: 0, max: 10}}],
         }
    }
});

$("#preasure").on("input", function (){
    resetChart("preasure");
});

$("#volume").on("input", function (){
    resetChart("volume");
});

$("#tempreture").on("input", function (){
    resetChart("tempreture");
});

function resetChart(whatVar){
    valuesOfBars = [$("#preasure").val(),$("#tempreture").val(),$("#volume").val()];
    barColorChange(whatVar);
    myChart.data = {
        labels: ptv,
        datasets:[{
            backgroundColor: barColors,
            data: valuesOfBars,
        }]
    };
    myChart.options.animation = false;
    myChart.update('hide');
}

function barColorChange(whatVar){
    var whatIndex;
    switch(whatVar){
        case "preasure":
            whatIndex = 0;
            break;
        case "tempreture":
            whatIndex = 1;
            break;
        case "volume":
            whatIndex = 2;
            break;
    }
    if($("#"+whatVar).val() > 5 && $("#"+whatVar).val() < 8){
        barColors[whatIndex] = "#ff6961";
    }
    else if($("#"+whatVar).val() < 5 && $("#"+whatVar).val() > 2){
        barColors[whatIndex] = "#8f9ce8";
    }
    else if($("#"+whatVar).val() > 7){
        barColors[whatIndex] = "#e64135";
    }
    else if($("#"+whatVar).val() < 3){
        barColors[whatIndex] = "#a6cad7";
    }
    
    else{
        barColors[whatIndex] = "#c5bddc";
    }
}

