import React, {useState, useEffect} from "react"

import { fetchCountries } from "../../api"
import { NativeSelect, FormControl} from "@material-ui/core"

import styles from "./CountryPicker.module.css"

function CountryPicker(props) {

  const [fetchedCountries, setFetchedCountries] = useState([])

  useEffect( () => {
    const fetch = async () => {
      const countries = await fetchCountries()
      setFetchedCountries(countries)
    } 
    
    fetch()
  }, [] )

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={ (event) => props.handleCountryChange(event.target.value) }>
        <option value="">Global</option>
        {fetchedCountries.map( (country, i) => {return <option key={i} value={country}>{country}</option>} )}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker