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

function Categorias() {
    /* Smartphones, TV y Health, Fitness and Beauty */
    this.ebay = ['15032', '293', '26395'];
    this.bestbuy = ['pcmcat209400050001', 'abcat0101000', 'pcmcat242800050021'];
    this.catSelEbay = '15032';
    this.catSelBestbuy = 'pcmcat209400050001';
}

Categorias.prototype.getCatEbay = function () {
    return this.catSelEbay;
}

Categorias.prototype.getCatBestbuy = function () {
    return this.catSelBestbuy;
}

Categorias.prototype.selCats = function (e) {
    this.catSelEbay = this.ebay[e];
    this.catSelBestbuy = this.bestbuy[e];
}