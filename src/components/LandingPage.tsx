import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  ArrowRight, 
  GraduationCap, 
  BrainCog, 
  Link2, 
  MapPin, 
  Award, 
  Users, 
  Globe,
  Github,
  Twitter,
  MessageSquare,
  Mic,
  CheckCircle2,
  Briefcase,
  Home
} from 'lucide-react'

const LandingPage: React.FC = () => {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll()

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5])

  const howItWorksSections = [
    {
      icon: GraduationCap,
      title: 'Learn Micro-Skills',
      description: 'Watch short videos or complete mini-courses — even with low bandwidth.',
      bgColor: 'bg-[#EDF9F2]'
    },
    {
      icon: BrainCog,
      title: 'AI Career Copilot',
      description: 'Get personalized job advice and a learning path based on your interest and local demand.',
      bgColor: 'bg-[#FFF7D1]'
    },
    {
      icon: Link2,
      title: 'Mint Certificates',
      description: 'Each skill you complete is stored on the blockchain — verified, tamper-proof, and portable.',
      bgColor: 'bg-[#FCEAE4]'
    }
  ]

  const statCards = [
    {
      icon: Award,
      title: 'Badges Earned',
      value: '5',
      label: 'Skills Mastered',
      progress: 70,
      color: 'bg-shiksha-green'
    },
    {
      icon: CheckCircle2,
      title: 'SkillCoins',
      value: '20',
      label: 'Coins Earned',
      progress: 40,
      color: 'bg-shiksha-yellow'
    },
    {
      icon: Users,
      title: 'Level',
      value: '3',
      label: 'Career Explorer',
      progress: 60,
      color: 'bg-blue-500'
    }
  ]

  const partners = [
    '/google.svg',
    '/microsoft.svg',
    '/amazon.svg',
    '/nasscom.svg'
  ]

  return (
    <div 
      ref={scrollRef} 
      className="min-h-screen bg-shiksha-bg overflow-x-hidden font-poppins"
    >
      {/* Hero Section */}
      <motion.div 
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="container mx-auto px-4 py-16 lg:py-24 grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-shiksha-text-dark mb-6 leading-tight">
            Empowering Bharat's Youth with <span className="text-shiksha-green">Blockchain-Backed Skills</span>
          </h1>
          <p className="text-shiksha-text-medium text-lg mb-8">
            Learn practical skills, get AI career guidance, and earn verifiable certificates — from your own village.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-shiksha-green text-white px-6 py-3 rounded-xl flex items-center hover:bg-opacity-90 transition-all">
              Start Learning Now <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border border-shiksha-green text-shiksha-green px-6 py-3 rounded-xl hover:bg-shiksha-green hover:text-white transition-all">
              Verify Certificate
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block"
        >
          <div className="bg-white rounded-2xl shadow-card p-8">
            <motion.img 
              src="/rural-skills-illustration.svg" 
              alt="Rural Skills Blockchain" 
              className="w-full h-auto"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-shiksha-text-dark mb-4">
              How ShikshaChain Works
            </h2>
            <p className="text-shiksha-text-medium max-w-2xl mx-auto">
              A comprehensive platform designed to transform rural talents into global opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorksSections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={`${section.bgColor} p-6 rounded-2xl text-center hover:shadow-card transition-all group`}
              >
                <section.icon 
                  className="mx-auto mb-4 text-shiksha-green group-hover:scale-110 transition-transform" 
                  size={48} 
                  strokeWidth={1.5} 
                />
                <h3 className="text-xl font-semibold text-shiksha-text-dark mb-3">
                  {section.title}
                </h3>
                <p className="text-shiksha-text-medium">
                  {section.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Career Copilot Demo */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-shiksha-text-dark mb-4">
            Meet Your AI Mentor
          </h2>
          <p className="text-shiksha-text-medium max-w-2xl mx-auto">
            Personalized career advice, in your language
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-shiksha-green to-[#1a8f65] rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">AI Career Copilot</h3>
              <p className="mb-6">
                Get personalized career guidance powered by advanced AI technology
              </p>
              <div className="flex space-x-2 mb-4">
                <button className="bg-white text-shiksha-green px-4 py-2 rounded-xl">
                  English
                </button>
                <button className="border border-white text-white px-4 py-2 rounded-xl">
                  हिन्दी
                </button>
                <button className="border border-white text-white px-4 py-2 rounded-xl">
                  मैथिली
                </button>
              </div>
              <div className="flex items-center mt-6 bg-white/10 rounded-xl p-3">
                <input 
                  type="text" 
                  placeholder="Ask about career options..." 
                  className="bg-transparent border-none outline-none flex-1 text-white placeholder-white/70"
                />
                <Mic className="ml-2 text-white/70 cursor-pointer hover:text-white" size={20} />
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="bg-white rounded-xl p-4 mb-4">
                <p className="text-shiksha-text-dark">
                  I want to work in electronics repair.
                </p>
              </div>
              <div className="bg-shiksha-green/20 rounded-xl p-4 mb-4">
                <p className="text-white">
                  Great choice! Here are 2 nearby jobs and 1 certification you can complete:
                </p>
              </div>
              <div className="bg-shiksha-green/20 rounded-xl p-4 mb-4">
                <div className="bg-white/10 rounded-lg p-3 mb-2">
                  <p className="text-white font-medium">Mobile Repair Technician</p>
                  <p className="text-white/80 text-sm">Muzaffarpur (5km) - ₹15,000/month</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 mb-2">
                  <p className="text-white font-medium">Electronics Shop Assistant</p>
                  <p className="text-white/80 text-sm">Patna (20km) - ₹12,000/month</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-white font-medium">Basic Electronics Certification</p>
                  <p className="text-white/80 text-sm">4 weeks - Earn a blockchain certificate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learn2Earn & Gamification */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-shiksha-text-dark mb-4">
              Learn. Earn. Level Up.
            </h2>
            <p className="text-shiksha-text-medium max-w-2xl mx-auto">
              Track your progress and earn rewards as you learn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {statCards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white p-6 rounded-2xl shadow-card text-center"
              >
                <card.icon 
                  className="mx-auto mb-4 text-shiksha-green" 
                  size={40} 
                  strokeWidth={1.5} 
                />
                <h3 className="text-lg font-semibold text-shiksha-text-dark mb-1">
                  {card.title}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-shiksha-text-dark"
                  >
                    {card.value}
                  </motion.span>
                  <span className="text-shiksha-text-medium">{card.label}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div 
                    className={`h-2.5 rounded-full ${card.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${card.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Skill Impact Map */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-shiksha-text-dark mb-4">
            A Growing Network of Rural Talent
          </h2>
          <p className="text-shiksha-text-medium max-w-2xl mx-auto">
            Join thousands of learners across India gaining verified skills
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-card p-8">
          <div className="relative">
            <img 
              src="/india-map-outline.svg" 
              alt="India Map" 
              className="w-full h-auto opacity-30"
            />
            <div className="absolute top-1/4 right-1/3">
              <div className="relative group">
                <div className="w-4 h-4 bg-shiksha-green rounded-full animate-pulse"></div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-lg shadow-lg whitespace-nowrap">
                  <p className="text-sm font-medium">Muzaffarpur - 38 learners verified</p>
                </div>
              </div>
            </div>
            <div className="absolute top-1/3 left-1/4">
              <div className="relative group">
                <div className="w-4 h-4 bg-shiksha-green rounded-full animate-pulse"></div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-lg shadow-lg whitespace-nowrap">
                  <p className="text-sm font-medium">Patna - 52 learners verified</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-1/4 right-1/4">
              <div className="relative group">
                <div className="w-4 h-4 bg-shiksha-green rounded-full animate-pulse"></div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-lg shadow-lg whitespace-nowrap">
                  <p className="text-sm font-medium">Bangalore - 67 learners verified</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <button className="bg-gray-100 text-shiksha-text-medium px-3 py-1 rounded-lg text-sm">All Skills</button>
            <button className="bg-gray-100 text-shiksha-text-medium px-3 py-1 rounded-lg text-sm">Tech</button>
            <button className="bg-gray-100 text-shiksha-text-medium px-3 py-1 rounded-lg text-sm">Agriculture</button>
            <button className="bg-gray-100 text-shiksha-text-medium px-3 py-1 rounded-lg text-sm">Crafts</button>
          </div>
        </div>
      </div>

      {/* Partner With Us */}
      <div className="bg-gradient-to-br from-shiksha-green to-[#1a8f65] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Panchayats, NGOs & Employers – Join the Movement
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Help your community gain recognition. Hire skilled youth. Onboard your district.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-2xl text-center hover:bg-white/20 transition-all"
            >
              <Home className="mx-auto mb-4" size={48} strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Onboard a Village</h3>
              <p className="mb-4">Bring digital skills and blockchain certification to your community</p>
              <button className="bg-white text-shiksha-green px-6 py-2 rounded-xl hover:bg-opacity-90 transition-all">
                Get Started
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 p-6 rounded-2xl text-center hover:bg-white/20 transition-all"
            >
              <Briefcase className="mx-auto mb-4" size={48} strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Hire Certified Youth</h3>
              <p className="mb-4">Access a pool of verified talent with blockchain-backed credentials</p>
              <button className="bg-white text-shiksha-green px-6 py-2 rounded-xl hover:bg-opacity-90 transition-all">
                Find Talent
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-8 text-shiksha-text-dark">
          Trusted by Leading Organizations
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          {partners.map((partner, index) => (
            <img 
              key={index} 
              src={partner} 
              alt="Partner Logo" 
              className="h-12 mb-4 filter grayscale hover:filter-none transition-all"
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#E9F4F1] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-shiksha-green flex items-center">
                <Link2 className="mr-2" size={24} />
                ShikshaChain
              </h2>
              <p className="text-shiksha-text-medium">Verified Skills for Every Village</p>
            </div>
            <div className="flex space-x-6">
              <Github className="text-shiksha-text-medium hover:text-shiksha-green cursor-pointer transition-colors" size={20} />
              <Twitter className="text-shiksha-text-medium hover:text-shiksha-green cursor-pointer transition-colors" size={20} />
              <MessageSquare className="text-shiksha-text-medium hover:text-shiksha-green cursor-pointer transition-colors" size={20} />
            </div>
          </div>
          <div className="border-t border-shiksha-green/20 pt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-shiksha-text-medium text-sm">
            <a href="#" className="hover:text-shiksha-green transition-colors">About</a>
            <a href="#" className="hover:text-shiksha-green transition-colors">Contact</a>
            <a href="#" className="hover:text-shiksha-green transition-colors">GitHub</a>
            <a href="#" className="hover:text-shiksha-green transition-colors">Blog</a>
            <a href="#" className="hover:text-shiksha-green transition-colors">Privacy</a>
          </div>
          <p className="text-center text-shiksha-text-light text-sm mt-6">
            © {new Date().getFullYear()} ShikshaChain. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage