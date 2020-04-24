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
        const fetchedCountryData = await fetchData(country)
        this.setState({country: fetchedCountryData})
    }

    render() {
        const { data } = this.state
        
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                {this.state.country ? <Chart countryData={this.state.country} /> : <Chart />} 
            </div>
        )
    }
}

export default App

