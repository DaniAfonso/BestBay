import React, { Component } from 'react';
import { /*{*IndexRoute,}*/ Router, Route, browserHistory } from 'react-router'

import Social from './components/social/'
//import DragDrop from './components/DragDrop/'
//import Jquery from './components/Jquery/'
import { RenderizarR } from './components/layout/'

import './css/materialize.min.css';
import './css/style.css';

class App extends Component {
    render() {
        return (

            <Router history={browserHistory}>
                <Route exact path="/" component={RenderizarR}></Route>
                <Route path="/social" component={Social}></Route>
                {/*<Route path="/dnd" component={DragDrop}></Route>*/}
                {/*<Route path="/jquery" component={Jquery}></Route>*/}
            </Router>

        );
    }
}

export default App;