MyChart = document.getElementById('chart');
// Создание и определение временных рамок
let today = new Date();
let tomorow = new Date();
today.setHours(0, 0, 0, 0);
tomorow.setHours(0, 0, 0, 0);
tomorow.setDate(tomorow.getDate()+ 1);

// Создание сетки для графика
let layout = {
    title: 'Скважина 1-1',
    xaxis: {
        range: [today, tomorow],
        rangeslider: {range: [today, tomorow]},
        type: 'date'
    },
    yaxis: {
        title:"Дебит, тыс.м",
        autorange: true,
        range: [0, 200],
        type: 'linear'
    }
};

let config = {responsive: true};

let point1 = new Date(today.setHours(1));
let point2 = new Date(today.setHours(3));
let point3 = new Date(today.setHours(5));
let point4 = new Date(today.setHours(10)); 
//console.log(point4);
var trace1 = {
    x: ['2022-05-05 13:00:00','2022-05-05 14:00:00'],
    y: [20, 30],
    type: 'scatter'
  };
let data = [trace1];


Plotly.newPlot(MyChart,data,layout, config);

// function setPlan(value){
//     let upd = {
//         y: [value],
//     }
//     Plotly.addTraces(MyChart,{y: [12, 3, 14, 4]});
// }
// setPlan(50);