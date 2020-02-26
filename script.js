var overlayShow = true



document.getElementById("videoOverlayDesktop").onclick = function(e) {
  overlayShow = false
  // e.target.style.visibility = 'hidden';
  document.getElementById("videoOverlayDesktop").style.visibility  = 'hidden';
  document.getElementById("videoOverlayMobile").style.visibility  = 'hidden';
  document.getElementById("iframeID").src = iframeSRC;

}


document.getElementById("videoOverlayMobile").onclick = function(e) {
  overlayShow = false
  document.getElementById("videoOverlayDesktop").style.visibility  = 'hidden';
  document.getElementById("videoOverlayMobile").style.visibility  = 'hidden';
  document.getElementById("iframeID").src = iframeSRC;

}





var iframeSRC = document.getElementById("iframeID").src+"?autoplay=1";
document.getElementById("iframeID").src = iframeSRC;

console.log(iframeSRC);
