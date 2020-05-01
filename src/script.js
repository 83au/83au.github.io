$(function() {
  // Set copyright date
  $('footer').append(new Date().getFullYear());

  // Smooth scroll for safari and ios browsers
  $('[href^="#"]').smoothScroll();

  $('.navbar__burger').click(() => $('.navbar__burger').toggleClass('active'));
  $('.navbar a').click(() => $('.navbar__burger').removeClass('active'));


  const projects = [
    {
      image: 'resources/images/projects/tcg.jpg',
      title: 'Tricking Combo Generator',
      summary: 'A combo generator for the sport of tricking. Tricking consists of combinations of "tricks" inspired by martial arts, gymnastics, and break dancing.',
      link: 'https://github.com/83au/TrickingComboGenerator'
    },
    {
      image: 'resources/images/projects/virtual-tours.png',
      title: 'Nicole\'s 3D Virtual Tours',
      summary: 'Website for Nicole\'s 3D Virtual Tours.Users can immerse themselves in a 3D walk- through experience of properties without ever leaving their home.',
      link: 'https://github.com/83au/Nicole-s-3D-Virtual-Tours'
    },

    {
      image: 'resources/images/projects/forkify.png',
      title: 'Forkify',
      summary: 'A food recipe app where users can search a dish and get back a list of recipes. Users can view each recipe in detail, add the ingredients to a shopping list, or add the recipe to their list of liked recipes.',
      link: 'https://github.com/83au/forkify'
    },

    {
      image: 'resources/images/projects/budgety.png',
      title: 'Budget App',
      summary: 'An app that tracks a user\'s monthly budget.Users can input their monthly income and expenses and have their budget displayed back to them.',
      link: 'https://github.com/83au/Budget-App'
    },

    {
      image: 'resources/images/projects/color-game.png',
      title: 'Hexadecimal Color Game',
      summary: 'A color guessing game. Users are given a hexadecimal color value and have to guess which of the displayed colors it corresponds to. It has two modes: "easy" and "hard".',
      link: 'https://github.com/83au/The-Great-Hexadecimal-Color-Game'
    },

    {
      image: 'resources/images/projects/dice-game.png',
      title: 'Dice Game',
      summary: 'A dice game where two players can choose a final score to reach before the other player. If either rolls a one, they lose all their points.',
      link: 'https://github.com/83au/Dice-Game'
    },

    {
      image: 'resources/images/projects/plumbus.png',
      title: 'Plumbus Landing Page',
      summary: 'A parody of product landing pages using a fictional product from the comedy television show "Rick and Morty".',
      link: 'https://github.com/83au/Plumbus'
    },

    {
      image: 'resources/images/projects/colmar.png',
      title: 'Colmar Academy',
      summary: 'The home page for a fictional academic institution. ',
      link: 'https://github.com/83au/Colmar-Academy'
    },
  ];


  function createCard(project) {
    return `
      <div class="projects__card">
          <div class="projects__card-side projects__card-side--front">
            <div class="projects__image-container">
              <img src="${project.image}" alt="${project.title}">
            </div>
            <h4 class="project-title">${project.title}</h4>
          </div>
          <div class="projects__card-side projects__card-side--back">
            <p class="projects__project-summary">${project.summary}</p>
            <a class="projects__more-info" href="${project.link}">
              <button class="projects__button" aria-label="More information">More info!</button>
            </a>
          </div>
        </div>
    `;
  }


  function makeProjectsSection() {
    const $container = $('<div></div>');
    $container.addClass('projects__container');

    projects.forEach(project => $container.append(createCard(project)));

    $('#projects').append($container);
  }

  makeProjectsSection();
});
