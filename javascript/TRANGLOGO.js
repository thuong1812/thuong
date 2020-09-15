window.onscroll = function(){
    console.info(document.documentElement.srollTop);
    var gototop = document.getElementById("gototop");
    if(document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
         gototop.style.display="block";
    }else {
        gototop.style.display = "none";
    }
}

function common(sTop=0, duration=1000) {
    $("html, body").animate({
        scrollTop: sTop
    }, duration);
}
 
function goToTop() {
    common();
}
 
/* js menu tablet mobile*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }
  /*js border đỏ*/
$(document).ready(function(){
  function kiemtra (element) {
    if (element.value == "") {
        element.style.border = "1px solid red"
        return true
    }
    element.style.border = ""
    return false
}
$('#gui').click(function(){
    var hoTen = document.getElementById('ten')
    var nganhHoc = document.getElementById('nganh')
    var noiDung = document.getElementById('nd')
    if (hoTen != undefined && nganhHoc != undefined && noiDung != undefined) {
        if (kiemtra(hoTen) == true || kiemtra(nganhHoc) == true || kiemtra(noiDung) == true)
        return
    }
    alert("Chào " + hoTen.value + " bạn đã gửi thanh công. Chúc bạn một ngày thật vui vẻ !!")
  }) 
})
 