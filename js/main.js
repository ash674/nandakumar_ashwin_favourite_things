
(() => {

    let things = {
        Thing1 : {
            name: "CINEMA",
            description: "sdadasd",
            image: "cinema.jpeg"
        },

        Thing2 : {
            name: "MUSIC",
            description: "dasdsadas",
            image: "music.jpg"
        },

        Thing3 : {
            name: "VIDEO GAMES",
            description: "adssdads",
            image: "video_games.jpg"
        }


    }


    let buttons = document.querySelectorAll('button');
    //things = {};
    const theThing = document.querySelector("#favorite-items"),
    theDescrip = document.querySelector("p"),
    theImage = document.querySelector(".image img")

function showData(){
    let key = this.dataset.key;
    theImage.src = `images/${things[key].image}`;
    theThing.textContent = things[key].name;
    theDescrip.textContent = things[key].description;
}


buttons.forEach(button => button.addEventListener("click", showData));
})()