
(() => {

    let things = {
        Thing1 : {
            name: "CINEMA",
            description: "I love films so much that i watch films pretty much every weekend. I watch that when i feel sad or bored or happy or in any mood i am in.",
            recommendation: "My recommendation: Blade runner, Intersetllar, Pulp fiction",
            image: "cinema.jpeg"
        },

        Thing2 : {
            name: "MUSIC",
            description: "I listen to music pretty much when i work and when i am relaxing a bit. I love to have some music playing in the background when i am working. It speeds up my process (or that's what i feel like)",
            recommendation: "My recommendation: Bangarang, Perfect, Always remember us this way",
            image: "music.jpg"
        },

        Thing3 : {
            name: "VIDEO GAMES",
            description: "When i am totally free and there is nothing important at the moment, i play games then. I have grown up playing games and that's something i always love to do no matter what. Even though i end up raging when i play online games, i love it",
            recommendation: "My recommendation: Valorant, Apex legends, Witcher",
            image: "video_games.jpg"
        }


    }


    let buttons = document.querySelectorAll('button');
    //things = {};
    const theThing = document.querySelector("#favorite-items"),
    theDescrip = document.querySelector("p"),
    theRecommend = document.querySelector(".recommendation"),
    theImage = document.querySelector(".image img")

function showData(){
    let key = this.dataset.key;
    theImage.src = `images/${things[key].image}`;
    theThing.textContent = things[key].name;
    theDescrip.textContent = things[key].description;
    theRecommend.textContent = things[key].recommendation;
}


buttons.forEach(button => button.addEventListener("click", showData));
})()