import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
  let modifiedUrl = url

  if(country) {
    modifiedUrl = `${url}/countries/${country}`
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(modifiedUrl)

    return { confirmed, recovered, deaths, lastUpdate }

  } catch (error) {

  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)
    return data
  } catch (error) {
    alert("Daily data fetching can not be completed..!")
  }
}

export const fetchCountries = async () => {
  try {
    const { data: {countries}} = await axios.get(`${url}/countries`)
    return countries.map( (country) => {return country.name} )
  } catch (error) {
    alert("Daily data fetching can not be completed..!")
  }
}

// export const fetchCountryData = async () => {
//   let today = new Date();
//   const dd = String(today.getDate()).padStart(2, '0');
//   const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   const yyyy = today.getFullYear();
  
//   today = mm + '-' + (dd-2) + '-' + yyyy;

//   try {
//     const {data} = await axios.get(`${url}/daily/${today}`)
//     console.log("fetch country data fonnksiyonu", data)
//     return data
//   } catch (error) {
//     alert("Country data fetching can not be completed..!")
//   }
// }
