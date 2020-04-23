import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url)

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
    const response = await axios.get(`${url}/countries`)
    return response
  } catch (error) {
    alert("Daily data fetching can not be completed..!")
  }
}