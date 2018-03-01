import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';
import GoogleLogin from '../social/GoogleLogin';
import FacebookLogin from '../social/FacebookLogin';

class NavR extends Component {
    render() {
        return (
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <a href="./index.html" className="brand-logo">
                        <img height="65px" src="recursos/logos/imax-logo.svg" alt="Logo" />
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="sass.html">Sass</a>
                        </li>
                        <li>
                            <a href="badges.html">Components</a>
                        </li>
                        <li>
                            <a href="collapsible.html">JavaScript</a>
                        </li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li>
                            <a href="sass.html">Sass</a>
                        </li>
                        <li>
                            <a href="badges.html">Components</a>
                        </li>
                        <li>
                            <a href="collapsible.html">JavaScript</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab">
                            <a id="btnPestEbay" className="btnPest">Ebay</a>
                        </li>
                        <li className="tab">
                            <a id="btnPestBestbuy" className="btnPest">BestBuy</a>
                        </li>
                        <li className="tab">
                            <a id="btnPestExtra" className="btnPest active" >Extras</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


// export default NavR;

class SearchR extends Component {
    render() {
        return (
            <div className="cardFiltro col s12 m4">
                <fieldset>

                    <div className="col s12">
                        <a id="fBtnSearch" className="waves-effect waves-light btn">
                            <i className="material-icons left">search</i>Buscar</a>
                    </div>

                    <div className="col s12">
                        <ul id="dropCat" className="dropdown-content">
                            <li><a className="dCat" id="cat0">Smartphones<span ></span></a></li>
                            <li><a className="dCat" id="cat1">TV y Health<span ></span></a></li>
                            <li><a className="dCat" id="cat2">Fitness and Beauty</a></li>
                        </ul>
                        <a id="dropCatA" className="btn dropdown-button" data-activates="dropCat">Categoría
              <i className="material-icons right">arrow_drop_down</i>
                        </a>
                    </div>

                    <div className="input-field col s12">
                        <input id="fBusqueda" type="text" className="validate" />
                        <label htmlFor="fBusqueda">Filtro</label>
                    </div>

                    <div className="switch col s12">
                        <label>
                            Nuevo
              <input type="checkbox" />
                            <span className="lever"></span>
                            Usado
            </label>
                    </div>

                </fieldset>
            </div>
        )
    }
}




class MacbookR extends Component {
    render() {
        return (
            <div>
                <h5 className="header">MacBook Pro 15 i7 7700HQ</h5>
                <div className="card horizontal">
                    <div className="cardImg card-image">
                        <img src="recursos/macbookpro.jpg" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>Se vende portatil en perfecto estado, pasa por nuevo. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Nam ad quod aliquam unde quisquam voluptatibus vitae suscipit magni voluptate ten... </p>
                        </div>
                        <div className="card-action">
                            <a href="#">Abrir información.</a>
                            <a href="#">Agregar al carrito.</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


class PestaR extends Component {
    render() {
        return (
            <div>
                <div id="PestEbay" className="col s12 m8 pest none">
                    <div id="eResults" className="col s12"></div>
                </div>
                <div id="PestBestbuy" className="col s12 m8 pest none">
                    <div id="bResults" className="col s12"></div>
                </div>
                <div id="PestExtra" className="col s12 m8 pest">
                    <MacbookR />
                </div>
            </div>
        )
    }
}


class FooterR extends Component {
    render() {
        return (
            <div className=" ">
                <footer id="footer" className="page-footer col s12">
                    <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li>
                                <a className="grey-text text-lighten-3" href="#!">Link 1</a>
                            </li>
                            <li>
                                <a className="grey-text text-lighten-3" href="#!">Link 2</a>
                            </li>
                            <li>
                                <a className="grey-text text-lighten-3" href="#!">Link 3</a>
                            </li>
                            <li>
                                <a className="grey-text text-lighten-3" href="#!">Link 4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="container">
                            © 2018 DaJeLu Copyright
            <a className="grey-text text-lighten-4 right" href="https://creativecommons.org/licenses/by/4.0/">
                                <img height="25px" src="./recursos/logos/creative.svg" alt="Logo" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}



export class RenderizarR extends Component {
    render() {
        return (
            <div className="container">
                <div id="rowPrincipal" className="row">
                    <NavR />
                    <SearchR />
                    <PestaR />
                    <FooterR />
                </div>
            </div>
        )
    }
}