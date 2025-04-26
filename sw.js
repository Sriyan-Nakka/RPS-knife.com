const assets = [
  "./index.html",
  "./script.js",
  "./fonts/fugazone-regular-webfont.woff",
  "./fonts/fugazone-regular-webfont.woff2",
  "./fonts/righteous-regular-webfont.woff",
  "./fonts/righteous-regular-webfont.woff2",
  "./Images/background.webp",
  "./Images/rock.svg",
  "./Images/paper.svg",
  "./Images/scissors.svg",
  "./Images/knife.svg",
];
const cacheName = "cacheStaticAssetsRPSK";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cacheRes) => {
      return cacheRes || fetch(e.request);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("service worker activated", e);
});
