const firebaseConfig = {
    apiKey: "AIzaSyDiQnGQkqgbEKeHLsFjdhnok9nDOeFSkSw",
    authDomain: "hesapla-55a9f.firebaseapp.com",
    databaseURL: "https://hesapla-55a9f-default-rtdb.firebaseio.com",
    projectId: "hesapla-55a9f",
    storageBucket: "hesapla-55a9f.appspot.com",
    messagingSenderId: "548914278681",
    appId: "1:548914278681:web:31b6e474caf78022d8d588",
    measurementId: "G-CD1RZL5CGE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



var messagesRef = firebase.database().ref('messages');

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