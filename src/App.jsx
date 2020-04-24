import React from 'react';

import {Cards, Chart, CountryPicker} from "./components"
import {fetchData} from "./api"
import styles from "./App.module.css"
import image from "./images/image.png"

class App extends React.Component {

    state = {
        data: {},
        country: "",
    }

    async componentDidMount() {
        this.handleCountryChange()
    }

    handleCountryChange = async (country) => {
        const fetchedCountryData = await fetchData(country)
        this.setState({data: fetchedCountryData, country: country})
    }

    render() {
        const { data, country } = this.state
        
        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/> 
            </div>
        )
    }
}

export default App

