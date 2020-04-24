import React, {useState, useEffect} from "react"

import {fetchDailyData} from "../../api"
import {Line, Bar} from 'react-chartjs-2';

import styles from "./Chart.module.css"

const Chart = ({ data, country }) => {

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
    />
    :
    null
  )

  const barChart = 
  (
    country ?
    <Bar 
      data = { {
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            backgroundColor: [
              "rgba(0, 0, 255, 1)",
              "rgba(0, 255, 0, 1)",
              "rgba(255, 0, 0, 1)",
            ],
            borderColor: 'black',
            borderWidth: 1,
            data: [data.confirmed.value, data.recovered.value, data.deaths.value]
          },
        ]
      } } 
      options = { {
        legend: { display: false },
        title: {display: true, text: `Current Situation in ${country}`}
      } }
    />
    :
    null
  )

  return (
    <div  className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart


