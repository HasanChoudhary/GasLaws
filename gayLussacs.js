var ptv = ["Preasure", "Tempreture", "Volume"];
var valuesOfBars = [$("#preasure").val(), $("#volume").val(),5];
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
    valuesOfBars = [$("#preasure").val(), $("#volume").val(),5];
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
        barColors[0] = "#ff6961";
    }
    else if($("#preasure").val() < 5 && $("#preasure").val() > 2){
        barColors[1] = "#8f9ce8";
        barColors[0] = "#8f9ce8";
    }
    else if($("#preasure").val() > 7){
        barColors[1] = "#e64135";
        barColors[0] = "#e64135";
    }
    else if($("#preasure").val() < 3){
        barColors[1] = "#a6cad7";
        barColors[0] = "#a6cad7";
    }
    else{
        barColors[1] = "#c5bddc";
        barColors[0] = "#c5bddc";
    }
}

