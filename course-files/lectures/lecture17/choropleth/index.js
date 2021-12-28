var svg = d3.select("svg");
var width = svg.node().clientWidth;
var height = svg.node().clientHeight;

// Map and projection
var path = d3.geoPath();
var projection = d3.geoMercator()
  .scale(98)
  .center([0,20])
  .translate([width / 2, height / 2]);

// Data and color scale
var data = d3.map();
var colorScale = d3.scaleThreshold()
  .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
  .range(d3.schemeBlues[7]);

// Load external data and boot
d3.queue()
  .defer(
      d3.json, 
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
  .defer(
      d3.csv, 
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv", 
        function(d) { 
            data.set(d.code, +d.pop); 
        })
  .await(ready);

const tip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

function showTip(d, i) {
    d3.select(this).transition()
         .duration('50')
         .attr('opacity', '.85');
    tip.transition()
         .duration(50)
         .style("opacity", 1);
    const val = `${d.properties.name}: ${d3.format(",")(d.total)}`;
    tip.html(val)
        .style("left", (d3.event.pageX + 10) + "px")
        .style("top", (d3.event.pageY - 15) + "px");
}

function hideTip (d, i) {
    d3.select(this).transition()
         .duration('50')
         .attr('opacity', '1');
         tip.transition()
         .duration('50')
         .style("opacity", 0);
}

function showDetailPanel(d, i) {
    const val = `
         <h2>${d.properties.name}</h2>
         <p>${d3.format(",")(d.total)}</p>
     `;
    document.querySelector('#detail').innerHTML = val;
}

function ready(error, topo) {
    console.log(topo);
    // Draw the map
     svg.append("g")
        .selectAll("path")
        .data(topo.features)
        .enter()
        .append("path")
        // draw each country
        .attr("d", d3.geoPath()
            .projection(projection)
        )
        // set the color of each country
        .attr("fill", function (d) {
            d.total = data.get(d.id) || 0;
            return colorScale(d.total);
        })
        .on('mouseover', showTip)
        .on('mouseout', hideTip)
        .on('click', showDetailPanel);
    }