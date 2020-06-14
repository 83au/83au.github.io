import './scss/main.scss';

$(function() {
  $('body').removeClass('preload');

  // Set copyright date
  function setCopyrightDate() {
    $('footer').append(new Date().getFullYear());
  }
  setCopyrightDate();
  

  // Smooth scroll for safari and ios browsers
  $('[href^="#"]').smoothScroll();


  function initBurgerNav() {
    $('.navbar__burger').click(() => $('.navbar__burger').toggleClass('active'));
    $('.navbar a').click(() => $('.navbar__burger').removeClass('active'));
  }
  initBurgerNav();


  function initProjects() {
    const projects = [
      {
        image: 'resources/images/projects/tcg.jpg',
        title: 'Tricking Combo Generator',
        summary: 'I wrote an algorithm to generate combinations of tricks from the sport of tricking. Users can choose the level of difficulty of the tricks they want in the combo.',
        technologies: 'HTML, CSS, JavaScript, Webpack',
        link: 'https://github.com/83au/TrickingComboGenerator'
      },

      {
        image: 'resources/images/projects/weather-map.png',
        title: 'Interactive Weather Map',
        summary: 'An interactive map that reverse geocodes a location when you click on the map and then gives you the current weather for that area.',
        technologies: 'HTML, CSS, JavaScript, Google Maps API, Google Geolocation API, Open Weather Map API, AWS Lambda',
        link: 'https://github.com/83au/interactive_weather_map'
      },
      
      {
        image: 'resources/images/projects/virtual-tours.png',
        title: 'Nicole\'s 3D Virtual Tours',
        summary: 'A multi-page website filled with media of all types including: image, video, and iframes. This was my first paid project.',
        technologies: 'HTML, CSS, JavaScript, jQuery, Webpack',
        link: 'https://github.com/83au/Nicole-s-3D-Virtual-Tours'
      },

      {
        image: 'resources/images/projects/color-game.png',
        title: 'Hexadecimal Color Game',
        summary: 'A color guessing game. Users are given a hexadecimal color value and have to guess which of the displayed colors it corresponds to.',
        technologies: 'HTML, CSS, JavaScript',
        link: 'https://github.com/83au/The-Great-Hexadecimal-Color-Game'
      },

      {
        image: 'resources/images/projects/plumbus.png',
        title: 'Plumbus Landing Page',
        summary: 'A parody of product landing pages using a fictional product from the comedy television show "Rick and Morty".',
        technologies: 'HTML, CSS, JavaScript',
        link: 'https://github.com/83au/Plumbus'
      },
    ];


    function createCard(project) {
      return `
        <div class="projects__card slide-in">
            <div class="projects__card-side projects__card-side--front">
              <div class="projects__image-container">
                <img src="${project.image}" alt="${project.title}">
              </div>
              <h4 class="project-title">${project.title}</h4>
            </div>
            <div class="projects__card-side projects__card-side--back">
              <div class="project-details">
                <p class="projects__project-summary">${project.summary}</p>
                <div>
                  <h5 class="technologies-heading">Technologies Used:</h5>
                  <p class="technologies">${project.technologies}</p>
                </div>
              </div>
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
  }
  initProjects();



  // SCROLL EVENT LISTENER CONTROLLER
  function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


  // INITIALIZE MENU BAR SLIDER ANIMATION
  function initMenuBar() {
    // Create menu bar
    const $menuBar = $('<div id="menu-bar" class="navbar__menu-bar"></div>');
    $('#navbar').append($menuBar.get(0));

    // Set starting position of menu bar
    const $firstMenuItem = $('.navbar__desktop-menu a:first-child').get(0);
    const firstLeft = $firstMenuItem.getBoundingClientRect().left;
    $menuBar.get(0).style.setProperty('width', `${$firstMenuItem.offsetWidth}px`);
    $menuBar.get(0).style.setProperty('--start', `${firstLeft}px`);
   
    const sections = [...document.querySelectorAll('section')];

    
    function animateMenuBar() {
      sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const bottom = section.getBoundingClientRect().bottom;
        const halfWindow = window.innerHeight / 2;
        const inWindow = top <=halfWindow && bottom > halfWindow;
        if (!inWindow) return;

        const link = document.querySelector(`a[href="#${section.className}"]`);
        const left = link.getBoundingClientRect().left;
        $menuBar.css({
          'transform': `translateX(${left}px)`,
          'width': `${link.parentElement.offsetWidth}px`
        });
      });
    }
    window.addEventListener('scroll', debounce(animateMenuBar, 30));
  }

  function menuBarController() {
    if (window.innerWidth > 530) {
      console.log('DESKTOP');
      initMenuBar();
    }
    window.addEventListener('resize', debounce(checkMenuBar));

    function checkMenuBar() {
      const menuBar = document.querySelector('#menu-bar');
      if (this.innerWidth > 530) {
        if (menuBar) return;
        initMenuBar();
      } else {    
        if (menuBar) menuBar.remove();
      }
    }
  }
  menuBarController();
  

  // SETUP SLIDE IN ANIMATIONS
  function slideIn() {
    const $projects = $('.slide-in');
    $projects.each(function() {
      const el = $(this).get(0);
      const top = el.getBoundingClientRect().top;
      const isInWindow = top - window.innerHeight <= 1;
      if (isInWindow) {
        el.classList.add('active');
      }
    });
  }
  $(window).scroll(debounce(slideIn));
});
