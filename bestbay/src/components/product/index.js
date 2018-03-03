import React, { Component } from 'react';

class Producto extends Component {
    render() {
        return (
            <div className="col s12 card artCard">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={this.props.imgC} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.title}<i className="material-icons right">more_vert</i></span>
                    <p><a href={this.props.url}>Comprar {this.props.price}</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{this.props.title}<i className="material-icons right">close</i></span>
                    <p> {this.props.description} </p>
                </div>
            </div>
        );
    }
};

export class RenPro extends Component {
    render() {
        return (
            <div className="cont">
                <Producto description="Hola pepe que tal" title="uno bien" />
            </div>
        )
    }
}

