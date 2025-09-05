/*
  Example framework.js for Private Embeddable Framework deployments.
  Rename this file to framework.js and upload it in Genesys Cloud:
  Admin > Integrations > Private Genesys Cloud Embeddable Framework > Configuration.

  Docs:
  - https://help.mypurecloud.com/articles/add-a-private-genesys-cloud-embeddable-framework-integration/
  - https://help.mypurecloud.com/articles/about-genesys-cloud-embeddable-framework/
*/

/* global PCEF */

(function initEmbeddableFrameworkConfig() {
  // PCEF is injected by the Embeddable Framework runtime inside the iframe.
  if (typeof PCEF === 'undefined') {
    return;
  }

  // Map region -> OAuth Client ID (Implicit Grant recommended for browser)
  var clientIds = {
    'apps.usw2.pure.cloud': '<REPLACE_WITH_OAUTH_CLIENT_ID_USW2>',
    'apps.usw1.pure.cloud': '<REPLACE_WITH_OAUTH_CLIENT_ID_USW1>',
    'apps.use2.pure.cloud': '<REPLACE_WITH_OAUTH_CLIENT_ID_USE2>',
    'apps.euw2.pure.cloud': '<REPLACE_WITH_OAUTH_CLIENT_ID_EUW2>',
    'apps.apse2.pure.cloud': '<REPLACE_WITH_OAUTH_CLIENT_ID_APSE2>',
    'apps.apne2.pure.cloud': '<REPLACE_WITH_OAUTH_CLIENT_ID_APNE2>'
  };

  var settings = {
    // Example: limit displayed call controls, theme colors, etc. See Developer Center settings docs.
    // These are illustrative; adjust per your needs.
    display: {
      // order and visibility of controls are configurable in official settings
      // e.g., callControls: ['pickup', 'mute', 'hold', 'transfer', 'keypad']
    },
    theme: {
      // example theme overrides
      // primaryColor: '#2563eb',
      // backgroundColor: '#ffffff'
    },
    enableServerSideLogging: false
  };

  // Initialize the framework
  PCEF.init({
    clientIds: clientIds,
    settings: settings
  });

  // Subscribe to events (examples)
  PCEF.subscribe('Interaction.started', function (interaction) {
    // interaction object contains mediaType, id, participants, etc.
    // Implement screen pop or logging here if you wish.
  });

  PCEF.subscribe('Interaction.ended', function (interaction) {
    // Handle wrap-up logging or disposition capture.
  });
})();

