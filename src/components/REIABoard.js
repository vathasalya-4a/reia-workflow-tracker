import React, { useState, useEffect, useRef } from 'react';
import { useMsal } from '@azure/msal-react';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineCalendar } from 'react-icons/ai';

// Icons & Images
import launchAttractIcon from '../images/Launch & Attract.png';
import ScreenSelectIcon from '../images/Screen & Select.png';
import DecideOfferIcon from '../images/Decide & Offer.png';
import VerifyComplyIcon from '../images/Compliance & legal Review.png';
import ReadyWelcomeIcon from '../images/Ready & Welcome.png';
import WrapTransitionIcon from '../images/Wrap & transition.png';
import DashboardImage from '../images/Hire 360 Image.png';
import LogoIcon from '../images/Logo.png';

// Login Page Component
// Login Page Component
const LoginPage = ({ handleMicrosoftLogin }) => (
  <div className="flex min-h-screen font-sans bg-white">
    <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-300 to-white p-12">
      <div className="absolute top-6 left-6 text-xl font-bold">
        <span className="text-gray-900">Hire</span>{" "}
        <span className="text-[#1D4ED8]">360</span>
      </div>
      <div className="max-w-md w-full text-left space-y-6">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">Hire <span className="text-[#1D4ED8]">360</span></h1>
        <h2 className="text-2xl font-semibold text-gray-800">
          All-in-One Hiring Platform for Recruiters.
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          From sourcing to onboarding — simplify every step of your recruitment process with
          <span className="font-semibold text-[#1D4ED8]"> Hire 360</span>.
        </p>
      </div>
    </div>

    <div className="flex-1 flex flex-col justify-between bg-white px-12 py-10">
      <div className="flex flex-col items-center justify-center flex-grow space-y-8 mt-10">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-semibold text-gray-900">Welcome to Hire 360</h2>
          <p className="text-sm text-gray-500">Streamline your hiring journey</p>
        </div>

        <button
          onClick={handleMicrosoftLogin}
          className="w-full max-w-sm flex items-center justify-center gap-3 py-2.5 px-4 rounded-md bg-[#2563eb] text-white font-medium hover:bg-[#1e40af] transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft Logo"
            className="w-5 h-5"
          />
          Sign in with Microsoft
        </button>

        <p className="text-xs text-center text-gray-400 max-w-xs">
          By signing in, you agree to <span className="text-[#2563eb] font-medium">Hire 360</span>’s Terms & Privacy Policy.
        </p>
      </div>

      <div className="text-sm text-gray-400 font-medium text-center py-2">
        Powered by <span className="text-[#2563eb] font-semibold">4A Innovation Hub</span>
      </div>
    </div>
  </div>
);

const reiaStages = {
  "Launch & Attract": [{ id: 1, title: "Create roles...", icon: launchAttractIcon, formUrl: "#" }],
  "Screen & Select": [{ id: 2, title: "Review candidates...", icon: ScreenSelectIcon, formUrl: "#" }],
  "Decide & Offer": [{ id: 3, title: "Capture decisions...", icon: DecideOfferIcon, formUrl: "#" }],
  "Verify & Comply": [{ id: 4, title: "Run checks...", icon: VerifyComplyIcon, formUrl: "#" }],
  "Ready & Welcome": [{ id: 5, title: "Equip hires...", icon: ReadyWelcomeIcon, formUrl: "#" }],
  "Wrap & Transition": [{ id: 6, title: "Manage offboarding...", icon: WrapTransitionIcon, formUrl: "#" }]
};

const Dashboard = () => {
  const { instance, accounts } = useMsal();
  const [selectedStage, setSelectedStage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true); // Initially open the sidebar
  const [isManualToggle, setIsManualToggle] = useState(false); // Flag for manual toggle
  const sidebarRef = useRef(null); // Ref for the sidebar

  const isAuthenticated = accounts.length > 0;
  const name = accounts[0]?.name;
  const firstName = name?.split(' ')[0];
  const fullName = accounts[0]?.name;


  const handleSignIn = async () => {
    try {
      await instance.loginPopup({ scopes: ['User.Read'], prompt: 'select_account' });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await instance.logoutPopup({ postLogoutRedirectUri: '/' });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !isManualToggle) {
      setSidebarOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isManualToggle]);

  if (!isAuthenticated) {
    return <LoginPage handleMicrosoftLogin={handleSignIn} />;
  }

  return (
    <div className="flex h-screen relative overflow-hidden bg-gray-100">
      {/* Slide-in Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-white border-r shadow-md z-40 transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        {/* Logo and App Name */}
        <div className="flex items-center justify-between h-16 px-4">
  {sidebarOpen ? (
    <h1 className="text-2xl font-extrabold text-gray-800">
      <span className="block mb-2 text-2xl font-bold">
        <span className="text-gray-900">Hire</span>{" "}
        <span className="text-[#1D4ED8]">360</span>
      </span>
    </h1>
  ) : (
    <div className="w-full flex justify-center">
    </div>
  )}

  <button
    className="p-2 rounded-full bg-white shadow-sm hover:shadow-md text-black transition"
    onClick={() => {
      setSidebarOpen(!sidebarOpen);
      setTimeout(() => setIsManualToggle(true), 0);
    }}
    title="Toggle Sidebar"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</div>

        {/* Sidebar content */}
        <nav className="mt-4 space-y-6 overflow-hidden">
          {/* Dashboard section */}
          <div className="px-2">
            {sidebarOpen && <h3 className="text-xs text-gray-500 uppercase mb-2"></h3>}
            <ul className="space-y-1">
              {['Dashboard','Resume Parsing', 'ATS Scoring'].map((item, index) => {
                const isActive = selectedStage === item;
                return (
                  <li
                    key={index}
                    onClick={() => setSelectedStage(item)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer text-sm font-medium ${
                      isActive ? 'bg-gray-100 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="truncate">{sidebarOpen ? item : item[0]}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Candidate Pipeline section */}
          <div className="px-2">
            {sidebarOpen && <h3 className="text-xs text-gray-500 uppercase mb-2">Candidate Pipeline</h3>}
            <ul className="space-y-1">
              {Object.keys(reiaStages).map((stage, index) => {
                const isActive = selectedStage === stage;
                return (
                  <li
                    key={index}
                    onClick={() => setSelectedStage(stage)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer text-sm font-medium ${
                      isActive ? 'bg-gray-100 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="truncate">{sidebarOpen ? stage : stage[0]}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* User info & logout */}
        <div className="absolute bottom-4 left-0 right-0 px-3 py-3 user-dropdown">
          {sidebarOpen ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 overflow-hidden">
                <FaUserCircle className="text-2xl text-black" />
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-medium text-black truncate">{fullName}</span>
                  <span className="text-xs text-gray-500 truncate">{accounts[0]?.username}</span>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="text-black hover:text-black transition-all text-xl"
                title="Logout"
              >
                <FiLogOut />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <button
                onClick={handleSignOut}
                className="text-black hover:text-black transition-all text-xl"
                title="Logout"
              >
                <FiLogOut />
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Toggle Button for Small Screens */}

      {/* Main Content */}
      <main
        className={`flex-1 bg-gradient-to-br from-blue-100/70 via-blue-300/70 to-white p-6 overflow-y-auto transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
  <span>👋</span>
  <span>Welcome, {firstName}</span>
</h1>
          <div className="bg-white p-3 rounded-xl shadow-md flex items-center space-x-3 max-w-xs">
            <AiOutlineCalendar className="w-6 h-6 text-gray-700" />
            <div className="text-sm font-medium text-gray-800">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
          </div>
        </header>
<div className="w-full bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center justify-between">
  {/* Left Section: Text Content */}
  <div className="w-full md:w-2/3 text-left">
    <h1 className="text-3xl font-bold mb-2">
      <span className="text-gray-900">Hire</span>{" "}
      <span className="text-[#1D4ED8]">360</span>
    </h1>
    <h2 className="text-xl text-gray-800 font-medium mb-3">
      All-in-One Hiring Platform for Recruiters.
    </h2>
    <p className="text-gray-700 text-base leading-relaxed">
      Your all-in-one hiring companion, designed to streamline recruitment by integrating smart candidate sourcing, seamless screening, and efficient onboarding. The dashboard provides real-time insights to help you make data-driven hiring decisions faster, ensuring you secure the best talent every time.
    </p>
  </div>

  {/* Right Section: Reserved for Image */}
  <div className="hidden md:block w-full md:w-1/3 h-[180px]"></div>
</div>
      </main>
    </div>
  );
};

export default Dashboard;
