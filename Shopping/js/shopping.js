const audio = document.getElementById('myAudio');
audio.play();

const images = [
    './img/운동화1.jpg',
    './img/운동화2.jpg',
    './img/운동화3.jpg',
    './img/운동화4.jpg',
    './img/발레1.jpg',
    './img/발레2.jpg',
    './img/발레3.jpg',
    './img/발레4.jpg',
    './img/등산화1.jpg',
    './img/등산화2.jpg',
    './img/등산화3.jpg',
    './img/등산화4.jpg'
];
const imagesPerpage = 4;
let currentPage = 0;

const imageContainer = document.querySelector('.img-container');
const prevButton = document.getElementById('prevPage');
const nextButton = document.getElementById('nextPage');

function displayImg(page){
    const startIndex = page * imagesPerpage;
    const endIndex = startIndex + imagesPerpage;
    const pageImages = images.slice(startIndex, endIndex);
    imageContainer.innerHTML = '';
    pageImages.forEach(images =>{
        const imgElement = document.createElement('img');
        imgElement.src = images;
        imgElement.classList.add('image');
        imageContainer.appendChild(imgElement);
    });
}

function updateButtons(){
    prevButton.disabled = currentPage ===0;
    nextButton.disabled = (currentPage + 1) * imagesPerpage >= images.length;
}

prevButton.addEventListener('click',()=> {
    if(currentPage > 0){
        currentPage--;
        displayImg(currentPage);
        updateButtons();
    }
});

nextButton.addEventListener('click',()=>{
    if((currentPage + 1) * imagesPerpage < images.length){
        currentPage++;
        displayImg(currentPage);
        updateButtons();
    }
})

displayImg(currentPage);
updateButtons();