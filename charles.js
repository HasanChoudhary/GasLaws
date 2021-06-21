var ptv = ["Preasure", "Tempreture", "Volume"];
var valuesOfBars = [5, $("#preasure").val(), $("#volume").val()];
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
    var dif = ((5 - parseInt($("#preasure").val())) * -1);
    $("#volume").val(5 + dif);
    resetChart();
});

$("#volume").on("input", function (){
    var dif = ((5 - parseInt($("#volume").val())) * -1);
    $("#preasure").val(5 + dif);
    resetChart();
});

function resetChart(){
    valuesOfBars = [5, $("#preasure").val(), $("#volume").val()];
    barColorChange();
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

function barColorChange(){
    if($("#preasure").val() > 5 && $("#preasure").val() < 8){
        barColors[1] = "#ff6961";
        barColors[2] = "#ff6961";
    }
    else if($("#preasure").val() < 5 && $("#preasure").val() > 2){
        barColors[1] = "#8f9ce8";
        barColors[2] = "#8f9ce8";
    }
    else if($("#preasure").val() > 7){
        barColors[1] = "#e64135";
        barColors[2] = "#e64135";
    }
    else if($("#preasure").val() < 3){
        barColors[1] = "#a6cad7";
        barColors[2] = "#a6cad7";
    }
    else{
        barColors[1] = "#c5bddc";
        barColors[2] = "#c5bddc";
    }
}

