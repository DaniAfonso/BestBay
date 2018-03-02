let keyF = 'KIrXe3dRjnP5g3qyHTgMgTNSr3CW8Pc8';

function searchConversion() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: createUrlF(),
    })
        .done(function (data, textStatus, jqXHR) {
            if (console && console.log) {
                console.log("ApiForex Done");
            }
            objectConv.conv.eur = data[0].price;
            objectConv.conv.gbp = data[1].price;
            objectConv.conv.jpy = data[2].price;
            searchEbay();
            searchBestbuy();
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            if (console && console.log) {
                console.log("La solicitud a fallado: " + textStatus);
            }
        });
}

function createUrlF() {
    let url = "";
    url += "https://forex.1forge.com/1.0.3/quotes?";
    url += "pairs=USDEUR,USDGBP,USDJPY";
    url += "&api_key=" + keyF;
    return url;
}