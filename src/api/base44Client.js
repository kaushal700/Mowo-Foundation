import { createClient } from '@mowo/sdk';
// import { getAccessToken } from '@mowo/sdk/utils/auth-utils';

// Create a client with authentication required
export const mowo = createClient({
  appId: "6905e92607f555030b948140", 
  requiresAuth: true // Ensure authentication is required for all operations
});
