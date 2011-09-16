$(document).ready(function() {
    var json = {
        "orders": {
            "BM": {
                "item": ["peperoni", "ham", "sausage","beef shoulder"],
                "qty" : ["3 cases", "1 case", "20 lbs", "2 boxes"],
                "orddate":["2011-09-06","2011-09-06","2011-09-09","2011-09-09"]
            },
            "US": {
                "item": ["gr peppers", "mushrooms", "onions", "sesame rolls"],
                "qty" : ["5 lbs", "4 cans", "2 bags", "4 flats"],
                "orddate":["2011-09-06","2011-09-06","2011-09-06", "2011-09-06"]
            },
            "Con": {
                "item": ["napkins", "straws", "fancy ketchup", "mayo"],
                "qty" : ["1 case", "1 case", "2 boxes", "1 case"],
                "orddate":["2011-09-06","2011-09-06","2011-09-09", "2011-09-09"]
            },
            "BR": {
                "item": ["14 Pizza", "16 Pizza", "Lg Salad", "20 Pizza"],
                "qty" : ["1 bundle", "2 bundle", "1 carton", "2 bundle"],
                "orddate":["2011-09-06","2011-09-06","2011-09-09", "2011-09-06"]
            },
            "BC": {
                "item": ["50/50 Moz", "50/50 Cheddar", "American", "Provelo"],
                "qty" : ["6 blocks", "6 blocks", "2 boxes", "6 blocks"],
                "orddate":["2011-09-06","2011-09-09","2011-09-09", "2011-09-06"]
            }
        }
    }
    for (var i=0, j=4; i<j; i++){
        var testdata1="<li>"+json.orders.BM.item[i]+" "+json.orders.BM.qty[i]+" "+json.orders.BM.orddate[i]+"</li>";
        var testdata2="<li>"+json.orders.US.item[i]+" "+json.orders.US.qty[i]+" "+json.orders.US.orddate[i]+"</li>";
        var testdata3="<li>"+json.orders.Con.item[i]+" "+json.orders.Con.qty[i]+" "+json.orders.Con.orddate[i]+"</li>";
        var testdata4="<li>"+json.orders.BR.item[i]+" "+json.orders.BR.qty[i]+" "+json.orders.BR.orddate[i]+"</li>";
        var testdata5="<li>"+json.orders.BC.item[i]+" "+json.orders.BC.qty[i]+" "+json.orders.BC.orddate[i]+"</li>";
        $('#BM').append(testdata1);
        $('#USF').append(testdata2);
        $('#Con').append(testdata3);
        $('#BR').append(testdata4);
        $('#BC').append(testdata5);
    }
});
var storeInvForm = function(data){
    // uses form data here;
    var mydata = data;
    var d = new Date();
    var key= (d.getTime());
    var dist = mydata[0].value;
    var item = mydata[1].value;
    var quantity = mydata[2].value;
    var amount = mydata[4].value;
    var ordered = mydata[3].value;

    var orderdate = mydata[5].value;
    var note = mydata[6].value;
    var totqty = quantity+ " " +amount;
    var allItems = [
        dist,
        item,
        totqty,
        ordered,
        orderdate,
        note
    ];
    $.jStorage.set(key, allItems);
    alert("stored "+key+ " "+allItems);
    //
    //alert(mydata[0].name+" "+mydata[0].value+" "+mydata.length)
    //;
};
$(document).ready(function(){
    var invform=$('#addinvform'),
        formerrors = $('#formerrors');
    
    invform.validate({
        invalidHandler: function(form, validator){
            formerrors.click();
            var html = '';
            for (var key in validator.submitted){
                var label=$('label[for^="'+key+'"]')
                var legend=label.closest('fieldset').find('.ui-controlgroup-label');
                var fieldname = legend.length ? legend.text() : label.text();
                html += '<li>' + fieldname +'</li>';
            };
            $("#myformerrors ul").html(html);
        },
        submitHandler: function(){
            var data = invform.serializeArray();
            storeInvForm(data);
        }
    });
});


