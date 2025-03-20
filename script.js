
const images = ['./assets/a.png', './assets/b.png', './assets/c.png', './assets/d.png'];
        let currentIndex = 0;

    
        // document.getElementById('imageBox').style.backgroundImage = `url(${images[0]})`;

        document.getElementById('rightArrow').addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % images.length;
            const imageBox = document.getElementById('imageBox');
            const conBg = document.getElementById('conBg');
            imageBox.style.backgroundImage = `url(${images[currentIndex]})`
            conBg.style.backgroundImage = `url(${images[currentIndex]})`
        });