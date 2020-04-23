import React, {useState, useEffect} from "react"

import {fetchDailyData} from "../../api"
import {Line} from 'react-chartjs-2';

import styles from "./Chart.module.css"

const Chart = () => {

  const [dailyData, setData] = useState({})

  useEffect( () => {
    const doThis = async () => {  
      const fetchedDailyData = await fetchDailyData();
      setData(fetchedDailyData)
    }
    doThis()
  }, [] )

  const lineChart = 
  (
    dailyData.length>0 ?
    <Line 
      data = { {
        labels: dailyData.map( (eachData) => { return eachData.reportDate } ),
        datasets: [
          {
            data: dailyData.map( (eachData) => { return eachData.totalConfirmed } )
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


// const Chart = () => {

//   const [dailyData, setData] = useState({})

//   useEffect( () => {
//     const doThis = async () => {  
//       const fetchedDailyData = await fetchDailyData();
//       setData(fetchedDailyData)
//     }
//     doThis()
//   }, [] )

//   const dataProperties = 
//   (
//       dailyData.length>0 ? 
//         {
//           labels: dailyData.map( (eachData) => { return eachData.reportDate } ),
//           datasets: [
//             {
//               data: dailyData.map( (eachData) => { return eachData.totalConfirmed } )
//             }
//           ]
//         }
//         :
//         {}
//   )
  
//   return (
//     <div>
//       <h1>Chart</h1>
//       <Line        
//         data={dataProperties}
//         width= {1000}
//         height= {400}
//         options= {{ maintainAspectRatio: false }}
//       />
//     </div>
//   )
// }

export default Chart


//Note: Here, I provided the second option commented out. In the commented out solution, it is even possible to create a function out of the component and call it when necessary.

