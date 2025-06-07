console.log("Welcome to Spotify!");

let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let audioElement = new Audio('songs/1.mp3');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Song 1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Song 2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Song 3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Song 4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Song 5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Song 6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Song 7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Song 8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Song 9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Song 10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
];

// Handle play/pause button
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1; 
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Correct event listener: Listen to timeupdate on audioElement
audioElement.addEventListener('timeupdate', () => {
    // console.log('Time update:');
    // Update progress bar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});


myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
});
