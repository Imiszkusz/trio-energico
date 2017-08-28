
HTMLElement.lang = 'hu';
var homeSection = document.querySelector('.home-section');
var introArticle = document.querySelector('.intro-article');
var concertArticle = document.querySelector('.concert-article');
var repertoireArticle = document.querySelector('.repertoire-article');
var mediaArticle = document.querySelector('.media-article');
var contactArticle = document.querySelector('.contact-article');
var sliderBtn = document.querySelector('.main-m-slider');
var menuBlock = document.querySelector('.menu-block');
var arrowLeft = document.querySelector('#arrow-left');
var arrowRight = document.querySelector('#arrow-right');

var memberPhotos = document.querySelector('.members-container');

var articlesArr = [introArticle, concertArticle, repertoireArticle, mediaArticle, contactArticle];

var csengeBioHun = `<p>Ilosfai Csenge zenész családból származik, így sosem volt kérdés,
                    hogy Ő is zenész lesz. 6 évesen kezdett hegedülni a budapesti Szent István Király Zeneiskolában ahol 
                    Papp Sándorné növendéke lett. Kiskorától fogva számos versenyen szerepelt dobogós eredménnyel, és már 
                    ekkor koncertmestere volt a Tücsök, majd később a zeneiskolai szimfonikus zenekarnak is. Ezután a győri 
                    konzervatóriumban folytatta tanulmányait Svikruha Márta növendékeként. Ekkor nyerte 2007-ben, a XIII. Országos 
                    Bárdos Alice hegedűverseny III. díját, és itt is a konzis zenekar koncertmestere. Fiatalkora ellenére Európa 
                    számos országában koncertezett - többek között, Svájc, Németország, Ausztria, Olaszország -  de fellépett 
                    Amerikában, Kínában és Thaiföldön is. Szóló, zenekari játék és kamarazene egyaránt jelen van az életében, 
                    és erősítik egymást.</p>
                    <p>Egyetemi éveit Győrben kezdte, ahol a házi verseny szólista és kamaraszekciójában is mindig kitűnő 
                    eredménnyel szerepelt. Több éven keresztül a Dohnányi Ernő kamaraverseny aktív részvevője, ahonnan 
                    nívódíjat, kiemelt nívódíjat és Dohnányi-különdíjat is sikerült elnyernie. 2014-től kezdve tanulmányait 
                    a budapesti Liszt Ferenc Zeneakadémián folytatta Szenthelyi Miklósnál, ahol 2016-ban kitüntetéssel diplomázott 
                    mester-hegedűművész, és 2017-ben pedig mester-tanári szakon.</p>
                    <p>2016 őszén állást érdemelt ki a Magyar Virtuózok Kamarazenekarnál, és emellett neves magyar zenekaroknál 
                    rendszeresen kisegít mint pl. Nemzeti Filharmonikus Zenekar, Zuglói Filharmónia, Hungarian Studio Orchestra...stb. 
                    Vilàghírű karmesterekkel dolgozott együtt, mint Kobayasi Ken Ichiro, Pinchas Steinberg, Jurij Simonov, 
                    Justus Franz, Kocsis Zoltán, Kovács János, Vajda Gergely...</p>
                    <p>A Trio Energico alapítótagja, mellyel I. díjat nyertek el a 13. Padovai Nemzetközi Zenei Versenyen és a 
                    I. Danubia Talent Nemzetközi Versenyen is. Csenge kurzusokon gyarapítja tudását olyan mestereknél mint Perényi 
                    Eszter, Kelemen Barnabás, Takács-Nagy Gábor, Szabadi Vilmos, Szecsődi Ferenc, Dénes László...stb. 
                    Csenge 2016-tól egy Anton Horvath mesterhegedűn játszik, mely most már a saját tulajdona lett.</p>`;

var eszterBioHun = `<p>Mády-Szabó Eszter muzikalitása és zeneszeretete már fiatal korában megmutatkozott, három versenyen is 
                   elért dobogós helyezést még az Aelia Sabina zeneiskolában töltött évei alatt, illetve már ekkor kivette 
                   részét a zenekari játékból, több ízben is utazott zenekarral, valamint kórussal külföldre. Középiskolás 
                   éveit a Bartók Béla Zeneművészeti Szakközépiskolában töltötte, ahol immár a kamarazenélés öröme is magával 
                   ragadta. Egy komolyabb versenyeredménye ebben az időszakban a Starker János Országos Csellóversenyen szerzett 
                   harmadik helyezés.  Ez idő alatt több mesterkurzuson is megfordult, ezek között a legkiemelkedőbb a Vivace 
                   International Music Festival in Lancaster, USA, ahol a Konzervatórium képviseletében mehetett.</p>
                   <p>Ezek után Győrben folytatta tanulmányait, a Széchenyi István Egyetemen, ahol a Tudományos és Diákköri Konferenciák 
                   sokszoros díjazottja szólistaként és kamarzenészként, valamint egy kiemelt nívódíj, egy nívódíj és egy Dohnányi különdíj 
                   részese is lehetett a Dohnányi Ernő Országos Kamaraversenyen. 2013-ban Köztársasági Ösztöndíjat kapott.</p>
                   <p>Majd felvételt nyert a Zeneakadémiára, ahol kitüntetéses szólista, illetve művész-tanári diplomát szerzett. 
                   Zeneakadémista évei alatt alakult meg zongoratriója, a Trio Energico. Nevükhöz hűen hamar berobbantak a zenei életbe 
                   versenyeredményeikkel, fellépéseikkel magyarországon, illetve külföldön. Megnyerték a Dohnányi Ernő Országos Kamarazenei 
                   Versenyt, az International Danubia Talents Competitiont, a The Art of Chamber Music International Competition-t, valamint 
                   az International Music Competition Premio Citta di Padova-t, ahol Eszter szóló virtuóz kategóriában harmadik helyezést is 
                   szerzett. Szerepeltek élő adásban a Bartók Rádióban, koncerteztek a Római és a Bukaresti magyar akadémián, meghívták őket 
                   a Lancaster Piano Festivalra, USA, részt vettek a Milánói Expo-n. A triózás mellett Eszter nemzetközileg elismert karmesterekkel 
                   is dolgozhatott együtt, mint például Pinchas Steinberg, Ken-Ichiro Kobayashi, Kocsis Zoltán.</p>`;

var moniBioHun = `<p>Mónika 1996-ban született Budapesten. Hároméves korában tanulta meg a kottaolvasás alapjait. 
                  Hatéves korában kezdett zongorázni a Lajtha László Zeneiskolában, Baksainé Csitári Ilona növendékeként. 
                  Négy évvel később Hornyánszkyné Becht Erika tanárnőnél folytatta tanulmányait a budapesti Járdányi 
                  Pál Zeneiskolában, ahol Friedler Magdolnával orgonán is elkezdett játszani. 2009 őszén felvételt nyert a 
                  Zeneakadémia Kivételes Tehetségek osztályába, ahol 2014-től 2016-ig az alapképzés keretében Eckhardt 
                  Gábor és Nagy Péter tanítványa volt. Az alapdiplomáját Summa Cum Laude nyerte el 2016-ban. </p>
                  <p>A tanulmányai végeztével egy nyolc hónapos gyakornoki programban vett részt, Olaszországban, ahol gyerekekkel
                  és a szardíniai Cagliari Konzervatórium hallgatóival dolgozott. 2016 ősze óta Portugáliában tanul, 
                  Aquiles Delle Vigne Nemzetközi Akadémiáján.</p>
                  <p>Tanulmányi évei során rengeteg nemzetközi versenyen vett részt és ért el kitűnő eredményeket,
                  Európában és az USA-ban is. Hogy csak a legutóbbiakat említsük, megnyerte a második 'Coimbra World
                  Piano Meeting' Liszt-díját, tavaly két különdíjat nyert a 'Princess Lalla Meryem Piano Competition'-ön
                  Rabat-ban, és az egyesült államokbeli 'Lancester International Piano Festival' első díját is megnyerte.
                  Ezenkívül fellépett szólistaként és kamarazenészként Vietnámban, Japánban, Kínában, az USA-ban, 
                  Németországban, Franciaországban, Romániában, Szlovákiában, Horvátországban, Szerbiában, Magyarországon,
                  Svájcban, Ausztriában, Olaszországban, Portugáliában, Spanyolországban és Izraelben.</p>
                  <p>A 2015-ben létrejött Trio Energico kamaraegyüttes alapító tagja, amely azóta rendszeresen fellép
                  hazai és nemzetközi színpadokon egyaránt, és már számos versenyen nyert díjakat. Ezek közül a legjelentősebbek
                  a 'Danubia Talents Competition' és a 'Music Competition Premio Citta di Padova'.</p>
                  <p>Mónika jónéhány mesterkurzuson vett már részt, olyan nagyhírű professzorok vezetésével mint
                  Đặng Thái Sơn, Zoltán Kocsis, Boris Berman, Péter Frankl, Yaron Rosenthal, Dina Yoffe, Dimitri Bashkirov, 
                  Lilya Zilberstein, Robert Levin, és Aquiles Delle Vigne.</p>`

var moniBioEng =  `<p>Monika Ruth was born in 1996 in Budapest. She studied the basics of reading sheet music 
                    at the age of three. She started to play the piano at age of 6 at the Lajtha László Music School 
                    as a student of Ilona Baksainé. A few years later she continued her studies with Erika Becht 
                    in the Járdányi Pál Music School, where she also started to play the organ with Magdolna 
                    Friedler. In 2009, she gained admission to the extraordinary talents’ class of the Franz Liszt 
                    Academy of Music and from 2014 to 2016 she was studying in the frame of Bachelor program 
                    with professors Gábor Eckhardt and Péter Nagy. She earned her Bachelor degree with summa 
                    cum laude results in 2016.</p> 
                    <p>After completing her musical studies, she took part in a 8-months traineeship program in 
                    Italy, where she was working with children and the students of the Conservatory of Cagliari in 
                    Sardinia. Since Fall 2016, she is studying with Aquiles Delle Vigne at his International 
                    Academy in Portugal.</p>
                    <p>During her studies, Mónika took part in plenty of international competitions with excellent 
                    results in Europe as well as in the USA. Just to mention her latest results, she won the Liszt 
                    Prize at the 2nd Coimbra World Piano Meeting, last year she earned two special prizes at the 
                    Princess Lalla Meryem Piano Comeptition in Rabat, and she also won 1st prize at the Lancaster 
                    International Piano Festival in the USA. She played solo and chamber music concerts in Vietnam, 
                    Japan, China, the USA, Germany, France, Romania, Slovakia, Croatia, Serbia, Hungary, 
                    Switzerland, Austria Italy, Portugal, Spain and Israel.</p>
                    <p>She is founding member of the Trio Energico chamber music ensamble which was formed 
                    in 2015 and since then they are performing regularly at national and international podiums and 
                    earning prizes at various competitions such as the Danubia Talents Competition or the 13th 
                    International Music Competition Premio Citta di Padova.</p>
                    <p>Mónika took part in several masterclasses held by highly respected professors such as 
                    Đặng Thái Sơn, Zoltán Kocsis, Boris Berman, Péter Frankl, Yaron Rosenthal, Dina Yoffe, 
                    Dimitri Bashkirov, Lilya Zilberstein, Robert Levin, Aquiles Delle Vigne.</p>`;









function newArticle(){

  /*var elemArr = [document.createDocumentFragment(), document.createElement('article'),
  document.createElement('h1'), document.createElement('img'), document.createElement('div')];

  return elemArr;*/
  var fragment = document.createDocumentFragment();
  var article = document.createElement('article');
  article.appendChild(document.createElement('h1'));

  var wrapper = document.createElement('div');
  wrapper.appendChild(document.createElement('div'));
  wrapper.appendChild(document.createElement('img'));
  article.appendChild(wrapper);
  article.appendChild(document.createElement('div'));
  fragment.appendChild(article);

  return fragment;
}



function updArticle(fragment, name){

  var memberArticles = document.querySelectorAll('.member-article');

  if(document.querySelector('.' + name[1]) !== null){
      for(var j = 0; j < memberArticles.length; j++){
        if(memberArticles[j].classList.contains(name[1]))
           memberArticles[j].classList.remove('hidden');
        else memberArticles[j].classList.add('hidden');
      }
  }


  else {
  let article = fragment.firstElementChild;
  article.classList.add('member-article');
  article.children[0].textContent = name[0];
  let wrapper = article.children[1];
  wrapper.children[0].innerHTML = '&laquo;';
  wrapper.children[0].classList.add('member-back-btn');
  wrapper.children[1].src = document.querySelector('#'+name[1]+'-photo').src;
  wrapper.children[1].alt = document.querySelector('#'+name[1]+'-photo').alt;
  wrapper.children[1].classList.add('member-photo-detail');




  switch(true){

  case name[0] == 'Ilosfai Csenge':
       article.classList.add('ilosfai-csenge');
       article.children[2].innerHTML = csengeBioHun;


  break;

  case name[0] == 'Mády-Szabó Eszter':
       article.classList.add('mady-szabo-eszter');
       article.children[2].innerHTML = eszterBioHun;
  break;


  case name[0] == 'Vida Mónika Ruth':
       article.classList.add('vida-monika-ruth');
       article.children[2].innerHTML = moniBioHun;
  break;
  }

       homeSection.appendChild(article);

  }
}



function hideMenu(){
    menuBlock.style.left = '-'+90+'%';
    arrowRight.classList.remove('hidden');
    arrowLeft.classList.add('hidden');
    menuBlock.dataset.info = 'shifted';
}


function showMenu(){
    menuBlock.style.left = 0;
    arrowRight.classList.add('hidden');
    arrowLeft.classList.remove('hidden');
    menuBlock.dataset.info = 'not-shifted';

}
















//Main menu slider's listener //
menuBlock.addEventListener('click', function(e){

  if(e.target.classList.contains('main-m-slider') || e.target.parentElement.classList.contains('main-m-slider')){

    for(var i = 0; i < homeSection.children.length; i++){
        if(!(homeSection.children[i].classList.contains('hidden'))){
           homeSection.children[i].classList.add('hidden');
           }
          }
          
      if(menuBlock.dataset.info == 'shifted') showMenu();
      else hideMenu();
    }
  });




//Changes the dataset-info attribute of the aside-menu to 'not-shifted' if the window is wider than 800px //
window.addEventListener('DOMContentLoaded', function(){

  if(window.screen.width > 800){
    menuBlock.dataset.info = 'not-shifted';
  }
})




//Solves anomalies of aside-menu display when resizing the screen//
window.addEventListener('resize', function(){

  if(window.screen.width > 800){
    menuBlock.dataset.info = 'not-shifted';
    menuBlock.style.left = 0;
  }

  else if(window.screen.width < 800){
    menuBlock.dataset.info = 'shifted';
    menuBlock.style.left = '-'+90+'%';
  }
})




//Hides/Displays the main sections, in reaction to main menu's input //
document.body.addEventListener('click', function(e){

    if(e.target.classList.contains('main-m-items') && menuBlock.dataset.info == 'not-shifted'){

      for(var i = 0; i < homeSection.children.length; i++){
        if(homeSection.children[i].classList.contains(e.target.dataset.rel)){
           homeSection.children[i].classList.remove('hidden');
           if(window.screen.width < 800) hideMenu();

        }
        else homeSection.children[i].classList.add('hidden');
      }
    }
})



//Creates and/or updates the members' introduction sections when clicking on their photo or the link below //
memberPhotos.addEventListener('click', function(e){

    if(e.target.tagName == 'IMG' || e.target.tagName == 'A'){
      introArticle.classList.add('hidden');

      switch(true){

        case e.target.textContent == 'Ilosfai Csenge: Hegedű' || e.target.id == 'ilosfai-csenge-photo':
        var name = ['Ilosfai Csenge', 'ilosfai-csenge'];
        updArticle(newArticle(), name)
        break;

        case e.target.textContent == 'Mády-Szabó Eszter: Gordonka' || e.target.id == 'mady-szabo-eszter-photo':
        var name = ['Mády-Szabó Eszter', 'mady-szabo-eszter'];
        updArticle(newArticle(), name)
        break;

        case e.target.textContent == 'Vida Mónika Ruth: Zongora' || e.target.id == 'vida-monika-ruth-photo':
        var name = ['Vida Mónika Ruth', 'vida-monika-ruth'];
        updArticle(newArticle(), name)
        break;
      }
    }
})



//Hides the current member's biography page and shows the 'about' section when clicking on 'back' button. //
document.body.addEventListener('click', function(e){

  if(e.target.classList.contains('member-back-btn')){
     let memberArticles = document.querySelectorAll('.member-article');
     for(var i = 0; i < memberArticles.length; i++){
      if(!(memberArticles[i].classList.contains('hidden'))){
         memberArticles[i].classList.add('hidden')
       }
       let anchor = document.getElementById('members-anchor');
       introArticle.classList.remove('hidden');
       anchor.scrollIntoView();
     }
  }
})



// Media Section's 'Photo/Video' button //
mediaArticle.addEventListener('click', function(e){

  if(e.target.classList.contains('media-photos')){
    document.querySelector('.media-videos-wrapper').classList.add('hidden');
    document.querySelector('.media-photos-wrapper').classList.remove('hidden');
  }

  else if(e.target.classList.contains('media-videos')){
    document.querySelector('.media-photos-wrapper').classList.add('hidden');
    document.querySelector('.media-videos-wrapper').classList.remove('hidden');
  }
})