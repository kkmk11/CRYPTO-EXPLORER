import React from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart,LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip} from 'chart.js'
 
Chart.register(
  LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
)


const Bars = (props) => {
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
      text:"Bar Graph"
    }
  }
}

const data={
  labels,
  datasets:[
   {
     label:"Price in $",
     data:[today,hour,day,week],
     barThickness: 60,
     backgroundColor:['green','blue','red','orange']
   },
  ]
}
  return (
    <div style={{height:"250px",width:"450px",margin:"auto"}}>
      <Bar options={options} data={data} />
    </div>
   )
}

export default Bars