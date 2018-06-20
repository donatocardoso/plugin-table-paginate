jQuery.fn.paginate = function(lines) {
    console.log(this);
    var a = this.selector + " tr:eq(" + lines + ")";
    $(a.toString()).css("background", "#f00");
    
    jQuery.fn.css("background", "#f00");
    console.log(jQuery.fn.css);
};

$("#tbTeste").paginate(3);