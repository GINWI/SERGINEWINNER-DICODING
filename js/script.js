
const nextButton = document.getElementById('next');
const imgSlide = document.querySelector('.gallery-img');
let currentImgSlide = 1;


if (currentImgSlide == 1) {
    nextButton.addEventListener('click', function () {
        imgSlide.setAttribute('src', 'assets/images/gallery/2.jpg');
        currentImgSlide = 2;
        if (currentImgSlide == 2) {
            nextButton.addEventListener('click', function () {
                imgSlide.setAttribute('src', 'assets/images/gallery/3.jpg')
                currentImgSlide = 3;
                if (currentImgSlide == 3) {
                    nextButton.addEventListener('click', function () {
                        imgSlide.setAttribute('src', 'assets/images/gallery/4.jpg')
                        currentImgSlide = 4;
                        if (currentImgSlide == 4) {
                            nextButton.addEventListener('click', function () {
                                imgSlide.setAttribute('src', 'assets/images/gallery/5.jpg')
                                currentImgSlide = 5;
                                if (currentImgSlide == 5) {
                                    nextButton.addEventListener('click', function () {
                                        imgSlide.setAttribute('src', 'assets/images/gallery/6.jpg')
                                        currentImgSlide = 6;
                                        if (currentImgSlide == 6) {
                                            nextButton.addEventListener('click', function () {
                                                imgSlide.setAttribute('src', 'assets/images/gallery/7.jpg')
                                                currentImgSlide = 7;
                                                if (currentImgSlide == 7) {
                                                    nextButton.addEventListener('click', function () {
                                                        imgSlide.setAttribute('src', 'assets/images/gallery/8.jpg')
                                                        currentImgSlide = 8;
                                                        if (currentImgSlide == 8) {
                                                            nextButton.addEventListener('click', function () {
                                                                imgSlide.setAttribute('src', 'assets/images/gallery/9.jpg')
                                                                currentImgSlide = 9;
                                                                if (currentImgSlide == 9) {
                                                                    nextButton.addEventListener('click', function () {
                                                                        imgSlide.setAttribute('src', 'assets/images/gallery/10.jpg')
                                                                        currentImgSlide = 10;
                                                                        if (currentImgSlide == 10) {
                                                                            nextButton.style.opacity = "0"
                                                                            nextButton.style.cursor = "auto"
                                                                        }
                                                                    }
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

// DROPDOWN

const dropdownButton = document.querySelector('.contact')
const dropdownMenu = document.querySelector('.dropdown')

let dropdownMenuVisible = false;

dropdownButton.addEventListener('click', function () {
    if (!dropdownMenuVisible) {
        dropdownButton.style.backgroundColor = "#FFCC00"
        dropdownButton.style.color = "#1E1E1E"
        dropdownButton.style.fontWeight = "500"
        dropdownButton.style.borderRadius = "5px"
        dropdownMenu.style.display = "flex";
        dropdownMenuVisible = true;
    } else {
        dropdownButton.style.backgroundColor = "#1E1E1E"
        dropdownButton.style.color = "#FFCC00"
        dropdownButton.style.fontWeight = ""
        dropdownButton.style.borderRadius = "0px"
        dropdownMenu.style.display = "none";
        dropdownMenuVisible = false;
    }
})


const instagramMenu = document.querySelector('.medsos-ig');
const facebookMenu = document.querySelector('.medsos-fb');
const tiktokMenu = document.querySelector('.medsos-tt');
const youtubeMenu = document.querySelector('.medsos-yt');
const twitterMenu = document.querySelector('.medsos-tw');

instagramMenu.addEventListener('click' , function () {
    window.open("https://www.instagram.com/semarangpemkot/?hl=en", "_blank");
})

facebookMenu.addEventListener('click' , function () {
    window.open("https://www.facebook.com/groups/255286422364377/", "_blank");
})

tiktokMenu.addEventListener('click' , function () {
    window.open("https://www.tiktok.com/@semarangpemkot", "_blank");
})

youtubeMenu.addEventListener('click' , function () {
    window.open("https://www.youtube.com/c/pemerintahkotasemarangn", "_blank");
})

twitterMenu.addEventListener('click', function () {
    window.open("https://twitter.com/humaspemkotsmg?lang=en", "_blank");
});

// SLIDER

let slideIndex = 0;
const cards = document.querySelectorAll('.card')

function showSlide(n){
    if(n >= cards.length){
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = cards.length - 1;
    } else {
        slideIndex = n;
    }

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }
    
    cards[slideIndex].style.display = 'block';
}


function changeSlide(n) {
    showSlide(slideIndex += n);
}

showSlide(slideIndex);
