const staticFile = "murajaah"
const assets = [
  "/kelinci.gif",
  "/",
  "/index.html",
  "/vendor/bootstrap/css/bootstrap.min.css",
  "/vendor/jquery.min.js",
  "/vendor/bootstrap/js/bootstrap.min.js",
  "/vendor/olahJson.min.js"
]

self.addEventListener("install", function(installEvent){
  installEvent.waitUntil(
    caches.open(staticFile).then(function(cache){
      cache.addAll(assets)
    })
  )
})
