"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

$(function () {
  $('body').removeClass('preload'); // Set copyright date

  function setCopyrightDate() {
    $('footer').append(new Date().getFullYear());
  }

  setCopyrightDate(); // Smooth scroll for safari and ios browsers

  $('[href^="#"]').smoothScroll();

  function initBurgerNav() {
    $('.navbar__burger').click(function () {
      return $('.navbar__burger').toggleClass('active');
    });
    $('.navbar a').click(function () {
      return $('.navbar__burger').removeClass('active');
    });
  }

  initBurgerNav();

  function initProjects() {
    var projects = [{
      image: 'resources/images/projects/tcg.jpg',
      title: 'Tricking Combo Generator',
      summary: 'I wrote an algorithm to generate combinations of tricks from the sport of tricking. Users can choose the level of difficulty of the tricks they want in the combo.',
      technologies: 'HTML, CSS, JavaScript, Webpack',
      link: 'https://github.com/83au/TrickingComboGenerator'
    }, {
      image: 'resources/images/projects/weather-map.png',
      title: 'Interactive Weather Map',
      summary: 'An interactive map that reverse geocodes a location when you click on the map and then gives you the current weather for that area.',
      technologies: 'HTML, CSS, JavaScript, Google Maps API, Google Geolocation API, Open Weather Map API',
      link: 'https://github.com/83au/interactive_weather_map'
    }, {
      image: 'resources/images/projects/virtual-tours.png',
      title: 'Nicole\'s 3D Virtual Tours',
      summary: 'A multi-page website filled with media of all types including: image, video, and iframes. This was my first paid project.',
      technologies: 'HTML, CSS, JavaScript, jQuery, Webpack',
      link: 'https://github.com/83au/Nicole-s-3D-Virtual-Tours'
    }, {
      image: 'resources/images/projects/color-game.png',
      title: 'Hexadecimal Color Game',
      summary: 'A color guessing game. Users are given a hexadecimal color value and have to guess which of the displayed colors it corresponds to.',
      technologies: 'HTML, CSS, JavaScript',
      link: 'https://github.com/83au/The-Great-Hexadecimal-Color-Game'
    }, {
      image: 'resources/images/projects/plumbus.png',
      title: 'Plumbus Landing Page',
      summary: 'A parody of product landing pages using a fictional product from the comedy television show "Rick and Morty".',
      technologies: 'HTML, CSS, JavaScript',
      link: 'https://github.com/83au/Plumbus'
    }];

    function createCard(project) {
      return "\n        <div class=\"projects__card slide-in\">\n            <div class=\"projects__card-side projects__card-side--front\">\n              <div class=\"projects__image-container\">\n                <img src=\"".concat(project.image, "\" alt=\"").concat(project.title, "\">\n              </div>\n              <h4 class=\"project-title\">").concat(project.title, "</h4>\n            </div>\n            <div class=\"projects__card-side projects__card-side--back\">\n              <div class=\"project-details\">\n                <p class=\"projects__project-summary\">").concat(project.summary, "</p>\n                <div>\n                  <h5 class=\"technologies-heading\">Technologies Used:</h5>\n                  <p class=\"technologies\">").concat(project.technologies, "</p>\n                </div>\n              </div>\n              <a class=\"projects__more-info\" href=\"").concat(project.link, "\">\n                <button class=\"projects__button\" aria-label=\"More information\">More info!</button>\n              </a>\n            </div>\n          </div>\n      ");
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
  }

  initProjects(); // SCROLL EVENT LISTENER CONTROLLER

  function debounce(func) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  ; // INITIALIZE MENU BAR SLIDER ANIMATION

  function initMenuBar() {
    // Create menu bar
    var $menuBar = $('<div id="menu-bar" class="navbar__menu-bar"></div>');
    $('#navbar').append($menuBar.get(0)); // Set starting position of menu bar

    var $firstMenuItem = $('.navbar__desktop-menu a:first-child').get(0);
    var firstLeft = $firstMenuItem.getBoundingClientRect().left;
    $menuBar.get(0).style.setProperty('width', "".concat($firstMenuItem.offsetWidth, "px"));
    $menuBar.get(0).style.setProperty('--start', "".concat(firstLeft, "px"));

    var sections = _toConsumableArray(document.querySelectorAll('section'));

    function animateMenuBar() {
      sections.forEach(function (section) {
        var top = section.getBoundingClientRect().top;
        var bottom = section.getBoundingClientRect().bottom;
        var halfWindow = window.innerHeight / 2;
        var inWindow = top <= halfWindow && bottom > halfWindow;
        if (!inWindow) return;
        var link = document.querySelector("a[href=\"#".concat(section.className, "\"]"));
        var left = link.getBoundingClientRect().left;
        $menuBar.css({
          'transform': "translateX(".concat(left, "px)"),
          'width': "".concat(link.parentElement.offsetWidth, "px")
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
      var menuBar = document.querySelector('#menu-bar');

      if (this.innerWidth > 530) {
        if (menuBar) return;
        initMenuBar();
      } else {
        if (menuBar) menuBar.remove();
      }
    }
  }

  menuBarController(); // SETUP SLIDE IN ANIMATIONS

  function slideIn() {
    var $projects = $('.slide-in');
    $projects.each(function () {
      var el = $(this).get(0);
      var top = el.getBoundingClientRect().top;
      var isInWindow = top - window.innerHeight <= 1;

      if (isInWindow) {
        el.classList.add('active');
      }
    });
  }

  $(window).scroll(debounce(slideIn));
});