import "./import/modules.js";
import "./import/components.js";

$(document).ready(function(){
    $('select').change(function(){
        var width = $(this).width();
        $(this).children(":disabled").remove();
        $(this).width(width);
    });
});