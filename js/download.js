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


if  (  !  Modernizr . adownload  )  {
  var  $link  =  $ ( ' a ' );
	$link . cada ( função ()  {
		var  $ download  =  $ ( este ). attr ( ' baixar ' );
	
		if  ( typeof  $download  !==  typeof  indefinido  &&  $download  !==  false )  {
      var  $el  =  $ ( ' <div> ' ). addClass ( ' instrução de download ' ). text ( ' Clique com o botão direito e selecione "Baixar arquivo vinculado" ' );
      $el . inserirDepois ( $ ( isto ));
		}
	});
}
