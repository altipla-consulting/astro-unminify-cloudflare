function unminifyCloudflare() {
  let _config;
  return {
    name: "unminify-cloudflare",
    hooks: {
      "astro:config:done": ({ config }) => {
        _config = config;
      },
      "astro:build:done": () => {
        _config.vite = _config.vite || {};
        _config.vite.build = _config.vite.build || {};
        _config.vite.build.minify = false;
      }
    }
  };
}

export { unminifyCloudflare as default };
