import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { asyncComponent } from 'react-async-component';

/** We are importing our index.php my app Vairaible */
import myApp from 'myApp';

/* globals __webpack_public_path__ */
__webpack_public_path__ = `${window.STATIC_URL}/app/assets/bundle/`;
 
const Header = asyncComponent({
    resolve: () => new Promise(resolve =>
        require.ensure([], require => {
            resolve(require('./Header'));
        },
        'Header')
    )
});

class MyApp extends Component {
    render() {
        const { user : { name, email }, logged } = myApp;
        return (
            <Fragment>
                <Header/>
                <div className="dashboard">
                    {logged &&
                        <h2 className="status">Logged In 6</h2>
                    }
                    <h1 className="name"> {name}</h1>
                    <p className="email">{email}</p>

                    <p>API host variable {__API_HOST__}</p>
                </div>
            </Fragment>
        )
    }
}

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

render(<MyApp/>, document.getElementById('app'));
render(<Clock/>, document.getElementById('clock'));