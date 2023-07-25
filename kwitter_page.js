var firebaseConfig = {
    apiKey: "AIzaSyC-oW-joCX1UvgEtYPsWtkIY6h3GVUxN70",
    authDomain: "lets-chat-web-app-ea5e0.firebaseapp.com",
    projectId: "lets-chat-web-app-ea5e0",
    storageBucket: "lets-chat-web-app-ea5e0.appspot.com",
    messagingSenderId: "501907749719",
    appId: "1:501907749719:web:9aa15f344460089e421c12"
  };

  localStorage.setItem(user_name, room_name);


  send()
  {
    firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
    });
  }

  function getData()
  {
    firebase.database().ref("/"+room_name).on('value',
   
    function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key; childData = 
            childSnapshot.val(); if(childKey!="purpose") {
firebase_message_id = childKey;
message_data = childData;
//Start Code


//End Code
            } }); }); }
    getData();