import {
  setCopyrightDate,
  initBurgerNav,
  initProjects,
  menuBarController,
  debounce,
  slideIn
} from './helpers';
import './scss/main.scss';


const main = () => {
  $('body').removeClass('preload'); 
  
  // Smooth scroll for safari and ios browsers
  $('[href^="#"]').smoothScroll();

  setCopyrightDate();
  initBurgerNav();
  initProjects();
  menuBarController();

  // SETUP SLIDE IN ANIMATIONS
  $(window).scroll(debounce(slideIn));
}

// **** INITIALIZE ****
$(main);
