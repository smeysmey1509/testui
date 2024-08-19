import "./chartCircle.css";

export const createChartCircle = ({
  percentage = 51,
  bgColor = "#4caf50",
  title = "Your income",
} = {}) => {
  // Create the main container for the chart
  const chart = document.createElement("div");
  chart.classList.add("chart");

  // Create and configure the title element
  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  // Create the chart circle element
  const chartCircle = document.createElement("div");
  chartCircle.classList.add("chart-circle");

  // Set the background gradient based on the percentage and color
  chartCircle.style.background = `conic-gradient(${bgColor} 0% ${percentage}%, #ddd ${percentage}% 100%)`;

  // Create the inner circle with the percentage label
  const chartCircleInner = document.createElement("div");
  chartCircleInner.classList.add("chart-circle-inner");

  const chartCircleLabel = document.createElement("div");
  chartCircleLabel.classList.add("chart-circle-label");
  chartCircleLabel.textContent = percentage + "%";

  // Assemble the chart
  chartCircleInner.appendChild(chartCircleLabel);
  chartCircle.appendChild(chartCircleInner);
  chart.appendChild(titleElement);
  chart.appendChild(chartCircle);

  return chart;
};
