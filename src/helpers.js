import projects from './projects';

export function setCopyrightDate() {
  $('footer').append(new Date().getFullYear());
}

export function initBurgerNav() {
  $('.navbar__burger').click(() => $('.navbar__burger').toggleClass('active'));
  $('.navbar a').click(() => $('.navbar__burger').removeClass('active'));
}

export function initProjects() {
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

export function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// PRIVATE
function initMenuBar() {
  // Create menu bar
  const $menuBar = $('<div id="menu-bar" class="navbar__menu-bar"></div>');
  $('#navbar').append($menuBar.get(0));

  // Set starting position of menu bar
  const $firstMenuItem = $('.navbar__desktop-menu a:first-child').get(0);
  const firstLeft = $firstMenuItem.getBoundingClientRect().left;
  $menuBar.get(0).style.setProperty('width', `${$firstMenuItem.offsetWidth}px`);
  $menuBar.get(0).style.setProperty('--start', `${firstLeft}px`);

  // Use IntersectionObserver to monitor section visibility and update menubar
  const sections = [...document.querySelectorAll('section')];
  const observerOptions = {
    threshold: 0.5,
  };
  const sectionsObserver = new IntersectionObserver(
    animateMenuBar,
    observerOptions
  );
  sections.forEach(section => {
    sectionsObserver.observe(section);
  });

  function animateMenuBar(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const link = document.querySelector(
        `a[href="#${entry.target.className}"]`
      );
      const left = link.getBoundingClientRect().left;
      $menuBar.css({
        transform: `translateX(${left}px)`,
        width: `${link.parentElement.offsetWidth}px`,
      });
    });
  }
}

export function menuBarController() {
  if (window.innerWidth > 530) initMenuBar();
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

// PRIVATE
function slideInListener(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('active');
    observer.unobserve(entry.target);
  });
}

export function slideIn() {
  const $projects = $('.slide-in');
  const slideInObserver = new IntersectionObserver(slideInListener);
  $projects.each(function () {
    const el = $(this).get(0);
    slideInObserver.observe(el);
  });
}
