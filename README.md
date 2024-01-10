
# astro-unminify-cloudflare

Astro integration to unminify the generated Cloudflare worker.

The Astro Cloudflare integration minifies the generated `worker.js` file by default depending on the global vite configuration. This causes some issues:
- Deployments sometimes fail with no apparent reason.
- Any stack traces from errors become useless if the code is compiled.
- Globally disabling minification also affects client scripts, significantly increasing their size and preventing the usual framework optimizations.

This integration disables minification only for the server-side, preserving all critical optimizations for the client. This approach maintains the benefits of having a plain file that can be easily deployed to Cloudflare Pages, while avoiding the aforementioned issues.

## Install

```shell
npm astro add astro-unminify-cloudflare
```

## Example Astro config

Remember that you need to enable the Cloudflare adapter and build with `server` or `hybrid` mode to have a SSR worker to unminify. This is an example configuration file for reference only:

```ts
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import unminifyCloudflare from "astro-unminify-cloudflare"
import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    vue(),
    tailwind(),
    unminifyCloudflare(),
  ],
})
```
