import React, {useState, useEffect} from "react"

import {fetchDailyData} from "../../api"
import {Line, Bar} from 'react-chartjs-2';

import styles from "./Chart.module.css"

const Chart = (props) => {

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
    dailyData.length && !props.countryData ?
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
    !lineChart && props.countryData ?
    <Bar 
      data = { {
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "Current Situation",
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            data: [props.countryData.confirmed.value-props.countryData.recovered.value-props.countryData.deaths.value, props.countryData.recovered.value, props.countryData.deaths.value]
          },
        ]
      } } 
    />
    :
    null
  )

  return (
    <div  className={styles.container}>
      {lineChart}
      {barChart}
    </div>
  )
}

export default Chart


