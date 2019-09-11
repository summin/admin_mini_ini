import React, { Component, Fragment } from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default class AppCarousel extends Component {

    state = {
        day: this.props.day
    }

    carousel = (i) => {
        if (!this.state.day)
        return
        else {
        let array = [];
            array.push(
            <Carousel.Item >
                
                <Carousel.Caption>
                    <h1>{"PRIZE of DAY" + i}</h1>
                    <p>This image will appear in the day's icons and in the form.</p>
                </Carousel.Caption>
            </Carousel.Item>);
        return array;
    }
    }

    render() {
        return (
            <Carousel className='carousel-edit'>
            {this.carousel(this.state.day)}
            </Carousel >
        )
    }
}