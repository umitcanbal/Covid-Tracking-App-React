import React from "react"

import { Grid } from "@material-ui/core"

import SingleCard from "./SingleCard/SingleCard.jsx"
import styles from "./Cards.module.css"


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  
  if(!confirmed) return <p>Loading</p>

  const data = 
  [
    ["infected", confirmed],
    ["recovered", recovered],
    ["deaths", deaths],
  ]

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        { data.map( (singleData, i) => { return <SingleCard data={singleData} lastUpdate={lastUpdate} key={i}/> } ) }
      </Grid>
    </div>
  )
}

export default Cards