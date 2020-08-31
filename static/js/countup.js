var num = 0;
var tgt = 70;
var speed = 30;
setInterval(function() {
    if(num <= tgt) {
        // var doc0 = document.getElementById("cup").innerText = num;
        document.getElementById("cup").innerText = num;
        num++;
        // document.innerHTML(doc0);
    }

    // if(num >= tgt) {
    //     var doc1 = document.getElementById("cup").innerText = "はいっちょる！！";
    //     document.innerHTML(doc1);
    // }
}, speed);
