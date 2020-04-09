const staticFile = "murajaah"
const assets = [
  "/kelinci.gif",
  "/",
  "index.html"
]

self.addEventListener("install", function(installEvent){
  installEvent.waitUntil(
    caches.open(staticFile).then(function(cache){
      cache.addAll(assets)
    })
  )
})
