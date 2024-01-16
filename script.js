var myFullpage = new fullpage('#fullpage', {
anchors: ['firstPage', 'secondPage', '3rdPage'],
navigationTooltips: ['First page', 'Second page', 'Third and last page'],
sectionsColor: ['#C63D0F', '#de6733', '#f1a73b'],

});


const labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const data = {
labels: labels,
datasets:
[{
label: 'Daily cases from December 2021',
data: [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103],
borderColor: 'rgb(75, 192, 192)',
backgroundColor: 'rgb(75, 192, 192)',
tension: 0.1,
pointStyle: 'circle',
pointRadius: 10,
pointHoverRadius: 15
}]
};

const config = {
type: 'line',
data: data,
options: {
plugins: {
legend: {
labels:{
color: 'rgb(1,1,1)'
}
}
},
scales: {
x: {
ticks: {
color: "rgb(1,1,1)", // this here
},
grid: {
color: 'rgb(0,0,0)',
}
},
y: {
ticks: {
color: "rgb(1,1,1)", // this here
},
grid: {
color: 'rgb(0,0,0)',
}
}
}
}
}

const myChart = new Chart(
document.getElementById('myChart'),
config
);


let polyTable = new DataTable('#polyclinicTable');

const polyclinicArr = ['Bedok', 'Bukit_Batok', 'Bukit_Merah', 'Choa_Chu_Kang', 'Clementi', 'Geylang', 'Hougang', 'Jurong', 'Marine_Parade', 'Outram', 'Pasir_Ris ', 'Pioneer'];


for (let i = 0; i < polyclinicArr.length; i++) {
let selectedRow = polyTable.rows().data().toArray()[i];
let id = polyclinicArr[i];


let name = selectedRow[0];
let address = selectedRow[1];
let vaccineType = selectedRow[2];
let phone = selectedRow[3];

let content = `${name}</br> ${address}</br>Vaccine Type: ${vaccineType}</br>${phone}`.toString();


tippy('#' + id, {
followCursor: true,
allowHTML: true,
content: content,
});
}

