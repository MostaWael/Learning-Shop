 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGP9geSGxATeveOyjw4H02w0WzMvuZGO0",
    authDomain: "learning-shop-f1ce4.firebaseapp.com",
    projectId: "learning-shop-f1ce4",
    storageBucket: "learning-shop-f1ce4.appspot.com",
    messagingSenderId: "116015031423",
    appId: "1:116015031423:web:444070cce6719c6c464b4a",
    measurementId: "G-HXFVLTYDEJ"
};

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
import{getDatabase,set,ref  } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js"
const db = getDatabase();


 //  New register
document.getElementById("register").addEventListener("click",function () {
    var uesrName=document.getElementById("userName").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
console.log(user);
alert("successful.....")
set(ref(db, "user/"+ password),{
    UserName: uesrName,
    Email: email,
    PassWord: password,
})
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log(errorMessage);
alert(error);

});
})

       //  New login
document.getElementById("SignIn").addEventListener("click",function () {
    var userName2=document.getElementById("userName2").value;
    var password=document.getElementById("password2").value;
    localStorage.setItem("val",password);
    // alert(localStorage.getItem("val"));
    signInWithEmailAndPassword(auth, userName2, password)
    .then((userCredential) => {
   // Signed in 
    const user = userCredential.user;
    console.log(user);
    location.replace("./landing.html")
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log(errorMessage);
alert(error);

});
})

