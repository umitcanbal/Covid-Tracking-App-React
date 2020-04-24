import React from 'react';

import {Cards, Chart, CountryPicker} from "./components"
import {fetchData} from "./api"
import styles from "./App.module.css"


class App extends React.Component {

    state = {
        data: {},
        country: "",
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        console.log("countryy", country)
        const fetchedCountryData = await fetchData(country)
        console.log("fetched country dataa", fetchedCountryData)
        this.setState({data: fetchedCountryData, country: country})
        console.log(this.state.data, this.state.country)
    }

    render() {
        const { data, country } = this.state
        
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/> 
            </div>
        )
    }
}

export default App

