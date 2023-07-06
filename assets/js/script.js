// AUTO SLIDER
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slideshow");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

// CONTACT
var fields = {};

function getGender() {
    return document.querySelector('input[name="gender"]:checked')
}

document.addEventListener("DOMContentLoaded", function () {
    fields.name = document.getElementById("name");
    fields.email = document.getElementById("email");
    fields.interest = document.getElementById("interest");
})

function isNotEmpty(value) {
    if (value == null || typeof value == "undefined") return false;

    return (value.length > 0);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }

    return isFieldValid;
}

function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.name, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.interest, isNotEmpty);

    return valid;
}

class User {
    constructor(name, email, interest) {
        this.userName = name;
        this.email = email;
        this.interest = interest;
    }
}

function sendContact() {
    fields.gender = getGender();

    if (isValid()) {
        let usr = new User(name.value, email.value, interest.value);

        alert(`thanks for contacting`)
    } else {
        alert("There was an error")
    }
}