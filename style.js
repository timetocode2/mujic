document.getElementById("makePaymentBtn").addEventListener("click", () => {
  const upiID = "9580338477@ptyes";  // सही UPI ID डालें
  const name = "Himanshu Singh";
  const amount = "7";  // अमाउंट बदल सकते हैं
  const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&mc=&tid=&tr=&tn=Payment&am=${amount}&cu=INR`;

  window.location.href = upiLink;
});

document.getElementById("makePaymentBtn2").addEventListener("click", () => {
  const upiID = "9580338477@ptyes";  // सही UPI ID डालें
  const name = "Himanshu Singh";
  const amount = "2";  // अमाउंट बदल सकते हैं
  const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&mc=&tid=&tr=&tn=Payment&am=${amount}&cu=INR`;

  window.location.href = upiLink;
});




const lyricsdata1 = [
  { time: 24, Text: "<br><span class='c101'>Kal the yahi</span>" },
  { time: 27, Text: "<span class='c102'>Kyu ab nahi</span>" },
  { time: 30, Text: "<span class='c103'>Tum aur mai saath dono</span><br>" },
  { time: 36, Text: "<span class='c104'>Kya mil gyi tumko khusi</span>" },
  { time: 42, Text: "<span class='c105'>Hoke juda yeh toh bolo</span><br>" },
  { time: 47, Text: "<span class='c106'>Pyar tha waqt nahi</span>" },
  { time: 49, Text: "<span class='c107'>jo beet gya do pal me</span>" },
  { time: 53, Text: "<span class='c108'>tu banke yaad rahe</span>" },
  { time: 55, Text: "<span class='c109'>fariyad rahega dil me</span><br>" },
  { time: 59, Text: "<span class='c110'>Kyu ab ek lafz nhi,</span>" },
  { time: 61, Text: "<span class='c111'>dil kahne ki haalat me</span>" },
  { time: 66, Text: "<span class='c112'>Socha , kahunga ek din</span><br>" },
  { time: 72, Text: "<span class='c113'>jo tu na mila mujhe</span>" },
  { time: 75, Text: "<span class='c114'>jo tu na mila mujhe</span>" },
  { time: 78, Text: "<span class='c115'>Dil ko Kya bataunga</span>" },
  { time: 81, Text: "<span class='c116'>Dil ko Kya bataunga</span>" },
  { time: 84, Text: "<span class='c117'>jo tu na mila mujhe</span>" },
  { time: 87, Text: "<span class='c118'>jo tu na mila mujhe</span>" },
  { time: 90, Text: "<span class='c119'>Dil ko Kya bataunga</span>" },
  { time: 93, Text: "<span class='c120'>Dil ko Kya bataunga</span><br><br>" },
  { time: 105, Text: "<span class='c121'>jo tu na mila mujhe</span><br><br>" },
  { time: 120, Text: "<span class='c122'>Kah de tu aayega nhi</span>" },
  { time: 123, Text: "<span class='c123'>mujhse mil payega nhi</span>" },
  { time: 126, Text: "<span class='c124'>Dekhun kyu rahe mai teri</span><br>" },
  { time: 132, Text: "<span class='c125'>Dil se tu jayega nhi</span>" },
  { time: 135, Text: "<span class='c126'>Tu dard samjhega ye nhi</span>" },
  { time: 139, Text: "<span class='c127'>Mushkil hai aage Zindgi</span><br>" },
  { time: 144, Text: "<span class='c128'>Mann tha bada, tu hota mera</span>" },
  { time: 150, Text: "<span class='c129'>Tu na mila, ghum hai tera</span><br>" },
  { time: 155, Text: "<span class='c130'>Kyun dia dard hume</span>" },
  { time: 157, Text: "<span class='c131'>hum aaj talak na samjhe</span>" },
  { time: 161, Text: "<span class='c132'>Bure hai kya itne</span>" },
  { time: 162, Text: "<span class='c133'>Tum aa na sake jo milne</span>" },
  { time: 167, Text: "<span class='c134'>Tu humko bhool gya</span>" },
  { time: 169, Text: "<span class='c135'>Bus yrr hum hi pagal the</span>" },
  { time: 174, Text: "<span class='c136'>Sochha Tumhe Jo Raat Din</span><br>" },
  { time: 180, Text: "<span class='c137'>jo tu na mila mujhe</span>" },
  { time: 183, Text: "<span class='c138'>jo tu na mila mujhe</span>" },
  { time: 186, Text: "<span class='c139'>Dil ko Kya bataunga</span>" },
  { time: 189, Text: "<span class='c140'>Dil ko Kya bataunga</span></span>" },
  { time: 192, Text: "<span class='c141'>jo tu na mila mujhe</span></span>" },
  { time: 195, Text: "<span class='c142'>jo tu na mila mujhe</span>" },
  { time: 198, Text: "<span class='c143'>Dil ko Kya bataunga</span>" },
  { time: 201, Text: "<span class='c144'>Dil ko Kya bataunga</span><br><br>" },
  { time: 207, Text: "<span class='c145'>jo tu jo tu na mila mujhe</span><br><br>" },
  { time: 213, Text: "<span class='c146'>Dil ko Kya bataunga</span>" },
  { time: 218, Text: "<span class='c147'>Hmmm mmm mm....</span>" },
  { time: 225, Text: "<span class='c148'>Dil ko Kya bataunga</span>" },
];
const lyricsdata2 = [
  { time: 10, Text: "<br><h1 class='headingInLyrics'>Tum Hi Ho Lyrics</h1><br><br><span class='headingInLyrics'>[Verse 1]</span><br><span class='d101'>Hum tere bin ab reh nahi sakte</span>" },
  { time: 15.7, Text: "<span class='d102'>Tere bina kya wajood mera?</span> <br>" },
  { time: 26, Text: "<span class='d103'>Hum tere bin ab reh nahi sakte</span>" },
  { time: 30.8, Text: "<span class='d104'>Tere bina kya wajood mera?</span><br>" },
  { time: 35.6, Text: "<span class='d105'>Tujhse juda gar ho jayenge</span>" },
  { time: 40.7, Text: "<span class='d106'>To khudse hi ho jayenge juda<br></span>" },

  { time: 47, Text: "<br><span class='headingInLyrics'>[Chorus]</span>   <span class='d107'>Kyunki tum hi ho,</span>" },
  { time: 51, Text: "<span class='d108'>ab tum hi ho<br></span>" },
  { time: 53, Text: "<span class='d109'>Zindagi, ab tum hi ho<br></span>" },
  { time: 58, Text: "<span class='d110'>Chain bhi, mera dard bhi<br></span>" },
  { time: 64, Text: "<span class='d111'>Meri aashiqui, ab tum hi ho<br></span>" },


  { time: 89, Text: "<br><span class='headingInLyrics'>[Verse 2]</span><span class='d112'><br>Tera mera rishta hai kaisa<br></span>" },
  { time: 94, Text: "<span class='d113'>Ek pal dur gawara nahi</span><br>" },
  { time: 99, Text: "<span class='d114'>Tere liye har roz hai jeete<br></span>" },
  { time: 104, Text: "<span class='d115'>Tujhko diya mera waqt sabhi<br></span>" },
  { time: 109, Text: "<span class='d116'><br>Koi lamha mera na ho tere bina<br></span>" },
  { time: 114, Text: "<span class='d117'>Har saans pe naam tera<br></span>" },

  { time: 122, Text: "<br><span class='headingInLyrics'>[Chorus]</span><span class='d118'><br>Kyunki tum hi ho<br></span>" },
  { time: 125, Text: "<span class='d119'>ab tum hi ho<br></span>" },
  { time: 128, Text: "<span class='d120'>Zindagi, ab tum hi ho<br></span>" },
  { time: 133, Text: "<span class='d121'> Chain bhi, mera dard bhi<br></span>" },
  { time: 137.5, Text: "<span class='d122'>Meri aashiqui, ab tum hi ho<br></span>" },


  //   <br> <br><span class='headingInLyrics'>[Outro]</span><br>Kyunki tum hi ho, ab tum hi ho<br>Zindagi, ab tum hi ho<br>Chain bhi, mera dard bhi<br>Meri aashiqui, ab tum hi ho";


  { time: 151, Text: "<br><span class='headingInLyrics'>[Bridge]</span><span class='d123'> <br>Tum hi ho oo oo...</span>" },
  { time: 161, Text: "<span class='d124'><br>Tum hi hoo oo hoo..</span>" },
  { time: 172.5, Text: "<span class='d125'><br>Tere liye hi jiya main</span>" },
  { time: 177.8, Text: "<span class='d126'><br>Khudko jo yun de diya hai</span>" },
  { time: 183.1, Text: "<span class='d127'><br>Teri wafa ne mujhko sambhala</span>" },
  { time: 187.9, Text: "<span class='d128'><br>Sare ghamon ko dil se nikala</span>" },

  { time: 193, Text: "<br> <br><span class='headingInLyrics'>[Pre-Chorus]</span><span class='d129'><br>Tere saath mera hai naseeb juda</span>" },
  { time: 198.5, Text: "<span class='d130'><br>Tujhe paake aadura na raha</span>" },

  { time: 206, Text: "<br> <br><span class='headingInLyrics'>[Chorus]</span><span class='d131'><br>Kyunki tum hi ho</span>" },
  { time: 209, Text: "<span class='d132'><br>ab tum hi ho</span>" },
  { time: 212, Text: "<span class='d133'> <br>Zindagi, ab tum hi ho</span>" },
  { time: 217, Text: "<span class='d134'><br>Chain bhi, mera dard bhi</span>" },
  { time: 221.5, Text: "<span class='d135'><br>Meri aashiqui, ab tum hi ho</span>" },

  { time: 227, Text: "<br> <br><span class='headingInLyrics'>[Chorus]</span><span class='d136'><br>Kyunki tum hi ho</span>" },
  { time: 230, Text: "<span class='d137'><br>ab tum hi ho</span>" },
  { time: 233, Text: "<span class='d138'> <br>Zindagi, ab tum hi ho</span>" },
  { time: 238, Text: "<span class='d139'><br>Chain bhi, mera dard bhi</span>" },
  { time: 242.5, Text: "<span class='d140'><br>Meri aashiqui, ab tum hi hoo</span>" },
];










document.addEventListener("DOMContentLoaded", function () {
  let userName = localStorage.getItem("userName");

  document.getElementById("userName").innerText = "Hello " + userName;
  document.getElementById("userName").style.color = "white";
});



const footer = document.querySelector("footer");
const header = document.querySelector("header");


const menuBar = document.getElementById("menuBar");


const homeMenu = document.getElementById('homeMenu');
const exploreMenu = document.getElementById('exploreMenu');
const likesMenu = document.getElementById('likesMenu');
const preMenu = document.getElementById('preMenu');

const footerMain = document.getElementById('footer-main');
const exploreDiv = document.getElementById('explore-div');
const likesDiv = document.getElementById('likes-div');
const premiumDiv = document.getElementById('premium-div');


let backtheme = "home"; //lyrics button toggle karne per home page ya like page ya explore page bahi khule joki khula tha 
let condition = 'a';

function HomeLoader() {
  backtheme = 'home';
  header.style.setProperty('display', 'flex');
  divExtraBali.style.setProperty('border', '');
  allsongaccess.style.setProperty('display', 'inherit');

}

function HomeCloser() {
  if (window.getComputedStyle(header).display === 'flex') {
    header.style.setProperty('display', 'none', 'important');
    divExtraBali.style.setProperty('border', 'none');
    allsongaccess.style.setProperty('display', 'none');
  };
};

function ExploreLoader() {
  history.pushState({page:"explore"}, "explore", "#explore.html");
  condition = "explore";
  backtheme = 'explore';
  footerMain.style.setProperty('display', 'flex');
  exploreDiv.style.display = 'flex';
};

function ExploreCloser() {
  if (window.getComputedStyle(exploreDiv).display === 'flex') {
    exploreDiv.style.display = 'none';
  };
};

function likesLoader() {
  history.pushState({page:"likes"}, "likes", "#likes.html");

  condition = 'likes';
  backtheme = 'likes';
  footerMain.style.setProperty('display', 'flex');
  likesDiv.style.display = 'flex';
};

function likesCloser() {
  if (window.getComputedStyle(likesDiv).display === 'flex') {
    likesDiv.style.display = 'none';
  };
};

function PreLoader() {
  history.pushState({page:"premium"}, "premium", "#premium.html");

  condition = 'pre';
  backtheme = 'pre';
  footerMain.style.display = 'flex';
  premiumDiv.style.display = 'flex';
};

function PreCloser() {
  if (window.getComputedStyle(premiumDiv).display === 'flex') {
    premiumDiv.style.display = 'none';
  };
};




homeMenu.addEventListener('click', () => {
  HomeLoader();
  if (footerMain.style.display === 'flex') {
    footerMain.style.display = 'none';
  };
});

exploreMenu.addEventListener('click', () => {
  if (window.getComputedStyle(lyricsdivmain1).display === "flex") {
    closeLyrics();
  };

  HomeCloser();
  PreCloser();
  likesCloser();
  ExploreLoader();
});

likesMenu.addEventListener('click', () => {
  if (window.getComputedStyle(lyricsdivmain1).display === "flex") {
    closeLyrics();
  };
  HomeCloser();
  ExploreCloser();
  PreCloser();
  likesLoader();
});

preMenu.addEventListener('click', () => {
  if (window.getComputedStyle(lyricsdivmain1).display === "flex") {
    closeLyrics();
  };
  HomeCloser();
  ExploreCloser();
  likesCloser();
  PreLoader();
});



function menuBarCloser() {
  if (window.getComputedStyle(menuBar).display == "grid") {
    menuBar.style.setProperty('display', 'none', 'important');
  };
};
function menuBarLoader() {
  menuBar.style.display = 'grid';
};

function loadLyrics() {
  history.pushState({page:"lyrics"}, "Lyrics", "#lyrics.html");

  condition = 'lyrics';

  if (window.getComputedStyle(contOfLyricsDiv).display == "none") {
    HomeCloser();
    menuBarCloser();

    if (footerMain.style.display === 'flex') {
      footerMain.style.display = 'none';
    };

    contOfLyricsDiv.style.setProperty('display', 'flex');
    divExtraBali2.style.display = "inherit";
    musicplay.style.setProperty('bottom', "58px");
  };
};

function closeLyrics() {
  if (window.getComputedStyle(contOfLyricsDiv).display === "flex") {

    contOfLyricsDiv.style.setProperty('display', 'none');
    divExtraBali2.style.display = "";
    musicplay.style.setProperty('bottom', "75px");
    if (fullLyrics.textContent === "> <") {
      lyricsdivmain1.style.width = "";
      lyricsdivmain1.style.height = "";
      lyricsdivmain2.style.width = "";
      lyricsdivmain2.style.setProperty('margin', '');
      divExtraBali2.style.display = "";
      fullLyrics.textContent = "< >";
    };
  };
  if (backtheme == 'home') {
    HomeLoader();
  } else if (backtheme == 'explore') {
    ExploreLoader();
  } else if (backtheme == "likes") {
    likesLoader();
  } else {
    PreLoader();
  };
  menuBarLoader();

};







const profileAndName = document.getElementById('profileAndName');
const contMain = document.getElementById('cont-main');
const search = document.getElementById('search');
const allsongaccess = document.getElementById('allsongaccess');


const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const volumeBar = document.getElementById('volumeBar');
const songThumb = document.getElementById("song-thumb");
const closeMusicPlay = document.getElementById("closeMusicPlay");
const likeSong = document.getElementById("likeSong");


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



playPauseBtn.addEventListener('click', () => {
  if (anyaudio.paused) {
    anyaudio.play();
    playPauseBtn.innerHTML = "<div class='square'><div class='square1'></div><div class='square2'></div></div>";
  } else {
    anyaudio.pause();
    playPauseBtn.innerHTML = "<div class='circle'><div class='circle2'></div></div>";
  }
});



function mysong1() {
  lyricsdivmain1.innerHTML = " "
  for (let i = 0; i < lyricsdata1.length; i++) {
    lyricsdivmain1.innerHTML += lyricsdata1[i].Text;
  };
  lyricsdivmain2.innerHTML = `Listen Jo tu na mila on yt<iframe width="340" height="192" src="https://www.youtube.com/embed/wPqpmsYISBc?si=_OswlQxXZSM1534X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
};
function mysong2() {
  lyricsdivmain1.innerHTML = " ";
  for (let i = 0; i < lyricsdata2.length; i++) {
    lyricsdivmain1.innerHTML += lyricsdata2[i].Text;
  };

  // lyricsdivmain1.innerHTML = "<h1 class='headingInLyrics'>Tum Hi Ho Lyrics</h1><br><br><span class='headingInLyrics'>[Verse 1]</span><br>Hum tere bin ab reh nahi sakte<br>Tere bina kya wajood mera?<br>Hum tere bin ab reh nahi sakte<br>Tere bina kya wajood mera?<br>Tujhse juda gar ho jayenge<br>To khudse hi ho jayenge juda<br> <br><span class='headingInLyrics'>[Chorus]</span><br>Kyunki tum hi ho, ab tum hi ho<br>Zindagi, ab tum hi ho<br>Chain bhi, mera dard bhi<br>Meri aashiqui, ab tum hi ho<br> <br><span class='headingInLyrics'>[Verse 2]</span><br>Tera mera rishta hai kaisa<br>Ek pal dur gawara nahi<br>Tere liye har roz hai jeete<br>Tujhko diya mera waqt sabhi<br> <br><span class='headingInLyrics'>[Pre-Chorus]</span><br>Koi lamha mera na ho tere bina<br>Har saans pe naam tera<br> <br><span class='headingInLyrics'>[Chorus]</span><br>Kyunki tum hi ho, ab tum hi ho<br>Zindagi, ab tum hi ho<br>Chain bhi, mera dard bhi<br>Meri aashiqui, ab tum hi ho<br> <br><span class='headingInLyrics'>[Bridge]</span><br>Tum hi ho<br>Tum hi ho<br>Tere liye hi jiya main<br>Khudko jo yun de diya hai<br>Teri wafa ne mujhko sambhala<br>Sare ghamon ko dil se nikala<br> <br><span class='headingInLyrics'>[Pre-Chorus]</span><br>Tere saath mera hai naseeb juda<br>Tujhe paake aadura na raha<br> <br><span class='headingInLyrics'>[Chorus]</span><br>Kyunki tum hi ho, ab tum hi ho<br>Zindagi, ab tum hi ho<br>Chain bhi, mera dard bhi<br>Meri aashiqui, ab tum hi ho<br> <br><span class='headingInLyrics'>[Outro]</span><br>Kyunki tum hi ho, ab tum hi ho<br>Zindagi, ab tum hi ho<br>Chain bhi, mera dard bhi<br>Meri aashiqui, ab tum hi ho";
  lyricsdivmain2.innerHTML = `Listen Tum hi ho on yt<iframe width="340" height="192" src="https://www.youtube.com/embed/asxmdFaIock?si=tTMSwLlZo9jX3pJn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
};
function mysong3() {
  lyricsdivmain1.innerHTML = " ";
  lyricsdivmain2.innerHTML = `Listen Tum hi ho on yt<iframe width="340" height="192" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

};
function mysong4() {
  lyricsdivmain1.innerHTML = "<span style='color: white;'>panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>ho panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>haye o ta ra ra ru<br>haye o ta ra ra ru<br>panna ki tamanna hal ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br> <br>hira toh pehle hi kisi aur kaa ho chuka<br>hira toh pehle hi kisi aur kaa ho chuka<br>kissi ki, madbhari aankho me kho chuka<br>yado ki bas dhul ban chuka dil kaa phul<br>sine pe mai rakh du jo hath<br>phir khil jaye chahe meri jaan jaye chahe meraa dil jaye <br> ho panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br> <br> dil toh dete hai lete hai log kayi baar <br> dil toh dete hai lete hai log kayi baar <br>huwa kya, kisi se, kiya tha tumne pyar<br>yado ko chhod de, wado ko tod de<br>apni  jagah se kaise parbat hil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br> <br> bhula naa mere dil ko kabhi jis kaa khayal<br>bhula naa mere dil ko kabhi jis kaa khayal<br>ho sake, toh use, mere dil se tu nikal<br>naa karu mai yeh kam toh nahi meraa naam<br>naa karu mai yeh kam toh nahi meraa naam<br>baton se yeh jakhme-jigar kaise sil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>ho panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>ho le lo, ta ra ra ru, ho le lo, ta ra ra ru</span>";
  lyricsdivmain2.innerHTML = `Listen Tum hi ho on yt<iframe width="340" height="192" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

};





let song = "";
let anyaudio = "";
let myaudioId = "";
let mythumbnail = "";

function playaudio(audioId, thumbnail, lyricsnum) {
  playAudio2nd(audioId, thumbnail, lyricsnum);
};

function playAudio2nd(audioId, thumbnail, lyricsnum) {

  myaudioId = audioId;
  mythumbnail = thumbnail;
  const myaudio = document.getElementById(audioId);
  song = lyricsnum;
  anyaudio = myaudio;
  songThumb.style.setProperty("background", thumbnail);
  songThumb.style.setProperty("background-size", "cover");



  let close111 = document.querySelectorAll("audio");
  close111 = Array.from(close111);
  close222 = close111.filter(close1 => close1.id !== audioId);

  close222.forEach(close1 => {
    close1.pause();

  });


  if (myaudio.paused) {
    myaudio.play();
    playPauseBtn.innerHTML = "<div class='square'><div class='square1'></div><div class='square2'></div></div>";
    musicplay.style.setProperty('display', "flex");

  } else {
    myaudio.pause();
    playPauseBtn.innerHTML = "<div class='circle'><div class='circle2'></div></div>";

  };

  seekBar.value = "0";
  myaudio.currentTime = seekBar.value;




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


    if (song == 1) {
      for (let i = 0; i < lyricsdata1.length; i++) {
        const meraSpan = document.querySelector(`.c${i + 101}`);
        if (myaudio.currentTime >= lyricsdata1[i].time) {
          setTimeout(() => {
            if (meraSpan) {
              meraSpan.style.color = "orange";
            };
          });
        } else {
          if (meraSpan) {
            meraSpan.style.color = 'gray';
          };
        };


        meraSpan.addEventListener('click', () => {
          anyaudio.currentTime = lyricsdata1[i].time;
        });

      };
    }

    else if (song == 2) {
      for (let i = 0; i < lyricsdata2.length; i++) {
        const meraSpan2 = document.querySelector(`.d${i + 101}`);
        if (myaudio.currentTime >= lyricsdata2[i].time) {
          setTimeout(() => {
            if (meraSpan2) {
              meraSpan2.style.color = "pink";
            };
          });
        } else {
          if (meraSpan2) {
            meraSpan2.style.color = "green";
          };
        };
        if (meraSpan2) {
          meraSpan2.addEventListener('click', () => {
            anyaudio.currentTime = lyricsdata2[i].time;
          });
        };
      };
    };
  });



  if (document.getElementById(`like${myaudioId}`)) {
    likeSong.style.setProperty('background', 'url(media/yes-like.jpg)');
    likeSong.style.setProperty('background-position', 'center');
    likeSong.style.setProperty('background-size', '70%');
    likeSong.style.setProperty('background-repeat', 'no-repeat');

  } else {
    likeSong.style.setProperty('background', 'url(media/no-like.jpg)');
    likeSong.style.setProperty('background-position', 'center');
    likeSong.style.setProperty('background-size', '70%');
    likeSong.style.setProperty('background-repeat', 'no-repeat');

  };

  if (song == 1) {
    mysong1();
  } else if (song == 2) {
    mysong2();
  } else if (song == 3) {
    mysong3();
  } else if (song == 4) {
    mysong4();
  };
};




seekBar.addEventListener('input', () => {
  anyaudio.currentTime = seekBar.value;
});

// volumeBar.addEventListener('input', () => {
//   anyaudio.volume = volumeBar.value;
// });



song1.addEventListener("dblclick", () => {
  HomeCloser();
  contOfLyricsDiv.style.setProperty('display', 'flex');
  divExtraBali2.style.display = "inherit";
});





lyrics.addEventListener('click', () => {

  if (window.getComputedStyle(contOfLyricsDiv).display === "none") {
    loadLyrics();
  } else {
    closeLyrics();
  };

});

songThumb.addEventListener('click', () => {
  if (window.getComputedStyle(contOfLyricsDiv).display == "none") {
    loadLyrics();
  } else { closeLyrics(); };
});





//  time to close lyrics section

closeMusicPlay.addEventListener('click', () => {

  if (contOfLyricsDiv.style.display === "flex") {
    closeLyrics();
  } else {
    musicplay.style.setProperty('display', "none");
    anyaudio.pause();
  };
});

lyricsdivclose.addEventListener('click', () => {
  closeLyrics();
});

fullLyrics.addEventListener('click', () => {

  if (fullLyrics.textContent === "< >") {
    if (window.matchMedia("(orientation: portrait").matches) {
      lyricsdivmain1.style.width = "99%";
      lyricsdivmain1.style.height = "100%";
      lyricsdivmain2.style.width = "99%";
      lyricsdivmain2.style.setProperty('margin', '10px 0px');
      fullLyrics.textContent = "> <";
    }
  } else {
    lyricsdivmain1.style.width = "";
    lyricsdivmain1.style.height = "";
    lyricsdivmain2.style.width = "";
    lyricsdivmain2.style.setProperty('margin', '');
    fullLyrics.textContent = "< >";

  }
});



likeSong.addEventListener('click', () => {

  let likeTemplate = document.createElement('div');
  likeTemplate.classList.add('likeTemplate');
  likeTemplate.setAttribute('id', `like${myaudioId}`);
  likeTemplate.setAttribute('onclick', `playAudio2nd('${myaudioId}', '${mythumbnail}', ${song})`);
  let existingLikeTemplate = document.getElementById(`like${myaudioId}`);


  if (existingLikeTemplate) {
    likesDiv.removeChild(existingLikeTemplate);

    likeSong.style.setProperty('background', 'url(media/no-like.jpg)');
    likeSong.style.setProperty('background-position', 'center');
    likeSong.style.setProperty('background-size', '70%');
    likeSong.style.setProperty('background-repeat', 'no-repeat');

  } else {
    likesDiv.appendChild(likeTemplate);

    likeSong.style.setProperty('background', 'url(media/yes-like.jpg)');
    likeSong.style.setProperty('background-position', 'center');
    likeSong.style.setProperty('background-size', '70%');
    likeSong.style.setProperty('background-repeat', 'no-repeat');

  };

  likeTemplate.innerHTML = `<div class='song-thumb' id='thumb${myaudioId}'></div><div class='song-title' id='song${myaudioId}'>gungun hi hai</div>`;
  const thumb = document.getElementById(`thumb${myaudioId}`);
  thumb.style.setProperty("background", songThumb.style.background);

});

// likeSong.addEventListener('', () => {

// });



// for (i = 1; i <= 18; i++) {

//   const LikeSongPlay = document.getElementById(`likemyaudio${i}`);
//   if (LikeSongPlay){
//   LikeSongPlay.addEventListener('click', () => {
//     playAudio2nd();

//   if(LikeSongPlay.id === 'likemyaudio1'){
//     mysong1();
//   }else if(LikeSongPlay.id === 'likemyaudio2'){
//     mysong2();
//   }else if(LikeSongPlay.id === 'likemyaudio3'){
//     mysong3();
//   }else if(LikeSongPlay.id === 'likemyaudio4'){
//     mysong4();
//   };
// });
// };
// };
document.querySelectorAll('[id^="likemyaudio"]').forEach((LikeSongPlay) => {
  LikeSongPlay.addEventListener('click', () => {
    playAudio2nd();

    switch (LikeSongPlay.id) {
      case 'likemyaudio1':
        mysong1();
        break;
      case 'likemyaudio2':
        mysong2();
        break;
      case 'likemyaudio3':
        mysong3();
        break;
      case 'likemyaudio4':
        mysong4();
        break;
    }
  });
});