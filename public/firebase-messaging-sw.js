importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');


firebase.initializeApp({
    messagingSenderId: "408688004226"
   
  });

const initMessaging = firebase.messaging();