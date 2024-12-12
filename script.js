window.onload = function () {
  // When the user scrolls down 50px from the top of the document, resize the header's font size
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("header").style.background = "#393939";
    } else {
      document.getElementById("header").style.background = "transparent";
    }
  }


  

  $("#icons-6").owlCarousel({
    loop: true,
    // margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });


  $("#icons-4").owlCarousel({
    loop: true,
    // margin: 10,
    nav: false,
    // dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    // margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  

   const menulink=document.querySelector('.menulink')
        const menutoggle=document.querySelector('.toggle');
        menutoggle.onclick=function(){
            menutoggle.classList.toggle('active')
          
                if (menulink.style.right==="0px") {
                    menulink.style.right="-500px";
                    
                    
                }else{
    menulink.style.right="0px"

}
        }
  
};

// };
