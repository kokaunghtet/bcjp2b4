// start Navbar Section
// start Left Side Bar

let sidebarlinks = document.getElementsByClassName("sidebarlinks");

for (i = 0; i < sidebarlinks.length; i++) {
  sidebarlinks[i].addEventListener("click", function () {
    for (j = 0; j < sidebarlinks.length; j++) {
      sidebarlinks[j].classList.remove("currents");
    }

    this.classList.add("currents");
  });
}

// $(document).ready(function () {
// let sidebarlinks = $(".sidebarlinks");
// sidebarlinks.click(function () {
//   sidebarlinks.removeClass("currents");
//   $(this).addClass("currents");
// });
// });

// End Left Side Bar
// End Navbar Section

// Start Panel Section
// Start User Permission
$(document).ready(function () {
  $(".checks").change(function () {
    if ($(this).is(":checked")) {
      $(this).parent().parent().find("i").addClass("fa-lock-open");
      $(this).parent().parent().find("i").removeClass("fa-lock");
    } else {
      $(this).parent().parent().find("i").removeClass("fa-lock-open");
      $(this).parent().parent().find("i").addClass("fa-lock");
    }
  });
});
// End User Permission

// start quick sale & customer activities
$(document).ready(function () {
  $("#datepicker").datepicker({
    numberOfMonths: 2,
  });
});
// end quick sale & customer activities

// Start Viewer Report
google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var button = document.getElementById("change-chart");
  var chartDiv = document.getElementById("chart_div");

  var data = google.visualization.arrayToDataTable([
    ["Galaxy", "Distance", "Brightness"],
    ["Canis Major Dwarf", 8000, 23.3],
    ["Sagittarius Dwarf", 24000, 4.5],
    ["Ursa Major II Dwarf", 30000, 14.3],
    ["Lg. Magellanic Cloud", 50000, 0.9],
    ["Bootes I", 60000, 13.1],
  ]);

  var materialOptions = {
    width: 600,
    chart: {
      title: "Viewer Report",
    },
    series: {
      0: { axis: "distance" },
      1: { axis: "brightness" },
    },
  };

  var classicOptions = {
    width: 600,
    series: {
      0: { targetAxisIndex: 0 },
      1: { targetAxisIndex: 1 },
    },
    title: "Viewer Report",
  };

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
    button.onclick = drawClassicChart;
  }

  function drawClassicChart() {
    var classicChart = new google.visualization.ColumnChart(chartDiv);
    classicChart.draw(data, classicOptions);
    button.onclick = drawMaterialChart;
  }

  drawMaterialChart();
}
// End Viewer Report

// Start Sale Analysis
const ctx = document.getElementById("myChart");
new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Cash", "Visa", "MPU"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  },
});
// End Sale Analysis

// End Panel Section

// Start Footer Section
const getYear = document.getElementById("getyear");
const getFullYear = new Date().getFullYear();
getYear.textContent = getFullYear;
// End Footer Section
