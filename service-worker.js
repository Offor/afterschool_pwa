var cacheName = 'afterschool-v1',
var cacheFiles = [
    'index.html',
    'afterschool.webmanifest',
    'images/art.jpg',
    'images/chemistry.jpg',
    'images/design.jpg',
    'images/english.jpg',
    'images/geography.jpg',
    'images/history.jpg',
    'images/maths.jpg',
    'images/music.jpg',
    'images/physical.jpg',
    'images/physics.jpg'

];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Fetching resource: ' + e.request.url);
            return r;
        })
    )
})