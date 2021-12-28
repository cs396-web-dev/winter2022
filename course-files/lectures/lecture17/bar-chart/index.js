var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// Parse the date / time
var	parseDate = d3.time.format("%Y-%m").parse;

var xScaleObj = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var yScaleObj = d3.scale.linear().range([height, 0]);

// hover labels:
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
    tip.html(d.value)
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

var xAxis = d3.svg.axis()
    .scale(xScaleObj)
    .orient("bottom")
    .tickFormat(d3.time.format("%Y-%m"));

var yAxis = d3.svg.axis()
    .scale(yScaleObj)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.value = +d.value;
    });
	
    xScaleObj.domain(data.map(function(d) { return d.date; }));
    yScaleObj.domain([0, d3.max(data, function(d) { return d.value; })]);


    // x-axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );

    // y-axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Value ($)");

    // bars
    svg.selectAll("bar")
        .data(data)
        .enter()
        .append("rect")
        .style("fill", "steelblue")
        .attr("x", function(d) { return xScaleObj(d.date); })
        .attr("width", xScaleObj.rangeBand())
        .attr("y", function(d) { return yScaleObj(d.value); })
        .attr("height", function(d) { return height - yScaleObj(d.value); })
        .on('mouseover', showTip)
        .on('mouseout', hideTip);
});