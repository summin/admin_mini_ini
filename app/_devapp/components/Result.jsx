import React, { Component, Fragment } from 'react';


fetch(STATIC_URL.concat('/php/response.php'))
    .then(function (response) {
        return console.log(response);
    });

console.log();


export default class Result extends Component {

    state = {
        name1: "Martina",
        text: "text state",
    }
    
    
    componentWillMount() {
        this.setState = {name1: "Martina mounted"};
    }

    componentWillReceiveProps({ text }) {
        this.setState = {name1: "sss"};

    }

    componentDidMount() {
        this.state = {name1: "Martina did mounted"};
        console.log("Martina did mounted");
    }

    render() {
        const { name1 } = this.state;
        const name = this.props.text;
        return (
            <main>
                <p>{name1}</p>
                <p>{name}</p>
                <p>{name}</p>
            </main>
        )
    }
}
