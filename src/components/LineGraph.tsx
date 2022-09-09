import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { format } from 'date-fns'
import {IoIosInformationCircleOutline} from 'react-icons/io'
import useFetch from '../hooks/useFetch';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
    Legend
  );
   const options = {
    responsive: true,
   
    elements: {
        point:{
            radius: 0
        }
    },
    scales: {
        x: {
          offset: true,
            grid: {
              display: false
            },
        
          },
          y: {
            grid: {
                borderDash: [5, 5],
                color: "#DBDEE5"
            },
            min: 0,
            max: 1000,
            ticks: {
              // forces step size to be 50 units
              stepSize: 200
            },
          }
          ,
    },
    plugins: {
       
      legend: {
        display: false
      },
      title: {
        display: false,
       
      },
    },
  };

  const LineGraph: React.FC = () => {
    const {isLoading, data:graphData } = useFetch()
  
    let xVal = isLoading  ? [] : Object.keys(graphData.graph_data.views)
    let yVal: number[] = isLoading ? [] : Object.values(graphData.graph_data.views)

    const canvas = document.getElementById('myChart') as HTMLCanvasElement | null;

      const ctx = canvas?.getContext("2d");
      const gradient = ctx?.createLinearGradient(0, 0, 0, 323);
      gradient?.addColorStop(0, 'rgba(255, 84, 3, 0.2)');   
      gradient?.addColorStop(1, 'rgba(255, 84, 3, 0)');
      const data =  {
        labels: xVal.map(val => (format(new Date(val), 'dd MMM'))),
       
      datasets: [  {
        backgroundColor: gradient,
        borderColor: '#FF5403',
        fill: true,
        data: yVal.map((val: number) => (val * 10))
      }]
}
    

  return (
    <div className='border-[1px] mt-5 w-[100%] px-3 py-6 rounded-lg  border-gray-200'>
        <div className='mb-2 flex items-center justify-between'>
        <h2 className='text-lg font-bold '>Page View </h2>
          <IoIosInformationCircleOutline />
        </div>
        <p className='text-sm mb-4'>All time</p>
        <p className='text-5xl mb-4 font-bold'>500</p>
        <div>
        <Line id='myChart' options={options} data={data} />
        </div>
    </div>
  )
}

export default LineGraph