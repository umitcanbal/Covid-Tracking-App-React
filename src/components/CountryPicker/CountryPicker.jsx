import React, {useState, useEffect} from "react"

import { fetchCountryData, fetchCountries } from "../../api"

function CountryPicker() {

  const [countryNames, setCountryNames] = useState([])

  useEffect( () => {
    const fetchCountryNames = async () => {
      const countries = await fetchCountries()
      setCountryNames(countries.data.countries)
    }
    fetchCountryNames()
  }, [] )
  
  console.log(countryNames)
  
  const dropDown = (
    countryNames.length ?
    <select defaultValue="">
      <option value="" disabled>Choose a country</option>
      {
        countryNames.map( (country, i) => (<option key={i}>{country.name}</option>) )
      }
    </select>
    :
    null
  )

  return (
    <div>
      {dropDown}
      <></>
    </div>
    
  )
}

export default CountryPicker