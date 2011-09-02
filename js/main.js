/* main.js
 Author: Joseph Malone            
 Course: Mobile Interfaces and Usability        
 Term  : 1109 Instructor: C.Burke 
 Date  : September 01, 2011           
*/

window.onload = addNewItem(), addNewPackage();
var db = localStorage; // just shortening the name a bit //

// set regular expression used to check orderdate format //
var regExp=/\b201[1-9]{1}-[0-9]{2}-[0-9]{2}\b/;
var img1 = new Image().src = "img/bestmeats300.png";
var img2 = new Image().src = "img/usfoods300.png";
var img3 = new Image().src = "img/condiments300.png";
var img4 = new Image().src = "img/boxrite300.png";
var img5 = new Image().src = "img/bravo300.png";


// populates the distributor selection //
function addNewItem(){
    var newItemtxt;
    var newItem;
    var distName = ["BestMeats","USFoods","Condiments","BoxRite","BravoCheese"];
    var getItem = document.getElementById("dist");
    for (var i=0, j=distName.length; i<j; i++){
        newItem = document.createElement("option");
        newItemtxt = document.createTextNode(distName[i]);
        newItem.appendChild(newItemtxt);
        getItem.appendChild(newItem);
    }
}
// populates the package amount selector //
function addNewPackage(){
    var newPackageTxt;
    var newPackage;
    var package=["Boxes","Pounds","Cases","Cans"];
    var getPackage = document.getElementById("amount");
    // sets the attribute to selected on the Cases package amount //
    for (var i = 0, l=package.length; i < l; i++) {
        if (package[i]=="Cases") {
            newPackage = document.createElement("option");
            packageAttr = newPackage.setAttribute("selected","");
            newPackageTxt = document.createTextNode(package[i]);
            newPackage.appendChild(newPackageTxt);
            getPackage.appendChild(newPackage);
        }else{
            newPackage = document.createElement("option");
            newPackageTxt = document.createTextNode(package[i]);
            newPackage.appendChild(newPackageTxt);
            getPackage.appendChild(newPackage);
        }
    }
}
// stores the user input to db (localstorage)// 
function storeItem(id){
    // set variables //
    var d = new Date();
    var key= (d.getTime());
    var dist = document.getElementById("dist").value;
    var item = document.getElementById("item").value;
    var quantity = document.getElementById("quantity").value;
    var amount = document.getElementById("amount").value;
    var ordered = document.getElementById("ordered").value;
    var orderdate = document.getElementById("orderdate").value;
    var note = document.getElementById("note").value;
    // validate fields //
    if (dist == "no"){ // if no distributor selected //
        alert("Please select Distributor");
        document.getElementById("dist").style.border = "3px double hotpink";
        return false;
    }else {
        document.getElementById("dist").style.border = "3px double cyan";
    }
    if (item == ""){ // if item left blank //
        document.getElementById("item").style.border = "3px double red";
        var encourage = prompt("Please enter an item name.", "");
        if (encourage != "") {
            document.getElementById("item").value = encourage;
        }
        return false;
    }else {
        document.getElementById("item").style.border = "3px double cyan";
    }
    if (ordered == "on") { // set value if checked or not checked //
        ordered = "Is Ordered";
    }else {
        ordered = "Not Ordered";
    }
    if (orderdate == ""){ // if orderdate left blank //
        alert("Please Enter Order Date");
        document.getElementById("orderdate").style.border = "3px double red";
        return false;
    }
    // if orderdate is incorrect format //
    var OK=regExp.exec(orderdate);
    if (!OK){
        alert("not valid date format");
        document.getElementById("errdate").innerHTML = "yyyy-mm-dd"; 
        document.getElementById("orderdate").value;
        return false;
    }else {
        document.getElementById("errdate").style.display= "none";
    }
    if (note == ""){ // set value if note left blank //
        note = "No additional notes"
    }
    // set data to localStorage //
    var allItems = [
        dist, item, quantity, amount, ordered, orderdate, note
    ];
    db.setItem(key, allItems);

    alert("form submitted" + key + allItems);
}
// gets the data from db (localstorage) and puts it in an array for display //
function getItems(){
    for (var it=0, len=localStorage.length; it<len; it++){
        var key = db.key(it);
        var value= db.getItem(key);
        value = value.split(',');
    
        var dist="Distributor : " + value[0];
        var dist2= value[0], distImg;
        if (dist2=="BestMeats"){
            distImg = img1;
        }else if (dist2=="USFoods"){
            distImg = img2;
        }else if (dist2=="Condiments"){
            distImg = img3;
        }else if (dist2=="BoxRite"){
            distImg = img4;
        }else if (dist2=="BravoCheese"){
            distImg = img5;
        }
        var item="Item : " + value[1];
        var quantity="Quantity : " + value[2] + " " + value[3];
        var orderdate="Order Date : " + value[5] + " " + value[4];
        var note="Notes : " + value[6];
    
        var viewItems = [
            dist,
            item,
            quantity,
            orderdate,
            note
        ];
    
        // hide div:main show div:clear //
        document.getElementById("main").style.display = "none";
        document.getElementById("clear").style.display = "block";
        // depending on what distributor - show image //
        
        // list item info //
        var getMyList = document.getElementById("list");

        for (var i=0, j=viewItems.length; i<j; i++){
            if (i==0){
                var newP=document.createElement("p");
                var newPp=document.createElement("p");
                var t = document.createElement("IMG");
                t.setAttribute('class', "centred");
                t.setAttribute('src', distImg);
                t.setAttribute('width', 300);
                newPp.appendChild(t);
                getMyList.appendChild(newPp);
                var itemTxt = document.createTextNode(viewItems[i]);
                newP.appendChild(itemTxt);
                getMyList.appendChild(newP);
            }else{
                var newP = document.createElement("p");
                var itemTxt = document.createTextNode(viewItems[i]);
                newP.appendChild(itemTxt);
                getMyList.appendChild(newP);
            }
            
        
        }
        // delete item link //
        var newQ = document.createElement("div");
        var deletelink = document.createElement("a");
        var setHref = deletelink.setAttribute("href", "#");
        var setOnclick = deletelink.setAttribute("onclick","deleteItem(" + key + ");");
        var deleteText = document.createTextNode("delete item");
        deletelink.appendChild(deleteText);
        newQ.appendChild(deletelink);
        getMyList.appendChild(newQ);
        
        // edit item link //
        var editlink = document.createElement("a");
        var setEhref = editlink.setAttribute("href", "#");
        var setEOnclick = editlink.setAttribute("onclick","editItem(" + key + ");");
        var editText = document.createTextNode("edit item");
        editlink.appendChild(editText);
        newQ.appendChild(editlink);
        getMyList.appendChild(newQ);
    }


}
function editItem(id){
    //alert(id);
    var itemId = id;
    var value = db.getItem(itemId);

    value = value.split(',');
    var dist = value[0];
    var item = value[1];
    var quantity = value[2];
    var amount = value[3];
    var ordered = value[4];
    var orderdate = value[5];
    var note = value[6];
    document.getElementById("dist").value = dist;
    document.getElementById("item").value = item;
    document.getElementById("quantity").value = quantity;
    document.getElementById("amount").value = amount;
    document.getElementById("ordered").value = ordered;
    document.getElementById("orderdate").value = orderdate;
    document.getElementById("note").value = note;
    document.getElementById("stf").value = "Edit Item";
    document.getElementById("main").style.display = "block";
    document.getElementById("clear").style.display = "none";
    
    document.getElementById("stf").onclick = function(){
        var dist = document.getElementById("dist").value;
        var item = document.getElementById("item").value;
        var quantity = document.getElementById("quantity").value;
        var amount = document.getElementById("amount").value;
        var ordered = document.getElementById("ordered").value;
        var orderdate = document.getElementById("orderdate").value;
        var note = document.getElementById("note").value;
        // validate fields //
        if (dist == "no"){ // if no distributor selected //
            alert("Please select Distributor");
            document.getElementById("dist").style.border = "3px double hotpink";
            return false;
        }else {
            document.getElementById("dist").style.border = "3px double cyan";
        }
        if (item == ""){ // if item left blank //
            document.getElementById("item").style.border = "3px double red";
            var encourage = prompt("Please enter an item name.", "");
            if (encourage != "") {
                document.getElementById("item").value = encourage;
            }
            return false;
        }else {
            document.getElementById("item").style.border = "3px double cyan";
        }
        if (ordered == "on") { // set value if checked or not checked //
            ordered = "Is Ordered";
        }else {
            ordered = "Not Ordered";
        }
        if (orderdate == ""){ // if orderdate left blank //
            alert("Please Enter Order Date");
            document.getElementById("orderdate").style.border = "3px double red";
            return false;
        }
        // if orderdate is incorrect format //
        var OK=regExp.exec(orderdate);
        if (!OK){
            alert("not valid date format");
            document.getElementById("errdate").innerHTML = "yyyy-mm-dd"; 
            document.getElementById("orderdate").value;
            return false;
        }else {
            document.getElementById("errdate").style.display= "none";
        }
        if (note == ""){ // set value if note left blank //
            note = "No additional notes"
        }
        // set data to localStorage //
        var allItems = [
        dist,
        item,
        quantity,
        amount,
        ordered,
        orderdate,
        note
        ];
        db.setItem(itemId, allItems);
        alert("Item Updated!");
    }
}
function deleteItem(id){
    var rusure = confirm("DELETE Item?");
    if (rusure){
        db.removeItem(id);
        window.location.reload();
        alert("Item Deleted!");
    }else {
        alert("Item not Deleted!");
    }
}
// function to clear db (localstorage) //
function clearStorage(){
    alert("storage cleared");
    db.clear();
    return false;
}
// function to show the number for the select slider
function showValue(number){
    document.getElementById("selected_amount").innerHTML = number;   
}


