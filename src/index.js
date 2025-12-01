import "./styles.css";
import loadHome from "./init-page.js"

loadHome();

const orderNowBtn = document.querySelector('.headline > div > button:first-child');
orderNowBtn.addEventListener('click', () => {
    window.open('https://www.grab.com', '_blank');
})

console.log("Hello, world!!")