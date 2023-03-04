const images = [
    './assets/landscape1.jpg',
    './assets/landscape2.jpg',
    './assets/landscape3.jpg',
    './assets/landscape4.jpg',
    './assets/landscape5.jpg',
    './assets/landscape6.jpg',
];

const slider = document.getElementById('slider');
const pages = document.getElementById('pages');

const imgSlideHandler = (e) => {
    e.preventDefault();
    
    const previousActivePage = document.getElementsByClassName('active')[0];
    const previousActiveImg = document.getElementsByClassName('active-img')[0];
    
    const previousActiveNumber = previousActivePage.id.split('-')[1];
    const activeNumber = e.target.id.split('-')[1];

    const activePage = document.getElementById(e.target.id);
    const activeImg = document.getElementById(`img-${activeNumber}`);

    const pages = document.getElementsByClassName('pagination-dot');
    Array.prototype.forEach.call(pages, (item) => {
        item.classList.remove('active');
    });
    activePage.classList.add('active');

    const imgs = document.getElementsByClassName('slider-img');
    Array.prototype.forEach.call(imgs, (item) => {
        item.classList.remove('active-img');
    });
    activeImg.classList.add('active-img');
    
    
    if(activeNumber > previousActiveNumber){
        for(let i = 1; i < activeNumber; i++){
            const currImg = document.getElementById(`img-${i}`);
            currImg.classList.remove(...['left', 'right']);
            currImg.classList.add('left');
        }
    }else{
        const totalImages = document.getElementsByClassName('slider-img').length;
        for(let i = totalImages; i > activeNumber; i--){
            const currImg = document.getElementById(`img-${i}`);
            currImg.classList.remove(...['left', 'right']);
            currImg.classList.add('right');
        }
    }

    activeImg.classList.remove(...['left', 'right']);
}

images.forEach((item, index) => {
    const img = document.createElement('img');
    img.src = item;
    img.alt = 'landscape-img';
    img.id = `img-${index + 1}`;
    img.classList.add('slider-img');
    
    const page = document.createElement('div');
    page.id = `page-${index + 1}`
    page.classList.add('pagination-dot');
    page.addEventListener('click', imgSlideHandler);
    
    
    if(index + 1 === 1){
        img.classList.add('active-img');
        page.classList.add('active');
    }
    slider.appendChild(img);
    pages.appendChild(page);
});

