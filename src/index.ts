
export default function unminifyCloudflare() {
  let _config: any

  return {
    name: 'unminify-cloudflare',
    hooks: {
      'astro:config:done': ({ config }: any) => {
        _config = config
      },
      
      'astro:build:done': () => {
        _config.vite = _config.vite || {}
        _config.vite.build = _config.vite.build || {}
        _config.vite.build.minify = false
      },
    },
  }
}
