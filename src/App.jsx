import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaChartLine,
  FaRobot,
  FaLeaf,
  FaUsers,
  FaDatabase,
  FaMobileAlt,
  FaLock,
  FaCloud,
} from "react-icons/fa";


function App() {
  const features = [
    {
      icon: <FaCogs className="text-indigo-600 text-4xl" />,
      title: "Process Mining",
      desc: "Real-time process visualization with bottleneck detection, pain point analysis, and conformance checking.",
    },
    {
      icon: <FaChartLine className="text-green-600 text-4xl" />,
      title: "Predictive Analytics",
      desc: "AI-powered predictions for cost, time, risks, supply chain disruptions, and future outcomes.",
    },
    {
      icon: <FaRobot className="text-blue-600 text-4xl" />,
      title: "AI & Automation",
      desc: "Anomaly detection, predictive maintenance, autonomous execution, and smart recommendations.",
    },
    {
      icon: <FaLeaf className="text-emerald-600 text-4xl" />,
      title: "Sustainability",
      desc: "Carbon footprint monitoring, energy optimization, waste stream reduction, and carbon credit marketplace.",
    },
    {
      icon: <FaUsers className="text-pink-600 text-4xl" />,
      title: "Gamification & Collaboration",
      desc: "Leaderboards, team challenges, collaborative robotics integration, and employee skill gap analysis.",
    },
    {
      icon: <FaDatabase className="text-yellow-600 text-4xl" />,
      title: "Blockchain Integration",
      desc: "Immutable event log storage, smart contracts, DAOs for governance, and blockchain microtransactions.",
    },
    {
      icon: <FaMobileAlt className="text-orange-600 text-4xl" />,
      title: "Mobile & AR/VR",
      desc: "Mobile chatbot support, AR-based visualization, and VR immersive training for employees.",
    },
    {
      icon: <FaLock className="text-red-600 text-4xl" />,
      title: "Security & Privacy",
      desc: "Zero Trust model, GDPR compliance, federated learning, and advanced role-based access control.",
    },
    {
      icon: <FaCloud className="text-purple-600 text-4xl" />,
      title: "Future Tech",
      desc: "Quantum optimization, edge computing, digital twins, NLP insights, and multi-modal AI analytics.",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md p-6 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-indigo-700 tracking-wide"
        >
          CEYEL
        </motion.h1>
        <nav className="space-x-8 font-medium">
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#subscriptions" className="hover:text-indigo-600">Subscriptions</a>
          <a href="#roadmap" className="hover:text-indigo-600">Roadmap</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Transforming Processes with AI + Blockchain
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl max-w-3xl mb-8"
        >
          Ceyel is the future of process mining—empowering manufacturing, logistics, and healthcare with intelligent, sustainable, and collaborative workflows.
        </motion.p>
        <motion.a
          href="#features"
          whileHover={{ scale: 1.1 }}
          className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-full shadow-lg"
        >
          Explore Features
        </motion.a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white px-8 md:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-10"
        >
          About Us
        </motion.h2>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed text-center">
          Ceyel was born from a vision: to help industries like <strong>manufacturing, logistics, and healthcare</strong> overcome inefficiencies and adapt to Industry 5.0. 
          We combine AI, blockchain, digital twins, and gamification into one powerful platform. 
          Our mission is to empower enterprises and MSMEs with tools that improve resilience, sustainability, and collaboration—while driving profitability.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100 px-8 md:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Features
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              {f.icon}
              <h3 className="text-xl font-bold mt-4">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subscriptions Section */}
      <section id="subscriptions" className="py-20 bg-white px-8 md:px-20">
        <motion.h2 className="text-4xl font-bold text-center mb-16">
          Subscriptions
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {["Starter", "Pro", "Enterprise"].map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="border rounded-2xl p-10 shadow-lg text-center bg-gray-50"
            >
              <h3 className="text-2xl font-bold mb-4">{plan}</h3>
              <p className="mb-6 text-gray-600">
                {plan === "Starter"
                  ? "Perfect for small MSMEs getting started with process mining."
                  : plan === "Pro"
                  ? "Advanced features for scaling companies with complex needs."
                  : "Full suite of features for large enterprises with customization."}
              </p>
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-full">
                Get {plan}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 bg-gray-100 px-8 md:px-20">
        <motion.h2 className="text-4xl font-bold text-center mb-16">
          Our Roadmap
        </motion.h2>
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="font-bold text-xl">2025 - Launch</h3>
            <p className="text-gray-600 mt-2">
              Release core process mining, event log cleaning, dashboards, and blockchain storage.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="font-bold text-xl">2026 - Expansion</h3>
            <p className="text-gray-600 mt-2">
              Introduce AR/VR, gamification, sustainability metrics, and DAO governance.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="font-bold text-xl">2027 - Global Vision</h3>
            <p className="text-gray-600 mt-2">
              Quantum optimization, autonomous process execution, and integration with international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white px-8 md:px-20 text-center">
        <motion.h2 className="text-4xl font-bold mb-10">Contact Us</motion.h2>
        <p className="mb-6 text-lg">
          Ready to transform your business? Reach out to the Ceyel team today!
        </p>
        <a
          href="mailto:bhalaji0bl@gmail.com"
          className="px-8 py-4 bg-indigo-600 text-white rounded-full shadow-lg"
        >
          bhalaji0bl@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white text-center py-6 mt-10">
        © {new Date().getFullYear()} Ceyel. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
