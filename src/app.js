import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import './index.css';
import REIABoard from "./components/REIABoard";

// Initialize the MSAL instance
const msalInstance = new PublicClientApplication(msalConfig);

// Main App component
function App() {
  return (
    <MsalProvider instance={msalInstance}>
      {/* All REIA Components now have access to MSAL context */}
      <REIABoard/>
    </MsalProvider>
  );
}

export default App;
