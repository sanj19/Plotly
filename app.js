



//use D3 to fetch the json file
d3.json("samples.json").then((importedData) => {
  //console.log("importedData:", importedData);

  var allData = importedData;
  var sampleData = importedData.samples;
  console.log(allData);
  //console.log(sampleData);

  //populate the dropdown box with id numbers
  var sampleId = sampleData.map(function(samples) {return samples.id;});
  var dropBox = document.getElementById("selDataset");
  for(i = 0; i < sampleId.length; i++) {
    dropBox.options.add(new Option(sampleId[i]));
  }
  //display data from index[0] when page is first loaded
  console.log(sampleId[0]);
  indexNumber = 0
  buildTable(sampleId[0]);
  buildChart(sampleId[0]);
});
//-------------------------------------------------------------
//get the ID & Index number that was selected
function optionChanged(idNumber) {
  indexNumber = document.getElementById("selDataset").selectedIndex;
  console.log("ID", idNumber, "index", indexNumber);

  buildTable(idNumber);
  buildChart(idNumber);
};
//------------------------------------------------------
function buildTable(idNumber) {
  console.log(idNumber, indexNumber);

  d3.json("samples.json").then((importedData) => {
    //console.log("importedData:", importedData);

    var metadata = importedData.metadata;
    //console.log(metadata);
    console.log(metadata[0]);
    //console.log(Object.keys(metadata[indexNumber]));
    //console.log(Object.values(metadata[indexNumber]));
    //console.log(Object.entries(metadata[indexNumber]));
    var sampleMetadata = d3.select("#sample-metadata"); //select the table
    sampleMetadata.html(""); // clear table before populating
    document.getElementById("sample-metadata").style.fontSize = "x-small";
    document.getElementById("sample-metadata").style.fontWeight = "bold";
    document.getElementById("sample-metadata").style.paddingLeft = "5px";
    Object.entries(metadata[indexNumber]).forEach(([key, value]) => {
      //console.log(`${key}:  ${value}`);
      var row = sampleMetadata.append("p"); //append row to table
      row.append("td").text(`${key}:  ${value}`); //populate the table
    });
  });
};
//---------------------------------------------
function buildChart(idNumber) {
  //console.log(idNumber, indexNumber);

  d3.json("samples.json").then((importedData) => {
    //console.log("importedData:", importedData);

    var sampleData = importedData.samples;

    var otuId = sampleData.map(function(samples) {return samples.otu_ids;});
    var otuValues = sampleData.map(function(samples) {return samples.sample_values;});
    var otuLabels = sampleData.map(function(samples) {return samples.otu_labels;});
    //console.log(otuId);
    
    var otuIdTen = otuId[indexNumber].slice(0,10);
    var otuValuesTen = otuValues[indexNumber].slice(0,10);
    var otuLabelsTen = otuLabels[indexNumber].slice(0,10);
    console.log(indexNumber);
    console.log("ID#", otuIdTen);
    console.log("value", otuValuesTen);

    //BAR GRAPH-------------------
    var trace1 = {
      type: "bar",
      orientation: "h",
      x: otuValuesTen.reverse(),
      //y: otuValuesTen,
      text: otuLabelsTen,
      hoverlabel: "right",
      hoverinfo: "text",

    };

    var layout = {
      title: "Top 10 Organisms Found",
      //xaxis: {title: "value"},
      //yaxis: {title: `OTU ${otuId}`}
    };

    var barChart = [trace1];
    Plotly.newPlot("bar", barChart, layout, {displayModeBar: false});

    //BUBBLE GRAPH---------------------
    var trace2 = {
      x: otuId[indexNumber],
      y: otuValues[indexNumber],
      text: otuLabels,
      //height: 600,
      //width: 600,
      mode: "markers",
      marker: {
        size: otuValues[indexNumber],
        color: otuId[indexNumber]
      }
    }; 

    var layout = {
      xaxis: {title: "OTU ID"}
    };

    var bubbleChart = [trace2];
    Plotly.newPlot("bubble", bubbleChart, layout, {displayModeBar: false});

    //SPEEDOMETER-----------------------
    var trace3 = {
      //domain: { x: [0, 1], y: [0, 1] },
      value: otuValues[indexNumber].length,
      title: { text: "Types of Organisms Found" },
      type: "indicator",
      mode: "gauge+number",
      gauge: { axis: { range: [null, 100] } }
    }

    var speedometer = [trace3];
    Plotly.newPlot("gauge", speedometer);
    //console.log(otuValues[indexNumber].length);

  });
};
