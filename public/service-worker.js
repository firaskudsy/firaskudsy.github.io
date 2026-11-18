/*
 * Kill-switch for the old Create React App service worker.
 *
 * The previous site registered a Workbox service worker at /service-worker.js,
 * so returning visitors could keep getting the old cached site. Browsers check
 * this URL for updates; when they find this version it takes over, deletes every
 * cache, unregisters itself and reloads any open tabs onto the new site.
 *
 * The new site never registers a service worker. Keep this file for a while
 * (months), then it can be removed.
 */
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
      } catch (e) {
        /* ignore */
      }
      try {
        await self.clients.claim();
      } catch (e) {
        /* ignore */
      }
      const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      await self.registration.unregister();
      for (const client of windows) {
        try {
          await client.navigate(client.url);
        } catch (e) {
          /* tab not controllable: it loads the new site on next visit */
        }
      }
    })(),
  );
});
