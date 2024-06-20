const multipleItemCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width:576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false
  });

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });
  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}



var xhr = new XMLHttpRequest();

xhr.open('GET', '../img/Dominar-o-Tráfego-Orgânico-no-Instagram.pdf/arquivo.pdf', true);

xhr.responseType = 'blob';


 xhr.onload = function(e) {
if (this.status == 200) {
var blob = new Blob([xhr.response], {type: 'application/pdf'});
var downloadUrl = URL.createObjectURL(blob);
var a = document.createElement("a");
a.style.display = 'none';
a.href = downloadUrl;
a.download = 'arquivo.pdf';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(downloadUrl);
}
};


 xhr.send();