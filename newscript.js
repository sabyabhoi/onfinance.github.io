const ethCoin = document.querySelector('.ci1')
const walletElement = document.querySelector('.ci2');
const featurescreen = document.querySelector('.ftimg');

//for on scroll animation
window.addEventListener('scroll', () => {
    var value = window.scrollY;
    if (value > 0) {
        walletElement.style.transform = `translate(0,-${(value)/1.5}px) rotate(-10deg)`;
        ethCoin.style.transform = `translate(0,${(value)/1.5}px) rotate(10deg)`;
    }
    if(value > 600 && value < 910){
        featurescreen.style.transform = `translate(0,-${(value-600)/3}px)`;
    }
});