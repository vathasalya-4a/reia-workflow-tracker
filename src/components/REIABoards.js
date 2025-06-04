import React, { useState,useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import launchAttractIcon from '../images/Launch & Attract.png';
import ScreenSelectIcon from '../images/Screen & Select.png';
import DecideOfferIcon from '../images/Decide & Offer.png';
import VerifyComplyIcon from '../images/Compliance & legal Review.png';
import ReadyWelcomeIcon from '../images/Ready & Welcome.png';
import WrapTransitionIcon from '../images/Wrap & transition.png';
import LogoIcon from '../images/Logo.png';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';

// Define REIA workflow stages and steps with individual form URLs
const reiaStages = {
  "Launch & Attract": [
    {
      id: 1,
      title: "Create roles, post jobs, track applicants",
      icon: launchAttractIcon,
      formUrl: "https://apps.powerapps.com/play/e/default-797a3cb8-5bcf-4705-a748-b62328ac2c9c/a/3e66dcdd-da52-4364-b002-24492f95d732?tenantId=797a3cb8-5bcf-4705-a748-b62328ac2c9c&hint=9446b508-fc58-481c-97fd-72220d8a20a9&sourcetime=1746025264070&source=portal"
    }
  ],
  "Screen & Select": [
    {
      id: 2,
      title: "Review candidates, add notes, shortlist picks",
      icon: ScreenSelectIcon,
      formUrl: "https://apps.powerapps.com/play/FORM_URL_2"
    }
  ],
  "Decide & Offer": [
    {
      id: 3,
      title: "Capture decisions, generate offers, track outcomes",
      icon: DecideOfferIcon,
      formUrl: "https://apps.powerapps.com/play/FORM_URL_3"
    }
  ],
  "Verify & Comply": [
    {
      id: 4,
      title: "Run checks, verify IDs, ensure compliance",
      icon: VerifyComplyIcon,
      formUrl: "https://apps.powerapps.com/play/FORM_URL_4"
    }
  ],
  "Ready & Welcome": [
    {
      id: 5,
      title: "Equip hires with access and info",
      icon: ReadyWelcomeIcon,
      formUrl: "https://apps.powerapps.com/play/FORM_URL_5"
    }
  ],
  "Wrap & Transition": [
    {
      id: 6,
      title: "Manage offboarding, exits, and transitions",
      icon: WrapTransitionIcon,
      formUrl: "https://apps.powerapps.com/play/FORM_URL_6"
    }
  ]
};

// Create a custom Login Page
const LoginPage = ({ handleMicrosoftLogin }) => {
  return (
    <div className="flex min-h-screen font-sans bg-white">
      <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-300 to-white p-12">
        
        <div className="absolute top-6 left-6 text-xl font-bold">
          <span className="text-gray-900">Hire</span>{" "}
          <span className="text-[#1D4ED8]">360</span>
        </div>

        <div className="max-w-md w-full text-left space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            <span className="text-gray-900">Hire</span>{" "}
            <span className="text-[#1D4ED8]">360</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800">
            All-in-One Hiring Platform for Recruiters.
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            From sourcing to onboarding — simplify every step of your recruitment process with
            <span className="font-semibold text-[#1D4ED8]"> Hire 360</span>. Empower your hiring team with speed, visibility, and automation.
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between bg-white px-12 py-10 relative">
        <div className="flex flex-col items-center justify-center flex-grow space-y-8 mt-10">
          
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-semibold text-gray-900">Welcome to Hire 360</h2>
            <p className="text-sm text-gray-500">Your all-in-one hiring platform</p>
          </div>

          <button
            onClick={handleMicrosoftLogin}
            className="w-full max-w-sm flex items-center justify-center gap-3 py-2.5 px-4 rounded-md bg-[#2563eb] text-white font-medium hover:bg-[#1e40af] transition duration-200"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft Logo"
              className="w-5 h-5"
            />
            Sign in with Microsoft
          </button>

          <p className="text-xs text-center text-gray-400 max-w-xs leading-snug">
            By signing in, you agree to <span className="text-[#2563eb] font-medium">Hire 360</span>’s Terms & Privacy Policy.
          </p>
        </div>

        <div className="text-sm text-gray-400 font-medium text-center py-2">
          Powered by <span className="text-[#2563eb] font-semibold">4A Innovation Hub</span>
        </div>
      </div>
    </div>
  );
};

// Sidebar Component

const Sidebar = ({ stages, currentStage, setStage, userName, handleSignIn, handleSignOut }) => (
  <div className="w-64 h-screen bg-white border-r border-gray-200 p-4 flex flex-col justify-between font-sans text-sm">
    
    {/* Top Branding */}
    <div className="px-2 mb-4">
      <div className="text-2xl font-bold text-gray-900">
        Hire<span className="text-[#1D4ED8]">360</span>
      </div>
    </div>

    {/* Stage Navigation */}
    <div className="space-y-2 flex flex-col">
      {Object.keys(stages).map((stage) => {
        const iconUrl = stages[stage][0]?.icon;
        const isSelected = currentStage === stage;

        return (
          <div
            key={stage}
            onClick={() => setStage(stage)}
            className={`cursor-pointer rounded-lg px-4 py-2 flex items-center gap-3 transition-all duration-150 ${
              isSelected
                ? 'bg-blue-100 text-blue-800 font-semibold border-r-4 border-blue-600'
                : 'hover:bg-gray-100 text-gray-800'
            }`}
          >
            {iconUrl && (
              <img
                src={iconUrl}
                alt={`${stage} icon`}
                className="w-5 h-5"
              />
            )}
            <span className="truncate">{stage}</span>
          </div>
        );
      })}
    </div>

    {/* Bottom User Info */}
    <div className="mt-6 pt-4 border-t border-gray-200">
      <div className="text-sm text-gray-700 mb-1">{userName}</div>
      <button
        onClick={handleSignOut}
        className="text-xs text-blue-600 hover:underline"
      >
        Sign Out
      </button>
    </div>
  </div>
);

// Step Selector Component (if multiple steps per stage)
const StepSelector = ({ steps, selectedItem, onSelect }) => (
  <div className="w-80 bg-white border-r border-gray-200 p-4 space-y-2">
    <h3 className="text-md font-semibold mb-2">Steps</h3>
    {steps.map(step => (
      <div
        key={step.id}
        onClick={() => onSelect(step)}
        className={`cursor-pointer p-2 rounded-lg ${selectedItem?.id === step.id ? 'bg-blue-50 text-blue-700 font-semibold' : 'hover:bg-gray-100 text-gray-800'}`}
      >
        {step.title}
      </div>
    ))}
  </div>
);

// Form Viewer Component
const FormViewer = ({ selected }) => {
    const [loading, setLoading] = useState(true);
    const [iframeKey, setIframeKey] = useState(Date.now());
  
    React.useEffect(() => {
      setLoading(true);
      setIframeKey(Date.now());
    }, [selected]);
  
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 7000);
    };
  
    if (!selected) {
      return (
        <div className="flex-1 text-gray-500 text-center flex items-center justify-center">
          <p>Select a step to view the Power Apps form.</p>
        </div>
      );
    }
  
    return (
      <div className="flex-1 relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-opacity-50"></div>
          </div>
        )}
        <iframe
          key={iframeKey}
          title="Power Apps Form"
          width="100%"
          height="100%"
          src={selected.formUrl}
          frameBorder="0"
          allowFullScreen
          className="rounded-none border-0 z-10"
          onLoad={handleLoad}
        />
      </div>
    );
  };    

export default function REIABoard() {
  const [currentStage, setCurrentStage] = useState(null); 
  const [selectedItem, setSelectedItem] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reiaStagesState] = useState(reiaStages);

  const { instance, accounts } = useMsal();
  const isAuthenticated = accounts.length > 0;
  const name = accounts[0]?.name;
  const firstName = name?.split(' ')[0];

  const handleSignIn = async () => {
  try {
    await instance.loginPopup({
      scopes: ["User.Read"],
      prompt: "select_account",
    });
  } catch (error) {
    console.error("Login failed", error);
  }
};

  const handleSignOut = async () => {
    try {
      await instance.logoutPopup({
        postLogoutRedirectUri: "/",
      });
      setCurrentStage(null);
      setSelectedItem(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
  if (isAuthenticated && !currentStage && !selectedItem) {
    const firstStage = Object.keys(reiaStages)[0];
    const firstStep = reiaStages[firstStage][0];
    setCurrentStage(firstStage);
    setSelectedItem(firstStep);
  }
}, [isAuthenticated, currentStage, selectedItem]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.user-dropdown')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Loading REIA stages...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-red-500">{`Error: ${error}`}</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginPage handleMicrosoftLogin={handleSignIn} />;
  }

return (
  <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
    {/* Header */}
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center border-b">
  <div className="flex items-center gap-3">
    <img src={LogoIcon} alt="Hire 360 Logo" className="h-9 w-9" />
    <h1 className="text-xl font-bold text-blue-800">HIRE 360</h1>
  </div>
  <div className="text-sm text-gray-500 hidden sm:block">
    {new Date().toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })}
  </div>
  <div className="relative user-dropdown">
    <div
      className="flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100"
      onClick={() => setDropdownOpen(!dropdownOpen)}
    >
      <FaUserCircle className="text-blue-700 text-xl" />
      <span className="font-semibold text-gray-700">{firstName}</span>
      <FaChevronDown className="text-gray-600 text-sm" />
    </div>
    {dropdownOpen && (
      <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg z-50 overflow-hidden">
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-gray-100 text-sm"
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    )}
  </div>
</header>

    {/* Main Dashboard */}
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4 overflow-y-auto">
        <h2 className="text-gray-700 font-semibold text-base mb-4">Workflow Stages</h2>
        <nav className="space-y-2">
          {Object.keys(reiaStages).map((stage) => {
            const iconUrl = reiaStages[stage][0]?.icon;
            const isSelected = currentStage === stage;
            return (
              <div
                key={stage}
                onClick={() => {
                  setCurrentStage(stage);
                  setSelectedItem(reiaStages[stage][0]);
                }}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
                  isSelected ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100 text-gray-800'
                }`}
              >
                {iconUrl && <img src={iconUrl} alt={stage} className="h-5 w-5" />}
                <span className="truncate">{stage}</span>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-md h-full p-4">
          <FormViewer selected={selectedItem} />
        </div>
      </main>
    </div>

    {/* Footer */}
    <footer className="text-sm text-gray-500 text-center py-3 border-t bg-white">
      © {new Date().getFullYear()} Powered by <span className="text-blue-600 font-semibold">4A Innovation Hub</span>
    </footer>
  </div>
);
}
