const ethCoin = document.querySelector('.ci1')
const walletElement = document.querySelector('.ci2');
const featurescreen = document.querySelector('.ftimg');

//for on scroll animation
window.addEventListener('scroll', () => {
    var value = window.scrollY;
    // console.log(value);
    if (value > 0 && value < 387 ) {
        walletElement.style.transform = `translate(0,-${(value)/1.5}px) rotate(-10deg)`;
        ethCoin.style.transform = `translate(0,${(value)/1.5}px) rotate(10deg)`;
    }
    if(value > 600 && value < 1140){
        featurescreen.style.transform = `translate(0,-${(value-600)}px)`;
    }
});

const hamburger = document.querySelector('.hamburger');
const navmodal = document.querySelector('.navoptions');

hamburger.addEventListener('click', () => {
    navmodal.classList.toggle('navmodal-active');
});


// gallery
const galleryLeft = document.querySelector('.leftgallery');
const galleryRight = document.querySelector('.rightgallery');
const gallery = document.querySelector('.gallerycontainer');


let x = 0
let dir = "right"

const galleryArray = ['Search Result_iphone13prosierrablue_portrait.png','Home_iphone13prosierrablue_portrait.png','Portfolio_iphone13prosierrablue_portrait.png','Onboarding (1)_iphone13prosierrablue_portrait.png','Notifications_iphone13prosierrablue_portrait.png']

const imgposarray = [[0,1,2,3,4],[4,0,1,2,3],[3,4,0,1,2],[2,3,4,0,1],[1,2,3,4,0]];

const classChanger = ()=>{
    gallery.innerHTML = `
            <div class="galleryBox gb5pree">
                <img class="galleryimg" src="./images/${galleryArray[imgposarray[x][4]]}" alt="" />
            </div>
            <div class="galleryBox gb1">
                <img class="galleryimg" src="./images/${galleryArray[imgposarray[x][0]]}" alt="" />
            </div>
            <div class="galleryBox gb2">
                <img class="galleryimg" src="./images/${galleryArray[imgposarray[x][1]]}" alt="" />
            </div>
            <div class="galleryBox gb3">
                <img class="galleryimg" src="./images/${galleryArray[imgposarray[x][2]]}" alt="" />
            </div>
            <div class="galleryBox gb4">
                <img class="galleryimg" src="./images/${galleryArray[imgposarray[x][3]]}" alt="" />
            </div>
            <div class="galleryBox gb5">
                <img class="galleryimg" src="./images/${galleryArray[imgposarray[x][4]]}" alt="" />
            </div>
            <div class="galleryBox gb1pree">
                <img class="galleryimg" src="./images/${galleryArray[imgposarray[x][0]]}" alt="" />
            </div>
    `
}

galleryRight.addEventListener('click', (e) => {
    
    e.preventDefault();

    document.querySelector('.gb5pree').classList.add('gb5pree--right');
    document.querySelector('.gb1').classList.add('gb1--right');
    document.querySelector('.gb2').classList.add('gb2--right');
    document.querySelector('.gb3').classList.add('gb3--right');
    document.querySelector('.gb4').classList.add('gb4--right');
    document.querySelector('.gb5').classList.add('gb5--right');

    if(x!==4){
        x+=1
    }
    else{
        x=0
    }

    setTimeout(classChanger,2000);
    
})

galleryLeft.addEventListener('click',(e)=>{
    e.preventDefault();

    document.querySelector('.gb1').classList.add('gb1--left');
    document.querySelector('.gb2').classList.add('gb2--left');
    document.querySelector('.gb3').classList.add('gb3--left');
    document.querySelector('.gb4').classList.add('gb4--left');
    document.querySelector('.gb5').classList.add('gb5--left');
    document.querySelector('.gb1pree').classList.add('gb1pree--left');


    if(x!==0){
        x-=1
    }
    else{
        x=4
    }

    setTimeout(classChanger,2000);
})