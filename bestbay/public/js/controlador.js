let objectFilter;

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
    $('.dBra').click(function () {
        changeBrand($(this)[0]);
    });
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: true,
        hover: false,
        gutter: 0,
        belowOrigin: false
    });
    objectFilter = new optFiltrado();
}

function search() {
    let b = $('#fBusqueda').val();
    if (b.length >= 2) {
        sortOrder();
        setMaxPrice();
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
    let id = "#" + e.id.substring(3, e.id.length);
    $(id).removeClass('none');
}

function changeCat(e) {
    let tipoCat = $(e).attr("id");
    tipoCat = tipoCat.substring(3, 4);
    objectFilter.selCats(parseInt(tipoCat));
    $('#dropCatA')[0].childNodes[0].textContent = e.text;
}

function changeBrand(e) {
    let tipoBrand = $(e).attr("id");
    tipoBrand = tipoBrand.substring(3, tipoBrand.length);
    objectFilter.setBrands(tipoBrand);
    $('#dropBrandA')[0].childNodes[0].textContent = e.text;
}

function sortOrder() {
    let s = $('.selSort option:selected').val();
    objectFilter.setOrder(s);
}

function setMaxPrice() {
    let maxPrice = $('#maxPrice').val();
    maxPrice > 0 ? objectFilter.setMaxPrice(maxPrice) : objectFilter.setMaxPrice(9999);
}

function rellenarEbay() {
    $(artsEbay).each(function () {
        let a = $(this)[0];
        //console.log(a);
        $('#eResults').append(cardNReturn(a.name, a.price, a.imgT));
    });
}

function rellenarBestbuy() {
    $(artsBestbuy).each(function () {
        let a = $(this)[0];
        //console.log(a);
        $('#bResults').append(cardNReturn(a.name, a.price, a.imgC));
    });
}