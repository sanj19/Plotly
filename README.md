# Belly Button Biodiversity Dashboard

![pic of bacteria](Images/bacteria.jpg)

Belly Button Bacteria Biodiversity Dashboard

This project used JavaScript, Plotly.JS, Python, HTML, CSS, Bootstrap, and Flask to explore the Belly Button Biodiversity dataset. Data was read from CSV files using Pandas. Graphs were then created using Plotly and Javascript. The pie chart shows the top ten samples for a particular sample id. The bubble chart shows all the samples and OTU ID data points. Metadata for the sample is also displayed. The graphs resize when the page size is modified.

In this assignment, you will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

![bar Chart](Images/hw01.png)

![Bubble Chart](Images/bubble_chart.png)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![hw](Images/hw03.png)

6. Update all of the plots any time that a new sample is selected.

Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown below:

![hw](Images/hw02.png)

## Advanced Challenge Assignment (Optional)

The following task is advanced and therefore optional.

* Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

* You will need to modify the example gauge code to account for values ranging from 0 through 9.

* Update the chart whenever a new sample is selected.

![Weekly Washing Frequency Gauge](Images/gauge.png)

## Deployment

Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.

## Hints

* Use `console.log` inside of your JavaScript code to see what your data looks like at each step.

* Refer to the [Plotly.js documentation](https://plot.ly/javascript/) when building the plots.

### About the Data

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

- - -

© 2019 Trilogy Education Services
