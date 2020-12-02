$(function () {

  $('.product-one__item-num').styler();

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false
  });

  $('.product-list__filter-btn').on('click', function () {
    $('.product-list__filter-btn').removeClass('product-list__filter-btn--active');
    $(this).addClass('product-list__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.products-item').addClass('products-item--list');
  });

  $('.button-grid').on('click', function () {
    $('.products-item').removeClass('products-item--list');
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },

  });

  $(".star").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $(".product-star").rateYo({
    starWidth: "15px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  var mixer = mixitup('.products__items');
  var mixer = mixitup('.new-design__items');


  $('.slider-top__items').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

})