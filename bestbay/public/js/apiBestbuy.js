let keyB = 'A0iJvovzx1h8jN9IXhGSCwjm';

let artsBestbuy = [];

function searchBestbuy(b) {
    searchArtsBestbuy(b);
}

function searchArtsBestbuy(b) {
    classToggle("#divBestbuy .prelo", "none");
    $.ajax({
        //Cambiar a type: POST si necesario
        type: "GET",
        // Formato de datos que se espera en la respuesta
        dataType: "json",
        // URL a la que se enviará la solicitud Ajax
        url: createUrlB(b),
    })
        .done(function (data, textStatus, jqXHR) {
            if (console && console.log) {
                console.log("ApiBestBuy Done");
            }
            toast("Busqueda en BestBuy completada");
            classToggle("#divBestbuy .prelo", "none");
            createObjsB(data);
            //console.log(artsBestbuy);
            rellenarBestbuy();
            paginar("#bResults .card", "#pagination-2", 10);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            if (console && console.log) {
                console.log("La solicitud a fallado: " + textStatus);
            }
        });
}

function createUrlB(b) {
    let url;
    url = "https://api.bestbuy.com/v1/products";
    url += "((search=" + b + objectFilter.getBrands() + ")&";
    url += "(salePrice<" + objectFilter.getMaxPrice() + ")&";
    url += "(categoryPath.id=" + objectFilter.getCatBestbuy() + "))";
    url += "?apiKey=A0iJvovzx1h8jN9IXhGSCwjm";
    url += "&sort=salePrice." + objectFilter.getOrder();
    url += "&pageSize=" + objectFilter.getSize();
    url += "&show=salePrice,thumbnailImage,name,image,description&format=json"
    return url;
}

function createObjsB(d) {
    //console.log(d.products);
    artsBestbuy = [];
    $(d.products).each(function (i, e) {
        let p = $(this)[0];
        //$('#bResults').append(cardReturn(p.name, p.salePrice, p.thumbnailImage));
        let a = new artBestbuy();
        a.imgC = p.thumbnailImage;
        a.name = p.name;
        a.price = p.salePrice;
        artsBestbuy.push(a);
    });
}