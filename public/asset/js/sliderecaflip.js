const slider =
{
    currentPosition: 0,

    sliderPosition: [
        'position-0-ecaflipM.png',   // position 0
        'position-1-ecaflipM.png',   // position 1
        'position-2-ecaflipM.png',   // position 2
        'position-3-ecaflipM.png',   // position 3
        'position-4-ecaflipM.png',
        'position-5-ecaflipM.png',
        'position-6-ecaflipM.png',
        'position-7-ecaflipM.png',
    ],

    sliderPositionF: [
        'position-0-ecaflipF.png',   // position 0
        'position-1-ecaflipF.png',   // position 1
        'position-2-ecaflipF.png',   // position 2
        'position-3-ecaflipF.png',   // position 3
        'position-4-ecaflipF.png',
        'position-5-ecaflipF.png',
        'position-6-ecaflipF.png',
        'position-7-ecaflipF.png',
    ],

    init: function()
    {
        // dès l'initialisation, on charge les images
        slider.loadSliderImages();

        // ... et on affiche la première image
        slider.displaySlide();

        // Fonction qui change le style de la page
        slider.stylePage();

        // On selectionne les boutons Suivant et précédent
        const btnLeft = document.querySelector(".boutonLeft") ;
        const btnRight = document.querySelector(".boutonRight") ;

        // ... et on leur met des écouteur d'évenement
        btnLeft.addEventListener("click", slider.previousSlide) ;
        btnRight.addEventListener("click", slider.nextSlide) ;

    },

    stylePage: function()
    {
        const BackgroundTitle = document.querySelector(".characName")
        BackgroundTitle.style.background = "#0B3936"

        const backgroundContent = document.querySelector(".mainContentLeft")
        backgroundContent.style.background = "#0b393661"

        const backgroundSex = document.querySelector(".sexCharacter")
        backgroundSex.style.background = "rgb(11 57 54 / 49%)"
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
            imageElement.src = "../asset/img/position/ecaflip/" + image;
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
