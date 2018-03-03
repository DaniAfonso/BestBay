/** 
 * Key de Forex
*/
let keyF = 'KIrXe3dRjnP5g3qyHTgMgTNSr3CW8Pc8';

/**
 * Se puede realizar otra peticion o no.
 * Se usa para controlar si la peticion anterior,
 * no ha terminado de ejecutarse.
 */
let finF = true;

/** 
 * Inicia la llamada ajax, y dependiendo del resultado,
 * asigna valores o muestra el error
*/
function searchConversion() {
    finF = false;
    $.ajax({
        type: "GET",
        dataType: "json",
        url: createUrlF(),
    })
        .done(function (data, textStatus, jqXHR) {
            finF = true;
            if (console && console.log) {
                console.log("ApiForex Done");
            }
            oConv.conv.eur = data[0].price;
            oConv.conv.gbp = data[1].price;
            oConv.conv.jpy = data[2].price;
            searchEbay();
            searchBestbuy();
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            finF = true;
            if (console && console.log) {
                console.log("La solicitud a fallado: " + textStatus);
            }
        });
}

/** 
 * Crea la URL necesaria para obtener las conversiones requeridas
*/
function createUrlF() {
    let url = "";
    url += "https://forex.1forge.com/1.0.3/quotes?";
    url += "pairs=USDEUR,USDGBP,USDJPY";
    url += "&api_key=" + keyF;
    return url;
}