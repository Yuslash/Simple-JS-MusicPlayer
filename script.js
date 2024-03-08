const Ghost = new Audio('./music/song.mp3');
const faded = new Audio('./music/song.mp3');
const stay = new Audio('./music/song.mp3');



//selecting elemets

const prevBtn = document.querySelector('.prev');
const playBtn = document.querySelector('.fa-circle-play');
const nextBtn = document.querySelector('.forw');
const songName = document.querySelector('.song-name');
const playpauseicon = document.querySelector('.fa-circle-play');
const songImage = document.querySelector('.song-image');
const Songname = document.querySelector('.song-nam');

const songs = [
    { ele: Ghost,aname: 'Ghost', audioName: 'singer name', img: './images/songimage.webp' },
    { ele: faded, audioName: 'singer name', img: './images/songimage.webp' },
    { ele: stay, audioName: 'singer name', img: './images/songimage.webp' },
];


for(const song of songs){
    song.ele.addEventListener('ended', ()=> {
        updateSong('next');
        playpausesong();
    })
}

//this code for the songs start from zero   

let current = 0;
let currentsong = songs[current].ele;
songName.textContent = songs[current].audioName;

//playsongs when icon click

playBtn.addEventListener('click', () => {
    playpausesong();
});

nextBtn.addEventListener('click', () =>{
    updateSong('next');
    playpausesong();

});
prevBtn.addEventListener('click', () =>{
    updateSong('prev');
    playpausesong();

});

const updateSong = (action)=>{
    currentsong.pause();
    currentsong.currentTime = 0;


    if(action === 'next'){
        current++;
        if(current > songs.length -1) current = 0;    
    }
    if(action === 'prev'){
        current--;
        if(current < 0) current = songs.length -1;
    }
    currentsong = songs[current].ele;
    songName.textContent = songs[current].audioName;
    songImage.src = songs[current].img;
    Songname.textContent = songs[current].aname;
    
}

const playpausesong = ()=> {
    if (currentsong.paused) {
        currentsong.play();
        playpauseicon.classList.remove('fa-circle-play');
        playpauseicon.classList.add('fa-circle-pause');
    } else {
        currentsong.pause();
        playpauseicon.classList.remove('fa-circle-pause');
        playpauseicon.classList.add('fa-circle-play');
    }
}