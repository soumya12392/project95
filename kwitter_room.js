// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAfFQ79OB6v9H29hYmMqKK9ev-wZavPWHY",
  authDomain: "project-95-eebaf.firebaseapp.com",
  databaseURL: "https://project-95-eebaf-default-rtdb.firebaseio.com",
  projectId: "project-95-eebaf",
  storageBucket: "project-95-eebaf.appspot.com",
  messagingSenderId: "993714380887",
  appId: "1:993714380887:web:d90d39e20f244d194d8312"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("Username");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function addRoom() {
  var room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding room name"
  });

  localStorage.setItem("Room name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  var Room_names = childKey;
  //Start code
    console.log("Room Name - " + Room_names);
    var row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML += row;
  //End code
  });});}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("Room name", name);
  window.location = "kwitter_page.html";
}