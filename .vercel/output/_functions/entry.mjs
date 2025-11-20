import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BwVtexJh.mjs';
import { manifest } from './manifest_hk-4dmO0.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/events.astro.mjs');
const _page2 = () => import('./pages/join.astro.mjs');
const _page3 = () => import('./pages/network.astro.mjs');
const _page4 = () => import('./pages/our-team.astro.mjs');
const _page5 = () => import('./pages/usc-2024.astro.mjs');
const _page6 = () => import('./pages/usc-2025.astro.mjs');
const _page7 = () => import('./pages/usc-2026.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/events.astro", _page1],
    ["src/pages/join.astro", _page2],
    ["src/pages/network.astro", _page3],
    ["src/pages/our-team.astro", _page4],
    ["src/pages/usc-2024.astro", _page5],
    ["src/pages/usc-2025.astro", _page6],
    ["src/pages/usc-2026.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "b5273d49-e974-4343-8302-74bf6d5913fd",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
