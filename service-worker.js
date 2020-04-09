const staticFile = "murajaah"
const assets = [
  "/kelinci.gif",
  "/"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticFile).then(cache => {
      cache.addAll(assets)
    })
  )
})
