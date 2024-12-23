const images = [
    "",
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
];

let currentIndex = 0;

const currentImage = document.getElementById('current-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateImage(index) {
    currentImage.src = images[index];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage(currentIndex);
});