// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.9.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': '940156244935'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration
    .showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('push', function(event) {
  console.log('push');
    fetch('get_data.json', {
        mode: 'cors'
    }).then(function(response) {
        return response.text();
    }).then(function(ret_content) {
        dataa = JSON.parse(ret_content);
        return self.registration.showNotification(dataa.title, {
            body: dataa.body,
            icon: dataa.icon,
            vibrate: 1,
            data: dataa
        });
    });
});

self.addEventListener('notificationclick', function(event) {
  console.log('notificationclick');
    var url = event.notification.data.target_url;
    if(url){
        event.notification.close();
        event.waitUntil(clients.matchAll({
            type: 'window'
        }).then(function(windowClients) {
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        }));
    }
});
