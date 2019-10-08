$(function() {
  var date = new Date();
  var currentYear = date.getFullYear();
  $('footer').append(currentYear);

  // Smooth scroll for safari and ios browsers
  $('.gallery-main__nav--link').smoothScroll();
});