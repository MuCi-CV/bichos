const cacheName = "muci-cache";
const filesToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  // Agrega aquí otros archivos que deseas cachear
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
