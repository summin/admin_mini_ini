import React, { Component, Fragment } from 'react';


fetch(STATIC_URL.concat('admin/php/response.php'))
  .then(function(response) {
    return console.log(response);
  });

  console.log();
export default class Result extends Component {

    componentDidMount() {

    }

    state = {
        name1: "Martina",
    }



    render() {
        const { name1 } = this.state;
        const name = this.props.name;
        return (
            <main>
                <p>{name1}</p>
                <p>{name}</p>
                <p>{name}</p>
            </main>
        )
    }
}
