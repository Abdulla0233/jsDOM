"use strict";
$(document).ready(function () {

$('.btn').click(function (e) { 
    e.preventDefault();
    let k = k => {
        for( let i=1; i<=k; i++) {
            $('.end').append(
                `<div class="res">
                    <h3>${k}</h3>    
                </div>`
            );
        }
    }
    k($('input').val());
    });
});