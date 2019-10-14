$(function() {
  // Set copyright date
  $('footer').append((new Date()).getFullYear());

  // Smooth scroll for safari and ios browsers
  $('#menu [href]').smoothScroll();
});