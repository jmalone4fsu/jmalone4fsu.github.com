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


