let obCat;

$(document).ready(function () {
    $('select').material_select();
    inicializar();
});

function inicializar() {
    $('#fBtnSearch').click(function () {
        search();
    });
    $('#btnPestEbay, #btnPestBestbuy, #btnPestExtra').click(function () {
        changePest($(this)[0]);
    });
    $('.dCat').click(function () {
        changeCat($(this)[0]);
    });

    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: true,
        hover: false,
        gutter: 0,
        belowOrigin: false
    });
    obCat = new Categorias();
}

function search() {
    let b = $('#fBusqueda').val();
    if (b.length >= 2) {
        $('#eResults, #bResults').empty();
        searchEbay(b);
        searchBestbuy(b);
    } else {
        toast("Debes escribir almenos dos caracteres");
    }
}

function changePest(e) {
    $('.btnPest').removeClass('active');
    $('.pest').addClass('none');
    $(e).addClass('active');
    let id = "#" + e.id.substring(3, e.id.lenght);
    $(id).removeClass('none');
}

function changeCat(e) {
    let tipoCat = $(e).attr("id");
    tipoCat = tipoCat.substring(3, 4);
    obCat.selCats(parseInt(tipoCat));
    $('#dropCatA')[0].childNodes[0].textContent = e.text;
}

function rellenarEbay() {
    $(artsEbay).each(function () {
        let a = $(this)[0];
        //console.log(a);
        $('#eResults').append(cardReturn(a.name, a.price, a.imgT));
    });
}

function rellenarBestbuy() {
    $(artsBestbuy).each(function () {
        let a = $(this)[0];
        //console.log(a);
        $('#bResults').append(cardReturn(a.name, a.price, a.imgC));
    });
}