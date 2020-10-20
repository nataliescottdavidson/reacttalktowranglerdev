We are going to write a worker API to be the backend for a react app.

Create worker. For this demo, the worker will return a json response which contains the colo it is running on. Clone `coloapiworker`
or `wrangler generate`

My worker is deployed at https://jsworker.nats.workers.dev/. It returns json, great. 

Now `npx create-react-app talktowranglerdev`. `yarn start`, make sure that works. 

Add `"proxy": "http://localhost:8787"` to your package json. `yarn start` should show error connecting, as you haven't run `wrangler dev`
yet. 

Add the code which makes `fetch` calls to your react app. You can use relative paths to the api endpoint, like https://create-react-app.dev/docs/proxying-api-requests-in-development/.

Here's the thing though. You can't `fetch("/")`. That's going to get returned as html, even though you can curl http://localhost:8787/ and get the json.

This isn't ideal- it will fail with `Syntax Error: unexpected token`. 

The workaround is, to have routes configured in your wrangler.toml. So in my env.prod settings in my toml, I have myzone.com/getworkercolo.
`wrangler dev` will then serve the worker at http://localhost:8787/getworkercolo