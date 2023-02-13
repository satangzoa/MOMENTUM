const images = ['1.jpg', '2.jpg', '0.jpg', '5.jpg'];

const pengsooImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${pengsooImage}`;

document.body.appendChild(bgImage);
