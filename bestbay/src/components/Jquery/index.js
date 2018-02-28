import React, { Component } from 'react';
import $ from 'jquery'
import Social from '../social'

class Jquery extends Component {
    constructor(props) {
        super(props)
        this.state = { store: '' }
    }

    componentDidMount = () => {
        let _this = this;

        $('button').on('click', function () {
            //alert("Test Alert Message")
            _this.setState({ store: Math.random() })
        });
        $('button').on('click', function () {
            //alert("Test Alert Message")
            Social
        });
        
    }

    render() {
        return (
            <div>
                <h2>Ejemplo Login</h2>
                <h2>{this.state.store}</h2>
                <p>
                    <button></button>

                </p>
            </div>
        )
    }
}

export default Jquery;