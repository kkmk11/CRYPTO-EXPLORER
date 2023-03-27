import React from 'react'
import { Line } from 'react-chartjs-2';
import {Chart,LinearScale,CategoryScale,LineElement,PointElement,Legend,Title,Tooltip} from 'chart.js'
 
Chart.register(
  LinearScale,CategoryScale,LineElement,PointElement,Legend,Title,Tooltip
)


const Lines = (props) => {
  const labels=["Now","1 Hour Back","1 Day Back","1 Week Back"];
    const today=props.today;
    const hour=props.hour;
    const day=props.day;
    const week=props.week;
    const options={
        plugins:{
          legend:{
            display:false,
            position:'top'
          },
          title:{
            display:true,
            text:"Line Graph"
          }
        }
      }
      
      const data={
        labels,
        datasets:[
         {
          label:"Price in $",
          data:[today,hour,day,week],
          backgroundColor: [
            'green',
            'blue',
            'red',
            'orange',
          ],
           tension:0.1
         },
        ]
      }
  return (
    <div style={{height:"250px",width:"450px",margin:"auto"}}>
      <Line options={options} data={data} />
    </div>
   )
}

export default Lines