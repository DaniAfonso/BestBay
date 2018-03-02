function conversiones() {
    this.conv = new Array();
    this.conv.eur = 1;
    this.conv.gbp = 1;
    this.conv.jpy = 1;
    this.conv.usd = 1;

    this.convSel = "eur";
    this.simbol = "€";
}

conversiones.prototype.setCambio = function (e, s) {
    this.convSel = e;
    this.simbol = s;
    console.log(this)
}

function artEbay() {
    this.imgC = "";
    this.imgT = "";
    this.name = "";

    this.description = "";
    this.price = 0;
    this.priceConv = 0;

    this.condition = "";
    this.location = "";
    this.shippingCost = "";
    this.categoriaId = "";
    this.categoria = "";
    this.url = "";
}

function artBestbuy() {
    this.imgC = "";
    this.imgT = "";
    this.name = "";

    this.description = "";
    this.price = 0;
    this.priceConv = 0;

    this.color = "";
    this.manufacturer = "";
    this.url = "";
    this.features = "";
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
    this.catEbaySet = this.catEbay[e];
    this.catBestbuySet = this.catBestbuy[e];
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
