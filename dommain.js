
var Typed = new Typed(".roadtext", {
    strings:["Advis", "Web Developer", "Author Motivation"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});


const navBar = document.getElementById('navbar');
const ul = document.getElementsByClassName('nav-link');

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", windowPosition);
    
    ul[0].classList.toggle("scrolling-active", windowPosition);
    ul[1].classList.toggle("scrolling-active", windowPosition);
    ul[2].classList.toggle("scrolling-active", windowPosition);
    ul[3].classList.toggle("scrolling-active", windowPosition);
    ul[4].classList.toggle("scrolling-active", windowPosition);
    ul[5].classList.toggle("scrolling-active", windowPosition);
});


var tombol = document.getElementById('home-message-btn');
var muncul = document.getElementById('motivation');

tombol.addEventListener('click', () => {
    muncul.style.display = 'block';
    setTimeout(() => {
        muncul.style.display = 'none';
    }, 5000);
});


//full deklarasi button readmore 1-6 click multifungsi
var read1 = document.getElementById('read1');
var read2 = document.getElementById('read2');
var read3 = document.getElementById('read3');
var read4 = document.getElementById('read4');
var read5 = document.getElementById('read5');
var read6 = document.getElementById('read6');
//figcaption nya
var caption1 = document.getElementById('caption1');
var caption2 = document.getElementById('caption2');
var caption3 = document.getElementById('caption3');
var caption4 = document.getElementById('caption4');
var caption5 = document.getElementById('caption5');
var caption6 = document.getElementById('caption6');
//readmore 1
read1.addEventListener('click', () => {
    caption1.style.bottom = '0';
    setTimeout(() => {
    caption1.style.bottom = '-9rem';
    }, 5000);
});
//readmore 2
read2.addEventListener('click', () => {
    caption2.style.bottom = '0';
    setTimeout(() => {
    caption2.style.bottom = '-9rem';
    }, 5000);
});
//readmore 3
read3.addEventListener('click', () => {
    caption3.style.bottom = '0';
    setTimeout(() => {
    caption3.style.bottom = '-9rem';
    }, 5000);
});
//readmore 4
read4.addEventListener('click', () => {
    caption4.style.bottom = '0';
    setTimeout(() => {
    caption4.style.bottom = '-9rem';
    }, 5000);
});
//readmore 5
read5.addEventListener('click', () => {
    caption5.style.bottom = '0';
    setTimeout(() => {
    caption5.style.bottom = '-9rem';
    }, 5000);
});
//readmore 6
read6.addEventListener('click', () => {
    caption6.style.bottom = '0';
    setTimeout(() => {
    caption6.style.bottom = '-9rem';
    }, 5000);
});
/*-- readmore End... --*/
//ribet banget, pdhl isinya cuma deklar sama jsdom event click doang HAHHAHAHAHAHHA


//--click button to flipcard the profile--
var btnflip = document.getElementById('about-btn');
var flipcard = document.getElementById('card');
var back = document.getElementById('back');
var textback = document.getElementById('textback');
var testbtn = document.getElementById('about-testbtn');

btnflip.addEventListener('click', () => {
    flipcard.style.transform = 'rotateY(-180deg) rotateX(360deg) rotateZ(360deg)';
    back.style.background = 'linear-gradient(to right, darkviolet, #23a6d5)';
    btnflip.style.display = 'none';
    testbtn.style.display = 'block';
    setTimeout(() => {
        flipcard.style.transform = 'rotate(0)';
    }, 5000);
    setTimeout(() => {
        back.style.background = 'linear-gradient(#020024, #6e163d, #00d4ff)';
        textback.style.display = 'block';
    }, 1700);
    setTimeout(() => {
        back.style.background = 'linear-gradient(to right, darkviolet, #23a6d5)';
        textback.style.display = 'none';
    }, 4500);
    setTimeout(() => {
        btnflip.style.display = 'block';
        testbtn.style.display = 'none';
    }, 6000);
});
//--btnflip End..--


