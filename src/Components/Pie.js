import React from 'react'
import { PolarArea } from 'react-chartjs-2';
import {Chart,LinearScale,CategoryScale,LineElement,RadialLinearScale,ArcElement,Legend,Title,Tooltip} from 'chart.js'
 
Chart.register(
  LinearScale,CategoryScale,LineElement,RadialLinearScale,ArcElement,Legend,Title,Tooltip
)


const Pie = (props) => {
    const labels=["Today","1 Hour Back","1 Day Back","1 Week Back"];
    const today=props.today;
    const hour=props.hour;
    const day=props.day;
    const week=props.week;
    const options={
        plugins:{
          legend:{
            display:true,
            position:'top'
          },
          title:{
            display:true,
            text:"Pie Chart"
          }
        }
      }
      
      const data={
        labels,
        datasets:[
         {
           label:"Pie Chart",
           data:[today,hour,day,week],
           backgroundColor: [
            'green',
            'blue',
            'red',
            'orange',
          ]
         },
        ]
      }
  return (
    <div style={{height:"350px",width:"450px",display:"flex",justifyContent:"center"}}>
      <PolarArea options={options} data={data} />
    </div>
   )
}

export default Pie




