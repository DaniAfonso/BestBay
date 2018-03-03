import React, { Component } from 'react';

class NavR extends Component {
    render() {
        return (
            <nav className="nav-extended">
                 <div className="nav-wrapper">
                     <a href="./index.html" className="brand-logo">
                         <img height="65px" src="recursos/logos/iconoApp.png" alt="Logo" />
                     </a>
                     <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                     <ul id="nav-mobile" className="right hide-on-med-and-down">
                         <li>
                             <h5 className="logTitulo">LOGIN:</h5>
                         </li>
                         <li>
                             <a className="loginGithub"><img src="recursos/logos/github.png" /></a>
                         </li>
                         <li>
                             <a className="loginFace"><img src="recursos/logos/facebook.png" /></a>
                         </li>
                         <li>
                             <a className="loginTwitter"><img src="recursos/logos/twitter.png" /></a>
                         </li>
                         <li>
                             <a className="loginGoogle"><img src="recursos/logos/google.png" /></a>
                         </li>
                     </ul>
                     <ul className="side-nav logHam" id="mobile-demo">
                         <li>
                             <a className="loginGithub"><img src="recursos/logos/github.png" />Login Github</a>
                         </li>
                         <li>
                             <a className="loginFace"><img src="recursos/logos/facebook.png" />Login Facebook</a>
                         </li>
                         <li>
                             <a className="loginTwitter"><img src="recursos/logos/twitter.png" />Login Twiter</a>
                         </li>
                         <li>
                             <a className="loginGoogle"><img src="recursos/logos/google.png" />Login Google</a>
                         </li>
                     </ul>
                 </div>
                 <div className="nav-content">
                     <ul className="tabs tabs-transparent">
                         {/*
                         <li className="tab">
                             <a id="btnPestEbay" className="btnPest">Ebay</a>
                         </li>
                         <li className="tab">
                             <a id="btnPestBestbuy" className="btnPest">BestBuy</a>
                         </li>
                         */}
                         <li className="tab">
                             <a id="btnPestExtra" className="btnPest active" >Busqueda</a>
                         </li>
                     </ul>
                 </div>
             </nav>
        )
    }
}

class SearchR extends Component {
    render() {
        return (
            <div className="cardFiltro col s12 m4 l3 xl2">
                <fieldset>

                    <div className="input-field col s12">
                        <input id="fBusqueda" type="text" className="validate" />
                        <label htmlFor="fBusqueda">Filtro</label>
                    </div>

                    <div className="col s12">
                        <a id="fBtnSearch" className="waves-effect waves-light btn">
                            <i className="material-icons right">search</i>Buscar</a>
                    </div>

                    <div className="col s12">
                        <ul id="dropCat" className="dropdown-content">
                            <li><a className="dCat" id="cat0">Smartphones</a></li>
                            <li><a className="dCat" id="cat1">TV y Health</a></li>
                            <li><a className="dCat" id="cat2">Fitness and Beauty</a></li>
                        </ul>
                        <a id="dropCatA" className="btn dropdown-button" data-activates="dropCat">Categoría
                            <i className="material-icons right">arrow_drop_down</i>
                        </a>
                    </div>

                    <div className="col s12">
                        <ul id="dropBrand" className="dropdown-content">
                            <li><a className="dBra" id="bra">Todas</a></li>
                            <li><a className="dBra" id="braApple">Apple</a></li>
                            <li><a className="dBra" id="braSamsung">Samsung</a></li>
                            <li><a className="dBra" id="braNokia">Nokia</a></li>
                            <li><a className="dBra" id="braLg">LG</a></li>
                        </ul>
                        <a id="dropBrandA" className="btn dropdown-button" data-activates="dropBrand">Marca
                            <i className="material-icons right">arrow_drop_down</i>
                        </a>
                    </div>

                    <div id="selOrder" className="input-field col s12">
                        <select className="selSort">
                            <option value="0" defaultValue >Precio ascendente</option>
                            <option value="1">Precio descendente</option>
                        </select>
                        <label>Orden</label>
                    </div>

                    <div className="input-field col s12 m6">
                        <input min="1" placeholder="Df: 1" id="minPrice" type="number" className="validate" />
                        <label htmlFor="minPrice">Precio Min</label>
                    </div>

                    <div className="input-field col s12 m6">
                        <input min="1" placeholder="Df: 99999" id="maxPrice" type="number" className="validate" />
                        <label htmlFor="maxPrice">Precio Max</label>
                    </div>

                    <div className="col s12">
                        <ul id="dropConv" className="dropdown-content">
                            <li><a className="dConv" id="usd$">USD</a></li>
                            <li><a className="dConv" id="eur€">EUR</a></li>
                            <li><a className="dConv" id="gbp£">GBP</a></li>
                            <li><a className="dConv" id="jpy¥">JPY</a></li>
                        </ul>
                        <a id="dropConvA" className="btn dropdown-button" data-activates="dropConv">Moneda
                            <i className="material-icons right">arrow_drop_down</i>
                        </a>
                    </div>

                    <div className="input-field col s12 m6">
                        <input min="1" placeholder="Df: 100" id="totalResults" type="number" className="validate" />
                        <label htmlFor="totalResults">Total Results</label>
                    </div>

                    <div className="input-field col s12 m6">
                        <input min="1" placeholder="Df: 10" id="pageResults" type="number" className="validate" />
                        <label htmlFor="pageResults">Page Results</label>
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
                        <img src="recursos/macbookpro.jpg" alt="imagen carta" />
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

class SpinerR extends Component {
    render() {
        return (
            <div className="col s12 prelo none">
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
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
                {/*
                <div id="PestEbay" className="col s12 m8 pest none">
                    <SpinerR />

                </div>
                <div id="PestBestbuy" className="col s12 m8 pest none">
                    <SpinerR />

                </div>
                */}
                <div id="PestExtra" className="col s12 m8 l9 xl10 pest">

                    <div id="divEbay" className="col s12 m6">
                        <div className="parentPaginator col s12">
                            <div id="pagination-1"></div>
                        </div>
                        <p className="noEncontrado none">Ningún resultado que mostrar</p>
                        <SpinerR />                        
                        <div id="eResults" className="col s12"></div>
                    </div>
                    <div id="divBestbuy" className="col s12 m6">
                        <div className="parentPaginator col s12">
                            <div id="pagination-2"></div>
                        </div>
                        <p className="noEncontrado none">Ningún resultado que mostrar</p>
                        <SpinerR />                        
                        <div id="bResults" className="col s12"></div>
                    </div>
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
                        <h5 className="white-text">Información de interes</h5>
                        <p className="grey-text text-lighten-4">Aquí puedes encontrar los enlaces a
                            GitHub de cada miembo y el repositorio del proyecto.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Enlaces</h5>
                        <ul>
                            <li>
                                <a className="grey-text text-lighten-3" href="https://github.com/DaniAfonso">Daniel Afonso</a>
                            </li>
                            <li>
                                <a className="grey-text text-lighten-3" href="https://github.com/Luischamo3">Luis Sanfiel </a>
                            </li>
                            <li>
                                <a className="grey-text text-lighten-3" href="https://github.com/jesdagonpas">Jesus Pascolo</a>
                            </li>
                            <li>
                                <a className="grey-text text-lighten-3" href="https://github.com/DaniAfonso/bestbayreact">GitRepo</a>
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
            <div className="cont">
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