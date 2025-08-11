import React, { useState, useEffect, useRef } from 'react';
import { useMsal } from '@azure/msal-react';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineCalendar } from 'react-icons/ai';
import launchAttractIcon from '../images/Launch & Attract.png';
import ScreenSelectIcon from '../images/Screen & Select.png';
import DecideOfferIcon from '../images/Decide & Offer.png';
import VerifyComplyIcon from '../images/Compliance & legal Review.png';
import ReadyWelcomeIcon from '../images/Ready & Welcome.png';
import WrapTransitionIcon from '../images/Wrap & transition.png';
import DashboardImage from '../images/Hire 360 Image.png';
import LogoIcon from '../images/Logo.png';

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
  "Launch & Attract": [{ id: 1, title: "Create roles...", icon: launchAttractIcon, formUrl: "https://apps.powerapps.com/play/e/default-797a3cb8-5bcf-4705-a748-b62328ac2c9c/a/3e66dcdd-da52-4364-b002-24492f95d732?tenantId=797a3cb8-5bcf-4705-a748-b62328ac2c9c&hint=9446b508-fc58-481c-97fd-72220d8a20a9&sourcetime=1749047159108" }],
  "Screen & Select": [{ id: 2, title: "Review candidates...", icon: ScreenSelectIcon, formUrl: "https://apps.powerapps.com/play/e/default-797a3cb8-5bcf-4705-a748-b62328ac2c9c/a/f3b1e73b-1ea4-4fe9-8e0e-ea89ba9bb0f8?tenantId=797a3cb8-5bcf-4705-a748-b62328ac2c9c&hint=af6d742f-468d-4180-abdc-e1b39080d519&sourcetime=1749047482189" }],
  "Decide & Offer": [{ id: 3, title: "Capture decisions...", icon: DecideOfferIcon, formUrl: "https://apps.powerapps.com/play/e/default-797a3cb8-5bcf-4705-a748-b62328ac2c9c/a/3e8aed6f-b323-4302-9092-d015e139673a?tenantId=797a3cb8-5bcf-4705-a748-b62328ac2c9c&hint=b48aca78-16c1-4772-903f-1cc05ede04b2&sourcetime=1749047600573" }],
  "Verify & Comply": [{ id: 4, title: "Run checks...", icon: VerifyComplyIcon, formUrl: "https://apps.powerapps.com/play/e/default-797a3cb8-5bcf-4705-a748-b62328ac2c9c/a/9b70abbd-3b7c-4117-8ae9-d35dc3e13f92?tenantId=797a3cb8-5bcf-4705-a748-b62328ac2c9c&hint=7d4feda1-6b05-4938-ae65-51986af17e06&sourcetime=1749047628414" }],
  "Ready & Welcome": [{ id: 5, title: "Equip hires...", icon: ReadyWelcomeIcon, formUrl: "https://apps.powerapps.com/play/e/default-797a3cb8-5bcf-4705-a748-b62328ac2c9c/a/c589f7b5-32d2-49cf-b7ce-c6e6e3e1e0b1?tenantId=797a3cb8-5bcf-4705-a748-b62328ac2c9c&hint=5aac4ea8-262e-4614-81a2-8afd2858c728&sourcetime=1749047800882" }],
  "Wrap & Transition": [{ id: 6, title: "Manage offboarding...", icon: WrapTransitionIcon, formUrl: "https://apps.powerapps.com/play/e/default-797a3cb8-5bcf-4705-a748-b62328ac2c9c/a/eb7360d8-9a85-4087-89b4-ca10c2e5def7?tenantId=797a3cb8-5bcf-4705-a748-b62328ac2c9c&hint=667e2b68-4f0b-4074-ad05-186f810cc94d&sourcetime=1754881683606" }],
  "Skip the Line": [{ id: 6, title: "Skip the Line...", icon: WrapTransitionIcon, formUrl: "https://apps.powerapps.com/play/e/default-797a3cb8-5bcf-4705-a748-b62328ac2c9c/a/c2251a40-6864-4b1b-b8a5-c3497893aac9?tenantId=797a3cb8-5bcf-4705-a748-b62328ac2c9c&hint=c6b96735-91a1-4bc3-8030-22638556d639&sourcetime=1754881758563" }]
};

const reportsStages = {
  "Time Keeper": [
    {
      id: 1,
      title: "Track time and attendance",
      icon: WrapTransitionIcon ,
      formUrl: "https://apps.powerapps.com/play/e/default-797a3cb8-5bcf-4705-a748-b62328ac2c9c/a/759a4fca-8624-40c8-95bd-640ed916c930?tenantId=797a3cb8-5bcf-4705-a748-b62328ac2c9c&sourcetime=1754882297529"
    }
  ],
  "Jobs Dashboard": [
    {
      id: 2,
      title: "View job postings and stats",
      icon: WrapTransitionIcon ,
      formUrl: "https://app.powerbi.com/reportEmbed?reportId=dd775af6-5aed-4585-a2b9-2ed3e2998cb4&autoAuth=true&ctid=797a3cb8-5bcf-4705-a748-b62328ac2c9c"
    }
  ],
  "Candidates Dashboard": [
    {
      id: 3,
      title: "Manage candidate profiles",
      icon: WrapTransitionIcon, 
      formUrl: "https://app.powerbi.com/reportEmbed?reportId=ce16da91-0793-4b53-bc80-a0df712bc9cf&autoAuth=true&ctid=797a3cb8-5bcf-4705-a748-b62328ac2c9c"
    }
  ]
};


const Dashboard = () => {
  const { instance, accounts } = useMsal();
  const [selectedStage, setSelectedStage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isManualToggle, setIsManualToggle] = useState(false); 
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const sidebarRef = useRef(null);

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

  const getStageInfo = (stageName) => {
  if (reiaStages[stageName]) {
    return reiaStages[stageName][0];
  } else if (reportsStages[stageName]) {
    return reportsStages[stageName][0];
  } else {
    return null;
  }
};

const stageInfo = getStageInfo(selectedStage);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !isManualToggle) {
      setSidebarOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isManualToggle]);

useEffect(() => {
  if (stageInfo) {
    setIsIframeLoading(true);
  }
}, [selectedStage]);

  if (!isAuthenticated) {
    return <LoginPage handleMicrosoftLogin={handleSignIn} />;
  }

  return (
    <div className="flex h-screen relative overflow-hidden bg-gray-100">
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-white border-r shadow-md z-40 transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4">
  {sidebarOpen ? (
    <div className="flex items-center justify-between">
    <h1 className="text-2xl font-extrabold text-gray-800">
      <span className="block mb-2 text-2xl font-bold">
        <span className="text-gray-900">Hire</span>{" "}
        <span className="text-[#1D4ED8]">360</span>
      </span>
    </h1>
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
  ) : (
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
  )}
</div>

        {/* Sidebar content */}
        <nav className="mt-4 space-y-6 overflow-hidden">
  <div className="px-2">
    {sidebarOpen && <h3 className="text-xs text-gray-500 uppercase mb-2"></h3>}
    <ul className="space-y-1">
      {['Dashboard'].map((item, index) => {
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

  {/* Candidate Pipeline */}
  <div className="px-2">
    {sidebarOpen && <h3 className="text-xs text-gray-500 uppercase mb-2">Candidate Pipeline</h3>}
    <ul className="space-y-1">
      {Object.entries(reiaStages).map(([stage, items], index) => {
        const isActive = selectedStage === stage;
        const icon = items[0].icon;

        return (
          <li
            key={index}
            onClick={() => setSelectedStage(stage)}
            className={`relative group flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer text-sm font-medium transition ${
              isActive ? 'bg-gray-100 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {sidebarOpen ? (
              <span className="truncate">{stage}</span>
            ) : (
              <div className="relative flex items-center space-x-2">
                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-white shadow-lg border rounded-md px-3 py-1 text-xs font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                  {stage}
                </div>
                <img src={icon} alt={`${stage} icon`} className="w-5 h-5 mr-8" />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  </div>

  {/* Reports Section */}
  <div className="px-2">
  {sidebarOpen && <h3 className="text-xs text-gray-500 uppercase mb-2">Reports</h3>}
  <ul className="space-y-1">
    {Object.entries(reportsStages).map(([report, items], index) => {
      const isActive = selectedStage === report;
      const icon = items[0].icon;

      return (
        <li
          key={index}
          onClick={() => setSelectedStage(report)}
          className={`relative group flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer text-sm font-medium transition ${
            isActive ? 'bg-gray-100 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          {sidebarOpen ? (
            <span className="truncate">{report}</span>
          ) : (
            <div className="relative flex items-center space-x-2">
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-white shadow-lg border rounded-md px-3 py-1 text-xs font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                {report}
              </div>
              <img src={icon} alt={`${report} icon`} className="w-5 h-5 mr-8" />
            </div>
          )}
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

      <main
  className={`flex-1 bg-gradient-to-br from-blue-100/70 via-blue-300/70 to-white overflow-y-auto transition-all duration-300 ${
    sidebarOpen ? 'ml-64' : 'ml-20'
  }`}
>
  {/* Conditionally render header when a stage is not selected */}
  {!reiaStages[selectedStage] && !reportsStages[selectedStage] && (
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
  )}

  {stageInfo  ? (
    <div className="w-full h-full relative rounded-xl overflow-hidden bg-white shadow-md">
      {isIframeLoading && (
        <div className="absolute inset-0 bg-white flex items-center justify-center z-10">
          <div className="w-12 h-12 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}
      <iframe
        src={stageInfo.formUrl}
        title={selectedStage}
        className="w-full h-[100vh] border-none relative z-0"
        onLoad={() => setIsIframeLoading(false)}
        loading="eager"
      />
    </div>
  ) : (
    <div className="w-full bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center justify-between">
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
      <div className="hidden md:block w-full md:w-1/3 h-[180px]"></div>
    </div>
  )}
</main>
    </div>
  );
};

export default Dashboard;
