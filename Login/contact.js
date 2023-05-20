
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCsdfFAFs7erUt9Ki41o6PS_4MX3MzFnKM",
    authDomain: "massage-learning.firebaseapp.com",
    databaseURL: "https://massage-learning-default-rtdb.firebaseio.com",
    projectId: "massage-learning",
    storageBucket: "massage-learning.appspot.com",
    messagingSenderId: "95037884545",
    appId: "1:95037884545:web:0465d6a5219d12beed6580"
  };

const app = initializeApp(firebaseConfig);
        import{getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/9.20.1/firebase-database.js"
        const db = getDatabase();

var enterName = document.querySelector("#name");
var enterEmail = document.querySelector("#emailid");
var enterMassage = document.querySelector("#msgContent");



var insertBtn = document.querySelector("#contactForm");


function InsertData() {
    set(ref(db, "People/"+ enterName.value),{
        Name: enterName.value,
        Email: enterEmail.value,
        Massage: enterMassage.value
    })
    .then(()=>{
        alert("Send Massage successfully");
    })
    .catch((error)=>{
        alert("Error..............");
    });
}



insertBtn.addEventListener('click', InsertData);