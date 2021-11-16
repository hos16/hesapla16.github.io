var firebaseConfig = {
    apiKey: "AIzaSyDiQnGQkqgbEKeHLsFjdhnok9nDOeFSkSw",
    authDomain: "hesapla-55a9f.firebaseapp.com",
    projectId: "hesapla-55a9f",
    storageBucket: "hesapla-55a9f.appspot.com",
    messagingSenderId: "548914278681",
    appId: "1:548914278681:web:31b6e474caf78022d8d588",
    measurementId: "G-CD1RZL5CGE"
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactFormm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var isim = getInputVal('isim');
    var soyisim = getInputVal('soyisim');
    var email = getInputVal('email');
    var tel = getInputVal('tel');
    var mesaj = getInputVal('mesaj');

    // Save message
    saveMessage(isim, soyisim, email, tel, mesaj);


    //  document.querySelector('.alert').style.display = 'block';


    //  setTimeout(function() {
    //      document.querySelector('.alert').style.display = 'none';
    // }, 3000);

    // Clear form
    document.getElementById('contactFormm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
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