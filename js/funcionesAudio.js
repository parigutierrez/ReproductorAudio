
function playSong(){
song.play();
}
function pauseSong(){
song.pause();
}
function stopSong(){
  song.load();
}
function atrasar(){
song.currentTime-=2;
}
function adelantar(){
song.currentTime+=2;
}
function volMas(){
song.volume+=0.1;
}
function VolMenos(){
song.volume-=0.1;
}
function progress(){
  song.currentTime+=0.1;
}
/*function duracion(){
var tiempo = song.duration;
console.log(tiempo);
}
duracion();*/
