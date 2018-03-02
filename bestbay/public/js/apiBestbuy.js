let keyB = 'A0iJvovzx1h8jN9IXhGSCwjm';

let artsBestbuy = [];

function searchBestbuy(b) {
    searchArtsBestbuy(b);
}

function searchArtsBestbuy() {
    classToggle("#divBestbuy .prelo", "none");
    $.ajax({
        //Cambiar a type: POST si necesario
        type: "GET",
        // Formato de datos que se espera en la respuesta
        dataType: "json",
        // URL a la que se enviará la solicitud Ajax
        url: createUrlB(),
    })
        .done(function (data, textStatus, jqXHR) {
            if (console && console.log) {
                console.log("ApiBestBuy Done");
            }
            toast("Busqueda en BestBuy completada");
            classToggle("#divBestbuy .prelo", "none");
            createObjsB(data);
            addBestbuyPriceConv();
            rellenarBestbuy();
            paginar("#bResults .card", "#pagination-2", objectFilter.pageResults);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            if (console && console.log) {
                console.log("La solicitud a fallado: " + textStatus);
            }
        });
}

function createUrlB() {
    let url;
    url = "https://api.bestbuy.com/v1/products";
    url += "((search=" + objectFilter.keyword + objectFilter.brand + ")&";
    url += "(salePrice<" + objectFilter.maxPrice + ")&";
    url += "(salePrice>" + objectFilter.minPrice + ")&";
    url += "(categoryPath.id=" + objectFilter.catBestbuySet + "))";
    url += "?apiKey=A0iJvovzx1h8jN9IXhGSCwjm";
    url += "&sort=salePrice." + objectFilter.ordBestbuySet;
    url += "&pageSize=" + objectFilter.totalResults;
    url += "&show=color,description,features.feature,image,url,thumbnailImage,";
    url += "shortDescription,salePrice,name,manufacturer";
    url += "&format=json";
    return url;

}

function createObjsB(d) {
    //console.log(d.products);
    artsBestbuy = [];
    $(d.products).each(function (i, e) {
        let p = $(this)[0];
        //$('#bResults').append(cardReturn(p.name, p.salePrice, p.thumbnailImage));
        let a = new artBestbuy();
        a.imgC = p.image != null ? p.image : "./recursos/notFound.jpg";
        a.imgT = p.thumbnailImage != null ? p.thumbnailImage : "./recursos/notFound.jpg";
        a.name = p.name != null ? p.name : "No contiene nombre válido";
        a.price = p.salePrice != null ? p.salePrice : 1;
        a.description = p.description != null ? p.description : "No contiene descripción válida";
        a.color = p.color != null ? p.color : "No contiene color válido";
        a.manufacturer = p.manufacturer != null ? p.manufacturer : "No marca válida";
        a.url = p.url != null ? p.url : "#";
        a.features = p.features != null ? featuresToString(p.features) : "No contiene características válidas";

        artsBestbuy.push(a);
    });
}

