
const navBar = document.getElementById('navbar');
const ul = document.getElementsByClassName('nav-link');
//--navbar when scrolling
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", windowPosition);
    
    ul[0].classList.toggle("scrolling-active", windowPosition)
    ul[1].classList.toggle("scrolling-active", windowPosition)
    ul[2].classList.toggle("scrolling-active", windowPosition)
    ul[3].classList.toggle("scrolling-active", windowPosition)
    ul[4].classList.toggle("scrolling-active", windowPosition)
    ul[5].classList.toggle("scrolling-active", windowPosition)
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
function showCaption(button) {
    // cari parent .boxitem hanya dalam lingkup button yg diklik
    const boxItem = button.closest('.boxitem');
    // cari figcaption hanya dalam lingkup .boxitem yg sedang diklik
    const caption = boxItem.querySelector("figcaption");

    caption.style.bottom = '0';
    setTimeout(() => {
        caption.style.bottom = '-9rem';
    }, 5000);
}
//ribet banget, pdhl isinya cuma deklar sama jsdom event click doang HAHHAHAHAHAHHA
// --Sixpcs End..

// --About Card--
//deklar tombol flip dan kartu bagian depan dan belakang
const flipBtn = document.getElementById("flip-btn"),
card = document.querySelector(".about-card"),
back = document.querySelector(".back"),
backShow = document.querySelector(".back-show");

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
const nameError = document.getElementById("name-error"),
phoneError = document.getElementById("phone-error"),
emailError = document.getElementById("email-error"),
messageError = document.getElementById("message-error"),
submitError = document.getElementById("submit-error");

function validateName() {
    const name  = document.getElementById("contact-name").value;

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
    const phone  = document.getElementById("contact-phone").value;

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
    const email  = document.getElementById("contact-email").value;

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
    const message  = document.getElementById("contact-message").value;
    const required = 30;
    const left = required - message.length;

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