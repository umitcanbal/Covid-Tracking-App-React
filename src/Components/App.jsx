import React from 'react';

export default class App extends React.Component {

    constructor(props) {
        super(props); // calls the constructor of the extended class
                      // which is React.Component
    }

    render() {
        return (
            <h2>App1 Component</h2>
        )
    }

}