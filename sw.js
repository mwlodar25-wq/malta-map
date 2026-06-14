// Mapa Malty — Service Worker v1
// Cacheuje kafelki mapy i bibliotekę Leaflet do użytku offline

const CACHE_NAME = 'malta-map-v1';
const TILE_REGEX = /\.basemaps\.cartocdn\.com\//;

// Po instalacji — nie pre-cache'ujemy niczego,
// żeby nie spowalniać pierwszego ładowania
self.addEventListener('install', function(e) {
  self.skipWaiting();
});

// Aktywacja — usuń stare cache'e
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
          .map(function(k) { return caches.delete(k); })
      );
    })
  );
});

// Przechwytuj żądania — cache'uj kafelki mapy
self.addEventListener('fetch', function(e) {
  var url = e.request.url;

  // Cache-first dla kafelków mapy
  if (TILE_REGEX.test(url)) {
    e.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match(e.request).then(function(cached) {
          var fetchPromise = fetch(e.request).then(function(response) {
            if (response && response.status === 200) {
              cache.put(e.request, response.clone());
            }
            return response;
          }).catch(function() {
            // Jeśli fetch się nie uda, zwróć cached (nawet jeśli null)
            return cached;
          });
          // Zwróć cached first, ale aktualizuj w tle
          return cached || fetchPromise;
        });
      })
    );
    return;
  }

  // Dla wszystkiego innego — network first z fallbackiem do cache
  e.respondWith(
    fetch(e.request).then(function(response) {
      if (response && response.status === 200) {
        var copy = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(e.request, copy);
        });
      }
      return response;
    }).catch(function() {
      return caches.match(e.request);
    })
  );
});
