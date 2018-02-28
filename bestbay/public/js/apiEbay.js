let keyE = 'fac7daad-553f-4c97-9da4-0799827c64e4';

let artsEbay = [];

function searchEbay(b) {
    searchArtsEbay(b);
}

function searchArtsEbay(b) {
    classToggle("#PestEbay .prelo", "none");
    $.ajax({
        jsonp: "callback",
        dataType: "jsonp",
        url: createUrlE(b),
        success: function (response) {
            //console.log(response);
            createObjsE(response);
        },
        complete: function () {
            toast("Busqueda en Ebay completada");
            classToggle("#PestEbay .prelo", "none");
            console.log("ApiEbay completado");
            //console.log(artsEbay);
            rellenarEbay();
        },
        error: function (error, codigo, algo) {
            console.error(error);
            console.error(codigo);
            console.error(algo);
        }
    });
}

function createUrlE(b) {

    var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsAdvanced";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=DaniAf-BestBay-PRD-d10683bd3-9ff9acfe";
    url += "&GLOBAL-ID=EBAY-ES";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&REST-PAYLOAD";
    url += "&paginationInput.entriesPerPage=10";
    url += "&keywords=" + b;
    url += "&categoryId=" + obCat.getCatEbay();
    url += "&descriptionSearch=true";

    /*
        var url = "http://svcs.ebay.com/services/search/FindingService/v1";
        url += "?OPERATION-NAME=findItemsByCategory";
        url += "&SERVICE-VERSION=1.0.0";
        url += "&SECURITY-APPNAME=DaniAf-BestBay-PRD-d10683bd3-9ff9acfe";
        url += "&GLOBAL-ID=EBAY-ES";
        url += "&RESPONSE-DATA-FORMAT=JSON";
        url += "&REST-PAYLOAD";
        url += "&categoryId=" + catMovilE;
        url += "&paginationInput.entriesPerPage=10";
        url += "&aspectFilter(0).aspectName=Genre";
        url += "&aspectFilter(0).aspectValueName=" + b;
    */
    return url;
}

function createObjsE(root) {
    console.log(root);
    //let items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
    //let items = root.findItemsByCategoryResponse[0].searchResult[0].item || [];
    let items = root.findItemsAdvancedResponse[0].searchResult[0].item || [];
    artsEbay = [];
    for (var i = 0; i < items.length; ++i) {
        var itemE = items[i];
        if (null != itemE.title[0] && null != itemE.viewItemURL) {
            //$('#eResults').append(cardReturn(title, price, pic));
            let a = new artEbay();
            a.name = itemE.title[0];
            a.imgT = itemE.galleryURL[0];
            a.enlace = itemE.viewItemURL;
            a.price = itemE.sellingStatus[0].convertedCurrentPrice[0].__value__;
            artsEbay.push(a);
        }
    }
    console.log(items[0]);
}