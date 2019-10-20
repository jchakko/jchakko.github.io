function pictograph() {
  
  function setupData(happy, smile, neutral, sad, angry) {
    let arhappy = Array(happy).fill("happy");
    let arsmile = Array(smile).fill("smile");
    let arneutral = Array(neutral).fill("neutral");
    let arsad = Array(sad).fill("sad");
    let arangry = Array(angry).fill("angry");
    let test = arhappy.concat(arsmile);           
    test = test.concat(arneutral);
    test = test.concat(arsad);
    test = test.concat(arangry);
    console.log(test);  
    return test;
  }
  
  //Setup Margins
  let margin = {top: 20, right: 20, bottom: 30, left: 250},
    width = 1100 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
  
  var svgDoc=d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
                                               
    svgDoc.append("defs")
      .append("g")
      .attr("id","happy")
      .append("path")
      .attr("d", "M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM16 18.711c3.623 0 7.070-0.963 10-2.654-0.455 5.576-4.785 9.942-10 9.942s-9.544-4.371-10-9.947c2.93 1.691 6.377 2.658 10 2.658zM8 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3s-2-1.343-2-3zM20 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3s-2-1.343-2-3z");
              
    svgDoc.append("defs")
      .append("g")
      .attr("id","smile")
      .append("path")
      .attr("d", "M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM22.003 19.602l2.573 1.544c-1.749 2.908-4.935 4.855-8.576 4.855s-6.827-1.946-8.576-4.855l2.573-1.544c1.224 2.036 3.454 3.398 6.003 3.398s4.779-1.362 6.003-3.398z"); 
              
    svgDoc.append("defs")
      .append("g")
      .attr("id","neutral")
      .append("path")
      .attr("d", "M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0 1.105 0.895 2 2 2s2-0.895 2-2-0.895-2-2-2-2 0.895-2 2zM20 10c0 1.105 0.895 2 2 2s2-0.895 2-2-0.895-2-2-2-2 0.895-2 2zM12 22h8v2h-8v-2z");
              
    svgDoc.append("defs")
      .append("g")
      .attr("id","sad")
      .append("path")
      .attr("d", "M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM9.997 24.398l-2.573-1.544c1.749-2.908 4.935-4.855 8.576-4.855s6.827 1.946 8.576 4.855l-2.573 1.544c-1.224-2.036-3.454-3.398-6.003-3.398s-4.779 1.362-6.003 3.398z");
              
    svgDoc.append("defs")
      .append("g")
      .attr("id","angry")
      .append("path")
      .attr("d", "M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM22.003 24.398c-1.224-2.036-3.454-3.398-6.003-3.398s-4.779 1.362-6.003 3.398l-2.573-1.544c1.749-2.908 4.935-4.855 8.576-4.855s6.827 1.946 8.576 4.855l-2.573 1.544zM23.97 8.758c0.134 0.536-0.192 1.079-0.728 1.213-0.551 0.139-1.204 0.379-1.779 0.667 0.333 0.357 0.537 0.836 0.537 1.363 0 1.105-0.895 2-2 2s-2-0.895-2-2c0-0.037 0.001-0.073 0.003-0.109 0.064-1.483 1.413-2.467 2.55-3.036 1.086-0.543 2.159-0.814 2.205-0.826 0.536-0.134 1.079 0.192 1.213 0.728zM8.030 8.758c0.134-0.536 0.677-0.862 1.213-0.728 0.045 0.011 1.119 0.283 2.205 0.826 1.137 0.569 2.486 1.553 2.55 3.036 0.002 0.036 0.003 0.072 0.003 0.109 0 1.105-0.895 2-2 2s-2-0.895-2-2c0-0.527 0.204-1.005 0.537-1.363-0.575-0.288-1.228-0.528-1.779-0.667-0.536-0.134-0.861-0.677-0.728-1.213z");
                                                                                         
    //background rectangle
    let background = svgDoc.append("rect").attr("width",800).attr("height",400).style("fill", "#dee0de");
                
    //specify the number of columns and rows for pictogram layout
    var numCols = 20;
    var numRows = 5;
            
    //padding for the grid
    var xPadding = 10;
    var yPadding = 15;
            
    //horizontal and vertical spacing between the icons
    var hBuffer = 55;
    var wBuffer = 39;
            
    //generate a d3 range for the total number of required elements
    let overall = setupData(25,32,34,5,4);
    let five = setupData(21,26,43,4,6);
    let three = setupData(25,39, 26, 7, 3);
    let one = setupData(26, 32, 30, 6, 6);
    let half = setupData(27, 25, 23, 13, 12);
    var myIndex=d3.range(numCols*numRows);
    
    function update() {
        console.log("Again on my own");
        icons
          .attr("xlink:href", function(d,i) {
            return "#" + d;
          })  
          .attr("class",  function(d,i) {
            return d;
          });                 
    }      
    //create group element and create an svg <use> element for each icon
    let icons = svgDoc.append("g")
        .attr("id","pictoLayer")
        .selectAll("use")
        .data(overall)
        .enter()
        .append("use")
            .attr("xlink:href", function(d,i) {
              return "#" + d;
            })
            .attr("x",function(d,i) {
                var remainder=i % numCols;//calculates the x position 
                return xPadding+(remainder*wBuffer);
            })
              .attr("y",function(d,i) {
                var whole=Math.floor(i/numCols)//calculates the y position (row number)
                return yPadding+(whole*hBuffer);
            })
            .attr("class",  function(d,i) {
              return d;
            });
            
    let fiverect = svgDoc.append("g")
      .append("rect")
      .attr("x", 0)
      .attr("y", 300)
      .attr("width", 200)
      .attr("height", 100)
      .style("fill", "#dee0de")
      .on("mouseover", function(d) {
        console.log("here i am");
        icons.data(five);
        update();
        fivetext.style("fill", "#199319")
        .style("font-size","25px");
      })
      .on("mouseout", function(d) {
        icons.data(overall);
        update();
        fivetext.style("fill", "black")
        .style("font-size","20px");
      });
      
    let fivetext = svgDoc.append("g")
      .append("text")
      .text("Five Miles")
      .attr("x", 50)
      .attr("y", 350)
      .style("fill", "black")
      .style("font-size","20px");
      
    svgDoc.append("g")
      .append("rect")
      .attr("x", 200)
      .attr("y", 300)
      .attr("width", 200)
      .attr("height", 100)
      .style("fill", "#dee0de")
      .on("mouseover", function(d) {
        console.log("here i am");
        icons.data(three);
        update()
        threetext.style("fill", "#199319")
        .style("font-size","25px");
      })
      .on("mouseout", function(d) {
        icons.data(overall);
        update();
        threetext.style("fill", "black")
        .style("font-size","20px")
      });
      
    let threetext = svgDoc.append("g")
      .append("text")
      .text("Three Miles")
      .attr("x", 250)
      .attr("y", 350)
      .style("fill", "black")
      .style("font-size","20px");
      
    svgDoc.append("g")
      .append("rect")
      .attr("x", 400)
      .attr("y", 300)
      .attr("width", 200)
      .attr("height", 100)
      .style("fill", "#dee0de")
      .on("mouseover", function(d) {
        console.log("here i am");
        icons.data(one);
        update();
        onetext.style("fill", "#199319")
        .style("font-size","25px")
      })
      .on("mouseout", function(d) {
        icons.data(overall);
        update();
        onetext.style("fill", "black")
        .style("font-size","20px")
      });
      
    let onetext = svgDoc.append("g")
      .append("text")
      .text("One Mile")
      .attr("x", 460)
      .attr("y", 350)
      .style("fill", "black")
      .style("font-size","20px");
      
    svgDoc.append("g")
      .append("rect")
      .attr("x", 600)
      .attr("y", 300)
      .attr("width", 200)
      .attr("height", 100)
      .style("fill", "#dee0de")
      .on("mouseover", function(d) {
        console.log("here i am");
        icons.data(half);
        update();
        halftext.style("fill", "#199319")
        .style("font-size","25px")
      })
      .on("mouseout", function(d) {
        icons.data(overall);
        update();
        halftext.style("fill", "black")
        .style("font-size","20px")
      });
      
    let halftext = svgDoc.append("g")
      .append("text")
      .text("Half a Mile")
      .attr("x", 650)
      .attr("y", 350)
      .style("fill", "black")
      .style("font-size","20px");
                    
  return svgDoc;
}