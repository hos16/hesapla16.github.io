const firebaseConfig = {
    apiKey: "AIzaSyDXcaAcyzEztXUGGqNPi9f_fzqpb1ABKDA",
    authDomain: "takdir-e9cda.firebaseapp.com",
    databaseURL: "https://takdir-e9cda-default-rtdb.firebaseio.com",
    projectId: "takdir-e9cda",
    storageBucket: "takdir-e9cda.appspot.com",
    messagingSenderId: "357652926945",
    appId: "1:357652926945:web:aad79d308ab1e6ce1a82a0"
};

firebase.initializeApp(firebaseConfig);


var contactFormDB = firebase.database().ref("contactFormm");

//document.getElementById("contactFormm").addEventListener("submit", submitForm);
//document.getElementById("submit").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var isim = getElementVal("isim");
    var soyisim = getElementVal("soyisim");
    var email = getElementVal("email");
    var tel = getElementVal("tel");
    var mesaj = getElementVal("mesaj");

    saveMessages(isim, soyisim, email, tel, mesaj);


    //  document.querySelector(".alert").style.display = "block";


    //  setTimeout(() => {
    //   document.querySelector(".alert").style.display = "none";
    // }, 3000);


    document.getElementById("contactFormm").reset();
}

const saveMessages = (isim, soyisim, email, tel, mesaj) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        isim: isim,
        soyisim: soyisim,
        email: email,
        tel: tel,
        mesaj: mesaj
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};