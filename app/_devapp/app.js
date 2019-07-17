import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { asyncComponent } from 'react-async-component';
import myApp from 'myApp'; /** We are importing our index.php my app Vairaible */
__webpack_public_path__ = `${window.STATIC_URL}/app/assets/bundle/`; /* globals __webpack_public_path__ */

import Header from './components/Header'
import Footer from './components/Footer'
import Result from './components/Result'

var text = "blank for now";

class MyApp extends Component {

    state = {
        text: "blank for now",
    }

    render() {
        const { user : { name, email }, logged } = myApp;
        
        return (
            <Fragment>
                <Header/>
                <Result 
                    text = {this.state.text}/>
                <Footer/>
                <div className="dashboard">
                
                    {logged &&
                        <p className="status">Logged In 6</p>
                    }
                    <p className="name"> {name}</p>
                    <p className="email">{email}</p>
                    <p>API 1host variable {__API_HOST__}</p>
                </div>

            </Fragment>
        )
    }
}



render(<MyApp/>, document.getElementById('app'));
