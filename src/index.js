import "./styles.css";
import loadHome from "./init-page.js"
import loadMenu from "./menu-page.js";

//Initial page load
loadHome();

const homeBtn = document.querySelector('#nav-btn > button:first-child');
homeBtn.addEventListener('click', () => {
    loadHome();
})

const menuBtn = document.querySelector('#nav-btn > button:nth-child(2n)')
menuBtn.addEventListener('click', () => {
    loadMenu();
})


const orderNowBtn = document.querySelector('.headline > div > button:first-child');
orderNowBtn.addEventListener('click', () => {
    window.open('https://www.grab.com', '_blank');
})

const viewMenuBtn = document.querySelector('.headline > div > button:last-child');
viewMenuBtn.addEventListener('click', () => {
    loadMenu();
})

console.log("Hello, world!!")