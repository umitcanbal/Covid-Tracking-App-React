import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchData = async () => {
  try {
    //executes if fetching is succesful
    const response = await axios.get(url)
    return response
  } catch (error) {
    //executes if fetching is NOT succesful
  }
}