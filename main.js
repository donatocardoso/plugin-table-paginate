
(function ($) {
    $.fn.paginate = function (amountLines = 5, page = 1) {

        if(!this.find("tfoot").length) {
            let functionPrevious = '$("#tbTeste").paginate(' + amountLines + ', ' + (page > 1 ? page - 1 : page) + ')';
            let functionNext = '$("#tbTeste").paginate(' + amountLines + ', ' + (page < (this.find("tbody tr").length / amountLines) ? page + 1 : page) + ')';

            this.append("<tfoot>" +
                "<tr>" +
                    "<td colspan='" + this.find("thead th").length + "'>" +
                        "<input class='controlsTFOOT' value='<<' type='button' onclick='" + functionPrevious + "' />" +
                        "<label class='controlsTFOOT' id='tflbNumberPage'></label>" +
                        "<input class='controlsTFOOT' value='>>' type='button' onclick='" + functionNext + "'/>" +
                    "</td>" +
                "</tr>" +
            "</tfoot>");
        }
        
        let firstLine = amountLines * (page - 1);
        let lastLine = (amountLines * page) - 1;
        
        this.find("#tflbNumberPage").text(page + " de " + Math.ceil(this.find("tbody tr").length / amountLines));

        this.find("tbody tr").each(function(index, elem) {
            if(firstLine <= index && index <= lastLine) {
                $(elem).css("display", "table-row");
            } else {
                $(elem).css("display", "none");
            }
        });
        
    };
}(jQuery));
