// ===========================|| DASHBOARD - TOTAL ORDER YEAR CHART ||=========================== //

const chartData = {
  chart: {
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#fff'],
  fill: {
    type: 'solid',
    opacity: 1
  },
  stroke: {
    width: 3
  },
  yaxis: {
    min: 0,
    max: 100
  },
  tooltip: {
    theme: 'dark',
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    marker: {
      show: false
    }
  }
};

export default chartData;
