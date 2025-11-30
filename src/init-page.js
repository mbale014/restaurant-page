export default function loadHome() {
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

    const h1Headline = document.createElement('h1');
    h1Headline.textContent = 'Delicious food, served fresh everyday';

    const pHeadline = document.createElement('p');
    pHeadline.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    const cta = document.createElement('div');
    const btnOrder = document.createElement('button');
    btnOrder.textContent = 'Order Now';
    const btnView = document.createElement('button');
    btnView.textContent = 'View Menu';

    cta.appendChild(btnOrder);
    cta.appendChild(btnView);

    headlineDiv.appendChild(h1Headline);
    headlineDiv.appendChild(pHeadline);
    headlineDiv.appendChild(cta)

    const heroImgDiv = document.createElement('div');
    const heroImg = document.createElement('img');
    heroImg.src = 'https://placehold.co/400x400';
    heroImg.alt = 'hero-image';

    heroImgDiv.appendChild(heroImg)

    heroDiv.appendChild(headlineDiv);
    heroDiv.appendChild(heroImgDiv);

    // --Menu Preview--
    const myMenu = [
        {name: 'Maecenas blandit', desc: 'Lorem ipsum dolor sit amet', price: '$5.35', img: 'https://placehold.co/300x300'},
        {name: 'metus ac ultrices', desc: 'consectetur adipiscing elit', price: '$8.75', img: 'https://placehold.co/300x300'},
        {name: 'sapien nunc', desc: 'Morbi et rhoncus erat', price: '$12.15', img: 'https://placehold.co/300x300'},
        {name: 'vehicula massa', desc: 'Class aptent taciti sociosqu ad litora', price: '$18.61', img: 'https://placehold.co/300x300'},
        {name: 'hendrerit ante augue', desc: 'Sed rhoncus a lacus in venenatis', price: '$9.10', img: 'https://placehold.co/300x300'},
        {name: 'Quisque dapibus', desc: 'Integer vel ultricies ex. Proin in massa lacus', price: '$4.95', img: 'https://placehold.co/300x300'},
    ];

    const menuPreviewDiv = document.createElement('div');
    menuPreviewDiv.id = 'menu-preview';
    const h2MenuTitle = document.createElement('h2');
    h2MenuTitle.textContent = 'Check our menu';

    const menuCards = document.createElement('div');
    menuCards.id = 'cards';

    myMenu.forEach(dish => {
        const card = document.createElement('div')
        card.classList.add('card');

        const dishImg = document.createElement('img');
        dishImg.src = dish.img;
        dishImg.alt = 'dish-picture';

        const dishName = document.createElement('h2');
        dishName.textContent = dish.name;
        const dishDesc = document.createElement('p');
        dishDesc.textContent = dish.desc;
        const dishPrice = document.createElement('h2');
        dishPrice.textContent = dish.price;

        card.appendChild(dishImg);
        card.appendChild(dishName);
        card.appendChild(dishDesc);
        card.appendChild(dishPrice);
        
        menuCards.appendChild(card)
    });

    menuPreviewDiv.appendChild(h2MenuTitle);
    menuPreviewDiv.appendChild(menuCards);

    // --Our Story--
    const ourStoryDiv = document.createElement('div');
    ourStoryDiv.id = 'our-story';

    const h2StoryTitle = document.createElement('h2');
    h2StoryTitle.textContent = 'Our story';

    const storyImg = document.createElement('img');
    storyImg.src = 'https://placehold.co/200x300';

    const paragraphDiv = document.createElement('div');
    paragraphDiv.classList.add('paragraph');

    const h3Story = document.createElement('h3');
    h3Story.textContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English "
    const pStory = document.createElement('p');
    pStory.textContent = "Curabitur interdum posuere elementum. Aliquam et auctor turpis, sit amet porttitor nulla. In tellus metus, pretium non purus eu, vestibulum hendrerit orci. Integer vulputate quam non felis euismod tempor";

    paragraphDiv.appendChild(h3Story);
    paragraphDiv.appendChild(pStory);

    ourStoryDiv.appendChild(h2StoryTitle);
    ourStoryDiv.appendChild(storyImg);
    ourStoryDiv.appendChild(paragraphDiv);

    // --Testimonials--
    const testimonialDiv = document.createElement('div');
    testimonialDiv.id = 'testimonial';

    const h2Testimonial = document.createElement('h2');
    h2Testimonial.textContent = 'What our customer says';

    const boxQuote = document.createElement('div');
    boxQuote.classList.add('box-quote');

    const quoteText = document.createElement('div');
    quoteText.classList.add('quote-text');
    const quotePara = document.createElement('p');
    quotePara.textContent = 'Curabitur interdum posuere elementum. Aliquam et auctor turpis, sit amet porttitor nulla.In tellus metus, pretium non purus eu, vestibulum hendrerit orci. Integer vulputate quam non felis euismod tempor. Pellentesque sit amet elementum lorem, vitae semper odio. ';
    const quotePerson = document.createElement('p');
    quotePerson.textContent = 'Joh Doe - CEO of myBrand';

    quoteText.appendChild(quotePara);
    quoteText.appendChild(quotePerson)

    const personImgDiv = document.createElement('div');
    personImgDiv.classList.add('quote-person');
    const personImg = document.createElement('img');
    personImg.src = 'https://placehold.co/200x200';
    personImg.alt = quotePerson.textContent;

    personImgDiv.appendChild(personImg);

    boxQuote.appendChild(quoteText)
    boxQuote.appendChild(personImgDiv)

    testimonialDiv.appendChild(h2Testimonial);
    testimonialDiv.appendChild(boxQuote);

    // --Location and contact
    const myLocAndContact = [
        {name: 'Address', desc: 'Integer vulputate quam non felis euismod tempor. Pellentesque sit amet elementum lorem, vitae semper odio. '},
        {name: 'Opening', desc: 'Everyday - 11AM - 9PM'},
        {name: 'Contact Number', desc: '+123456789'},
    ]

    const locAndContactDiv = document.createElement('div');
    locAndContactDiv.id = 'loc-and-contact';

    const h2LocAndContact = document.createElement('h2');
    h2LocAndContact.textContent = 'Location and contact info';

    locAndContactDiv.appendChild(h2LocAndContact);

    myLocAndContact.forEach(info => {
        const sectionLC = document.createElement('div');
        sectionLC.classList.add('section');

        const h3Name = document.createElement('h3');
        h3Name.textContent = info.name;

        const pDesc = document.createElement('p');
        pDesc.textContent = info.desc;

        sectionLC.appendChild(h3Name);
        sectionLC.appendChild(pDesc);

        locAndContactDiv.appendChild(sectionLC);
    });



    contentDiv.appendChild(heroDiv);
    contentDiv.appendChild(menuPreviewDiv);
    contentDiv.appendChild(ourStoryDiv);
    contentDiv.appendChild(testimonialDiv);
    contentDiv.appendChild(locAndContactDiv);

    document.body.appendChild(contentDiv);

};