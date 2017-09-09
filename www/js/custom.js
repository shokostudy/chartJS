// 銀行セレクトボックスonChangeイベント
function editSelects1(event) {
  document.getElementById('choose-sel1').removeAttribute('modifier');
  if (event.target.value == 'material' || event.target.value == 'underbar') {
    document.getElementById('choose-sel1').setAttribute('modifier', event.target.value);
  }
}

// 月セレクトボックスonChangeイベント
function editSelects2(event) {
  document.getElementById('choose-sel2').removeAttribute('modifier');
  if (event.target.value == 'material' || event.target.value == 'underbar') {
    document.getElementById('choose-sel2').setAttribute('modifier', event.target.value);
  }
}

function addOption(event) {
  const option = document.createElement('option');
  let text = document.getElementById('optionLabel').value;
  option.innerText = text;
  text = '';
  document.getElementById('dynamic-sel').appendChild(option);
}

var chart;
// 月ごと口座残高推移グラフ表示
function chartMonth(){
    if(chart){
        chart.destroy();
    }
    var chartConfig = getChartData();
    var ctxChart = document.getElementById("chart_all").getContext("2d");
    chart = new Chart(ctxChart, chartConfig);
    document.getElementById('month_button').setAttribute('disabled');
    document.getElementById('halfyear_button').removeAttribute('disabled');
    document.getElementById('year_button').removeAttribute('disabled');
}

// 半年ごと口座残高推移グラフ表示
function chartHalfYear(){
    if(chart){
        chart.destroy();
    }
    var chartConfig = getChartHalfYearData();
    var ctxChart = document.getElementById("chart_all").getContext("2d");
    chart = new Chart(ctxChart, chartConfig);
    document.getElementById('month_button').removeAttribute('disabled');
    document.getElementById('halfyear_button').setAttribute('disabled');
    document.getElementById('year_button').removeAttribute('disabled');
}

// 年ごと口座残高推移グラフ表示
function chartYear(){
    if(chart){
        chart.destroy();
    }
    var chartConfig = getChartYearData();
    var ctxChart = document.getElementById("chart_all").getContext("2d");
    chart = new Chart(ctxChart, chartConfig);
    document.getElementById('month_button').removeAttribute('disabled');
    document.getElementById('halfyear_button').removeAttribute('disabled');
    document.getElementById('year_button').setAttribute('disabled');
}




