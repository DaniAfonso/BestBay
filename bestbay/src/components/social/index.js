import React, { Component } from 'react';
// import $ from 'jquery'
//Components
 import FacebookLogin from './FacebookLogin/'
import GoogleLogin from './GoogleLogin/'

// import layout from './layout'

// import LinkedinLogin from './LinkedinLogin/'

//import config from '../../../config';

class Social extends Component{    
    render(){
        return(
            <div>
                <h2>!Regístrese con su red Social favorita!</h2>   
                <p>                  
                    <GoogleLogin />
                    <FacebookLogin />
                </p>
            </div>            
        )
    }
}

export default Social;