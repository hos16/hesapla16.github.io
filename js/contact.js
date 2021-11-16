const firebaseConfig = {
    apiKey: "AIzaSyDXcaAcyzEztXUGGqNPi9f_fzqpb1ABKDA",
    authDomain: "takdir-e9cda.firebaseapp.com",
    databaseURL: "https://takdir-e9cda-default-rtdb.firebaseio.com",
    projectId: "takdir-e9cda",
    storageBucket: "takdir-e9cda.appspot.com",
    messagingSenderId: "357652926945",
    appId: "1:357652926945:web:aad79d308ab1e6ce1a82a0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messagesRef = firebase.database().ref('messages');

document.getElementById('contactFormm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var isim = getInputVal('isim');
    var soyisim = getInputVal('soyisim');
    var email = getInputVal('email');
    var tel = getInputVal('tel');
    var mesaj = getInputVal('mesaj');

    saveMessage(isim, soyisim, email, tel, mesaj);


    //  document.querySelector('.alert').style.display = 'block';


    //  setTimeout(function() {
    //      document.querySelector('.alert').style.display = 'none';
    // }, 3000);

    document.getElementById('contactFormm').reset();
}


function getInputVal(id) {
    return document.getElementById(id).value;
}


function saveMessage(isim, soyisim, email, tel, mesaj) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        isim: isim,
        soyisim: soyisim,
        email: email,
        tel: tel,
        mesaj: mesaj
    });
}