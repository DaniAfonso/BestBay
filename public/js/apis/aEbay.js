/** 
 * Key de ebay
*/
let keyE = 'fac7daad-553f-4c97-9da4-0799827c64e4';

/**
 * Se puede realizar otra peticion o no.
 * Se usa para controlar si la peticion anterior,
 * no ha terminado de ejecutarse.
 */
let finE = true;

/** 
 * Array de objetos ArtEbay, aquí estan todos
 * los artículos de Ebay buscados
*/
let artsEbay = [];

/** 
 * Llama al método que asigna la llamada ajax
*/
function searchEbay() {
    $('#divEbay .prelo').removeClass('none');
    $('#divEbay .noEncontrado').addClass('none');
    searchArtsEbay();
}

/** 
 * Inicia la llamada ajax, y dependiendo del resultado,
 * asigna valores o muestra el error
*/
function searchArtsEbay() {
    finE = false;
    $.ajax({
        jsonp: "callback",
        dataType: "jsonp",
        url: createUrlE(),
        success: function (response) {
            finE = true;
            console.log("ApiEbay Done");
            createObjsE(response);
        },
        complete: function () {
            finE = true;
            toast("Busqueda en Ebay completada");
            $('#divEbay .prelo').addClass('none');
            addEbayPriceConv();
            rellenarEbay();
            paginar("#eResults .card", "#pagination-1", oFilter.pageResults);
        },
        error: function (error, codigo, algo) {
            finE = true;
            console.error(error);
            console.error(codigo);
            console.error(algo);
            toast("Ha ocurrido un error en la llamada");
            $('#divEbay .prelo').addClass('none');
            $('#divEbay .noEncontrado').removeClass('none');
        }
    });
}

/** 
 * Crea la URL necesaria que se ajusta a los parámetros de 
 * filtrado del usuario asignado al objeto filtrado
*/
function createUrlE() {
    let url;
    url = "https://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsAdvanced";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=DaniAf-BestBay-PRD-d10683bd3-9ff9acfe";
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&REST-PAYLOAD";
    url += "&paginationInput.entriesPerPage=" + oFilter.totalResults;
    url += "&sortOrder=" + oFilter.ordEbaySet;
    url += "&keywords=" + oFilter.keyword;
    if (oFilter.catEbaySet != '')
        url += "&categoryId=" + oFilter.catEbaySet;
    url += "&descriptionSearch=true";
    url += "&itemFilter(0).name=MaxPrice";
    url += "&itemFilter(0).value=" + convToDollar(oFilter.maxPrice);
    url += "&itemFilter(1).name=MinPrice";
    url += "&itemFilter(1).value=" + convToDollar(oFilter.minPrice);
    if (oFilter.brand != '') {
        url += "&aspectFilter.aspectName=Brand";
        url += "&aspectFilter.aspectValueName=" + oFilter.brand;
    }
    return url;
}

/**
 * Crea los objetos de ebay recibidos y les asigna las propiedades necesarias
 * Comprueba que sus campos no sean nulos y si lo son asigna valores por defecto
 * @param {*} d Array con los datos de los articulos buscados
 */
function createObjsE(root) {
    let items = root.findItemsAdvancedResponse[0].searchResult[0].item || [];
    artsEbay = [];
    for (let i = 0; i < items.length; ++i) {
        let itemE = items[i];
        if (null != itemE.condition && null != itemE.title[0] && null != itemE.viewItemURL && null != itemE.galleryURL) {
            let a = new ArtEbay();
            a.name = itemE.title[0] != null ? itemE.title[0] : "No contiene nombre válido";
            a.imgT = itemE.galleryURL[0] != "http://thumbs1.ebaystatic.com/pict/04040_0.jpg" ? itemE.galleryURL[0] : "https://github.com/DaniAfonso/bestbayreact/blob/master/docs/recursos/notFound.JPG?raw=true";
            a.url = itemE.viewItemURL != null ? itemE.viewItemURL : "#";
            a.shippingCost = itemE.shippingInfo[0].shippingServiceCost != null ? parseInt(itemE.shippingInfo[0].shippingServiceCost[0].__value__) : 0;
            a.price = itemE.sellingStatus[0].convertedCurrentPrice[0].__value__ != null ? parseInt(itemE.sellingStatus[0].convertedCurrentPrice[0].__value__) : 1;
            a.description += itemE.condition[0].conditionDisplayName[0] != null ? itemE.condition[0].conditionDisplayName[0] + " " : "";
            a.description += itemE.location != null ? "Localizacion: " + itemE.location[0] + " " : "";
            a.description += itemE.postalCode != null ? "Codigo postal: " + itemE.postalCode[0] + " " : "";

            artsEbay.push(a);
        }
    }
    if (artsEbay.length <= 0)
    $('#divEbay .noEncontrado').removeClass('none');
}