/*-------- Video Player ----------->*/

let player = document.querySelector('.player');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let video = document.querySelector('.video');

player.onclick = function() {
    player.classList.add('active');
    clip.classList.add('active');
    video.play();
    video.currentTime = 0;
}

close.onclick = function() {
    player.classList.remove('active');
    clip.classList.remove('active');
    video.pause();
}