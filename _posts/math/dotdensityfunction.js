  function dotDensity() {
    console.log("hello!");
    let width = 1300;
    let height = 640;
    let pheight = 580;
    let pwidth = 1000;

    let svg = d3.select("body").append("svg")
      .attr("width",width).attr("height",height)
      .attr("id", "visualization");
    svg.append("rect")
      .attr("width",width)
      .attr("height",height)
      .style("fill","#f4f8ff");  
      

    let url = "us-states.json", name = "name";
    
    Promise.all([
      d3.json(url),
      d3.csv("Turbine_Locations.csv"),
      d3.csv("Turbine_Locations_80.csv"),
      d3.csv("Turbine_Locations_90.csv"),
      d3.csv("Turbine_Locations_00.csv"),
      d3.csv("Turbine_Locations_10.csv")
    ]).then(function(data){
      let geoJsonData = data[0];
      let windData = data[1];
      let windData80 = data[2];
      let windData90 = data[3];
      let windData00 = data[4];
      let windData10 = data[5];
      console.log("geoJsonData:")
      console.log(geoJsonData);
      console.log("windData:")
      console.log(windData);
      
      let projection = d3.geoAlbersUsa();
      projection.fitHeight(pheight,geoJsonData);
      let pathGenerator = d3.geoPath().projection(projection);
    
   
      <!-- Append map of United States -->
      svg.append('g')
        .selectAll('path')
        .data(geoJsonData.features)
        .enter()
        .append('path')
          .attr('d', pathGenerator)
          .style("fill", "black")
          .style("stroke", "white");         
          
      let dots80 = svg.append('g')
        .selectAll("circle")
          .data(windData80)
          .enter()
          .append("circle")
		  .attr("cx", function(d,i) {
            let coordinates = projection([d.xlong, d.ylat]);
            return coordinates[0];
          }) 
		  .attr("cy", function(d,i) {
            let coordinates = projection([d.xlong, d.ylat]);
            return coordinates[1];
          })        
		  .attr("r", "3px")
		  .attr("fill", "#00ff19")
          .style("opacity", .5);
          
      let dots90 = svg.append('g')
        .selectAll("circle")
          .data(windData90)
          .enter()
          .append("circle")
		  .attr("cx", function(d,i) {
            let coordinates = projection([d.xlong, d.ylat]);
            return coordinates[0];
          }) 
		  .attr("cy", function(d,i) {
            let coordinates = projection([d.xlong, d.ylat]);
            return coordinates[1];
          })        
		  .attr("r", "2px")
		  .attr("fill", "#ff05c0")
          .style("opacity", 0);
          
      let dots00 = svg.append('g')
        .selectAll("circle")
          .data(windData00)
          .enter()
          .append("circle")
		  .attr("cx", function(d,i) {
            let coordinates = projection([d.xlong, d.ylat]);
            return coordinates[0];
          }) 
		  .attr("cy", function(d,i) {
            let coordinates = projection([d.xlong, d.ylat]);
            return coordinates[1];
          })        
		  .attr("r", "2px")
		  .attr("fill", "orange")
          .style("opacity", 0);
          
      let dots10 = svg.append('g')
        .selectAll("circle")
          .data(windData10)
          .enter()
          .append("circle")
		  .attr("cx", function(d,i) {
            let coordinates = projection([d.xlong, d.ylat]);
            return coordinates[0];
          }) 
		  .attr("cy", function(d,i) {
            let coordinates = projection([d.xlong, d.ylat]);
            return coordinates[1];
          })        
		  .attr("r", "2px")
		  .attr("fill", "#5998ff")
          .style("opacity", 0);
      
      let toggle80 = 1;
      
      let rect80 = svg.append("g")
        .append("rect")
        .attr("x", 1050)
        .attr("y", 100)
        .attr("width", 200)
        .attr("height", 50)
        .style("fill", "#00ff19")
        .on("click", function(d) {
          console.log("I'm out baby!")
          toggle80 = 1 - toggle80;
          dots80.style("opacity", toggle80);    
        });
        
      let era80 = svg.append('g')
        .append("text")
        .text("The 80's")
        .style("fill","black")
        .style("font-size","50px")
        .attr("x", 1060)
        .attr("y", 140);
                     
      let toggle90 = 0;
      
      let rect90 = svg.append("g")
        .append("rect")
        .attr("x", 1050)
        .attr("y", 220)
        .attr("width", 200)
        .attr("height", 50)
        .style("fill", "#ff05c0")
        .on("click", function(d) {
          toggle90 = 1 - toggle90;
          dots90.style("opacity", toggle90);    
        });
        
      let era90 = svg.append('g')
        .append("text")
        .text("The 90's")
        .style("fill","black")
        .style("font-size","50px")
        .attr("x", 1060)
        .attr("y", 260);
        
      let toggle00 = 0;
               
      let rect00 = svg.append("g")
        .append("rect")
        .attr("x", 1050)
        .attr("y", 340)
        .attr("width", 200)
        .attr("height", 50)
        .style("fill", "orange")
        .on("click", function(d) {
          toggle00 = 1 - toggle00;
          dots00.style("opacity", toggle00);    
        });
        
      let era00 = svg.append('g')
        .append("text")
        .text("The 00's")
        .style("fill","black")
        .style("font-size","50px")
        .attr("x", 1060)
        .attr("y", 380);
        
      let toggle10 = 0;
                
      let rect10 = svg.append("g")
        .append("rect")
        .attr("x", 1050)
        .attr("y", 460)
        .attr("width", 200)
        .attr("height", 50)
        .style("fill", "#5998ff")
        .on("click", function(d) {
          toggle10 = 1 - toggle10;
          dots10.style("opacity", toggle10);    
        });
        
      let era10 = svg.append('g')
        .append("text")
        .text("The 10's")
        .style("fill","black")
        .style("font-size","50px")
        .attr("x", 1060)
        .attr("y", 500);
                        
      let year = 1980;  
        
      let clicky = svg.append('g')
        .append("circle")
		.attr("cx", 1000) 
		.attr("cy", 500)        
		.attr("r", "10px")
		.attr("fill", "white")
        .style("opacity", 1)
        .on("click", function() {
            clicky.attr("fill", "black");
            era.text("The 90's")
            dots00.style("opacity", function(d) {
                return 1;
            });
        });
                
    console.log("wat");

    
    }) //End of Promise
    
    return svg;
  
  } //End of Function
  
  function taysting() {
    console.log("we rid it!");  
      
  }


  