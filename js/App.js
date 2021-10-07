document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});



document.querySelector('.compositor button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArrey = song.split('');
        playComposition(songArrey);
    }
})






function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let KeyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime = 0; 
        audioElement.play();
    }
    
    if(KeyElement){
        KeyElement.classList.add('active');
        setTimeout(()=>{
            KeyElement.classList.remove('active');
        }, 300);    
    }
}



function playComposition(songArrey){
    let wait = 0;
    for( let songItem of songArrey){
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);
        wait += 250;
    }
}