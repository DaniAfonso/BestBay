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

function cardNReturn(titulo, descripcion, img, link, price) {
    let t = titulo.length > 20 ? titulo.substring(0, 20) + "..." : titulo;
    let c = '<div class="col s12 card artCard">' +
        '<div class="card-image waves-effect waves-block waves-light">' +
        '<img class="activator" src=" ' + img + ' ">' +
        '</div>' +
        '<div class="card-content">' +
        '<span class="card-title activator grey-text text-darken-4">' + t + '<i class="material-icons right">more_vert</i></span>' +
        '<p><a href=" ' + link + ' ">Comprar ' + price + "€" + '</a></p>' +
        '</div>' +
        '<div class="card-reveal">' +
        '<span class="card-title grey-text text-darken-4">' + titulo + '<i class="material-icons right">close</i></span>' +
        '<p>' + descripcion + '</p>' +
        '</div>' +
        '</div>';
    return c;
}

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

function generarDrop() {
    $('#dropBrands').remove();
    let d = dropReturn(tvArray);
    $('#selM').append(d);
    //$(d).insertBefore('#selM');
}

function classToggle(a, b) {
    $(a).toggleClass(b);
}

function toast(m) {
    Materialize.toast(m, 3000, 'rounded')
}


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


function featuresToString(f) {
    let fs = "";
    $(f).each(function () {
        fs += $(this)[0].feature + ". ";
    })
    return fs;
}