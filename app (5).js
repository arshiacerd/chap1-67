//CHAP 52-57
//task1 
  function showImage(e){
    console.log(e);
 var modalImage =   document.getElementById("modalImage");
 modalImage.src = e.src;
  }
function zoomIn(){
  document.getElementById("para").style.fontSize = "25px";
}
function zoomOut(){
  document.getElementById("para").style.fontSize = "15px";
}
