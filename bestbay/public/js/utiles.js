function cardReturn(titulo, descripcion, img) {
    let p = '<div class="col s12> "'+
        '<h5 class="header">' + titulo +'</h5>'+
        '<div class="card horizontal">'+
        '<div class="cardImg card-image">'+
            '<img src=" ' + img +' ">'+
        '</div>'+
        '<div class="card-stacked">'+
            '<div class="card-content">'+
            '<p> ' + descripcion +' </p>'+
            '</div>'+
            '<div class="card-action">'+
            '<a href="#">Abrir información.</a>'+
            '<a href="#">Agregar al carrito.</a>'+
            '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
    return p;
}

function classToggle(a, b) {
    $(a).toggleClass(b);
}

function toast(m) {
    Materialize.toast(m, 3000, 'rounded')
}