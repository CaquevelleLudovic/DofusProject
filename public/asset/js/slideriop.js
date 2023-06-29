const slider =
{
    currentPosition: 1,

    sliderPosition: [
        'position-0-iopM.png',   // position 0
        'position-1-iopM.png',   // position 1
        'position-2-iopM.png',   // position 2
        'position-3-iopM.png',   // position 3
        'position-4-iopM.png',
        'position-5-iopM.png',
        'position-6-iopM.png',
        'position-7-iopM.png',
    ],

    sliderPositionF: [
        'position-0-iopF.png',   // position 0
        'position-1-iopF.png',   // position 1
        'position-2-iopF.png',   // position 2
        'position-3-iopF.png',   // position 3
        'position-4-iopF.png',
        'position-5-iopF.png',
        'position-6-iopF.png',
        'position-7-iopF.png',
    ],

    init: function()
    {
        // dès l'initialisation, on charge les images
        slider.loadSliderImages();

        // et on affiche la première image
        slider.displaySlide();

        // Fonction qui change le style de la page
        slider.stylePage();

        const btnLeft = document.querySelector(".boutonLeft") ;
        const btnRight = document.querySelector(".boutonRight") ;

        btnLeft.addEventListener("click", slider.previousSlide) ;
        btnRight.addEventListener("click", slider.nextSlide) ;

    },

    stylePage: function()
    {
        const BackgroundTitle = document.querySelector(".characName")
        BackgroundTitle.style.background = "#3a1a07"

        const backgroundContent = document.querySelector(".mainContentLeft")
        backgroundContent.style.background = "rgb(10 10 10 / 35%)"

        const backgroundSex = document.querySelector(".sexCharacter")
        backgroundSex.style.background = "rgb(10 10 10 / 35%)"
    },


    // une fonction qui charge toutes les images dans le slider !
    loadSliderImages: function() {
        const sliderElement = document.querySelector(".character");
        const sliderF = document.querySelector(".fa-venus");
        const sliderM = document.querySelector(".fa-mars");

        function addImagesToSlider(imageList) {
            for (const image of imageList) {
            let imageElement = document.createElement('img');
            imageElement.classList.add("slider__img");
            imageElement.src = "../asset/img/position/iop/" + image;
            imageElement.alt = "Image ecaflip";
            sliderElement.appendChild(imageElement);
            }
        }

        // Ajouter les images initiales
        addImagesToSlider(slider.sliderPosition);

        sliderF.addEventListener("click", function() {
            const imgSlider = document.querySelectorAll(".slider__img");

            // Supprimer toutes les images actuellement affichées
            imgSlider.forEach(function(imgSlider) {
            imgSlider.remove();
            });
            addImagesToSlider(slider.sliderPositionF);
            const imgCurrent = document.querySelector(".slider__img");
            if (imgCurrent) {
                imgCurrent.classList.add("slider__img--current");
            }
            slider.displaySlide();
            });

            sliderM.addEventListener("click", function() {
            const imgSlider = document.querySelectorAll(".slider__img");
            // Supprimer toutes les images actuellement affichées
            imgSlider.forEach(function(imgSlider) {
                imgSlider.remove();
            });
            addImagesToSlider(slider.sliderPosition);
            const imgCurrent = document.querySelector(".slider__img");
            if (imgCurrent) {
                imgCurrent.classList.add("slider__img--current");
            }
            slider.displaySlide();
            });
        },

    // affiche l'image précédente dans le slider
    previousSlide: function()
    {
        console.log("Précédent")
        if(slider.currentPosition === 0) {
            // notre slider est déjà en première position
            // donc on va en dernière position
            slider.currentPosition = slider.sliderPosition.length - 1;
        } else {
            // on décrémente la position dans le slider
            slider.currentPosition--;
        }
        // on met à jour l'image affichée
        slider.displaySlide();
    },

    // affiche l'image suivante dans le slider
    nextSlide: function()
    {
        console.log("Suivant")
        if(slider.currentPosition === slider.sliderPosition.length - 1) {
            // notre slider est déjà en dernière position
            // donc on va en première position
            slider.currentPosition = 0;
        } else {
            // on incrémente la position dans le slider
            slider.currentPosition++;
        }
        // on met à jour l'image affichée
        slider.displaySlide();
    },

    // cette méthode affiche l'image dont l'index est fourni en paramètre
    displaySlide: function() {

        // 1. on sélectionne toutes les images du slider
        const sliderImages = document.querySelectorAll(".slider__img");
        //console.log(sliderImages);

        // 2. pour toutes les images du slider
        for(const image of sliderImages) {
            // retirer la classe slider__img--current
            image.classList.remove("slider__img--current");
        }

        // ajouter la classe slider__img--current sur l'image qui est à la position actuelle dans le slider
        sliderImages[slider.currentPosition].classList.add("slider__img--current");
    }
}
