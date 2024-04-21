<template>
    <div>
      <div class="m-2 w-full">
      <canvas ref="myChartCanvas"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { Line } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale);
  
  export default {
    name: 'Graph',
    extends: Line,
    data() {
      return {
        chartData: {
          labels: [],
          datasets: [
            {
              label: 'Wattage',
              borderColor: '#f87979',
              backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background
              data: [],
              tension: 0.3,
              pointRadius: 0,
              borderColor: "#45ff9c",
              backgroundColor: "#45ff9c",

            }
          ]
        },
        chartInstance: null // Store the chart instance
      };
    },
    mounted() {
      this.fetchDeviceInfo('podaljsek');
    },
    methods: {
      async fetchDeviceInfo(deviceName) {
        const url = `http://172.20.10.4:3000/get-device-info/${deviceName}`;
        try {
          const response = await axios.get(url);
          console.log('Device Info:', response);
          const graphData = response.data.wattageWithTimestamp;
  
          // Update chartData with fetched data
          this.chartData.labels = graphData.map(entry => {
            const timestamp = new Date(entry.timestamp);
            return timestamp.getMinutes() + ':' + timestamp.getSeconds();
          });             
          this.chartData.datasets[0].data = graphData.map(entry => entry.wattage);
  
          // Create or update the chart
          this.createOrUpdateChart();
        } catch (error) {
          console.error('Error fetching device info:', error);
        }
      },
      createOrUpdateChart() {
        if (this.chartInstance) {
          // If the chart instance exists, update it with new data
          this.chartData.labels = graphData.map(entry => {
            const timestamp = new Date(entry.timestamp);
            return timestamp.getMinutes() + ':' + timestamp.getSeconds();
          });       
          this.chartInstance.data.datasets[0].data = this.chartData.datasets[0].data;
          this.chartInstance.update();
        } else {
          // If the chart instance doesn't exist, create it
          this.chartInstance = new ChartJS(this.$refs.myChartCanvas, {
            type: 'line',
            data: this.chartData,
            options: {
            scales: {
                y: {
                ticks: {
                    color: "#b6baca",
                },
                grid: {
                    drawTicks: false,
                },
                border: {
                    dash: [5, 10],
                },
                },
                x: {
                ticks: {
                    color: "#b6baca",
                },
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                },
            },
            },
          });
        }
      }
    }
  };
  </script>
  