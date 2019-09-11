// REACT
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

// REDUX
import { renderApp } from './actions'
import { connect } from 'react-redux'
import { createLogger } from 'redux-logger'
import reducer from './reducers'

// CHILDREN
import Header from './components/Header'
import Footer from './components/Footer'
import ContentContainer from './components/ContentContainer'

// ENVIRONMENT
__webpack_public_path__ = `${window.STATIC_URL}/app/assets/bundle/`; /* globals __webpack_public_path__ */

//// APP



class MyApp extends Component {

    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this)
    }

    handler = (data) => {
        this.data = this.data
            .updateIn(['header', 'loaded'], (value) => value = data.currentTarget.innerHTML)
            .updateIn(['contentContainer', 'content'], (value) => value = [data.currentTarget.innerHTML])
            .updateIn(['footer', 'loaded'], (value) => value = data.currentTarget.innerHTML);
    }



    render() {
        console.log("MyAPP RENDERED");
        
        const {
            testing,
            header,
            contentContainer,
            footer } = this.props.props;
         
        console.log(this.props.props);

        return (
            <Fragment>
                <h1> {testing}</h1>
                <Header {...header} />
                <ContentContainer {...contentContainer} />
                <Footer {...footer} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {

    let props = state;

    return { props }
}

export default connect(mapStateToProps)(MyApp)

