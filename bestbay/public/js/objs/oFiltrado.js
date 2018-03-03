/** 
 * Objeto filtrado, aquí se asignan todas las opciones relacionadas con el filtro, 
 * categorias disponibles, precios maximos y minimos, total de resultados,
 * total de paginas, palabra a buscar.
 * 
 * Se asignan con los set designados para ellos y realizan las conversiones necesarias
*/
function Filtrado() {
    this.maxPriceD = 99999;
    this.minPriceD = 1;
    this.totalResultsD = 100;
    this.pageResultsD = 10;
    this.keyword = '';

    /* Smartphones, TV y Health, Fitness and Beauty */
    this.catEbay = ['', '15032', '293', '26395'];
    this.catBestbuy = ['', 'pcmcat209400050001', 'abcat0101000', 'pcmcat242800050021'];

    //this.ordEbay = ['BestMatch', 'PricePlusShippingLowest', 'PricePlusShippingHighest'];
    this.ordEbay = ['PricePlusShippingLowest', 'PricePlusShippingHighest'];
    this.ordBestbuy = ['asc', 'desc'];

    this.catEbaySet = this.catEbay[0];
    this.catBestbuySet = this.catBestbuy[0];
    this.ordEbaySet = this.ordEbay[0];
    this.ordBestbuySet = this.ordBestbuy[0];

    this.maxPrice = this.maxPriceD;
    this.minPrice = this.minPriceD;
    this.brand = '';
    this.totalResults = this.totalResultsD;
    this.pageResults = this.pageResultsD;
}

/**
 * Asigna el string a buscar
 */
Filtrado.prototype.setKeyword = function (e) {
    this.keyword = e;
}

/**
 * Asigna la categoria que quiere el usuario
 */
Filtrado.prototype.selCats = function (e) {
    this.catEbaySet = this.catEbay[e];
    this.catBestbuySet = this.catBestbuy[e];
}

/**
 * Asigna el orden que quiere el usuario
 */
Filtrado.prototype.setOrder = function (e) {
    this.ordEbaySet = this.ordEbay[e];
    this.ordBestbuySet = this.ordBestbuy[e];
}

/**
 * Asigna el precio máximo que quiere el usuario
 * en caso de ser erroneo se asigna al precio máximo definido
 */
Filtrado.prototype.setMaxPrice = function (e) {
    this.maxPrice = e > 0 & e > this.minPrice ? e : this.maxPriceD;
}

/**
 * Asigna el precio mínimo que quiere el usuario
 * en caso de ser erroneo se asigna al precio mínimo definido
 */
Filtrado.prototype.setMinPrice = function (e) {
    this.minPrice = e > 0 & e < this.maxPrice ? e : this.minPriceD;
}

/**
 * Asigna el total de resultados elegido por el usuario
 */
Filtrado.prototype.setTotalResults = function (e) {
    this.totalResults = e < 100 & e > 1 ? e : this.totalResultsD;
}

/**
 * Asigna el la cantidad de páginas elegido por el usuario
 */
Filtrado.prototype.setPageResults = function (e) {
    this.pageResults = e > 1 ? e : this.pageResultsD;
}

/**
 * Asigna la marca elegida por el usuario
 */
Filtrado.prototype.setBrands = function (e) {
    this.brand = " " + e;
}