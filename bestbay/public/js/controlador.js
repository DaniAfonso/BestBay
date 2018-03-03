/** 
 * Objeto filtrado, que se usara para asignar todas las 
 * preferecias recogidas en cualquier punto de la app
*/
let oFilter;

/** 
 * Objeto conversiones, que se usara para guardar y recuperar
 * las conversiones necesarias en cada momento
*/
let oConv;

/**
 * Cuando el documento esté listo, se inicia la ejecucion del programa,
 * inicializando todos los valores necesarios.
 */
$(document).ready(function () {
    init();
});

/** 
 * Inicializa todo lo necesario en la app.
 * Los objetos filtrado y conversiones, login,
 * los select y todos los componentes del buscador. 
*/
function init() {
    oFilter = new Filtrado();
    oConv = new Conversiones();
    
    initLogin();

    $('select').material_select();
    $('#fBtnSearch').click(function () {
        search();
    });
    $('#btnPestEbay, #btnPestBestbuy, #btnPestExtra').click(function () {
        changePest($(this)[0]);
    });
    $('.dCat').click(function () {
        changeCat($(this)[0]);
    });
    $('.dBra').click(function () {
        changeBrand($(this)[0]);
    });
    $('.dConv').click(function () {
        changeConv($(this)[0]);
    });
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: true,
        hover: false,
        gutter: 0,
        belowOrigin: false
    });
}

/** 
 * Realiza la busqueda en las apis, desencadena 
 * las llamadas.
 * Primero comprueba que la busqueda sea válida y si no, 
 * muestra un mensaje, luego se realiza la busqueda
*/
function search() {
    let b = $('#fBusqueda').val();
    if (b.length >= 2) {
        sortOrder();
        setRangePrice();
        setNumItemsSearch();
        oFilter.setKeyword(b);
        $('#eResults, #bResults').empty();
        searchConversion();        
    } else {
        toast("Debes escribir almenos dos caracteres");
    }
}

/**
 * Funcion que permite cambiar entre pestañas
 * @param {*} e Pestaña que fue pulsada
 */
function changePest(e) {
    $('.btnPest').removeClass('active');
    $('.pest').addClass('none');
    $(e).addClass('active');
    let id = "#" + e.id.substring(3, e.id.length);
    $(id).removeClass('none');
}

/**
 * Funcion que permite cambiar entre categorias.
 * Comprobando en su atributo id el tipo.
 * @param {*} e Categoria que fue pulsada.
 */
function changeCat(e) {
    let tipoCat = $(e).attr("id");
    tipoCat = tipoCat.substring(3, 4);
    oFilter.selCats(parseInt(tipoCat));
    $('#dropCatA')[0].childNodes[0].textContent = e.text;
}

/**
 * Funcion que permite cambiar entre marcas.
 * Comprobando en su atributo id el tipo.
 * @param {*} e Marca que fue pulsada.
 */
function changeBrand(e) {
    let tipoBrand = $(e).attr("id");
    tipoBrand = tipoBrand.substring(3, tipoBrand.length);
    oFilter.setBrands(tipoBrand);
    $('#dropBrandA')[0].childNodes[0].textContent = e.text;
}

/**
 * Funcion que permite cambiar entre divisas.
 * Comprobando en su atributo id el tipo.
 * @param {*} e Divisa que fue pulsada.
 */
function changeConv(e) {
    let tipoConv = $(e).attr("id");
    let tip = tipoConv.substring(0, tipoConv.length - 1);
    let sim = tipoConv.substring(3, tipoConv.length);
    oConv.setCambio(tip, sim);
    $('#dropConvA')[0].childNodes[0].textContent = e.text;
}

/** 
 * Asigna el orden en el que se ordena dependiendo
 * de las preferencias del usuario.
*/
function sortOrder() {
    let s = $('.selSort option:selected').val();
    oFilter.setOrder(s);
}

/** 
 * Asigna el precio máximo y mínimo dependiendo
 * de las preferencias del usuario.
*/
function setRangePrice() {
    let maxPrice = $('#maxPrice').val();
    let minPrice = $('#minPrice').val();
    oFilter.setMaxPrice(maxPrice);
    oFilter.setMinPrice(minPrice);
}

/** 
 * Asigna el número de items a buscar dependiendo
 * de las preferencias del usuario.
*/
function setNumItemsSearch(){
    let totalResults = $('#totalResults').val();
    let pageResults = $('#pageResults').val();
    oFilter.setTotalResults(totalResults);
    oFilter.setPageResults(pageResults);
}

