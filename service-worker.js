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

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (r) {
            // Download the file if it is not in the cache, 
            return r || fetch(e.request).then(function (response) {
                // add the new file to cache
                return caches.open(cacheName).then(function (cache) {
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })

    );
});