// Nav Bar Menu:
var header = document.getElementById('header');

var navMenu = document.createElement('nav');
var logoHeader = document.createElement('div');
var imgLogo = document.createElement('img');
var menuBurger = document.createElement('span');
var iconBurger = document.createElement('i');

header.appendChild(navMenu);
navMenu.appendChild(logoHeader);
logoHeader.appendChild(imgLogo);
navMenu.appendChild(menuBurger);
menuBurger.appendChild(iconBurger);

navMenu.classList.add('menu');
logoHeader.classList.add('logo-header');
imgLogo.classList.add('logo');
imgLogo.setAttribute('src', 'assets/images/logo-laboratoria.svg');
menuBurger.classList.add('menu-burger');
iconBurger.classList.add('fa', 'fa-bars', 'fa-2x');
iconBurger.setAttribute('aria-hidden', 'true');

// Nav bar Sub-Menú:
var navSubMenu = document.createElement('nav');
var subMenu1 = document.createElement('div');
var sedeBtn = document.createElement('span');
var sedeBtnPullDown = document.createElement('span');
var iconoBtnPullDown = document.createElement('i');
var subMenu2 = document.createElement('div');
var subMenuBtn1 = document.createElement('span');
var subMenuBtn1Link = document.createElement('a');
var subMenuBtn2 = document.createElement('span');
var subMenuBtn2Link = document.createElement('a');
var subMenuBtn3 = document.createElement('span');
var subMenuBtn3Link = document.createElement('a');

header.appendChild(navSubMenu);
navSubMenu.appendChild(subMenu1);
subMenu1.appendChild(sedeBtn);
subMenu1.appendChild(sedeBtnPullDown);
sedeBtnPullDown.appendChild(iconoBtnPullDown);
navSubMenu.appendChild(subMenu2);
subMenu2.appendChild(subMenuBtn1);
subMenuBtn1.appendChild(subMenuBtn1Link);
subMenu2.appendChild(subMenuBtn2);
subMenuBtn2.appendChild(subMenuBtn2Link);
subMenu2.appendChild(subMenuBtn3);
subMenuBtn3.appendChild(subMenuBtn3Link);

navSubMenu.classList.add('submenu');
subMenu1.classList.add('submenu1');
sedeBtn.classList.add('sede-gen');
sedeBtnPullDown.classList.add('submenu1-pull');
iconoBtnPullDown.classList.add('fa', 'fa-caret-down', 'fa-2x');
subMenu2.classList.add('submenu2');
subMenuBtn1.classList.add('submenu2-btn');
subMenuBtn2.classList.add('submenu2-btn');
subMenuBtn3.classList.add('submenu2-btn');

sedeBtn.textContent = 'SANTIAGO DE CHILE 2017 - II';
iconoBtnPullDown.setAttribute('aria-hidden', 'true');
subMenuBtn1Link.setAttribute('href', 'index.html');
subMenuBtn1Link.textContent = 'OVERVIEW';
subMenuBtn2Link.setAttribute('href', 'students.html');
subMenuBtn2Link.textContent = 'STUDENTS';
subMenuBtn3Link.setAttribute('href', '#');
subMenuBtn3Link.textContent = 'TEACHERS';

