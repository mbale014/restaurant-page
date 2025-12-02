import "./styles.css";
import loadHome from "./init-page.js"
import loadMenu from "./menu-page.js";

//Initial page load
loadPage('home')

// Page handling function
function loadPage(tab) {
    if (tab.toLowerCase() === 'home') {
        loadHome();

    } else if (tab.toLowerCase() === 'menu') {
        loadMenu();
    };

    const orderNowBtn = document.querySelector('.order-btn');
    orderNowBtn.addEventListener('click', () => {
        window.open('https://www.grab.com', '_blank')
    })
};

//Event listener Home button for home page 
const homeBtn = document.querySelector('#nav-btn > button:first-child');
homeBtn.addEventListener('click', () => loadPage('home'))

// Event listener to menu button and view menu for menu page
const menuBtn = document.querySelector('#nav-btn > button:nth-child(2n)')
menuBtn.addEventListener('click', () => loadPage('menu'))

const viewMenuBtn = document.querySelector('.headline > div > button:last-child');
viewMenuBtn.addEventListener('click', () => loadPage('menu'));


console.log("Hello, world!!")