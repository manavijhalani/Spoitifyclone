


let audioElement=new  Audio('songs/Shape-of-You(PagalWorld).mp3');
let masterplay=document.querySelector('.masterplay');
let gif=document.querySelector('.gif');

let masterSong=document.querySelector('.masterSong');

let songIndex=0;

let songs=[
    {songName:'Shape of You', filepath:"songs/Shape-of-You(PagalWorld).mp3" ,cover:"Images/ed-3.jpg"},
    {songName:'Lover', filepath:"songs/Taylor_Swift_-_Lover.mp3", cover:"Images/taylorlover.jpg"},
    {songName:'Until I Found You', filepath:"songs/Stephen Sanchez – Until I Found You_(Naijaflavour.com).mp3" ,cover:"Images/untilifoundyou.jpg"},
    {songName:'Stitches', filepath:"songs/Shawn_Mendes_-_Stitches.mp3", cover:"Images/shawnmendes.jpg"},
    {songName:'Perfect', filepath:"songs/Ed_Sheeran_-_Perfect_(thinknews.com.ng).mp3" ,cover:"Images/ed-3.jpg"},
    {songName:'You Belong with me', filepath:"songs/Shape-of-You(PagalWorld).mp3" , cover:"Images/taylorbelong.jpg"},
    {songName:'Someone You loved', filepath:"songs/Shape-of-You(PagalWorld).mp3", cover:"Images/lewiscapildi.jpg"}

];

let songItems = document.querySelectorAll('.song-item');//selecting all divs



masterplay.addEventListener('click',function ()
{
   if(audioElement.paused||audioElement.currentTime<=0)
   {
      audioElement.play();
      masterplay.classList.remove('fa-circle-play');
      masterplay.classList.add('fa-circle-pause');
      gif.style.opacity=1;
      
   }
   else
   {
     audioElement.pause();
     masterplay.classList.remove('fa-circle-pause');
     masterplay.classList.add('fa-circle-play');
     gif.style.opacity=0;
   }
});


let progress=document.querySelector('.myprogressbar');

audioElement.addEventListener('timeupdate',function()
{
    let curr=parseInt((audioElement.currentTime/audioElement.duration)*100);
     progress.value=curr;
})


//
progress.addEventListener('change',function()
{
    let n=parseInt(progress.value*audioElement.duration/100);
    audioElement.currentTime=n;

})





songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src=songs[i].cover;
    element.getElementsByClassName('song-name')[0].innerText=songs[i].songName;

    //element.getElementsByClassName('timestamp')[0].innerText=songs[i].duration;
    
})

const makeallplays= ()=>{
    Array.from(document.getElementsByClassName('individual-play')).forEach((element)=>
    {
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
    }
    )
}


Array.from(document.getElementsByClassName('individual-play')).forEach((element)=>{
    element.addEventListener('click',function(e)
    {
        let songIndex =parseInt(e.target.id);
         audioElement.src=`${songs[songIndex].filepath}`;
        if(audioElement.paused)
        {
               
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.currentTime=0;
            audioElement.play();
            masterSong.innerText=songs[songIndex].songName;
            gif.style.opacity=1;
            masterplay.classList.remove('fa-circle-play');
           masterplay.classList.add('fa-circle-pause');

        }
        else
        {
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            gif.style.opacity=0;
            masterplay.classList.remove('fa-circle-pause');
           masterplay.classList.add('fa-circle-play');

        }
        
          
    })
})


document.querySelector('.previous').addEventListener('click',function prev()
{
    if(songIndex<=0)
    {
        songIndex=6;
    }
    else
    {
       songIndex=songIndex-1;
    }

    audioElement.src=`${songs[songIndex].filepath}`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1
    masterSong.innerText=songs[songIndex].songName;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
});


document.querySelector('.next').addEventListener('click',function next()
{
    if(songIndex>=6)
    {
        songIndex=0;
    }
    else
    {
       songIndex=songIndex+1;
    }

    audioElement.src=`${songs[songIndex].filepath}`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1
    masterSong.innerText=songs[songIndex].songName;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
});









