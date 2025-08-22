// src/App.js

import React, { useState, useEffect } from 'react';
import { 
  User, 
  BookOpen, 
  Code, 
  FileText, 
  Users, 
  Menu, 
  X, 
  Check, 
  Lock,
  Github,
  Calendar,
  Target,
  Brain,
  Mail,
  Video,
  Award,
  TrendingUp,
  Shield,
  Globe,
  Rocket,
  Trophy,
  UserPlus,
  ArrowRight,
  Play
} from 'lucide-react';
import './index.css'; // This line imports your stylesheet

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Mock user data
  const userData = {
    name: "Priya Sharma",
    email: "priya@example.com",
    currentYear: "3rd Year",
    major: "Computer Science",
    skills: ["React", "Python", "Machine Learning", "UI/UX Design"]
  };

  // Loading Screen Component
  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto mb-4 relative">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='logoGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ffffff;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a0a0a0;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ctext x='200' y='250' text-anchor='middle' fill='url(%23logoGrad)' font-family='Arial, sans-serif' font-size='80' font-weight='300'%3ESaarthi%3C/text%3E%3Cpath d='M320 180 L340 160 L360 180 L340 200 Z' fill='url(%23logoGrad)' transform='rotate(45 340 180)'/%3E%3C/svg%3E"
              alt="Saarthi Logo"
              className="w-full h-full object-contain animate-pulse"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full blur-lg opacity-30 animate-ping"></div>
        </div>
        <div className="text-white text-xl font-light mb-4">Launching Your Future...</div>
        <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse" style={{animation: 'loading 2s ease-in-out infinite'}}></div>
        </div>
      </div>
    </div>
  );

  // Navigation Component with Glass Effect
  const Navigation = () => (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-white text-xl font-light tracking-wide">Saarthi</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {!isAuthenticated ? (
              <>
                <button 
                  onClick={() => setCurrentPage('landing')}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Home
                </button>
                <button 
                  onClick={() => {setIsAuthenticated(true); setCurrentPage('dashboard');}}
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Enter Portal
                </button>
              </>
            ) : (
              <>
                {['Dashboard', 'Learning Paths', 'Projects', 'Resume', 'Community', 'Hackathons'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => setCurrentPage(item.toLowerCase().replace(' ', '-'))}
                    className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative group"
                  >
                    {item}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></div>
                  </button>
                ))}
                <div className="flex items-center space-x-3">
                  {!isPremium && (
                    <button 
                      onClick={() => setIsPremium(true)}
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25"
                    >
                      Unlock Premium
                    </button>
                  )}
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2">
                    <User className="w-5 h-5 text-white" />
                    <span className="text-white text-sm">{userData.name}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-purple-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden backdrop-blur-lg bg-black/40 border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile menu items */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  // Glass Card Component
  const GlassCard = ({ children, className = "", hover = true, onClick }) => (
    <div 
      className={`backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl transition-all duration-500 ${
        hover ? 'hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10' : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );

  // Feature Card with Advanced Hover Effects
  const FeatureCard = ({ feature, index }) => (
    <div
      className="relative group cursor-pointer"
    >
      <GlassCard className="p-8 h-full relative overflow-hidden">
        {/* Background gradient effect */}
        <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-all duration-500 ${feature.gradient}`} />
        
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
            <feature.icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-500">
            {feature.title}
          </h3>
          
          <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-500">
            {feature.desc}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {feature.free && <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">Free</span>}
              {feature.premium && <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm border border-yellow-500/30">Premium</span>}
              {feature.payPerUse && <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30">Pay-per-use</span>}
            </div>
            
            <div className="transform group-hover:translate-x-2 transition-transform duration-500">
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );

  // Landing Page with Dark Theme
  const LandingPage = () => (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-block bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3 text-sm text-gray-300 mb-6">
              🚀 Your Career Journey Starts Here
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="block text-white mb-4">Stop Being</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Just Another Graduate
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            While others struggle with fragmented career prep, you'll dominate with our 
            <span className="text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold"> AI-powered ecosystem</span> 
            that transforms students into industry-ready professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={() => {setIsAuthenticated(true); setCurrentPage('dashboard');}}
              className="group bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                Start Your Transformation
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            
            <button className="group bg-white/5 backdrop-blur-lg border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <span className="flex items-center justify-center">
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <p className="text-gray-400 mb-6">Trusted by students from</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['IIT', 'NIT', 'BITS', 'VIT', 'JIIT', 'DTU'].map((college) => (
                <span key={college} className="text-gray-300 font-semibold text-lg">{college}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Showcase with Glass Cards */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Brutal Reality
              <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Every Student Faces
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While you're drowning in information overload, your peers are getting ahead. Here's what's holding you back.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Information Overload", desc: "Thousands of resources, zero direction. You're paralyzed by choice.", color: "from-red-500 to-pink-500" },
              { icon: Target, title: "No Clear Roadmap", desc: "Wandering aimlessly while others follow structured paths to success.", color: "from-orange-500 to-red-500" },
              { icon: Code, title: "Useless Projects", desc: "Building todo apps while others create industry-grade solutions.", color: "from-yellow-500 to-orange-500" },
              { icon: FileText, title: "Ignored Resumes", desc: "Your resume gets 6 seconds. Make them count or get rejected.", color: "from-green-500 to-yellow-500" },
              { icon: Users, title: "Network Void", desc: "No connections = No opportunities. It's that simple.", color: "from-blue-500 to-green-500" },
              { icon: Shield, title: "Interview Panic", desc: "Blanking out in interviews because practice makes perfect.", color: "from-purple-500 to-blue-500" }
            ].map((problem, index) => (
              <GlassCard key={index} className="p-8 group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <problem.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{problem.title}</h3>
                <p className="text-gray-300">{problem.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview with Advanced Animations */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Complete
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Career Arsenal
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform from confused student to industry-ready professional. No more scattered resources.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "AI Learning Paths", desc: "Personalized roadmaps that adapt to your pace and goals", free: true, gradient: "from-blue-500 to-purple-600" },
              { icon: Github, title: "Smart Project Hub", desc: "Transform basic projects into portfolio showstoppers", free: true, gradient: "from-green-500 to-blue-500" },
              { icon: FileText, title: "Resume Dominator", desc: "AI-crafted resumes that bypass ATS and impress humans", premium: true, gradient: "from-yellow-500 to-red-500" },
              { icon: Users, title: "Elite Communities", desc: "Network with winners, not whiners. Premium access only.", premium: true, gradient: "from-purple-500 to-pink-600" },
              { icon: Globe, title: "Portfolio Generator", desc: "Stunning websites that make recruiters stop scrolling", premium: true, gradient: "from-cyan-500 to-blue-600" },
              { icon: Mail, title: "Cold Email Magic", desc: "Scripts that get responses from industry leaders", premium: true, gradient: "from-red-500 to-orange-500" },
              { icon: Calendar, title: "Academic Autopilot", desc: "Never miss a deadline while focusing on career prep", premium: true, gradient: "from-green-500 to-teal-500" },
              { icon: Trophy, title: "Hackathon Hub", desc: "Find teams, dominate competitions, build your reputation", free: true, gradient: "from-yellow-500 to-orange-500" },
              { icon: Video, title: "Mock Interview Pro", desc: "Practice with real industry professionals who've been there", payPerUse: true, gradient: "from-indigo-500 to-purple-600" }
            ].map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Investment in Your
              <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Million Dollar Future
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              The cost of staying mediocre? Your entire career. Choose wisely.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Free Tier", 
                price: "₹0", 
                period: "Forever", 
                desc: "For those just getting started on their journey",
                features: ["Basic Learning Paths", "Project Showcase", "Community Access", "Hackathon Discovery"],
                cta: "Start Free",
                popular: false,
                gradient: "from-gray-500 to-gray-600"
              },
              { 
                name: "Pro", 
                price: "₹199", 
                period: "/month", 
                desc: "For serious students who want to dominate",
                features: ["Everything Free", "AI Project Enhancement", "Resume Optimizer", "Premium Communities", "Portfolio Generator", "Cold Email Templates"],
                cta: "Go Pro",
                popular: true,
                gradient: "from-purple-500 to-cyan-500"
              },
              { 
                name: "Elite", 
                price: "₹1599", 
                period: "/year", 
                originalPrice: "₹2388",
                desc: "33% savings for the committed ones",
                features: ["Everything Pro", "Priority Support", "1-on-1 Mentoring", "Exclusive Workshops", "Job Referrals"],
                cta: "Join Elite",
                popular: false,
                gradient: "from-yellow-400 to-orange-500"
              },
              { 
                name: "Interview Pro", 
                price: "₹599", 
                period: "/session", 
                desc: "Practice with industry veterans",
                features: ["60-min Mock Interview", "Detailed Feedback", "Industry Insights", "Follow-up Resources"],
                cta: "Book Session",
                popular: false,
                gradient: "from-red-500 to-pink-500"
              }
            ].map((plan, index) => (
              <GlassCard key={index} className={`p-8 relative ${plan.popular ? 'ring-2 ring-purple-500/50' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      🔥 Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                    {plan.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">{plan.originalPrice}</div>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm">{plan.desc}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}>
                  {plan.cta}
                </button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  // Hackathons Page
  const HackathonsPage = () => {
    const hackathons = [
      {
        id: 1,
        title: "Smart India Hackathon 2024",
        organizer: "Government of India",
        prize: "₹1,00,000",
        participants: "6 members",
        deadline: "Dec 25, 2024",
        duration: "48 hours",
        mode: "Hybrid",
        location: "Delhi NCR",
        tags: ["AI/ML", "IoT", "Blockchain"],
        difficulty: "Advanced",
        registered: 2847,
        teamsNeeded: 156,
        description: "India's biggest hackathon focusing on solving real-world problems using cutting-edge technology."
      },
      {
        id: 2,
        title: "HackBengaluru 2024",
        organizer: "Karnataka Govt",
        prize: "₹75,000",
        participants: "4 members",
        deadline: "Jan 15, 2025",
        duration: "36 hours",
        mode: "Offline",
        location: "Bangalore",
        tags: ["Web Dev", "Mobile", "Cloud"],
        difficulty: "Intermediate",
        registered: 1923,
        teamsNeeded: 89,
        description: "Bangalore's premier tech hackathon for innovative solutions in urban development."
      },
      {
        id: 3,
        title: "Microsoft Imagine Cup",
        organizer: "Microsoft",
        prize: "$100,000",
        participants: "3 members",
        deadline: "Feb 10, 2025",
        duration: "72 hours",
        mode: "Online",
        location: "Global",
        tags: ["AI", "Azure", "Sustainability"],
        difficulty: "Expert",
        registered: 5432,
        teamsNeeded: 234,
        description: "Global competition empowering students to create technology solutions for social good."
      }
    ];

    const teamRequests = [
      {
        id: 1,
        name: "Arjun Patel",
        skills: ["React", "Node.js", "Python"],
        experience: "2 years",
        location: "Mumbai",
        looking: "Looking for AI/ML expert and designer",
        hackathon: "Smart India Hackathon 2024",
        avatar: "AP"
      },
      {
        id: 2,
        name: "Priya Singh",
        skills: ["Flutter", "Firebase", "UI/UX"],
        experience: "1.5 years",
        location: "Delhi",
        looking: "Need backend developer and ML engineer",
        hackathon: "HackBengaluru 2024",
        avatar: "PS"
      }
    ];

    if (selectedHackathon) {
      const hackathon = hackathons.find(h => h.id === selectedHackathon);
      
      return (
        <div className="min-h-screen bg-black text-white pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button 
              onClick={() => setSelectedHackathon(null)}
              className="mb-6 text-purple-400 hover:text-purple-300 flex items-center transition-colors"
            >
              ← Back to Hackathons
            </button>
            
            <GlassCard className="p-8 mb-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h1 className="text-4xl font-bold text-white mb-2">{hackathon.title}</h1>
                      <p className="text-gray-300">by {hackathon.organizer}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-400">{hackathon.prize}</div>
                      <div className="text-gray-400">Prize Pool</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{hackathon.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-purple-400 text-sm">Team Size</div>
                      <div className="text-white font-semibold">{hackathon.participants}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-purple-400 text-sm">Duration</div>
                      <div className="text-white font-semibold">{hackathon.duration}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-purple-400 text-sm">Mode</div>
                      <div className="text-white font-semibold">{hackathon.mode}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hackathon.tags.map((tag, i) => (
                      <span key={i} className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-80">
                  <GlassCard className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Stats</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Registered</span>
                        <span className="text-white">{hackathon.registered}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Teams Needed</span>
                        <span className="text-green-400">{hackathon.teamsNeeded}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Deadline</span>
                        <span className="text-red-400">{hackathon.deadline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Location</span>
                        <span className="text-white">{hackathon.location}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white py-3 rounded-xl font-semibold mt-6 transition-all duration-300 transform hover:scale-105">
                      Register Now
                    </button>
                    
                    <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-semibold mt-3 transition-all duration-300 border border-white/20">
                      Find Teammates
                    </button>
                  </GlassCard>
                </div>
              </div>
            </GlassCard>

            {/* Team Requests */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Available Teams</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {teamRequests.filter(req => req.hackathon === hackathon.title).map((request) => (
                  <GlassCard key={request.id} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                        {request.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white">{request.name}</h3>
                        <p className="text-gray-400 text-sm mb-2">{request.experience} • {request.location}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {request.skills.map((skill, i) => (
                            <span key={i} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs border border-blue-500/30">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-4">{request.looking}</p>
                        <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300">
                          Join Team
                        </button>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-black text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Dominate
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Every Hackathon
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find the perfect hackathons, connect with skilled teammates, and build winning solutions that launch your career.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <GlassCard className="p-6 text-center">
              <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Find Hackathons</h3>
              <p className="text-gray-300">Discover competitions that match your skills and interests</p>
            </GlassCard>
            
            <GlassCard className="p-6 text-center">
              <UserPlus className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Build Your Team</h3>
              <p className="text-gray-300">Connect with developers, designers, and domain experts</p>
            </GlassCard>
            
            <GlassCard className="p-6 text-center">
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Win & Network</h3>
              <p className="text-gray-300">Compete, learn, and build your professional reputation</p>
            </GlassCard>
          </div>

          {/* Hackathon Listings */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4 sm:mb-0">Featured Hackathons</h2>
              <div className="flex space-x-4">
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors border border-white/20">
                  Filter
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-2 rounded-lg transition-all duration-300">
                  Post Hackathon
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {hackathons.map((hackathon) => (
                <GlassCard key={hackathon.id} className="p-6 cursor-pointer" onClick={() => setSelectedHackathon(hackathon.id)}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{hackathon.title}</h3>
                      <p className="text-gray-400">by {hackathon.organizer}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">{hackathon.prize}</div>
                      <div className="text-gray-400 text-sm">Prize</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-2">{hackathon.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="text-purple-400 text-sm">Team Size</div>
                      <div className="text-white font-semibold">{hackathon.participants}</div>
                    </div>
                    <div>
                      <div className="text-purple-400 text-sm">Duration</div>
                      <div className="text-white font-semibold">{hackathon.duration}</div>
                    </div>
                    <div>
                      <div className="text-purple-400 text-sm">Mode</div>
                      <div className="text-white font-semibold">{hackathon.mode}</div>
                    </div>
                    <div>
                      <div className="text-purple-400 text-sm">Deadline</div>
                      <div className="text-red-400 font-semibold">{hackathon.deadline}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hackathon.tags.map((tag, i) => (
                      <span key={i} className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 px-2 py-1 rounded text-sm border border-purple-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 text-sm text-gray-400">
                      <span>👥 {hackathon.registered} registered</span>
                      <span>🔍 {hackathon.teamsNeeded} looking for teams</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Team Building Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Find Your Dream Team</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {teamRequests.map((request) => (
                <GlassCard key={request.id} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {request.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{request.name}</h3>
                          <p className="text-gray-400 text-sm">{request.experience} • {request.location}</p>
                        </div>
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs border border-green-500/30">
                          Active
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {request.skills.map((skill, i) => (
                          <span key={i} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs border border-blue-500/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-3">{request.looking}</p>
                      <p className="text-purple-300 text-sm mb-4">🎯 {request.hackathon}</p>
                      
                      <div className="flex space-x-3">
                        <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300">
                          Connect
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-colors border border-white/20">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Post Team Request
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Dashboard
  const Dashboard = () => (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="relative mb-12 overflow-hidden">
          <GlassCard className="p-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome back, <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{userData.name}</span>!
              </h1>
              <p className="text-gray-300 mb-6">Ready to dominate your next career milestone?</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">{userData.currentYear}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">{userData.major}</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Learning Progress", value: "73%", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
            { label: "Projects Completed", value: "12", icon: Code, color: "from-blue-500 to-cyan-500" },
            { label: "Hackathons Won", value: "3", icon: Trophy, color: "from-yellow-500 to-orange-500" },
            { label: "Network Connections", value: "45", icon: Users, color: "from-purple-500 to-pink-500" }
          ].map((stat, index) => (
            <GlassCard key={index} className="p-6 text-center">
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { 
              title: "Learning Paths", 
              desc: "Continue your journey to mastery", 
              icon: BookOpen, 
              action: () => setCurrentPage('learning-paths'),
              gradient: "from-green-500 to-teal-500",
              progress: 73
            },
            { 
              title: "Project Lab", 
              desc: "Build portfolio-worthy projects", 
              icon: Code, 
              action: () => setCurrentPage('projects'),
              gradient: "from-purple-500 to-pink-500",
              progress: 60
            },
            { 
              title: "Resume Optimizer", 
              desc: "Craft ATS-beating resumes", 
              icon: FileText, 
              action: () => setCurrentPage('resume'),
              gradient: "from-yellow-500 to-red-500",
              progress: isPremium ? 85 : 0
            },
            { 
              title: "Elite Network", 
              desc: "Connect with industry leaders", 
              icon: Users, 
              action: () => setCurrentPage('community'),
              gradient: "from-indigo-500 to-purple-500",
              progress: isPremium ? 45 : 0
            },
            { 
              title: "Hackathon Arena", 
              desc: "Dominate competitions & win prizes", 
              icon: Trophy, 
              action: () => setCurrentPage('hackathons'),
              gradient: "from-orange-500 to-red-500",
              progress: 30
            },
            { 
              title: "Interview Mastery", 
              desc: "Practice with industry experts", 
              icon: Video, 
              action: () => setCurrentPage('interviews'),
              gradient: "from-cyan-500 to-blue-500",
              progress: 15
            }
          ].map((card, index) => (
            <div key={index} className="relative group">
              <GlassCard 
                className="p-6 cursor-pointer h-full"
                onClick={card.action}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500`}>
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-500">
                  {card.title}
                </h3>
                
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-500">
                  {card.desc}
                </p>
                
                {card.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-gray-300">{card.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${card.gradient} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${card.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">
                    {card.progress > 0 ? 'Continue' : 'Get Started'}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-500" />
                </div>
              </GlassCard>
              
              {!isPremium && ['Resume Optimizer', 'Elite Network'].includes(card.title) && (
                <div className="absolute top-3 right-3">
                  <Lock className="w-5 h-5 text-yellow-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Academic Suite Widget */}
        <GlassCard className="p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Academic Autopilot</h3>
                <p className="text-gray-300">Never miss a deadline while building your career</p>
              </div>
              {!isPremium && <Lock className="w-6 h-6 text-yellow-400" />}
            </div>
            
            {isPremium ? (
              <div className="space-y-4">
                {[
                  { subject: "Data Structures Lab", deadline: "Tomorrow", priority: "high", color: "from-red-500 to-pink-500" },
                  { subject: "Machine Learning Project", deadline: "3 days", priority: "medium", color: "from-yellow-500 to-orange-500" },
                  { subject: "Web Development Assignment", deadline: "1 week", priority: "low", color: "from-green-500 to-teal-500" }
                ].map((task, i) => (
                  <div key={i} className={`bg-gradient-to-r ${task.color} bg-opacity-10 border border-white/10 rounded-lg p-4`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-semibold">{task.subject}</h4>
                        <p className="text-gray-300 text-sm">Due {task.deadline}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        task.priority === 'high' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                        task.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                        'bg-green-500/20 text-green-300 border border-green-500/30'
                      }`}>
                        {task.priority} priority
                      </div>
                    </div>
                  </div>
                ))}
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white py-3 rounded-xl font-semibold transition-all duration-300">
                  View All Tasks
                </button>
              </div>
            ) : (
              <div className="text-center py-8">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4 opacity-50" />
                <p className="text-gray-400 mb-6">Automate your academic workload and focus on what matters - your career growth.</p>
                <button 
                  onClick={() => setIsPremium(true)}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Unlock Academic Autopilot
                </button>
              </div>
            )}
          </div>
        </GlassCard>
      </div>
    </div>
  );

  // Render the appropriate page
  const renderPage = () => {
    switch(currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'dashboard':
        return <Dashboard />;
      case 'hackathons':
        return <HackathonsPage />;
      default:
        return <LandingPage />;
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      {renderPage()}
    </div>
  );
};

export default App;