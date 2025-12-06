import React, { useState } from "react";
import { 
  Users, 
  BookOpen, 
  BarChart2, 
  Globe, 
  Lightbulb, 
  ClipboardCheck, 
  Clock, 
  TrendingUp, 
  HelpCircle, 
  CornerDownRight 
} from "lucide-react";

// --- Data Configuration ---
const CARD_CONFIG = [
  {
    icon: <Users size={24} />,
    value: "45",
    label: "Active Students",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: <BookOpen size={24} />,
    value: "12",
    label: "Custom Assignments",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: <BarChart2 size={24} />,
    value: "84%",
    label: "Avg Mastery Score",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: <Globe size={24} />,
    value: "3",
    label: "Culturally Adapted Lessons",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];

const SUGGESTIONS_DATA = [
    {
      icon: <TrendingUp size={20} />,
      name: "Priya Sharma",
      message: "Mastered Chemical Bonds – ready for advanced organic reactions.",
      action: "Accelerate",
      color: "text-green-700 bg-green-50 border-green-300",
      bColor: "border-green-600",
    },
    {
      icon: <HelpCircle size={20} />,
      name: "Mukesh Singh",
      message: "Consistently scoring low on Algebra I concepts.",
      action: "Intervene",
      color: "text-yellow-700 bg-yellow-50 border-yellow-300",
      bColor: "border-yellow-600",
    },
    {
      icon: <CornerDownRight size={20} />,
      name: "Ravi Kumar",
      message: "Missed 2 classes; high potential for knowledge gap in Physics.",
      action: "Catch-up",
      color: "text-blue-700 bg-blue-50 border-blue-300",
      bColor: "border-blue-600",
    },
];

const QUICK_ACTIONS = [
  "Create New Lesson Plan",
  "Review Pending Work",
  "Generate Progress Report",
];

const TABS = ["overview", "students", "create", "analytics"];


// --- Component Definitions ---

// 1. DashboardCard Component
const DashboardCard = ({ icon, value, label, color, bg }) => (
  <div className={`bg-white p-6 rounded-xl border border-gray-200 flex items-center gap-5 transition duration-200 hover:border-blue-300 hover:shadow-sm`}>
    <div className={`p-4 rounded-full ${bg} ${color} flex-shrink-0`}>
      {icon}
    </div>
    <div>
      <p className="text-3xl font-extrabold text-gray-900 leading-none">{value}</p>
      <p className="text-gray-500 text-sm font-medium mt-1">{label}</p>
    </div>
  </div>
);

// 2. DashboardTabs Component
const DashboardTabs = ({ activeTab, setActiveTab }) => (
    <div className="flex gap-1 mb-6 border-b border-gray-200">
        {TABS.map((tab) => (
            <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 capitalize text-base font-semibold border-b-3 transition duration-200 ${
                    activeTab === tab
                        ? "border-blue-600 text-blue-600" 
                        : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
                }`}
            >
                {tab}
            </button>
        ))}
    </div>
);

// 3. AISuggestionsPanel Component
const AISuggestionsPanel = () => {
    return (
        <div className="lg:col-span-2 bg-white rounded-xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-5">
                <Lightbulb className="text-yellow-500" size={24} />
                <h2 className="text-xl font-bold text-gray-800">
                    AI-Driven Recommendations
                </h2>
            </div>
            <p className="text-gray-500 text-sm mb-6 max-w-lg">
                Identify students requiring **intervention** or **acceleration** based on recent performance data.
            </p>

            <div className="flex flex-col gap-4">
                {SUGGESTIONS_DATA.map((s, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-between p-4 rounded-lg border border-l-4 ${s.color} border-l-${s.bColor} transition duration-200 hover:shadow-sm`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`mt-1 ${s.color}`}>{s.icon}</div>
                            <div>
                                <p className="font-bold text-gray-800">{s.name}</p>
                                <p className="text-sm text-gray-600 mt-0.5">{s.message}</p>
                            </div>
                        </div>
                        <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg text-sm shadow-md hover:bg-blue-700 transition duration-150 transform hover:translate-y-[-1px] active:shadow-none">
                            {s.action}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

// 4. Main TeacherDashboard Component
export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="px-10 py-12 w-full bg-gray-50 min-h-screen font-sans">
      
      {/* Header and Call-to-Action */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Teacher Platform 👨‍🏫
          </h1>
          <p className="text-gray-500 mt-1 text-lg">
            Focus on what matters most: student success and personalized growth.
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
            <Clock size={18} />
            Start Daily Session
        </button>
      </header>
      
      <hr className="mb-8 border-gray-200" />

      {/* Tabs Component */}
      <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      {activeTab === "overview" && (
        <main className="pt-4">
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {CARD_CONFIG.map((data, index) => (
              <DashboardCard
                key={index}
                icon={data.icon}
                value={data.value}
                label={data.label}
                color={data.color}
                bg={data.bg}
              />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-7">
            
            {/* AI Suggestions Panel (2/3 width) */}
            <AISuggestionsPanel />

            {/* Quick Actions Panel (1/3 width) */}
            <div className="lg:col-span-1 bg-white rounded-xl p-8 border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <ClipboardCheck className="text-cyan-600" size={24} />
                  <h2 className="text-xl font-bold text-gray-800">
                    Platform Tools
                  </h2>
                </div>
                <p className="text-gray-500 text-sm mb-6">
                  Quick access to frequent administrative tasks.
                </p>

                <div className="flex flex-col gap-3">
                  {QUICK_ACTIONS.map((action, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition duration-150 active:bg-gray-200 flex items-center justify-between"
                    >
                      <span>{action}</span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer/Timestamp */}
              <div className="mt-8 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  Last updated: {new Date().toLocaleDateString('en-US', {weekday: 'long', hour: '2-digit', minute: '2-digit'})}
                </p>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Placeholder for other tabs */}
      {activeTab !== "overview" && (
        <div className="mt-8 text-center py-20 bg-white rounded-xl border border-gray-200">
          <p className="text-xl font-medium text-gray-600">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Module: Under Development
          </p>
          <p className="text-gray-400 mt-2">
            Detailed management of {activeTab} will be available in the next update.
          </p>
        </div>
      )}
    </div>
  );
}