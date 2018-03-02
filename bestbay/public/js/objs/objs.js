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
    this.ebay = ['15032', '293', '26395'];
    this.bestbuy = ['pcmcat209400050001', 'abcat0101000', 'pcmcat242800050021'];
    this.catSelEbay = this.ebay[0];
    this.catSelBestbuy = this.bestbuy[0];
    this.maxPrice = 1000;
    this.order = 'asc';
    this.brands = "";
    this.size = 100;
}

optFiltrado.prototype.selCats = function (e) {
    this.catSelEbay = this.ebay[e];
    this.catSelBestbuy = this.bestbuy[e];
}

optFiltrado.prototype.getCatEbay = function () {
    return this.catSelEbay;
}

optFiltrado.prototype.getCatBestbuy = function () {
    return this.catSelBestbuy;
}

optFiltrado.prototype.setMaxPrice = function (e) {
    this.maxPrice = e;
}

optFiltrado.prototype.getMaxPrice = function () {
    return this.maxPrice;
}

optFiltrado.prototype.setOrder = function (e) {
    this.order = e;
}

optFiltrado.prototype.getOrder = function (e) {
    return this.order;
}

optFiltrado.prototype.setBrands = function (e) {
    this.brands = " " + e;
}

optFiltrado.prototype.getBrands = function () {
    return this.brands;
}

optFiltrado.prototype.setSize = function (e) {
    this.size = e;
}

optFiltrado.prototype.getSize = function () {
    return this.size;
}