const staticFile = "murajaah"
const assets = [
  "/kelinci.gif",
  "/",
  "/index.html",
  "/vendor/bootstrap/css/bootstrap.min.css",
  "/vendor/jquery.min.js",
  "/vendor/bootstrap/js/bootstrap.min.js",
  "/vendor/olahJson.min.js",
  "/manifest.json",
  "/icon/72.png",
  "/icon/96.png",
  "/icon/128.png",
  "/icon/144.png",
  "/icon/152.png",
  "/icon/192.png",
  "/icon/384.png",
  "/icon/512.png"
]

self.addEventListener("install", function(installEvent){
  installEvent.waitUntil(
    caches.open(staticFile).then(function(cache){
      cache.addAll(assets)
    })
  )
})

// kode di bawah ini akan mencache semuanya

// self.addEventListener('fetch', function(event){
//   event.respondWith(
//     caches.match(event.request).then(function(resp){
//       return resp || fetch(event.request).then(function(response){
//         return caches.open(staticFile).then(function(cache){
//           cache.put(event.request, response.clone());
//           return response;
//         });  
//       });
//     })
//   );
// });