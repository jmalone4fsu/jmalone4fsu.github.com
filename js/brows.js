/* brows.js
 Author: Joseph Malone            
 Course: Mobile Interfaces and Usability        
 Term  : 1109 Instructor: C.Burke 
 Date  : September 01, 2011           
*/
function showBrowse(id){
    var img1 = new Image().src = "img/bestmeats300.png";
    var img2 = new Image().src = "img/usfoods300.png";
    var img3 = new Image().src = "img/condiments300.png";
    var img4 = new Image().src = "img/boxrite300.png";
    var img5 = new Image().src = "img/bravo300.png";
    var pics = [img1,img2,img3,img4,img5];
    document.getElementById("main").style.display = "none";
    document.getElementById("showBrows").style.display = "block";
    var getBrowsList = document.getElementById("showBrows");
    var order=json.orders;
    for (var i=0, j=4; i<j; i++){
        if (id=="bm"){
            var newPic = pics[0];
            var itemTxt = document.createTextNode(order.BM.item[i]+" "+order.BM.qty[i]+" "+order.BM.orddate[i]);
        }else if (id=="us"){
            var newPic = pics[1];
            var itemTxt = document.createTextNode(order.US.item[i]+" "+order.US.qty[i]+" "+order.US.orddate[i]);
        }else if (id=="con"){
            var newPic = pics[2];
            var itemTxt = document.createTextNode(order.Con.item[i]+" "+order.Con.qty[i]+" "+order.Con.orddate[i]);
        }else if (id=="br"){
            var newPic = pics[3];
            var itemTxt = document.createTextNode(order.BR.item[i]+" "+order.BR.qty[i]+" "+order.BR.orddate[i]);
        }else {
            var newPic = pics[4];
            var itemTxt = document.createTextNode(order.BC.item[i]+" "+order.BC.qty[i]+" "+order.BC.orddate[i]);
        }
        if (i==0){
            var newP=document.createElement("p");
            var newPp=document.createElement("p");
            var t = document.createElement("IMG");
            t.setAttribute('src', newPic);
            t.setAttribute('width', 300);
            newPp.appendChild(t);
            getBrowsList.appendChild(newPp);
            newP.appendChild(itemTxt);
            getBrowsList.appendChild(newP);  
        }else {
            var newP = document.createElement("p");
            newP.appendChild(itemTxt);
            getBrowsList.appendChild(newP);
        }
    }
}