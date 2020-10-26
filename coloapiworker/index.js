const m = new Map([['ATL', 'georgia'], ['CLT', `northcarolina`], ['IAD', 'virginia']]);

addEventListener("fetch", event => {
  let colo = event.request.cf.colo
  let body = { colo: colo };
  let res = new Response(JSON.stringify(body));
  res.headers.append('Content-Type', 'application/json')
  event.respondWith(res)
})