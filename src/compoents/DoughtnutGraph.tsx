import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

interface Props {
    pieData: {
        country?: string | null,
        count: number,
        percent: number,
        source?:  string |  null
    }[],
    title: string,
    icons: string[]
    
    
}
ChartJS.register(ArcElement, Tooltip, Legend);
const DoughtnutGraph: React.FC<Props> = ({ pieData, title, icons }) => {
    const  options = {
        responsive: true,
        plugins: {
          legend: {
           display: false
          },
          title: {
            display: false,
          }
        }
      }
      const backgroundColor =  [
        '#599EEA',
        '#844FF6',
        '#F09468',
        '#0FB77A',
        '#FAB70A',
        '#9FA8FF'
      ]
    const data = {
        labels: [...pieData.map(val => (val.country ? val.country : val.source)), "others"] ,
        datasets: [
          {
            label: '# of Votes',
            data: [...pieData.map(val => (val.percent)), 24],
            backgroundColor,
            borderColor: [
              '#599EEA',
              '#844FF6',
              '#F09468',
              '#0FB77A',
              '#FAB70A',
              '#9FA8FF'
              ],
              borderWidth: 1,
          },
        ],
      };
  return (
    <div className='border-[1px] w-[100%]  px-4 py-5 rounded-lg  border-gray-200'>
        <div className='flex items-center justify-between'>
            <h2 className='text-lg'>{title}</h2>
            <a href="#report" className='text-orange-500 text-sm' >view full reports</a>
            
            </div>
            <div className='main__doughtnut mt-6 flex justify-between items-center'>
           
                <ul>
                    {pieData.map((val, index) => (<li key={index} className='mb-1 sm:mb-4 flex items-center capitalize'><img className='w-4 mr-1' src={icons[index]} /> {val.country}{val.source} <span className='mx-3'>{val.percent}%</span> <span className='w-3 h-3 rounded-full' style={{'background': `${backgroundColor[index]}`}}></span></li>))}
                    <li className='mb-4 flex items-center'>Others <span className='mx-3'>24%</span> <span className='w-3 h-3 rounded-full' style={{'background': `${backgroundColor[pieData.length]}`}}></span></li>
                </ul>
                <div className='max-w-[160px] '>
                <Doughnut data={data} className='main__doughtnut-graph '  options={options}/>

                </div>

            </div>
        
        </div>
  )
}

export default DoughtnutGraph