$(document).ready(function () {
  //Initialize Slick Slider
  $(function () {
    $(".banner__images_slider").slick({
      infinite: true,
      autoplay: true,
      slidesToShow: true,
      slidesToScroll: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: true,
    });
  });

  //Initialize stack tabs
  $(function () {
    function stackeBox() {
      $(".stacked-boxes-w-tabs_header_tab").click(function () {
        var index = $(this).data("index");
        var isSelected = $(this).hasClass("selected");

        if (isSelected) {
          // update tab button
          $(this).removeClass("selected");

          // update tab wrapper
          $(
            ".stacked-boxes-w-tabs_header_tab_wrapper[data-index=" + index + "]"
          ).removeClass("selected");

          // update tab content
          $(
            ".stacked-boxes-w-tabs_header_tab_content[data-index=" + index + "]"
          ).removeClass("selected");
        } else {
          // update tab button
          $(".stacked-boxes-w-tabs_header_tab").removeClass("selected");
          $(this).addClass("selected");

          // update tab wrapper
          $(".stacked-boxes-w-tabs_header_tab_wrapper").removeClass("selected");
          $(
            ".stacked-boxes-w-tabs_header_tab_wrapper[data-index=" + index + "]"
          ).addClass("selected");

          // update tab content
          $(".stacked-boxes-w-tabs_header_tab_content").removeClass("selected");
          $(
            ".stacked-boxes-w-tabs_header_tab_content[data-index=" + index + "]"
          ).addClass("selected");
        }
      });
    }

    try {
      stackeBox();
    } catch (error) {
      console.error(error);
    }
  });

  //Initialize Beer js
  $(function () {
    $.fn.BeerSlider = function (options) {
      options = options || {};
      return this.each(function () {
        new BeerSlider(this, options);
      });
    };
    $(".beer-slider").BeerSlider({ start: 50 });
  });

  //Initilaize Slick slider for After before section
  $(function () {
    $(".sliding-images-carousel_content_inner").slick({
      infinite: true,
      autoplay: true,
      draggable: false,
      slidesToShow: 2,
      arrows: true,
      adaptiveHeight: true,
    });
  });
});
