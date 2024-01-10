
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
