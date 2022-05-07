
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = { 
      apiKey: "AIzaSyB2xH2QRDQmSHgjwuZayj1m2sUR33PTKcU",
       authDomain: "kwitter-2ccb0.firebaseapp.com", 
       databaseURL: "https://kwitter-2ccb0-default-rtdb.firebaseio.com",
        projectId: "kwitter-2ccb0", storageBucket: "kwitter-2ccb0.appspot.com",
         messagingSenderId: "1096394046755",
          appId: "1:1096394046755:web:7c165def6e6fb5d0a56096" }; 
          // Initialize Firebase 
          const app = initializeApp(firebaseConfig);

          function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
