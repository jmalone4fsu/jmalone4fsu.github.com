window.onload = browseIt();
function browseIt(){
    alert("browse");
    var img1 = new Image().src = "img/bestmeats300.png";
    var img2 = new Image().src = "img/usfoods300.png";
    var img3 = new Image().src = "img/condiments300.png";
    var img4 = new Image().src = "img/boxrite300.png";
    var img5 = new Image().src = "img/bravo300.png";
    var pics = [img1,img2,img3,img4,img5];
    var browslist=document.getElementById("brows");
    for (var i=0, j=pics.length; i<j; i++){
        var newPic = pics[i];
        var newP=document.createElement("p");
        var t=document.createElement("IMG");
        t.setAttribute('src', newPic);
        t.setAttribute('width', 300);
        newP.appendChild(t);
        browslist.appendChild(newP);
    }
}