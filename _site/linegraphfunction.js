function linegraph() {
    
  
  let margin = {top: 20, right: 20, bottom: 30, left: 150},
    width = 1100 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
    
  var x = d3.scaleLinear().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);
  
  let valueline = d3.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.close); });
    
  let svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
          
          
  let div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0); 
    
  d3.csv("turbine_efficiency.csv").then(function(data) {

  // format the data
  data.forEach(function(d) {
      d.year = +d.year;
      d.close = +d.close;
      d.turbines = +d.turbines;
      d.per_bine = +d.per_bine;
  });


  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.year; }));
  y.domain([0, d3.max(data, function(d) { return d.close; })]);

  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline);
      
  //Insert Circles
    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", 6)
      .attr("cx", function(d){return x(d.year);})
      .attr("cy", function(d){return y(d.close);})
      .style("fill", function(d) {
        if(d.per_bine > 1.5) {
            return "green";       
        } else if(d.per_bine > 1) {
            return "blue";
        } else if(d.per_bine > .5) {
            return "orange";
        }
        return "red";
      })
      .on("mouseover", function(d) {		
            div		
                .style("opacity", .9);		
            div	.html("MegaWatts: " + d.megawatts
            + "</br>" + "Turbines: " + d.turbines
            + "</br>" + "MW/T: " + d.per_bine)	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");	
            })					
        .on("mouseout", function(d) {		
            div	
                .style("opacity", 0);	
        });

  let formatxAxis = d3.format('.0f');    
  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickFormat(formatxAxis));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));


  }); //End CSV
}