import React, {useState, useEffect} from "react"

import {fetchDailyData} from "../../api"

const Chart = () => {

  const [data, setData] = useState({})

  useEffect( () => {
    const doThis = async () => {
      const fetchedDailyData = await fetchDailyData();
      setData({fetchedDailyData})
      //It can be wrriten shorter as below
      //setData({await fetchDailyData()})
    }
    doThis()
  }, [] )

  console.log(data)

  return (
    <h1>Chart</h1>
  )
}

export default Chart

// Note:
// This component will be rendered three times;
// 1-When the App component is rendered for the first time, the Chart component will be rendered and mounted for the first time
// 3-Here, because of the method "useEffect()" it will start re-rendering again to update itself
// 2-When the App component's "componentDidMount" method is called, so the Chart component will re-render ALTHOUGH there is no change in Chart component, every setState in App component will reflect this component's re-render regardless of changes detected in Chart component.App

// Additional Note: the numbers 1, 2, 3 are given according to their real time occurence, and the written order (1, 3 and 2) is given according to their starting point. Number 3 starts before number 2, BUT BUT BUT the parent component(App) will not wait for its child component(Chart)'s async/await function's completion. So that console.log(data) coming from number 3 will display before.  
