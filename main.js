
(function ($) {
    $.fn.paginate = function (amountLines = 5, page = 1) {

        let trsTBODY = this.find("tbody tr");

        if(this.find("tfoot").length)
            this.find("tfoot").remove();

        let functionPrevious = '$("#' + this[0].id + '").paginate(' + amountLines + ', ' + (page > 1 ? page - 1 : page) + ');';
        let functionNext = '$("#' + this[0].id + '").paginate(' + amountLines + ', ' + (page < (trsTBODY.length / amountLines) ? page + 1 : page) + ');';

        this.append("<tfoot>" +
            "<tr>" +
                "<td colspan='" + this.find("thead th").length + "'>" +
                    "<input class='controlsTFOOT' value='<<' type='button' onclick='" + functionPrevious + "' />" +
                    "<label class='controlsTFOOT' id='tflbNumberPage'></label>" +
                    "<input class='controlsTFOOT' value='>>' type='button' onclick='" + functionNext + "'/>" +
                "</td>" +
            "</tr>" +
        "</tfoot>");

        
        let firstLine = amountLines * (page - 1);
        let lastLine = (amountLines * page) - 1;
        
        this.find("#tflbNumberPage").text(page + " de " + Math.ceil(trsTBODY.length / amountLines));

        trsTBODY.each(function(index, elem) {
            if(firstLine <= index && index <= lastLine) {
                $(elem).css("display", "table-row");
            } else {
                $(elem).css("display", "none");
            }
        });
        
    };
}(jQuery));
