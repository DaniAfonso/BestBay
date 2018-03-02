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
    this.catEbay = ['15032', '293', '26395'];
    this.catBestbuy = ['pcmcat209400050001', 'abcat0101000', 'pcmcat242800050021'];
    this.ordEbay = ['PricePlusShippingHighest', 'PricePlusShippingLowest'];
    this.ordBestbuy = ['asc', 'desc'];

    this.catEbaySet = this.catEbay[0];
    this.catBestbuySet = this.catBestbuy[0];
    this.ordEbaySet = this.ordEbay[0];
    this.ordBestbuySet = this.ordBestbuy[0];

    this.maxPrice = this.maxPriceD;   
    this.brand = "";
    this.size = 100;
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
    this.maxPrice = e;
}

optFiltrado.prototype.setSize = function (e) {
    this.size = e;
}

optFiltrado.prototype.setBrands = function (e) {
    this.brand = " " + e;
}
