function barGraph(){
    console.log("Start function barGraph");
    let width = 1050;
    let height = 530;
    
    let svg = d3.select("body").append("svg")
      .attr("width",width).attr("height",height)
      .attr("id", "visualization");
      
    let currentYear = 
    svg.append("text")
      .attr("x", 950)
      .attr("y", 50)
      .text("1999")
      .style("fill","red")
      .style("font-size","50px");
      
    let year1999 = "1999";
    let year2000 = "2000";
    let year2001 = "2001";
    let year2002 = "2002";
    let year2003 = "2003";
    let year2004 = "2004";
    let year2005 = "2005";
    let year2006 = "2006";
    let year2007 = "2007";
    let year2008 = "2008";
    let year2009 = "2009";
    let year2010 = "2010";
    let year2011 = "2011";
    let year2012 = "2012";
    let year2013 = "2013";
    let year2014 = "2014";
    let year2015 = "2015";
    let year2016 = "2016";
    let year2017 = "2017";
    
    <!-- Row Converter Function -->
    function parseRow(d){
      let newRow = {} 
      newRow.State = d.State;
      newRow[year1999] = parseInt(d[year1999].replace(/,/g, ''));
      newRow[year2000] = parseInt(d[year2000].replace(/,/g, ''));
      newRow[year2001] = parseInt(d[year2001].replace(/,/g, ''));
      newRow[year2002] = parseInt(d[year2002].replace(/,/g, ''));
      newRow[year2003] = parseInt(d[year2003].replace(/,/g, ''));
      newRow[year2004] = parseInt(d[year2004].replace(/,/g, ''));
      newRow[year2005] = parseInt(d[year2005].replace(/,/g, ''));
      newRow[year2006] = parseInt(d[year2006].replace(/,/g, ''));
      newRow[year2007] = parseInt(d[year2007].replace(/,/g, ''));
      newRow[year2008] = parseInt(d[year2008].replace(/,/g, ''));
      newRow[year2009] = parseInt(d[year2009].replace(/,/g, ''));
      newRow[year2010] = parseInt(d[year2010].replace(/,/g, ''));
      newRow[year2011] = parseInt(d[year2011].replace(/,/g, ''));
      newRow[year2012] = parseInt(d[year2012].replace(/,/g, ''));
      newRow[year2013] = parseInt(d[year2013].replace(/,/g, ''));
      newRow[year2014] = parseInt(d[year2014].replace(/,/g, ''));
      newRow[year2015] = parseInt(d[year2015].replace(/,/g, ''));
      newRow[year2016] = parseInt(d[year2016].replace(/,/g, ''));
      newRow[year2017] = parseInt(d[year2017].replace(/,/g, ''));
      return newRow;
    }
      
    d3.csv("StateProduction.csv", parseRow).then(
      function(data){
        console.log(data);
        <!-- Setup Margins -->
        let margin = {
          top: 10,
          right: 20,
          bottom: 20,
          left: 150
        };
        <!-- Setup distance variables -->
        width = width - margin.left - margin.right;
        height = height - margin.top - margin.bottom;
        
        <!-- Setup SVG Container -->
        graph = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
        <!-- Set up max value -->
        let sizeMax = d3.max(data, function(d) {return d[year2017];});               
        
        <!-- Set up data map -->
        let states = data.map(function(d){return d.State});
        
        <!-- Set up scales -->
        let yScale = d3.scaleBand().domain(states).range([0,height]).padding(0.1);
        let xScale = d3.scaleLinear().domain([0, sizeMax]).range([0,width]);      

        <!-- Colors --> 
        let colorScale = d3.scaleOrdinal().range(d3.schemeCategory10);
        
        <!-- Calculate Starting Stats -->
        let ofirst = d3.max(data, function(d) {return d[year1999];});
        let oavg = d3.mean(data, function(d) {return d[year1999];});
        
        <!-- Add Bars -->
        graph.selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
            .attr("x", function(d){return 0;})
            .attr("y", function(d){return yScale(d.State);})
            .attr("height", yScale.bandwidth())
            .attr("width", function(d){return xScale(d[year1999]);})
            .style("fill", function(d) {
               if(d[year1999] == ofirst) {
                   return "gold";                   
               }
               return "silver"; 
            });
        
        <!-- Setup Axis -->        
        let xAxis = d3.axisBottom(xScale)
                      .tickFormat(function(d) {return d+"MW";});
        graph.append("g")
          .attr("transform", "translate(0,"+height+")")
          .call(xAxis)
                   
        let yAxis = d3.axisLeft(yScale);
        graph.append("g")
          .call(yAxis)
          .selectAll("text")
            .style("text-anchor","end")
            
        let slider = document.getElementById("myRange");
        
        slider.oninput = function() {
          let year = this.value;
          console.log(year);
          currentYear.text(year);
          let first = d3.max(data, function(d) {return d[year];});
          let avg = d3.mean(data, function(d) {return d[year];});
          
          graph.selectAll("rect")
            .attr("width", function(d){return xScale(d[year]);})
            .style("fill", function(d) {
                if(d[year] == first) {
                    return "gold";
                } else if(d[year] > avg) {
                    return "silver";                   
                } else {
                    return "#cd7f32";
                }
                
            });

        }
        
      }
    );

    
}