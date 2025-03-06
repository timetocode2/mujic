document.getElementById("log-in").addEventListener("click", () => {
  alert("Function not available;");
});

const signUp = document.getElementById("sign-up");
const firstPage = document.getElementById("firstPage");
const secondPage = document.getElementById("secondPage");
const footer = document.querySelector("footer");
const container = document.querySelector(".container");


const menuBar = document.getElementById("menuBar");

signUp.addEventListener("click", () => {
  firstPage.style.display = "none";
  secondPage.style.setProperty("display", "flex")
});


function validateForm() {
  let myEmail = document.getElementById("input-email").value;
  let name = document.getElementById("input-name").value;
  let number = document.getElementById("input-number").value;

  // if (name.trim() === "") {
  //     alert("Please enter your name.");
  //     return;
  // }

  // if (number.length !== 10 || isNaN(number)) {
  //     alert("Please enter a valid 10-digit phone number.");
  //     return;
  //  }

  secondPage.style.display = "none";
  container.style.setProperty('display', "flex");
  document.getElementById('userName').innerText = "Hello " + name;
  footer.style.setProperty('display', 'inherit');
};





const homeMenu = document.getElementById('homeMenu');
const exploreMenu = document.getElementById('exploreMenu');
const likesMenu = document.getElementById('likesMenu');
const preMenu = document.getElementById('preMenu');



function HomeCloser(){
  profileAndName.style.setProperty('display', 'none', 'important');
  contMain.style.setProperty('display', 'none', 'important');
  search.style.setProperty('display', 'none', 'important');
  divExtraBali.style.setProperty('border', 'none');
  container.style.setProperty('display', 'none', 'important');
};
function HomeLoader(){
  profileAndName.style.setProperty('display', 'flex');
  contMain.style.setProperty('display', 'flex');
  search.style.setProperty('display', 'inherit');
  divExtraBali.style.setProperty('border', '');
  container.style.setProperty('display', 'flex');
}



homeMenu.addEventListener('click', ()=>{
  HomeLoader();
  if(window.getComputedStyle(lyricsdivmain1).display === "flex"){
    closeLyrics();
  };
});

exploreMenu.addEventListener('click', ()=>{
  HomeCloser();
});
likesMenu.addEventListener('click', ()=>{
  HomeCloser();
});
preMenu.addEventListener('click', ()=>{
  HomeCloser();
});








const profileAndName = document.getElementById('profileAndName');
const contMain = document.getElementById('cont-main');
const search = document.getElementById('search');
const contMenu = document.getElementById('cont-menu');


const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const volumeBar = document.getElementById('volumeBar');
const songThumb = document.getElementById("song-thumb");
const closeMusicPlay = document.getElementById("closeMusicPlay");


const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");
const song4 = document.getElementById("song4");
const song5 = document.getElementById("song5");
const song6 = document.getElementById("song6");
const song7 = document.getElementById("song7");
const song8 = document.getElementById("song8");
const song9 = document.getElementById("song9");
const song10 = document.getElementById("song10");
const song11 = document.getElementById("song11");
const song12 = document.getElementById("song12");
const song13 = document.getElementById("song13");
const song14 = document.getElementById("song14");
const song15 = document.getElementById("song15");
const song16 = document.getElementById("song16");
const song17 = document.getElementById("song17");
const song18 = document.getElementById("song18");


const audiotime = document.getElementById('audiotime');
const songduration = document.getElementById('songduration');

const musicplay = document.getElementById('musicplay');

const lyrics = document.getElementById('lyrics');
const lyricsdivclose = document.getElementById('lyricsdivclose');
const contOfLyricsDiv = document.getElementById('contOfLyricsDiv');
const lyricsdivmain1 = document.getElementById('lyricsdivmain1');
const lyricsdivmain2 = document.getElementById('lyricsdivmain2');
const fullLyrics = document.getElementById('fullLyrics');
const divExtraBali = document.querySelector('.divExtraBali');
const divExtraBali2 = document.querySelector('.divExtraBali2');





let anyaudio = "";

function playaudio(audioId, thumbnail) {

  const myaudio = document.getElementById(audioId);
  const close111 = document.querySelectorAll("audio");
  close111.forEach(close1 => {
    close1.pause();
  });


  if (myaudio.paused) {
    myaudio.play();
    playPauseBtn.textContent = 'Pause';
    musicplay.style.setProperty('display', "flex");
  
  }else {
    myaudio.pause();
    musicplay.style.setProperty('display', "none");
  
  };
  anyaudio = myaudio;
  seekBar.value = "0";
  myaudio.currentTime = seekBar.value;
  songThumb.style.setProperty("background", thumbnail);
  songThumb.style.setProperty("background-size", "cover");




  myaudio.addEventListener('timeupdate', () => {
    seekBar.max = anyaudio.duration;
    seekBar.value = anyaudio.currentTime;

    let minutes = Math.floor(anyaudio.currentTime / 60);
    let seconds = Math.floor(anyaudio.currentTime % 60);

    // Formatting seconds to always show two digits
    seconds = seconds < 10 ? "0" + seconds : seconds;

    audiotime.innerHTML = `${minutes}:${seconds}`;

    let minutes2 = Math.floor(anyaudio.duration / 60);
    let seconds2 = Math.floor(anyaudio.duration % 60);

    seconds2 = seconds2 < 10 ? "0" + seconds2 : seconds2;
    songduration.innerHTML = `${minutes2}:${seconds2}`;

  });
};

playPauseBtn.addEventListener('click', () => {
  if (anyaudio.paused) {
    anyaudio.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    anyaudio.pause();
    playPauseBtn.textContent = 'Play';
  }
});

seekBar.addEventListener('input', () => {
  anyaudio.currentTime = seekBar.value;
});

volumeBar.addEventListener('input', () => {
  anyaudio.volume = volumeBar.value;
});

song1.addEventListener("click", () => {
  lyricsdivmain1.innerHTML = "<span style='color: white;'>Kal the yahi <br> Kyu ab nahi  <br>  Tum aur mai saath dono <br> Kya mil gyi tumko khusi <br> Hoke juda yeh toh bolo <br> Pyar tha waqt nahi <br> jo beet gya do pal me <br> tu banke yaad rahe  <br> fariyad rahega dil me <br>  Socha , kahunga ek din <br> jo tu na mila mujhe <br> jo tu na mila mujhe <br> Dil ko Kya bataunga <br> Dil ko Kya bataunga <br> jo tu na mila mujhe<br> jo tu na mila mujhe <br> Dil ko Kya bataunga <br> Dil ko Kya bataunga  <br> <br>Kah de tu aayega nhi  <br> mujhse mil payega nhi <br> Dekhun kyu rahe mai teri <br> Dil se tu jayega nhi <br> Tu dard samjhega ye nhi <br> Mushkil hai aage Zindgi <br>  <br> Mann tha bada, tu hota mera <br> Tu na mila, ghum hai tera <br>  <br> Kyun dia dard hume <br> hum aaj talak na samjhe <br> Bure hai kya itne  <br> Tum aa na sake jo milne <br> Tu humko bhool gya  <br> Bus yrr hum hi pagal the <br> Sochha Tumhe Jo Raat Din <br> jo tu na mila mujhe <br> jo tu na mila mujhe <br> Dil ko Kya bataunga <br> Dil ko Kya bataunga <br> jo tu na mila mujhe <br> jo tu na mila mujhe <br> Dil ko Kya bataunga <br> Dil ko Kya bataunga  <br> jo tu jo tu na mila mujhe <br> Dil ko Kya bataunga <br> Dil ko Kya bataunga</span>";
  lyricsdivmain2.innerHTML = `Listen Jo tu na mila on yt<iframe width="340" height="192" src="https://www.youtube.com/embed/wPqpmsYISBc?si=_OswlQxXZSM1534X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
});

song2.addEventListener("click", () => {
  lyricsdivmain1.innerHTML = "<h1 class='headingInLyrics'>Tum Hi Ho Lyrics</h1><br><br><span class='headingInLyrics'>[Verse 1]</span><br>Hum tere bin ab reh nahi sakte<br>Tere bina kya wajood mera?<br>Hum tere bin ab reh nahi sakte<br>Tere bina kya wajood mera?<br>Tujhse juda gar ho jayenge<br>To khudse hi ho jayenge juda<br> <br><span class='headingInLyrics'>[Chorus]</span><br>Kyunki tum hi ho, ab tum hi ho<br>Zindagi, ab tum hi ho<br>Chain bhi, mera dard bhi<br>Meri aashiqui, ab tum hi ho<br> <br><span class='headingInLyrics'>[Verse 2]</span><br>Tera mera rishta hai kaisa<br>Ek pal dur gawara nahi<br>Tere liye har roz hai jeete<br>Tujhko diya mera waqt sabhi<br> <br><span class='headingInLyrics'>[Pre-Chorus]</span><br>Koi lamha mera na ho tere bina<br>Har saans pe naam tera<br> <br><span class='headingInLyrics'>[Chorus]</span><br>Kyunki tum hi ho, ab tum hi ho<br>Zindagi, ab tum hi ho<br>Chain bhi, mera dard bhi<br>Meri aashiqui, ab tum hi ho<br> <br><span class='headingInLyrics'>[Bridge]</span><br>Tum hi ho<br>Tum hi ho<br>Tere liye hi jiya main<br>Khudko jo yun de diya hai<br>Teri wafa ne mujhko sambhala<br>Sare ghamon ko dil se nikala<br> <br><span class='headingInLyrics'>[Pre-Chorus]</span><br>Tere saath mera hai naseeb juda<br>Tujhe paake aadura na raha<br> <br><span class='headingInLyrics'>[Chorus]</span><br>Kyunki tum hi ho, ab tum hi ho<br>Zindagi, ab tum hi ho<br>Chain bhi, mera dard bhi<br>Meri aashiqui, ab tum hi ho<br> <br><span class='headingInLyrics'>[Outro]</span><br>Kyunki tum hi ho, ab tum hi ho<br>Zindagi, ab tum hi ho<br>Chain bhi, mera dard bhi<br>Meri aashiqui, ab tum hi ho";
  lyricsdivmain2.innerHTML = `Listen Tum hi ho on yt<iframe width="340" height="192" src="https://www.youtube.com/embed/asxmdFaIock?si=tTMSwLlZo9jX3pJn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
});

song3.addEventListener("click", () => {
  lyricsdivmain1.innerHTML = " ";
});

song4.addEventListener("click", () => {
  lyricsdivmain1.innerHTML = "<span style='color: white;'>panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>ho panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>haye o ta ra ra ru<br>haye o ta ra ra ru<br>panna ki tamanna hal ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br> <br>hira toh pehle hi kisi aur kaa ho chuka<br>hira toh pehle hi kisi aur kaa ho chuka<br>kissi ki, madbhari aankho me kho chuka<br>yado ki bas dhul ban chuka dil kaa phul<br>sine pe mai rakh du jo hath<br>phir khil jaye chahe meri jaan jaye chahe meraa dil jaye <br> ho panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br> <br> dil toh dete hai lete hai log kayi baar <br> dil toh dete hai lete hai log kayi baar <br>huwa kya, kisi se, kiya tha tumne pyar<br>yado ko chhod de, wado ko tod de<br>apni  jagah se kaise parbat hil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br> <br> bhula naa mere dil ko kabhi jis kaa khayal<br>bhula naa mere dil ko kabhi jis kaa khayal<br>ho sake, toh use, mere dil se tu nikal<br>naa karu mai yeh kam toh nahi meraa naam<br>naa karu mai yeh kam toh nahi meraa naam<br>baton se yeh jakhme-jigar kaise sil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>ho panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>ho le lo, ta ra ra ru, ho le lo, ta ra ra ru</span>";
});






lyrics.addEventListener('click', () => {

  if(window.getComputedStyle(lyricsdivmain1).display === "none"){
  HomeCloser();
  contOfLyricsDiv.style.setProperty('display', 'flex');
  lyricsdivmain1.style.setProperty('display', 'flex');
  lyricsdivmain2.style.setProperty('display', 'flex');
  fullLyrics.style.setProperty('display', 'flex');
  lyricsdivclose.style.setProperty('display', 'flex');
  divExtraBali2.style.display="inherit";

  }else{
    closeLyrics();
  };

});






//  time to close lyrics section
function closeLyrics (){
  HomeLoader();
  contOfLyricsDiv.style.setProperty('display', 'flex');
  lyricsdivmain1.style.setProperty('display', "none");
  lyricsdivmain2.style.setProperty('display', "none");
  fullLyrics.style.setProperty('display', "none");
  lyricsdivclose.style.setProperty('display', "none");
  divExtraBali2.style.display="";

  if (fullLyrics.textContent === "Short Lyrics") {
    lyricsdivmain1.style.width = "";
    lyricsdivmain1.style.height = "";
    lyricsdivmain2.style.width = "";
    lyricsdivmain2.style.setProperty('margin','');
    divExtraBali2.style.display="";
    fullLyrics.textContent = "Full Lyrics";
      }

}

closeMusicPlay.addEventListener('click', () => {

  if (lyricsdivmain1.style.display === "flex") {
    closeLyrics();
  } else {
    musicplay.style.setProperty('display', "none");
    anyaudio.pause();
    playPauseBtn.textContent = 'Play';
  };
});

lyricsdivclose.addEventListener('click', ()=>{
closeLyrics();
});

fullLyrics.addEventListener('click', ()=>{

  if( fullLyrics.textContent === "Full Lyrics"){
if (window.matchMedia("(orientation: portrait").matches) {
lyricsdivmain1.style.width = "99%";
lyricsdivmain1.style.height = "100%";
lyricsdivmain2.style.width = "99%";
lyricsdivmain2.style.setProperty('margin','10px 0px');
fullLyrics.textContent = "Short Lyrics";
}
}else{
  lyricsdivmain1.style.width = "";
lyricsdivmain1.style.height = "";
lyricsdivmain2.style.width = "";
lyricsdivmain2.style.setProperty('margin','');
fullLyrics.textContent = "Full Lyrics";

}
});