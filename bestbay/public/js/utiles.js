/**
 * Recibe los parámetros necesarios para crear un div de la carta con los datos
 * del artículo
 * @param {*} titulo 
 * @param {*} descripcion 
 * @param {*} img 
 * @param {*} link 
 * @param {*} price 
 * @param {*} moneda 
 */
function cardNReturn(titulo, descripcion, img, link, price, moneda) {
    price = price.toFixed(2);
    let t = titulo.length > 20 ? titulo.substring(0, 20) + "..." : titulo;
    let c = '<div class="col s12 card artCard">' +
        '<div class="card-image waves-effect waves-block waves-light">' +
        '<img class="activator" src=" ' + img + ' ">' +
        '</div>' +
        '<div class="card-content">' +
        '<span class="card-title activator grey-text text-darken-4">' + t + '<i class="material-icons right">more_vert</i></span>' +
        '<p><a href=" ' + link + ' ">Comprar ' + price + " " + moneda + '</a></p>' +
        '</div>' +
        '<div class="card-reveal">' +
        '<span class="card-title grey-text text-darken-4">' + titulo + '<i class="material-icons right">close</i></span>' +
        '<p>' + descripcion + '</p>' +
        '</div>' +
        '</div>';
    return c;
}

/** 
 * Rellena el div de #eResults con los objetos
 * recuperados en la busqueda en la api Ebay.
*/
function rellenarEbay() {
    $(artsEbay).each(function () {
        let a = $(this)[0];
        //console.log(a);
        $('#eResults').append(cardNReturn(a.name, a.description, a.imgT, a.url, a.priceConv, oConv.symbol));
    });
}

/** 
 * Rellena el div de #bResults con los objetos
 * recuperados en la busqueda en la api bestBuy.
*/
function rellenarBestbuy() {
    $(artsBestbuy).each(function () {
        let a = $(this)[0];
        //console.log(a);
        $('#bResults').append(cardNReturn(a.name, a.features, a.imgC, a.url, a.priceConv, oConv.symbol));
    });
}

/**
 * Intercambia la clase que recibe, se activa o desactiva dependiendo 
 * de su estado anterior
 * @param {*} a Elemento al que se aplica
 * @param {*} b Clase que se intercambia
 */
function classToggle(a, b) {
    $(a).toggleClass(b);
}

/**
 * Recibe un mensaje que muestra en un toast de 3 segundos
 * @param {*} m Mensaje a mostrar
 */
function toast(m) {
    Materialize.toast(m, 3000, 'rounded')
}

/**
 * Pagina los elementos recibidos por la cantidad recibida por parámetros
 * @param {*} ele Elemento al qu ese aplica
 * @param {*} loc Donde se aplica el paginado
 * @param {*} pag Cantidad de items por página
 */
function paginar(ele, loc, pag) {
    function paginate(options) {
        var items = $(options.itemSelector);
        var numItems = items.length;
        var perPage = options.itemsPerPage;
        items.slice(perPage).hide();
        $(options.paginationSelector).pagination({
            items: numItems,
            itemsOnPage: perPage,
            cssStyle: "light-theme",
            onPageClick: function (pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                items.hide().slice(showFrom, showTo).show();
                return false;
            }
        });
    }
    paginate({
        itemSelector: ele,
        paginationSelector: loc,
        itemsPerPage: pag
    });
}

/**
 * Recupera las features de bestbuy y las devuelve en un string
 * @param {*} f Array de features
 */
function featuresToString(f) {
    let fs = "";
    $(f).each(function () {
        fs += $(this)[0].feature + ". ";
    })
    return fs;
}

/** 
 * Entra una cantidad y la devuelve convertida a dolares
*/
function convToDollar(d) {
    let co = d / oConv.conv[oConv.convSel];
    return co;
}

/** 
 * Agrega el precio convertido a los objetos de ebay
*/
function addEbayPriceConv() {
    $(artsEbay).each(function () {
        let a = $(this)[0];
        //$(this)[0].priceConv = oConv.conv[oConv.convSel] * ($(this)[0].price + $(this)[0].shippingCost);
        $(this)[0].priceConv = oConv.conv[oConv.convSel] * $(this)[0].price;
        let b = $(this)[0];
    });
}

/** 
 * Agrega el precio convertido al los objetos de bestbuy
*/
function addBestbuyPriceConv() {
    $(artsBestbuy).each(function () {
        let a = $(this)[0];
        $(this)[0].priceConv = oConv.conv[oConv.convSel] * $(this)[0].price;
    });
}

/**
 * 
 * @param {*} titulo 
 * @param {*} descripcion 
 * @param {*} img 
 */
function cardReturn(titulo, descripcion, img) {
    let p = '<div class="col s12> "' +
        '<h5 class="header">' + titulo + '</h5>' +
        '<div class="card horizontal">' +
        '<div class="cardImg card-image">' +
        '<img src=" ' + img + ' ">' +
        '</div>' +
        '<div class="card-stacked">' +
        '<div class="card-content">' +
        '<p> ' + descripcion + ' </p>' +
        '</div>' +
        '<div class="card-action">' +
        '<a href="#">Abrir información.</a>' +
        '<a href="#">Agregar al carrito.</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    return p;
}

/**
 * 
 * @param {*} marcas 
 */
function dropReturn(marcas) {
    let d = '<div id="dropBrands" class="input-field col s12">' +
        '<select>' +
        '<option value="" disabled selected>Elije la marca</option>';
    $(marcas).each(function () {
        d += '<option value="' + $(this) + '" ' + $(this) + '> </option>';
    });
    d += '</select>' +
        '<label>Materialize Select</label>' +
        '</div>'
    return d;
}
/** 
 * 
*/
function generarDrop() {
    $('#dropBrands').remove();
    let d = dropReturn(tvArray);
    $('#selM').append(d);
    //$(d).insertBefore('#selM');
}