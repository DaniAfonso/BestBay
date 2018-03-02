function artEbay() {
    this.imgC = "";
    this.imgT = "";
    this.name = "";
    this.description = "";
    this.price = "";

    this.condition = "";
    this.location = "";
    this.categoriaId = "";
    this.categoria = "";

    this.enlace = "";
}

function artBestbuy() {
    this.imgC = "";
    this.imgT = "";
    this.name = "";
    this.description = "";
    this.price = "";
}

function optFiltrado() {
    /* Smartphones, TV y Health, Fitness and Beauty */
    this.maxPriceD = 9999;
    this.minPriceD = 300;
    this.totalResultsD = 100;
    this.pageResultsD = 10;
    this.keyword = "";
    this.catEbay = ['15032', '293', '26395'];
    this.catBestbuy = ['pcmcat209400050001', 'abcat0101000', 'pcmcat242800050021'];
    this.ordEbay = ['PricePlusShippingLowest', 'PricePlusShippingHighest'];
    this.ordBestbuy = ['asc', 'desc'];

    this.catEbaySet = this.catEbay[0];
    this.catBestbuySet = this.catBestbuy[0];
    this.ordEbaySet = this.ordEbay[0];
    this.ordBestbuySet = this.ordBestbuy[0];

    this.maxPrice = this.maxPriceD;
    this.minPrice = this.minPriceD;
    this.brand = "";
    this.totalResults = this.totalResultsD;
    this.pageResults = this.pageResultsD;
}

optFiltrado.prototype.setKeyword = function (e) {
    this.keyword = e;
}

optFiltrado.prototype.selCats = function (e) {
    this.catSelEbay = this.catEbay[e];
    this.catSelBestbuy = this.catBestbuy[e];
}

optFiltrado.prototype.setOrder = function (e) {
    this.ordEbaySet = this.ordEbay[e];
    this.ordBestbuySet = this.ordBestbuy[e];
}

optFiltrado.prototype.setMaxPrice = function (e) {
    this.maxPrice = e > 0 & e > this.minPrice ? e : this.maxPriceD;
}

optFiltrado.prototype.setMinPrice = function (e) {
    this.minPrice = e > 0 & e < this.maxPrice ? e : this.minPriceD;
}

optFiltrado.prototype.setTotalResults = function (e) {
    this.totalResults = e < 100 & e > 1 ? e : this.totalResultsD;
}

optFiltrado.prototype.setPageResults = function (e) {
    this.pageResults = e > 1 ? e : this.pageResultsD;
}

optFiltrado.prototype.setBrands = function (e) {
    this.brand = " " + e;
}
