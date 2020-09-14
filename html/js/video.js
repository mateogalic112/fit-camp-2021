

const video = document.querySelector('.c-video__video');
const playBtn = document.querySelector('.fa-play-circle');


playBtn.addEventListener('click', () => {
    video.play();
    playBtn.style.display = 'none';
    video.setAttribute("controls", "controls");
})