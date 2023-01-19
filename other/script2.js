'use strict';

// Get the top bar, menu button, and side menu elements
var menuButton = document.querySelector('#menu-button');
var sideMenu = document.querySelector('.side-menu');
var darkModeToggle = document.querySelector('#dark-mode-toggle');
var darkMode = false;

// When the user clicks the menu button, toggle the "visible" class on the side menu
menuButton.onclick = function () {
    sideMenu.classList.toggle('visible');
};
darkModeToggle.onclick = function () {
    document.body.classList.toggle('dark-mode');
    darkMode = !darkMode;
    if (darkMode) {
        document.getElementById("imageToggle").src = "../images/sun.png";
    } else {
        document.getElementById("imageToggle").src = "../images/darkmodeimage.jpg";
    }
};