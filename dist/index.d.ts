declare function unminifyCloudflare(): {
    name: string;
    hooks: {
        'astro:config:done': ({ config }: any) => void;
        'astro:build:done': () => void;
    };
};

export { unminifyCloudflare as default };
