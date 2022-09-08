import React, { useState, useEffect} from 'react'
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
  import useFetch from '../hooks/useFetch';
import {IoIosInformationCircleOutline} from 'react-icons/io'

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
    const { getData } = useFetch()
    const [xData, setXData] = useState<string[]>([])
    const [yData, setYData] = useState<number[]>([])

   
    
    useEffect(() => {
      
      getData()
      .then(data => {
        setXData(Object.keys(data.graph_data.views))
        setYData(Object.values(data.graph_data.views))
      })
   
    
   }, [])
   
      
    
    const data = {
        labels: xData.map(val => (format(new Date(val), 'dd MMM'))),
       
      datasets: [  {
        backgroundColor: '#ffcbb3',
        borderColor: '#FF5403',
        fill: true,
        data: yData.map((val: number) => (val * 10))
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
        <Line options={options} data={data} />
        </div>
    </div>
  )
}

export default LineGraph