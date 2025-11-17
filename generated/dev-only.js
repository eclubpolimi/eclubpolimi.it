/* eslint-env browser */
// @ts-nocheck

// This will be replaced at runtime with the Designer app's origin
window.TRUSTED_PREVIEW_HOSTS = ['https://e-club-polimi-restauro.design.webflow.com'];

/**
 * Gets the Designer app origin from the list of trusted hosts
 * This is populated at runtime by the Designer app
 */
function getDesignerAppOrigin() {
  // window.TRUSTED_PREVIEW_HOSTS is set by the Designer app at runtime
  // It contains the Designer app's origin (e.g., ['https://shortname.design.webflow.com'])
  if (window.TRUSTED_PREVIEW_HOSTS && window.TRUSTED_PREVIEW_HOSTS.length > 0) {
    return window.TRUSTED_PREVIEW_HOSTS[0];
  }

  // Fallback to '*' if TRUSTED_PREVIEW_HOSTS is not set
  return '*';
}

/**
 * Intercepts link clicks in the preview iframe and notifies the parent Designer window
 * This allows the Designer to update the URL bar
 */
function setupLinkClickInterception() {
  document.addEventListener(
    'click',
    function handleLinkClick(event) {
      // Find the closest anchor element
      const link = event.target.closest('a');
      if (!link || !link.href) return;

      // Get the href attribute
      const href = link.getAttribute('href');

      // Skip hash links and javascript: links
      // eslint-disable-next-line no-script-url
      if (!href || href.startsWith('#') || href.startsWith('javascript:')) {
        return;
      }

      // Get the Designer app origin at runtime
      const designerAppOrigin = getDesignerAppOrigin();

      // Send message to parent window
      window.parent.postMessage(
        {
          type: 'BLAXEL_LINK_CLICKED',
          url: link.href,
        },
        designerAppOrigin
      );
    },
    true
  );
}

// Initialize link click interception
setupLinkClickInterception();
