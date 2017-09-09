// 月ごと口座残高推移
function getChartData() {
    // 金額をランダムに返す（単位：万）
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 1000);
    };
    // 今月から過去半年間の月を配列に格納（横軸）
    var date = new Date();
    var month = date.getMonth();
    var spanArray = [];
    for(var i = 0; i < 7; i++){
        var tmp = date;
        tmp.setMonth(month - 6 + i);
        spanArray[i] = tmp.getMonth() + 1;
    }
    // グラフ用データを作成
    var configData = {
            type: 'line',
            data: {
                labels: spanArray,
                datasets: [{
                    label: "A-bank",
                    fill: false,
                    lineTension:0,
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
                    label: "B-bank",
                    fill: false,
                    lineTension:0,
                    backgroundColor: window.chartColors.orange,
                    borderColor: window.chartColors.orange,
                    //borderDash: [5, 5],
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
                    label: "C-bank",
                    fill: false,
                    lineTension:0,
                    backgroundColor: window.chartColors.yellow,
                    borderColor: window.chartColors.yellow,
                    //borderDash: [5, 5],
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
                    label: "D-bank",
                    fill: false,
                    lineTension:0,
                    backgroundColor: window.chartColors.green,
                    borderColor: window.chartColors.green,
                    //borderDash: [5, 5],
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
                    label: "E-Bank",
                    fill: true,
                    lineTension:0,
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
            },
            options: {
                responsive: true,
                title:{
                    //display:true,
                    //text:'全ての口座残高推移'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        //display: true,
                        scaleLabel: {
                            //display: true,
                            //labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        //display: true,
                        scaleLabel: {
                            //display: true,
                            //labelString: 'Value'
                        }
                    }]
                }
            }
        };
        return configData;
}

// 半年ごと口座残高推移
function getChartHalfYearData() {
    // 金額をランダムに返す（単位：万）
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 1000);
    };
    // 今月から過去半年ごとの年と月を配列に格納（横軸）
    var date = new Date();
    var month = date.getMonth();
    var spanArray = [];
    var preMonth = month + 6;
    for(var i = 6; i >= 0; i--){
        var tmp = date;
        tmp.setMonth(preMonth - 6);
        spanArray[i] = tmp.getFullYear() + '/' + (tmp.getMonth() + 1);
        preMonth = tmp.getMonth();
    }
    // グラフ用データを作成
    var configData = {
            type: 'line',
            data: {
                labels: spanArray,
                datasets: [{
                    label: "A-bank",
                    fill: false,
                    lineTension:0,
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
                    label: "B-bank",
                    fill: false,
                    lineTension:0,
                    backgroundColor: window.chartColors.orange,
                    borderColor: window.chartColors.orange,
                    //borderDash: [5, 5],
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
                    label: "C-bank",
                    fill: false,
                    lineTension:0,
                    backgroundColor: window.chartColors.yellow,
                    borderColor: window.chartColors.yellow,
                    //borderDash: [5, 5],
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
                    label: "D-bank",
                    fill: false,
                    lineTension:0,
                    backgroundColor: window.chartColors.green,
                    borderColor: window.chartColors.green,
                    //borderDash: [5, 5],
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
                    label: "E-Bank",
                    fill: true,
                    lineTension:0,
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
            },
            options: {
                responsive: true,
                title:{
                    //display:true,
                    //text:'全ての口座残高推移'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        //display: true,
                        scaleLabel: {
                            //display: true,
                            //labelString: 'Month'
                        },
                        ticks: {
                          maxRotation: 45,
                          minRotation: 45
                        }
                    }],
                    yAxes: [{
                        //display: true,
                        scaleLabel: {
                            //display: true,
                            //labelString: 'Value'
                        }
                    }]
                }
            }
        };
        return configData;
}

// 年ごと口座残高推移
function getChartYearData() {
    // 金額をランダムに返す（単位：万）
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 1000);
    };
    // 今月から過去1年ごとの年を配列に格納（横軸）
    var date = new Date();
    var year = date.getFullYear();
    var preYear = year + 1;
    var spanArray = [];
    for(var i = 6; i >= 0; i--){
        var tmp = date;
        tmp.setFullYear(preYear - 1);
        spanArray[i] = tmp.getFullYear();
        preYear = tmp.getFullYear();
    }
    // グラフ用データを作成
    var configData = {
            type: 'line',
            data: {
                labels: spanArray,
                datasets: [{
                    label: "A-bank",
                    fill: false,
                    lineTension:0,
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
                    label: "B-bank",
                    fill: false,
                    lineTension:0,
                    backgroundColor: window.chartColors.orange,
                    borderColor: window.chartColors.orange,
                    //borderDash: [5, 5],
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
                    label: "C-bank",
                    fill: false,
                    lineTension:0,
                    backgroundColor: window.chartColors.yellow,
                    borderColor: window.chartColors.yellow,
                    //borderDash: [5, 5],
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
                    label: "D-bank",
                    fill: false,
                    lineTension:0,
                    backgroundColor: window.chartColors.green,
                    borderColor: window.chartColors.green,
                    //borderDash: [5, 5],
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
                    label: "E-Bank",
                    fill: true,
                    lineTension:0,
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
            },
            options: {
                responsive: true,
                title:{
                    //display:true,
                    //text:'全ての口座残高推移'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        //display: true,
                        scaleLabel: {
                            //display: true,
                            //labelString: 'Month'
                        },
                        ticks: {
                          maxRotation: 45,
                          minRotation: 45
                        }
                    }],
                    yAxes: [{
                        //display: true,
                        scaleLabel: {
                            //display: true,
                            //labelString: 'Value'
                        }
                    }]
                }
            }
        };
        return configData;
}

// 口座残高割合(pie)
function getRatioData(){
    // 金額をランダムに返す（単位：万）
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 1000);
    };

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    
    // パーセント表示用にデータを整形
    var dataArray = [];
    var dataSum = 0;
    for(var i = 0; i < 5; i++){
        var dataTmp = randomScalingFactor();
        dataSum += dataTmp;
        dataArray[i] = dataTmp;
    }
    for(var i = 0; i < 5; i++){
        dataArray[i] = Math.round((dataArray[i] / dataSum) * 100);
    }
    
    // タイトルを作成
    var title = year + '年' + (month + 1) + '月　　合計：' + (dataSum * 1000) + '円';
    
    
    var chartColors = window.chartColors;
    var color = Chart.helpers.color;
    
    // グラフ用データを作成
    var configData = {
        type: 'pie',
        data: {
            datasets: [{
                data: dataArray,
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.green,
                    window.chartColors.blue,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "A-Bank",
                "B-Bank",
                "C-Bank",
                "D-Bank",
                "E-Bank"
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: title,
                fontSize:20
            },
            tooltips: {
              callbacks: {
                label: function (tooltipItem, data) {
                  return data.labels[tooltipItem.index]
                    + ": "
                    + data.datasets[0].data[tooltipItem.index]
                    + " %";
                }
              }
            }
        }
    };
    return configData;
}

// // 口座残高割合(polar area chart)
// function getRatioData(){
//     // 金額をランダムに返す（単位：万）
//     var randomScalingFactor = function() {
//         return Math.round(Math.random() * 1000);
//     };
// 
//     var date = new Date();
//     var year = date.getFullYear();
//     var month = date.getMonth();
//     
//     // パーセント表示用にデータを整形
//     var dataArray = [];
//     var dataSum = 0;
//     for(var i = 0; i < 6; i++){
//         var dataTmp = randomScalingFactor();
//         dataSum += dataTmp;
//         dataArray[i] = dataTmp;
//     }
//     for(var i = 0; i < 6; i++){
//         dataArray[i] = Math.round((dataArray[i] / dataSum) * 100);
//     }
//     
//     // タイトルを作成
//     var title = year + '年' + (month + 1) + '月　　合計：' + (dataSum * 1000) + '円';
//     
//     
//     var chartColors = window.chartColors;
//     var color = Chart.helpers.color;
//     
//     // グラフ用データを作成
//     var configData = {
//         data: {
//             datasets: [{
//                 data: dataArray,
//                 backgroundColor: [
//                     color(chartColors.red).alpha(0.5).rgbString(),
//                     color(chartColors.orange).alpha(0.5).rgbString(),
//                     color(chartColors.yellow).alpha(0.5).rgbString(),
//                     color(chartColors.green).alpha(0.5).rgbString(),
//                     color(chartColors.blue).alpha(0.5).rgbString(),
//                 ],
//                 label: 'My dataset' // for legend
//             }],
//             labels: [
//                 "A-Bank",
//                 "B-Bank",
//                 "C-Bank",
//                 "D-Bank",
//                 "E-Bank"
//             ]
//         },
//         options: {
//             responsive: true,
//             legend: {
//                 position: 'right',
//             },
//             title: {
//                 display: true,
//                 text: title
//             },
//             scale: {
//               ticks: {
//                 beginAtZero: true
//               },
//               reverse: false
//             },
//             animation: {
//                 animateRotate: false,
//                 animateScale: true
//             },
//             tooltips: {
//               callbacks: {
//                 label: function (tooltipItem, data) {
//                   return data.labels[tooltipItem.index]
//                     + ": "
//                     + data.datasets[0].data[tooltipItem.index]
//                     + " %";
//                 }
//               }
//             }
//         }
//     };
//     return configData;
// }


