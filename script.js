// rotate();
// function rotate() {
//     document.getElementById("rotate").style.msTtransform = "rotate(20deg)";
//     document.getElementById("rotate").style.ttransform = "rotate(20deg)";
// }
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
// function closeNav() {
//     var x = document.getElementById("myNav").style.height;
//     // alert(x);
//     if(x=="100%") {
//         document.getElementById("myNav").style.height = "0%";
//     } else {
//         document.getElementById("myNav").style.height = "100%";
//     }
  
// }
function closeNav() {
    var x = window.matchMedia("(max-width: 800px)");
    if(x.matches) {
        document.getElementById("myNav").style.height = "0%";
    } else {
        document.getElementById("myNav").style.height = "100vh";
    }
}