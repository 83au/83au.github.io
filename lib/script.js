"use strict";

var main = function main() {
  // Set copyright date
  $('footer').append(new Date().getFullYear()); // Smooth scroll for safari and ios browsers

  $('[href^="#"]').smoothScroll();
  var projects = [{
    image: 'resources/images/projects/virtual-tours.png',
    title: 'Nicole\'s 3D Virtual Tours',
    summary: 'Website for Nicole\'s 3D Virtual Tours.Users can immerse themselves in a 3D walk- through experience of properties without ever leaving their home.',
    link: 'https://github.com/83au/Nicole-s-3D-Virtual-Tours'
  }, {
    image: 'resources/images/projects/forkify.png',
    title: 'Forkify',
    summary: 'A food recipe app where users can search a dish and get back a list of recipes. Users can view each recipe in detail, add the ingredients to a shopping list, or add the recipe to their list of liked recipes.',
    link: 'https://github.com/83au/forkify'
  }, {
    image: 'resources/images/projects/budgety.png',
    title: 'Budget App',
    summary: 'An app that tracks a user\'s monthly budget.Users can input their monthly income and expenses and have their budget displayed back to them.',
    link: 'https://github.com/83au/Budget-App'
  }, {
    image: 'resources/images/projects/color-game.png',
    title: 'Hexadecimal Color Game',
    summary: 'A color guessing game. Users are given a hexadecimal color value and have to guess which of the displayed colors it corresponds to. It has two modes: "easy" and "hard".',
    link: 'https://github.com/83au/The-Great-Hexadecimal-Color-Game'
  }, {
    image: 'resources/images/projects/dice-game.png',
    title: 'Dice Game',
    summary: 'A dice game where two players can choose a final score to reach before the other player. If either rolls a one, they lose all their points.',
    link: 'https://github.com/83au/Dice-Game'
  }, {
    image: 'resources/images/projects/plumbus.png',
    title: 'Plumbus Landing Page',
    summary: 'A parody of product landing pages using a fictional product from the comedy television show "Rick and Morty".',
    link: 'https://github.com/83au/Plumbus'
  }, {
    image: 'resources/images/projects/colmar.png',
    title: 'Colmar Academy',
    summary: 'The home page for a fictional academic institution. ',
    link: 'https://github.com/83au/Colmar-Academy'
  }];

  function createCard(project) {
    return "\n      <div class=\"projects__card\">\n          <div class=\"projects__card-side projects__card-side--front\">\n            <div class=\"projects__image-container\">\n              <img src=\"".concat(project.image, "\" alt=\"").concat(project.title, "\">\n            </div>\n            <h4 class=\"project-title\">").concat(project.title, "</h4>\n          </div>\n          <div class=\"projects__card-side projects__card-side--back\">\n            <p class=\"projects__project-summary\">").concat(project.summary, "</p>\n            <a class=\"projects__more-info\" href=\"").concat(project.link, "\">\n              <button class=\"projects__button\" aria-label=\"More information\">More info!</button>\n            </a>\n          </div>\n        </div>\n    ");
  }

  function makeProjectsSection() {
    var container = document.createElement('div');
    container.className = 'projects__container';
    projects.forEach(function (project) {
      return $(container).append(createCard(project));
    });
    $('#projects').append(container);
  }

  makeProjectsSection();
};

$(main);