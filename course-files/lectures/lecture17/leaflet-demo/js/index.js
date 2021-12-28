//initialize map:
const mymap = L.map('mapid').setView([51.5, -0.09], 11);

//initialize tiles (there are many options):
// L.tileLayer.provider('Stamen.TonerLite').addTo(mymap);
L.tileLayer.provider('Stamen.Watercolor').addTo(mymap);
// L.tileLayer.provider('Stamen.Terrain').addTo(mymap);
// L.tileLayer.provider('Stamen.TerrainBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.Toner').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerHybrid').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLines').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLabels').addTo(mymap);



// // CODE TO GENERATE LOTS OF FAKE MARKERS
// const generateRandomMarkers = (numCoords=100) => {
//     return new Array(numCoords).fill(null).map(
//         () => [ (Math.random() * 0.6 + 51), -1 * Math.random() + 0.4 ]
//     );
// };
// const coordinates = generateRandomMarkers(numCoords=50);
// console.log(coordinates);

// // create markers 
// for (coord of coordinates) {
//     const marker = L.marker(coord).addTo(mymap);
//     marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
// }

const marker = L.marker([51.5, -0.09]).addTo(mymap);

// // create circle:
// const circle = L.circle([51.5, -0.09], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

// // create polygon:
// const polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);

// connect each object to a "popup" effect:
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");