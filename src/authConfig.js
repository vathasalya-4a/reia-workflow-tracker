export const msalConfig = {
    auth: {
      clientId: "4254acd0-a301-481a-a00e-63de081b7466", // Replace this with actual Application (client) ID from Azure
      authority: "https://login.microsoftonline.com/797a3cb8-5bcf-4705-a748-b62328ac2c9c", // Replace this with Directory (tenant) ID
      redirectUri: "http://localhost:3000", // Or your production URL (must match in Azure App)
    },
    cache: {
      cacheLocation: "localStorage", // Persist authentication even after browser refresh
      storeAuthStateInCookie: false, // Recommended false unless issues with older browsers
    },
  };
  