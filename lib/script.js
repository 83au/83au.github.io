"use strict";

$(function () {
  setTimeout(function () {
    return $('.loader').hide();
  }, 500); // Set copyright date

  $('footer').append(new Date().getFullYear()); // Smooth scroll for safari and ios browsers

  $('[href^="#"]').smoothScroll(); // Burger nav functionality

  $('.navbar__burger').click(function () {
    return $('.navbar__burger').toggleClass('active');
  });
  $('.navbar a').click(function () {
    return $('.navbar__burger').removeClass('active');
  });
  var projects = [{
    image: 'resources/images/projects/tcg.jpg',
    title: 'Tricking Combo Generator',
    summary: 'A combo generator for the sport of tricking. Tricking consists of combinations of "tricks" inspired by martial arts, gymnastics, and break dancing.',
    technologies: 'HTML, CSS, JavaScript, Webpack',
    link: 'https://github.com/83au/TrickingComboGenerator'
  }, {
    image: 'resources/images/projects/virtual-tours.png',
    title: 'Nicole\'s 3D Virtual Tours',
    summary: 'Website for Nicole\'s 3D Virtual Tours. Users can immerse themselves in a 3D walk- through experience of properties without ever leaving their home.',
    technologies: 'HTML, CSS, JavaScript, jQuery, Webpack',
    link: 'https://github.com/83au/Nicole-s-3D-Virtual-Tours'
  }, {
    image: 'resources/images/projects/forkify.png',
    title: 'Forkify',
    summary: 'A food recipe app where users can search a dish and get back a list of recipes.',
    technologies: 'HTML, CSS, JavaScript, Webpack',
    link: 'https://github.com/83au/forkify'
  }, {
    image: 'resources/images/projects/budgety.png',
    title: 'Budget App',
    summary: 'An app that tracks a user\'s monthly budget. Users can input their monthly income and expenses and have their budget displayed back to them.',
    technologies: 'HTML, CSS, JavaScript',
    link: 'https://github.com/83au/Budget-App'
  }, {
    image: 'resources/images/projects/color-game.png',
    title: 'Hexadecimal Color Game',
    summary: 'A color guessing game. Users are given a hexadecimal color value and have to guess which of the displayed colors it corresponds to.',
    technologies: 'HTML, CSS, JavaScript',
    link: 'https://github.com/83au/The-Great-Hexadecimal-Color-Game'
  }, {
    image: 'resources/images/projects/dice-game.png',
    title: 'Dice Game',
    summary: 'A dice game where two players can choose a final score to reach before the other player.',
    technologies: 'HTML, CSS, JavaScript',
    link: 'https://github.com/83au/Dice-Game'
  }, {
    image: 'resources/images/projects/plumbus.png',
    title: 'Plumbus Landing Page',
    summary: 'A parody of product landing pages using a fictional product from the comedy television show "Rick and Morty".',
    technologies: 'HTML, CSS, JavaScript',
    link: 'https://github.com/83au/Plumbus'
  }, {
    image: 'resources/images/projects/colmar.png',
    title: 'Colmar Academy',
    summary: 'The home page for a fictional academic institution. ',
    technologies: 'HTML, CSS',
    link: 'https://github.com/83au/Colmar-Academy'
  }];

  function createCard(project) {
    return "\n      <div class=\"projects__card\">\n          <div class=\"projects__card-side projects__card-side--front\">\n            <div class=\"projects__image-container\">\n              <img src=\"".concat(project.image, "\" alt=\"").concat(project.title, "\">\n            </div>\n            <h4 class=\"project-title\">").concat(project.title, "</h4>\n          </div>\n          <div class=\"projects__card-side projects__card-side--back\">\n            <div class=\"project-details\">\n              <p class=\"projects__project-summary\">").concat(project.summary, "</p>\n              <div>\n                <h5 class=\"technologies-heading\">Technologies Used:</h5>\n                <p class=\"technologies\">").concat(project.technologies, "</p>\n              </div>\n            </div>\n            <a class=\"projects__more-info\" href=\"").concat(project.link, "\">\n              <button class=\"projects__button\" aria-label=\"More information\">More info!</button>\n            </a>\n          </div>\n        </div>\n    ");
  }

  function makeProjectsSection() {
    var $container = $('<div></div>');
    $container.addClass('projects__container');
    projects.forEach(function (project) {
      return $container.append(createCard(project));
    });
    $('#projects').append($container);
  }

  makeProjectsSection();
});