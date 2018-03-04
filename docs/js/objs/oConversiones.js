/** 
 * Objeto Conversiones, aquí se asignan las conversiones 
 * para luego aplicarlas como sea necesario segun las preferencias
 * del usuario
*/
function Conversiones() {
    this.conv = new Array();
    this.conv.eur = 1;
    this.conv.gbp = 1;
    this.conv.jpy = 1;
    this.conv.usd = 1;

    this.convSel = "eur";
    this.symbol = "€";
}

/**
 * Asigna el cambio que quiere el usuario
 * @param {*} e Tipo de canbio que quiere el usuario
 * @param {*} s Tipo de simbolo de la moneda elegida
 */
Conversiones.prototype.setCambio = function (e, s) {
    this.convSel = e;
    this.symbol = s;
}