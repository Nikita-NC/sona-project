import Chart from 'react-apexcharts'
import data from '../assets/data'

const Graph = () => {
    const chartData = {
        series: [
          {
            name: 'Total Sales',
            data: data.map(item => item.totalSales)
          }
        ],
        options: {
          chart: {
            type: 'area',
            height: 350,
            animations: {
                enabled: false
              }
          },
          plotOptions: {
            area: {
              fillTo: 'origin'
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['red']
          },
          xaxis: {
            categories: data.map(item => item.month)
          },
          yaxis: {
            title: {
            //   text: 'Total Sales'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.1,
              stops: [1, 90, 100],
              colorStops: [
                {
                  offset: 0,
                  color: '#FF4560',
                  opacity: 0.7
                },
                {
                  offset: 90,
                  color: '#FF4560',
                  opacity: 0.1
                }
              ]
            }
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "Rs " + val;
              }
            }
          }
        }
      };
  return (
    <>
      <h1 className="font-bold text-left p-2 mt-2"> Recent Ticket</h1>
      <div className="p-2 h-[55%] bg-white rounded mr-2 w-[98%]">
        <Chart options={chartData.options} series={chartData.series} type="area" height={350} />
      </div>
    </>
  );
};

export default Graph;
