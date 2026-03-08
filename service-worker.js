self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("budget-cache").then(function(cache) {
      return cache.addAll([
        "index.html"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(res) {
      return res || fetch(e.request);
    })
  );
});
