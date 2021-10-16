
(() => {

    let things = {
        Thing1 : {
            name: "cinema",
            description: "sdadasd",
            image: "cinema.jpeg"
        },

        Thing2 : {
            name: "music",
            description: "dasdsadas",
            image: "music.jpg"
        },

        Thing3 : {
            name: "video games",
            description: "adssdads",
            image: "video_games.jpg"
        }


    }


    let buttons = document.querySelectorAll('button');
    //things = {};
    const theThing = document.querySelector("#favorite-items"),
    theDescrip = document.querySelector("p"),
    theImage = document.querySelector(".image img"),
    theTemplate = document.querySelector("#bio-template").content; 

function showData(){
    let key = this.dataset.key;
    theImage.src = `images/${things[key].image}`;
    theThing.textContent = things[key].name;
    theDescrip.textContent = things[key].description;
}


buttons.forEach(button => button.addEventListener("click", showData));
})()