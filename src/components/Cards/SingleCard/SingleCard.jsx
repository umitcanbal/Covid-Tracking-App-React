import React from "react"

import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import CountUp from 'react-countup';
import cx from "classnames"

import styles from "./SingleCard.module.css"

const SingleCard = ({ data, lastUpdate }) => {
  
  const dataName = data[0]
  const dataValue = data[1]
  
  return (
    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles[dataName])}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>Infected</Typography>
        <Typography variant="h5">
          <CountUp start={0} end={dataValue.value} duration={1} separator=","/>
        </Typography>
        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">Number of active cases of COVID-19</Typography>
      </CardContent>
    </Grid>
  )
}

export default SingleCard