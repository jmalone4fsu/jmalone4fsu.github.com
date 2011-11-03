//--------------------------------------->
//-- main.js
// Author: Joseph Malone            
// Course: Advanced SDI
// Term  : 1111 Instructor: Rick Osborne
// Date  : October 26, 2011           
// ---------------------------------------->

$(document).ready(function() {
    $('#click1 a').click(function(){
        $('#mytest').empty();
        $.ajax({
            url: 'xhr/addr.json',
            type: 'GET',
            dataType: 'json',
            success: function(response){
                for (var i=0, j=response.customers.length; i<j; i++){
                    var cust2= response.customers[i];
                    $(''+
                        '<li>'+
                            '<h3 class="ui-li-aside">'+ cust2.phone +'</h3>'+
                            '<h2>'+ cust2.name +'</h2>'+
                            '<p>'+ cust2.address +'</p>'+
                            
                        '</li>'
                    ).appendTo('#mytest');
                };
            }
        });
    });
    $('#click2 a').click(function(){
        $('#mytest').empty();
        $.ajax({
            url: 'xhr/orders.xml',
            type: 'GET',
            dataType: 'xml',
            success: function(response2){
                $(response2).find('order').each(function(){
                    var name_txt = $(this).find('name').text()
                    var addr_txt = $(this).find('addr').text()
                    var phone_txt = $(this).find('phone').text()
                    var item_txt = $(this).find('item').text()
                    $(''+
                        '<li>'+
                            '<h3 class="ui-li-aside">'+ phone_txt +'</h3>'+
                            '<h2>'+ name_txt +'</h2>'+
                            '<p>'+ addr_txt +'</p>'+
                            '<p>'+ item_txt +'</p>'+
                        '</li>'
                    ).appendTo('#mytest');
                });
            }
        });
    });
    $('#click3 a').click(function(){
        $('#mytest').empty();
        $('#mytest').CSVToTable('xhr/test.csv');
    });
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
