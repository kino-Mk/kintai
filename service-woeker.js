const CACHE_NAME = "kintai-cache-v1";
const urlsToCache = [
  "select.html",
  "index.html",
  "request.html",
  "admin.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
];

// インストール時にキャッシュ
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// オフライン対応
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});