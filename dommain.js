
const navBar = document.getElementById('navbar');
const ul = document.getElementsByClassName('nav-link');
//--navbar when scrolling
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

//--typed text homeleft
var Typed = new Typed(".roadtext", {
    strings:["Advis", "Web Developer", "Software Engineer"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});
//--message button homeleft
const message = document.getElementById("message");

function openMessage() {
    message.classList.add("open-message");
}
function closeMessage() {
    message.classList.remove("open-message");
}

// --Sixpcs--
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
//ribet banget, pdhl isinya cuma deklar sama jsdom event click doang HAHHAHAHAHAHHA
// --Sixpcs End..

// --About Card--
//deklar tombol flip dan kartu bagian depan dan belakang
const flipBtn = document.getElementById("flip-btn")
const card = document.querySelector(".about-card");
const back = document.querySelector(".back");
const backShow = document.querySelector(".back-show");

function flipCard() {
    // langsung animasi
    card.style.transform = 'rotateY(-180deg) rotateX(360deg) rotateZ(360deg)';
    back.style.background = 'linear-gradient(to right, mediumslateblue, #23a6d5)';

    // ketika klik pertama, langsung remove klik, agar selama animasi flip berjalan, user tidak dapat melakukan spam klik
    flipBtn.removeEventListener("click", flipCard);

    // proses animasi dengan hitungan waktu
    setTimeout(() => {
        back.style.background = '#5a5bf1';
        backShow.style.display = 'block';
    }, 1700);

    setTimeout(() => {
        back.style.background = 'linear-gradient(to right, mediumslateblue, #23a6d5)';
        backShow.style.display = 'none';
    }, 6500);

    setTimeout(() => {
        card.style.transform = 'rotate(0)';
    }, 7000);
    // proses berakhir

    // setelah selesai animasi flip (kembali sperti semula), lalu user dapat klik button nya kembali
    setTimeout(() => {
        flipBtn.addEventListener("click", flipCard);
    }, 8000);

    // --begitu seterusnya--
};

// setiap 1 kali klik untuk flip kartu nya
flipBtn.addEventListener("click", flipCard);
// --About Card End..

// --Contact Form--
var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name  = document.getElementById("contact-name").value;

    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}

function validatePhone() {
    var phone  = document.getElementById("contact-phone").value;

    if(phone.length == 0) {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}

function validateEmail() {
    var email  = document.getElementById("contact-email").value;

    if(email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email in valid';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}

function validateMessage() {
    var message  = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;

    if(left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}
// -- Contact form End.. --