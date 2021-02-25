import './styles.css';
import templates from './templates/gallery.hbs';
import items from './menu.json';

// add HTML
const markup = templates(items);
const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', markup);

// add theme

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const changeTheme = document.querySelector('body');
const buttonTheme = document.querySelector('#theme-switch-toggle');

buttonTheme.addEventListener('change', switchTheme);

function switchTheme() {
  if (buttonTheme.checked) {
    changeTheme.classList.remove(Theme.LIGHT);
    changeTheme.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    changeTheme.classList.remove(Theme.DARK);
    changeTheme.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function restartTheme() {
  if(localStorage.getItem('theme') === Theme.DARK) {
    changeTheme.classList.add(Theme.DARK);
    buttonTheme.checked = true;
  } else {
    changeTheme.classList.add(Theme.LIGHT);
    buttonTheme.checked = false;
  }
}
restartTheme();

// function restartTheme() {
//   if (localStorage.getItem('theme') === Theme.DARK) {
//     changeTheme.classList.add(Theme.DARK);
//     buttonTheme.checked = true;
//   }
// }
// restartTheme();