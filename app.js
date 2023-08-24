"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();
        if (!$.trim($('input').val()) == '') {
            let a = a => {
                for (let i = 0; i < a; i++) { $('.minibox').append(`<h4>${a}</h4>`) };
            }
            let k = k => Number(k) ? a(k) : $('.minibox').append(`<h4>${k}</h4>`);
            k($('input').val());
    }
        $('input').val('')
    })

});