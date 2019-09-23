import React, { Component, Fragment } from 'react';
import Header from './containers/Header'
import Content from './containers/Content'
import Footer from './components/Footer'
__webpack_public_path__ = `${window.STATIC_URL}/app/assets/bundle/`; /* globals __webpack_public_path__ */

class MyApp extends Component {

    render() {
        const {contentLoaded, content, focus} = this.props
        return (
            <Fragment>
                <Header />
                <Content />
            </Fragment>
        )
    }
}

export default (MyApp)

