import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { Home, LayoutDashboard, Code, Brain, Wifi, Users, ChevronDown, Play, Trophy, Zap, Star, Target } from 'lucide-react';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const subjects = [
    { 
      name: 'Physics', 
      progress: 75, 
      icon: '⚛️', 
      next: "Newton's Laws",
      color: 'bg-blue-500'
    },
    { 
      name: 'Chemistry', 
      progress: 95, 
      icon: '🧪', 
      next: 'Atomic Structure',
      color: 'bg-green-500'
    },
    { 
      name: 'Biology', 
      progress: 85, 
      icon: '🧬', 
      next: 'Cell Division',
      color: 'bg-teal-500'
    },
    { 
      name: 'Mathematics', 
      progress: 45, 
      icon: '🔢', 
      next: 'Quadratic Equations',
      color: 'bg-purple-500'
    },
    { 
      name: 'Computer', 
      progress: 65, 
      icon: '🔢', 
      next: 'Operating Systems',
      color: 'bg--500'
    }
  ];

  const achievements = [
    { name: 'Lab Master', desc: 'Complete 10 virtual labs', icon: Trophy },
    { name: 'Streak Keeper', desc: '7-day learning streak', icon: Zap },
    { name: 'Peer Helper', desc: 'Help 5 classmates', icon: Star },
    { name: 'Quick Learner', desc: 'Complete lesson under 10 mins', icon: Target }
  ];

  const virtualLabs = [
    { name: 'Chemical Reactions', desc: 'Mix acids and bases safely', status: 'available', color: 'bg-green-500' },
    { name: 'Circuit Builder', desc: 'Build and test electrical circuits', status: 'available', color: 'bg-blue-500' },
    { name: 'Solar System', desc: 'Explore planetary motion', status: 'coming', color: 'bg-gray-400' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">ShikshaPlay</span>
              </div>
              <nav className="hidden md:flex space-x-1">
  <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center space-x-1">
    <Home className="w-4 h-4" />
    <span>Home</span>
  </button>

  <button className="px-3 py-2 rounded-md text-sm font-medium bg-blue-500 text-white flex items-center space-x-1">
    <LayoutDashboard className="w-4 h-4" />
    <span>Dashboard</span>
  </button>

  {/* ✅ Make STEM Subjects clickable */}
  <Link 
    to="/stem"
    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
  >
    STEM Subjects
  </Link>

  <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center space-x-1">
    <Code className="w-4 h-4" />
    <span>Code Arena</span>
  </button>

  <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
    Virtual Labs
  </button>

  <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center space-x-1">
    <Brain className="w-4 h-4" />
    <span>Smart Learning</span>
  </button>

  <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center space-x-1">
    <Wifi className="w-4 h-4" />
    <span>Sync Network</span>
  </button>

  <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center space-x-1">
    <Users className="w-4 h-4" />
    <span>Teacher Portal</span>
  </button>
</nav>

            </div>

            <div className="flex items-center space-x-4">
              <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                <option>English</option>
              </select>
              <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                <option>Light</option>
              </select>
              <span className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-md text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Online</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                J
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Welcome back, jj!</h1>
                <p className="text-gray-600 flex items-center space-x-2">
                  <span>kkll</span>
                  <span className="flex items-center space-x-1 text-purple-600">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">0 day streak</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">0</div>
              <div className="text-sm text-gray-600">Points</div>
              <div className="text-lg font-semibold text-gray-900 mt-1">Learner</div>
              <div className="text-sm text-gray-600">Level</div>
            </div>
          </div>
        </div>

        {/* Learning Progress */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Learning Progress</h2>
          </div>
          <p className="text-gray-600 mb-4">Keep up the great work! You're 0% through this month's goals.</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700">Monthly Goal Progress</span>
              <span className="font-bold text-gray-900">0%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {subjects.map((subject, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl">{subject.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{subject.name}</h3>
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded">
                  {subject.progress}%
                </span>
              </div>
              
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${subject.color} h-2 rounded-full transition-all`} 
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">Next:</p>
                <p className="text-sm font-semibold text-gray-900">{subject.next}</p>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-500 to-yellow-500 text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2 hover:from-purple-600 hover:to-yellow-600 transition-all">
                <Play className="w-4 h-4" />
                <span>Continue</span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-900">Achievements</h2>
            </div>
            <p className="text-gray-600 mb-6">Unlock badges by completing challenges and helping peers</p>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{achievement.name}</h3>
                      <p className="text-sm text-gray-600">{achievement.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Virtual Labs */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <h2 className="text-xl font-bold text-gray-900">Virtual Labs</h2>
            </div>
            <p className="text-gray-600 mb-6">Interactive experiments you can do anywhere</p>
            
            <div className="space-y-4">
              {virtualLabs.map((lab, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div>
                    <h3 className="font-semibold text-gray-900">{lab.name}</h3>
                    <p className="text-sm text-gray-600">{lab.desc}</p>
                  </div>
                  {lab.status === 'available' ? (
                    <button className={`${lab.color} text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:opacity-90 transition-opacity`}>
                      <Play className="w-4 h-4" />
                      <span>Start</span>
                    </button>
                  ) : (
                    <span className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg text-sm font-medium">
                      Coming Soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Daily Challenge */}
        <div className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Ready for today's challenge?</h2>
          <p className="mb-6 text-purple-100">Complete 3 lessons to maintain your streak and earn bonus points!</p>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium flex items-center space-x-2 hover:bg-gray-100 transition-colors">
              <Target className="w-5 h-5" />
              <span>Quick Quiz</span>
            </button>
            <button className="bg-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 hover:bg-purple-800 transition-colors">
              <Trophy className="w-5 h-5" />
              <span>Daily Challenge</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;