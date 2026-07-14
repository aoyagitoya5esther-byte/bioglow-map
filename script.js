// 建立地圖
const map = L.map("map").setView([23.7,121],7);

// OpenStreetMap
L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
    attribution:"© OpenStreetMap",
    maxZoom:18
}
).addTo(map);

// 生物資料
const animals=[
{
name:"台灣黑熊",
lat:23.47,
lng:120.96,
place:"玉山國家公園"
},
{
name:"帝雉",
lat:23.51,
lng:120.80,
place:"阿里山"
},
{
name:"黑面琵鷺",
lat:23.02,
lng:120.14,
place:"台江國家公園"
},
{
name:"綠蠵龜",
lat:21.95,
lng:120.78,
place:"墾丁國家公園"
}
];

// 建立標記
animals.forEach(a=>{

L.marker([a.lat,a.lng])
.addTo(map)
.bindPopup(
"<h3>"+a.name+"</h3>"+a.place
);

});
