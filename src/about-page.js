export default function loadAbout() {
    // Check if content container already exist to prevent duplicate
    const existingContent = document.getElementById('content');
    if (existingContent) {
        existingContent.remove();
    };

    // Create the main content container
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content'

    // -- Hero section --
    const heroDiv = document.createElement('div');
    heroDiv.id = 'hero';

    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.classList.add('about-hero-text');

    const h1Headline = document.createElement('h1');
    h1Headline.textContent = 'About Our Restaurant';

    const pHeadline = document.createElement('p');
    pHeadline.textContent = 'Founded in 2025, our restaurant began with a simple vision: to share to authentic flavors of our heritage with the community. We believe in using only the freshest, locally sourced to create dishes that are both comforting and memorable. Our chefs are dedicated to preserving traditional techniques while adding a modern twist, ensuring every meal is an experience.';

    headlineDiv.appendChild(h1Headline);
    headlineDiv.appendChild(pHeadline);

    const heroImgDiv = document.createElement('div');
    heroImgDiv.id = 'hero-img';
    const heroImg = document.createElement('img');
    heroImg.src = 'https://i.ibb.co.com/MjnTj0z/medium-shot-professional-chef-posing-23-2151232159.jpg';
    heroImg.alt = 'hero-image';

    heroImgDiv.appendChild(heroImg)

    heroDiv.appendChild(headlineDiv);
    heroDiv.appendChild(heroImgDiv);

    contentDiv.appendChild(heroDiv);
    document.body.appendChild(contentDiv);
}