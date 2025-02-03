number_of_drums = document.querySelectorAll(".drum").length;
for(var i=0; i<number_of_drums; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var key = this.innerHTML;
        makeSound(key);
        Animetion(key);
    })
}

document.addEventListener("keydown", function(event){
        makeSound(event.key);
        Animetion(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "e":
            var audio = new Audio("sounds/Cymbal2.wav");
            audio.play();
            break;
        case "i":
            var audio = new Audio("sounds/hi-tom.wav");
            audio.play();
            break;
        case "o":
            var audio = new Audio("sounds/shamans-drum.wav");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("sounds/congas.wav");
            audio.play();
            break;
        case "h":
            var audio = new Audio("sounds/closed_hat.wav");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function Animetion(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout( function(){
        document.querySelector("."+key).classList.remove("pressed");
    }, 100)
}
