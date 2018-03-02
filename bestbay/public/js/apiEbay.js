let keyE = 'fac7daad-553f-4c97-9da4-0799827c64e4';

let artsEbay = [];

function searchEbay(b) {
    searchArtsEbay(b);
}

function searchArtsEbay() {
    classToggle("#divEbay .prelo", "none");
    $.ajax({
        jsonp: "callback",
        dataType: "jsonp",
        url: createUrlE(),
        success: function (response) {
            //console.log(response);
            createObjsE(response);
        },
        complete: function () {
            toast("Busqueda en Ebay completada");
            classToggle("#divEbay .prelo", "none");
            addEbayPriceConv();
            rellenarEbay();
            paginar("#eResults .card", "#pagination-1", objectFilter.pageResults);
        },
        error: function (error, codigo, algo) {
            console.error(error);
            console.error(codigo);
            console.error(algo);
        }
    });
}

function createUrlE() {
    var url = "http://svcs.ebay.com/services/search/FindingService/v1";

    url += "?OPERATION-NAME=findItemsAdvanced";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=DaniAf-BestBay-PRD-d10683bd3-9ff9acfe";
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&REST-PAYLOAD";
    url += "&paginationInput.entriesPerPage=" + objectFilter.totalResults;
    url += "&sortOrder=" + objectFilter.ordEbay;
    url += "&keywords=" + objectFilter.keyword;
    url += "&categoryId=" + objectFilter.catEbaySet;
    url += "&descriptionSearch=true";
    url += "&itemFilter(0).name=MaxPrice";
    url += "&itemFilter(0).value=" + objectFilter.maxPrice;
    url += "&itemFilter(1).name=MinPrice";
    url += "&itemFilter(1).value=" + objectFilter.minPrice;

    return url;
}

function createObjsE(root) {
    //let items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
    //let items = root.findItemsByCategoryResponse[0].searchResult[0].item || [];
    let items = root.findItemsAdvancedResponse[0].searchResult[0].item || [];
    artsEbay = [];
    for (var i = 0; i < items.length; ++i) {
        var itemE = items[i];
        if (null != itemE.title[0] && null != itemE.viewItemURL) {
            //$('#eResults').append(cardReturn(title, price, pic));
            let a = new artEbay();
            a.name = itemE.title[0] != undefined ? itemE.title[0] : "No contiene nombre válido";
            a.imgT = itemE.galleryURL[0] != undefined ? itemE.galleryURL[0] : "./recursos/notFound.jpg";
            a.url = itemE.viewItemURL != undefined ? itemE.viewItemURL : "#";
            a.shippingCost = itemE.shippingInfo[0].shippingServiceCost != undefined ? parseInt(itemE.shippingInfo[0].shippingServiceCost[0].__value__) : 0;
            a.price = itemE.sellingStatus[0].convertedCurrentPrice[0].__value__ != undefined ? parseInt(itemE.sellingStatus[0].convertedCurrentPrice[0].__value__) : 1;
            a.description += itemE.condition[0].conditionDisplayName[0] != undefined ? itemE.condition[0].conditionDisplayName[0] + " " : "";
            a.description += itemE.location != undefined ? "Localizacion: " + itemE.location[0] + " " : "";
            a.description += itemE.postalCode != undefined ? "Codigo postal: " + itemE.postalCode[0] + " " : "";

            artsEbay.push(a);
        }
    }
}