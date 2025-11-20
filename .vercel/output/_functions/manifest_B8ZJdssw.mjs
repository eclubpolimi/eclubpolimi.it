import 'kleur/colors';
import { o as decodeKey } from './chunks/astro/server_C27Lqkz0.mjs';
import 'clsx';
import 'cookie';
import './chunks/astro-designed-error-pages_KAzL39HU.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_BonE9gHY.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/yuwei/Documents/GitHub/eclubpolimi.it/","cacheDir":"file:///Users/yuwei/Documents/GitHub/eclubpolimi.it/node_modules/.astro/","outDir":"file:///Users/yuwei/Documents/GitHub/eclubpolimi.it/dist/","srcDir":"file:///Users/yuwei/Documents/GitHub/eclubpolimi.it/src/","publicDir":"file:///Users/yuwei/Documents/GitHub/eclubpolimi.it/public/","buildClientDir":"file:///Users/yuwei/Documents/GitHub/eclubpolimi.it/dist/client/","buildServerDir":"file:///Users/yuwei/Documents/GitHub/eclubpolimi.it/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/events.nlvllkir.css"}],"routeData":{"route":"/events","isIndex":false,"type":"page","pattern":"^\\/events\\/?$","segments":[[{"content":"events","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/events.astro","pathname":"/events","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/events.nlvllkir.css"}],"routeData":{"route":"/join","isIndex":false,"type":"page","pattern":"^\\/join\\/?$","segments":[[{"content":"join","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/join.astro","pathname":"/join","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/events.nlvllkir.css"},{"type":"inline","content":"@keyframes scroll{0%{transform:translateY(0);opacity:1}to{transform:translateY(12px);opacity:0}}.animate-scroll[data-astro-cid-ef4fiqgb]{animation:scroll 1.5s ease-in-out infinite}\n"}],"routeData":{"route":"/network","isIndex":false,"type":"page","pattern":"^\\/network\\/?$","segments":[[{"content":"network","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/network.astro","pathname":"/network","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/events.nlvllkir.css"}],"routeData":{"route":"/our-team","isIndex":false,"type":"page","pattern":"^\\/our-team\\/?$","segments":[[{"content":"our-team","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/our-team.astro","pathname":"/our-team","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/events.nlvllkir.css"},{"type":"inline","content":"@keyframes scroll{0%{transform:translateY(0);opacity:1}to{transform:translateY(12px);opacity:0}}.animate-scroll[data-astro-cid-acvebiqa]{animation:scroll 1.5s ease-in-out infinite}@keyframes fade-in{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in[data-astro-cid-acvebiqa]{animation:fade-in .8s ease-out}.animate-fade-in-delay[data-astro-cid-acvebiqa]{animation:fade-in .8s ease-out .2s both}.animate-fade-in-delay-2[data-astro-cid-acvebiqa]{animation:fade-in .8s ease-out .4s both}\n"}],"routeData":{"route":"/usc-2024","isIndex":false,"type":"page","pattern":"^\\/usc-2024\\/?$","segments":[[{"content":"usc-2024","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/usc-2024.astro","pathname":"/usc-2024","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/events.nlvllkir.css"},{"type":"inline","content":"@keyframes scroll{0%{transform:translateY(0);opacity:1}to{transform:translateY(12px);opacity:0}}.animate-scroll[data-astro-cid-m3ynq2vo]{animation:scroll 1.5s ease-in-out infinite}@keyframes fade-in{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in[data-astro-cid-m3ynq2vo]{animation:fade-in .8s ease-out}.animate-fade-in-delay[data-astro-cid-m3ynq2vo]{animation:fade-in .8s ease-out .2s both}.animate-fade-in-delay-2[data-astro-cid-m3ynq2vo]{animation:fade-in .8s ease-out .4s both}\n"}],"routeData":{"route":"/usc-2025","isIndex":false,"type":"page","pattern":"^\\/usc-2025\\/?$","segments":[[{"content":"usc-2025","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/usc-2025.astro","pathname":"/usc-2025","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/events.nlvllkir.css"},{"type":"inline","content":"@keyframes fade-in{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in[data-astro-cid-wfiw4o3g]{animation:fade-in .8s ease-out}.animate-fade-in-delay[data-astro-cid-wfiw4o3g]{animation:fade-in .8s ease-out .2s both}.animate-fade-in-delay-2[data-astro-cid-wfiw4o3g]{animation:fade-in .8s ease-out .4s both}\n"}],"routeData":{"route":"/usc-2026","isIndex":false,"type":"page","pattern":"^\\/usc-2026\\/?$","segments":[[{"content":"usc-2026","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/usc-2026.astro","pathname":"/usc-2026","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/events.nlvllkir.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/events.astro",{"propagation":"none","containsHead":true}],["/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/join.astro",{"propagation":"none","containsHead":true}],["/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/network.astro",{"propagation":"none","containsHead":true}],["/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/our-team.astro",{"propagation":"none","containsHead":true}],["/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/usc-2024.astro",{"propagation":"none","containsHead":true}],["/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/usc-2025.astro",{"propagation":"none","containsHead":true}],["/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/usc-2026.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/events@_@astro":"pages/events.astro.mjs","\u0000@astro-page:src/pages/join@_@astro":"pages/join.astro.mjs","\u0000@astro-page:src/pages/network@_@astro":"pages/network.astro.mjs","\u0000@astro-page:src/pages/our-team@_@astro":"pages/our-team.astro.mjs","\u0000@astro-page:src/pages/usc-2024@_@astro":"pages/usc-2024.astro.mjs","\u0000@astro-page:src/pages/usc-2025@_@astro":"pages/usc-2025.astro.mjs","\u0000@astro-page:src/pages/usc-2026@_@astro":"pages/usc-2026.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B8ZJdssw.mjs","/Users/yuwei/Documents/GitHub/eclubpolimi.it/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_lFb1_gDH.mjs","/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/team/OurTeamSection.tsx":"_astro/OurTeamSection.7olIUr-l.js","/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/home/Hero":"_astro/Hero.TPHcCwnk.js","/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/home/CoreValues":"_astro/CoreValues.BWCUTO1p.js","/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/home/WhatWeDo":"_astro/WhatWeDo.CVNZq0Gc.js","/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/home/Sponsors":"_astro/Sponsors.B4awCvK9.js","/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/components/Navbar":"_astro/Navbar.jQ0uS2Z2.js","/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/components/Footer":"_astro/Footer.DgcvFk0Q.js","/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/components/ThemeToggle":"_astro/ThemeToggle.B3sIrOm1.js","/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/events/EventTimeline.tsx":"_astro/EventTimeline.g6LILxPw.js","@astrojs/react/client.js":"_astro/client.DnUI-Rr8.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/events.nlvllkir.css","/favicon.ico","/_astro/CoreValues.BWCUTO1p.js","/_astro/EventTimeline.g6LILxPw.js","/_astro/FlipCard.Dew-b0mM.js","/_astro/Footer.DgcvFk0Q.js","/_astro/Hero.TPHcCwnk.js","/_astro/Navbar.jQ0uS2Z2.js","/_astro/OurTeamSection.7olIUr-l.js","/_astro/Sponsors.B4awCvK9.js","/_astro/ThemeToggle.B3sIrOm1.js","/_astro/WhatWeDo.CVNZq0Gc.js","/_astro/base-url.DVjYrgnb.js","/_astro/client.DnUI-Rr8.js","/_astro/createLucideIcon.VSL1HkPQ.js","/_astro/index.RH_Wq4ov.js","/_astro/jsx-runtime.D_zvdyIk.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Og1vN8fwZXCSTzTMrxztUePyysOp3e+eU/gvBrqGk5c="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
