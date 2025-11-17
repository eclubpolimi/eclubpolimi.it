import {defineConfig} from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Patches node_modules/vite/dist/client/client.mjs
function patchViteErrorOverlay() {
  return {
    name: 'patch-vite-error-overlay',
    transform(code, id) {
      if (id.includes('vite/dist/client/client.mjs')) {
        return code.replace(
          /const editorLink = this\.createLink\(`Open in editor\${[^}]*}\`, void 0\);[\s\S]*?codeHeader\.appendChild\(editorLink\);/g,
          ''
        );
      }
    },
  };
}

/**
 * Astro integration to inject development-only scripts
 */
function injectDevScript(options = {}) {
  const {scriptPath} = options;

  if (!scriptPath) {
    throw new Error('injectDevScript requires a scriptPath');
  }

  return {
    name: 'inject-dev-script',
    hooks: {
      'astro:config:setup': ({injectScript, command, logger}) => {
        if (command === 'dev') {
          logger.info(`Injecting dev script: ${scriptPath}`);

          // Inject as ES module
          injectScript('page', `import "${scriptPath}";`);
        }
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  base: '',
  output: 'server',
  devToolbar: {
    enabled: false,
  },
  server: {
    port: 3000,
    host: true, // Listen on all network interfaces (0.0.0.0)
    strictPort: true,
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: false,
    },
  }),
  integrations: [
    react(),
    injectDevScript({scriptPath: '/generated/dev-only.js'}),
  ],
  vite: {
    plugins: [tailwindcss(), patchViteErrorOverlay()],
    server: {
      watch: {
        usePolling: true, // Enable polling for file watching in Docker
        interval: 1000,
        ignored: [
          '**/lost+found/**',
          '**/dist/**',
          '**/node_modules/**',
          '**/src/site-components/**',
        ],
      },
    },
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD
        ? {
            'react-dom/server': 'react-dom/server.edge',
          }
        : undefined,
    },
  },
});
