const slider =
{
    currentPosition: 1,

    sliderPosition: [
        'position-0-zobalM.png',   // position 0
        'position-1-zobalM.png',   // position 1
        'position-2-zobalM.png',   // position 2
        'position-3-zobalM.png',   // position 3
        'position-4-zobalM.png',
        'position-5-zobalM.png',
        'position-6-zobalM.png',
        'position-7-zobalM.png',
    ],

    init: function()
    {
        // dès l'initialisation, on charge les images
        slider.loadSliderImages();

        // et on affiche la première image
        slider.displaySlide();

        const btnLeft = document.querySelector(".boutonLeft") ;
        const btnRight = document.querySelector(".boutonRight") ;

        btnLeft.addEventListener("click", slider.previousSlide) ;
        btnRight.addEventListener("click", slider.nextSlide) ;

    },

    // une fonction qui charge toutes les images dans le slider !
    loadSliderImages: function()
    {
        // on récupère la section qui a la classe "character"
        const sliderElement = document.querySelector(".character");

        // on parcourt le tableau sliderPosition
        for(const image of slider.sliderPosition) {

            // on créé un nouvel élément image avec createElement
            let imageElement = document.createElement('img');

            // on lui ajoute la classe "slider__img"
            imageElement.classList.add("slider__img");

            // on modifie son attribut src
            imageElement.src = "http://localhost:8000/asset/img/position/zobal/" + image;
            imageElement.alt = "Image zobal";

            // on ajoute ce nouvel au DOM
            sliderElement.appendChild(imageElement);
        }
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
