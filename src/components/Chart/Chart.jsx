import React, {useState, useEffect} from "react"

import {fetchDailyData} from "../../api"
import {Line} from 'react-chartjs-2';

import styles from "./Chart.module.css"

const Chart = () => {

  const [dailyData, setData] = useState([])

  useEffect( () => {
    const doThis = async () => {  
      const fetchedDailyData = await fetchDailyData();
      setData(fetchedDailyData)
    }
    doThis()
  }, [] )

  const lineChart = 
  (
    dailyData.length ?
    <Line 
      data = { {
        labels: dailyData.map( ({reportDate}) => { return reportDate } ),
        datasets: [
          {
            label: "Infected",
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            data: dailyData.map( ({totalConfirmed}) => { return totalConfirmed } )
          },
          {
            label: "Deaths",
            backgroundColor: 'rgba(255,0,0,0.8)',
            data: dailyData.map( ({deaths: {total}}) => { return total } )
          }
        ]
      } } 
      width={800}
      height={400}
      options={{ maintainAspectRatio: false }}
    />
    :
    null
  )
  
  console.log(dailyData)

  return (
    <div>
      <h1>Chart</h1>
      {lineChart}
    </div>
  )
}

export default Chart


