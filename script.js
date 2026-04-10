const barChartCanvas = document.getElementById("barChart");
if (barChartCanvas) {
  new Chart(barChartCanvas, {
    type: "bar",
    data: {
      labels: ["Housing", "Food", "Transportation", "Entertainment", "Investments"],
      datasets: [{
        label: "Monthly Spending ($)",
        data: [1200, 450, 300, 200, 600]
      }]
    },
    options: {
      responsive: true
    }
  });
}

const pieChartCanvas = document.getElementById("pieChart");
if (pieChartCanvas) {
  new Chart(pieChartCanvas, {
    type: "pie",
    data: {
      labels: ["Stocks", "Savings", "Crypto", "Cash"],
      datasets: [{
        label: "Portfolio Allocation",
        data: [45, 30, 10, 15]
      }]
    },
    options: {
      responsive: true
    }
  });
}

const lineChartCanvas = document.getElementById("lineChart");
if (lineChartCanvas) {
  new Chart(lineChartCanvas, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Portfolio Growth ($)",
        data: [5000, 5300, 5100, 5600, 6000, 6400],
        fill: false,
        tension: 0.3
      }]
    },
    options: {
      responsive: true
    }
  });
}