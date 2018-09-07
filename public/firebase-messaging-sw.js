importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAHSA2bBUDo8c5oI5JplPMttBn7iuqNZGU",
  authDomain: "companion2go-1521406947018.firebaseapp.com",
  databaseURL: "https://companion2go-1521406947018.firebaseio.com",
  projectId: "companion2go-1521406947018",
  storageBucket: "companion2go-1521406947018.appspot.com",
  messagingSenderId: "940156244935"
});

const messaging = firebase.messaging();

self.addEventListener('push', function(event) {
  console.log('push');
});

self.addEventListener('notificationclick', function(event) {
  console.log('notificationclick');
});
