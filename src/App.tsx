import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  Terminal, 
  Activity, 
  Cpu, 
  Lock, 
  Search, 
  AlertTriangle, 
  BarChart3, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Github,
  ChevronRight,
  Database,
  Workflow,
  Target,
  CheckCircle2,
  Award,
  Server
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  BarChart, 
  Bar, 
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { cn } from './lib/utils';

import { getSecurityAssistantResponse } from './services/gemini';

// --- Mock Data for Dashboard ---

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      scrolled ? "bg-slate-950/80 backdrop-blur-md border-slate-800 py-4" : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-400" />
          <span className="font-mono font-bold tracking-tighter text-xl">LEUL.TADELE</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-blue-400 transition-colors">ABOUT</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">SKILLS</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">PROJECTS</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">EXPERIENCE</a>
          <a href="#" className="hover:text-blue-400 transition-colors">RESUME</a>
          <a href="#contact" className="px-4 py-2 bg-blue-600/10 border border-blue-500/50 text-blue-400 rounded hover:bg-blue-600/20 transition-all">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Grid Background */}
    <div className="absolute inset-0 z-0 opacity-20" 
         style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto lg:mx-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
            SOC Analyst <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              & Detection Engineer
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Hands-on experience in monitoring, detecting, and responding to cyber threats in real-time. 
            Specializing in high-pressure SOC environments using Splunk, Wazuh, and Cortex XSOAR 
            to reduce risk and automate security workflows.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition-all flex items-center gap-2 group">
              View Projects <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#experience" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded transition-all border border-slate-700">
              Work History
            </a>
            <a href="#" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-blue-400 font-bold rounded transition-all border border-blue-500/30 flex items-center gap-2">
              <ExternalLink className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Abstract Visual Elements (No Images) */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 hidden lg:block opacity-20 pointer-events-none">
      <div className="relative w-full h-full">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-dashed border-blue-500/20 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-10 border-2 border-dashed border-emerald-500/20 rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Shield className="w-32 h-32 text-blue-500/20" />
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-slate-950/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-mono text-blue-400 mb-4 tracking-widest uppercase">01. Background</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Results-Driven Security Operations</h3>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Based in <span className="text-white font-medium">Addis Ababa, Ethiopia</span>, I am a SOC Analyst with 
              hands-on experience in monitoring, detecting, and responding to cyber threats in real-time.
            </p>
            <p>
              Proficient in operating within high-pressure SOC environments and leveraging tools such as 
              <span className="text-white font-medium">Splunk, Wazuh, Microsoft Defender for Endpoint</span>, and 
              <span className="text-white font-medium">CrowdStrike Falcon</span> for threat detection and incident response.
            </p>
            <p>
              I specialize in developing playbooks and using <span className="text-white font-medium">Cortex XSOAR</span> 
              to automate and orchestrate security workflows, proven to triage alerts and support timely mitigation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded">
              <div className="text-2xl font-bold text-blue-400 mb-1">SIEM</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Splunk ES & Wazuh</div>
            </div>
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded">
              <div className="text-2xl font-bold text-emerald-400 mb-1">SOAR</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Cortex XSOAR Specialist</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const SkillCategory = ({ title, skills, icon: Icon }: { title: string, skills: string[], icon: any }) => (
  <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-all group">
    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, i) => (
        <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
          <ChevronRight className="w-3 h-3 text-blue-500" />
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => (
  <section id="skills" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-mono text-blue-400 mb-4 tracking-widest uppercase">02. Expertise</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Core Technical Stack</h3>
        <p className="text-slate-400">Deep technical proficiency in the tools and methodologies that power modern security operations centers.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCategory 
          title="SIEM & Log Analysis" 
          icon={Search}
          skills={["Splunk Enterprise Security (ES)", "Wazuh", "Use-case development", "Dashboarding", "SPL optimization"]} 
        />
        <SkillCategory 
          title="SOAR & Automation" 
          icon={Workflow}
          skills={["Cortex XSOAR", "Playbook development", "Automation tuning", "Python", "Bash"]} 
        />
        <SkillCategory 
          title="Endpoint Security" 
          icon={Shield}
          skills={["Microsoft Defender", "CrowdStrike Falcon", "Incident Detection", "Response Actions", "EDR Investigations"]} 
        />
        <SkillCategory 
          title="Threat Hunting" 
          icon={Target}
          skills={["MITRE ATT&CK Alignment", "Splunk SPL", "Anomaly Detection", "Behavioral Analytics", "Threat Models"]} 
        />
        <SkillCategory 
          title="Network Security" 
          icon={Server}
          skills={["IDS/IPS (Suricata, Snort)", "Wireshark", "Network Segmentation", "Vulnerability Assessment", "Asset Onboarding"]} 
        />
        <SkillCategory 
          title="Vulnerability & Pentesting" 
          icon={Terminal}
          skills={["Nessus", "Burp Suite", "Metasploit", "Kali Linux", "Security Testing"]} 
        />
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all flex flex-col"
  >
    <div className="p-8 flex-grow">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <div className="px-3 py-1 bg-blue-600/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded border border-blue-500/20">
          {project.category}
        </div>
      </div>
      
      <div className="space-y-4 mb-8">
        <div>
          <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-1">Problem</span>
          <p className="text-sm text-slate-400">{project.problem}</p>
        </div>
        <div>
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">Action</span>
          <p className="text-sm text-slate-400">{project.action}</p>
        </div>
        <div>
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">Impact</span>
          <p className="text-sm text-slate-200 font-medium">{project.impact}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tools.map((tool: string, i: number) => (
          <span key={i} className="px-2 py-1 bg-slate-800 text-slate-400 text-[10px] font-mono rounded border border-slate-700">
            {tool}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Cyber Dev Environment Setup",
      category: "Infrastructure",
      image: "https://picsum.photos/seed/cyber-lab-setup/600/400",
      problem: "Need for an isolated environment for security testing and attack simulation.",
      action: "Designed and deployed an isolated environment with Splunk ES, Splunk SOAR, Windows Server AD, and Kali Linux.",
      impact: "Integrated all lab components to simulate end-to-end detection and response scenarios with proper network segmentation.",
      tools: ["Splunk ES", "Splunk SOAR", "Kali Linux", "Windows Server", "Active Directory"]
    },
    {
      title: "Splunk UEBA Administration",
      category: "Engineering",
      image: "https://picsum.photos/seed/splunk-dashboard-data/600/400",
      problem: "Identifying anomalous user and entity behavior based on peer group analysis.",
      action: "Administered Splunk UEBA platform, including data source integrations, behavioral analytics, and risk scoring models.",
      impact: "Developed and fine-tuned anomaly detection policies and risk scoring rules to enhance behavioral insights.",
      tools: ["Splunk UEBA", "Splunk ES", "Machine Learning", "Behavioral Analytics"]
    },
    {
      title: "SOAR Playbook Automation",
      category: "Automation",
      image: "https://picsum.photos/seed/automation-workflow-security/600/400",
      problem: "Manual incident response processes leading to slow containment and mitigation.",
      action: "Developed, automated, and maintained SOAR playbooks in Cortex XSOAR to streamline IR processes.",
      impact: "Reduced response time and standardized documentation for security incidents and investigation findings.",
      tools: ["Cortex XSOAR", "Python", "EDR Integrations", "API Automation"]
    },
    {
      title: "Intrusion Analysis & IDS Tuning",
      category: "Detection",
      image: "https://picsum.photos/seed/network-traffic-analysis/600/400",
      problem: "Emerging security risks requiring proactive identification and strengthened prevention.",
      action: "Configured and maintained IDS/IPS systems; correlated data from multiple log sources to identify suspicious activities.",
      impact: "Strengthened threat detection and prevention capabilities against evolving attack vectors.",
      tools: ["Suricata", "Snort", "SIEM", "Log Correlation"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-blue-400 mb-4 tracking-widest uppercase">03. Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">High-Impact Projects</h3>
            <p className="text-slate-400">Real-world solutions engineered to solve critical security gaps and optimize SOC performance.</p>
          </div>
          <div className="flex items-center gap-2 text-blue-400 font-mono text-sm">
            <Github className="w-5 h-5" />
            <span>GITHUB.COM/LEUL-SEC</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ exp }: any) => (
  <div className="relative pl-8 pb-12 border-l border-slate-800 last:pb-0">
    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-blue-500 rounded-full border-2 border-slate-950"></div>
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
      <div>
        <h4 className="text-xl font-bold">{exp.role}</h4>
        <div className="text-blue-400 font-medium">{exp.company}</div>
      </div>
      <div className="text-sm font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded border border-slate-800">
        {exp.period}
      </div>
    </div>
    <ul className="space-y-3">
      {exp.achievements.map((item: string, i: number) => (
        <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: "SOC Analyst",
      company: "Safaricom Telecommunications Ethiopia PLC",
      period: "Jan 2025 - Present",
      achievements: [
        "Continuously monitor and analyze security alerts in a 24/7 SOC environment using Splunk ES.",
        "Execute endpoint investigations and response actions using Microsoft Defender for Endpoint and CrowdStrike Falcon.",
        "Develop, automate, and maintain SOAR playbooks in Cortex XSOAR to streamline incident response processes.",
        "Administer and maintain Splunk UEBA platform, including data source integrations and behavioral analytics.",
        "Tune and optimize Splunk correlation searches and detection rules to enhance detection accuracy.",
        "Designed and deployed an isolated cyber dev environment for security testing and attack simulation."
      ]
    },
    {
      role: "Intrusion Analyst",
      company: "Information Network Security Administration (INSA)",
      period: "Sep 2022 - Dec 2024",
      achievements: [
        "Continuously monitored and analyzed security events using SIEM platforms to ensure timely detection of threats.",
        "Investigated security incidents in collaboration with the incident response team, supporting effective containment.",
        "Correlated data from multiple log sources to identify suspicious activities and potential threats.",
        "Configured and maintained IDS/IPS systems to strengthen threat detection and prevention capabilities."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-mono text-blue-400 mb-4 tracking-widest uppercase">05. Career</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Professional Experience</h3>
            <div className="space-y-6">
              <div className="p-6 bg-blue-600/5 border border-blue-500/20 rounded-xl">
                <Award className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="font-bold mb-2">Certifications</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-blue-500" /> Palo Alto PCSAE</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-blue-500" /> CompTIA CySA+</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-blue-500" /> Ethical Hacker Essentials (EHE)</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-blue-500" /> Fortinet Certified Association</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-blue-500" /> Splunk Power User (Voucher)</li>
                </ul>
              </div>
              <div className="p-6 bg-emerald-600/5 border border-emerald-500/20 rounded-xl">
                <Database className="w-8 h-8 text-emerald-400 mb-4" />
                <h4 className="font-bold mb-2">Education</h4>
                <div className="text-sm text-slate-200 font-medium">B.Sc. Electrical Engineering & Computing</div>
                <div className="text-xs text-slate-400">ASTU - Adama, Ethiopia (2022)</div>
                <div className="text-xs text-emerald-400 mt-1">GPA: 3.70 / 4.00</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {experiences.map((exp, i) => <ExperienceItem key={i} exp={exp} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-12">
            <h2 className="text-sm font-mono text-blue-400 mb-4 tracking-widest uppercase">05. Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Secure Your Perimeter?</h3>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              I'm currently open to discussing mid-level SOC Analyst, Detection Engineering, 
              or Security Automation roles. Let's connect and talk strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-mono mb-1">Email</div>
                  <a href="mailto:leult.tadele@gmail.com" className="text-white hover:text-blue-400 transition-colors font-medium">
                    leult.tadele@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <Linkedin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-mono mb-1">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/leul-tadele-6ba250257/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 transition-colors font-medium">
                    Leul Tadele
                  </a>
                </div>
              </div>

              <div className="p-6 bg-slate-950/50 border border-slate-800 rounded-xl">
                <div className="text-xs text-slate-500 uppercase font-mono mb-4">Direct Line</div>
                <div className="text-2xl font-bold text-white">+251 707 955 027</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {isSubmitted ? <CheckCircle2 className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <Shield className="w-5 h-5 text-blue-400" />
        <span className="font-mono font-bold tracking-tighter text-lg">LEUL.TADELE</span>
      </div>
      <div className="text-slate-500 text-sm font-mono">
        © 2026 // SECURED_BY_DESIGN // BUILT_WITH_REACT
      </div>
      <div className="flex items-center gap-6 text-slate-400">
        <a href="https://www.linkedin.com/in/leul-tadele-6ba250257/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Linkedin className="w-4 h-4" /></a>
        <a href="https://github.com/LEUL-SEC" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Github className="w-4 h-4" /></a>
        <a href="mailto:leult.tadele@gmail.com" className="hover:text-blue-400 transition-colors"><Mail className="w-4 h-4" /></a>
      </div>
    </div>
  </footer>
);

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hello! I'm Leul's Security Assistant. Ask me anything about his experience or certifications." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const resumeContext = `
    Name: Leul Tadele
    Role: SOC Analyst & Detection Engineer
    Experience: 
    - Safaricom Telecommunications (Jan 2025 - Present): SOC Analyst, Splunk ES, Cortex XSOAR, EDR (CrowdStrike/Defender).
    - INSA (Sep 2022 - Dec 2024): Intrusion Analyst, SIEM monitoring, IDS/IPS configuration.
    Skills: SIEM (Splunk, Wazuh), SOAR (Cortex XSOAR), EDR, Python, Bash, Threat Hunting.
    Certifications: CompTIA CySA+, Palo Alto PCSAE, Ethical Hacker Essentials (EHE), Fortinet.
    Education: B.Sc. Electrical Engineering & Computing (ASTU), GPA 3.70.
  `;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getSecurityAssistantResponse(userMsg, resumeContext);
    
    setMessages(prev => [...prev, { role: 'ai', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] max-w-[90vw] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-blue-600 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-white" />
                <span className="font-bold text-sm text-white">Security AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <ChevronRight className="w-5 h-5 rotate-90" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow h-[350px] overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "max-w-[85%] p-3 rounded-xl text-sm leading-relaxed",
                  msg.role === 'user' 
                    ? "bg-blue-600 text-white ml-auto rounded-tr-none" 
                    : "bg-slate-800 text-slate-200 mr-auto rounded-tl-none border border-slate-700"
                )}>
                  {msg.text}
                </div>
              ))}
              {isLoading && (
                <div className="bg-slate-800 text-slate-200 mr-auto rounded-xl rounded-tl-none border border-slate-700 p-3 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-800 bg-slate-950">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Leul..."
                  className="flex-grow bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  <Zap className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
          isOpen ? "bg-slate-800 rotate-90" : "bg-blue-600 hover:bg-blue-700 hover:scale-110"
        )}
      >
        {isOpen ? <ChevronRight className="w-6 h-6 text-white" /> : <Cpu className="w-6 h-6 text-white" />}
      </button>
    </div>
  );
};

export default function App() {
  useEffect(() => {
    // Track website loaded event in GTM with enhanced metadata
    const trackLoad = async () => {
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        const getOS = () => {
          const userAgent = window.navigator.userAgent;
          if (userAgent.indexOf("Win") !== -1) return "Windows";
          if (userAgent.indexOf("Mac") !== -1) return "MacOS";
          if (userAgent.indexOf("X11") !== -1) return "UNIX";
          if (userAgent.indexOf("Linux") !== -1) return "Linux";
          if (/Android/.test(userAgent)) return "Android";
          if (/iPhone|iPad|iPod/.test(userAgent)) return "iOS";
          return "Unknown";
        };

        let locationData = {};
        try {
          // Fetch IP and location info from a public API
          const response = await fetch('https://ipapi.co/json/');
          if (response.ok) {
            const data = await response.json();
            locationData = {
              ip: data.ip,
              city: data.city,
              region: data.region,
              country: data.country_name,
              isp: data.org
            };
          }
        } catch (error) {
          console.warn("Could not fetch location data:", error);
        }

        (window as any).dataLayer.push({
          event: 'website_loaded',
          timestamp: new Date().toISOString(),
          device_info: {
            os: getOS(),
            screen_resolution: `${window.screen.width}x${window.screen.height}`,
            viewport_size: `${window.innerWidth}x${window.innerHeight}`,
            browser_language: window.navigator.language,
            user_agent: window.navigator.userAgent
          },
          ...locationData
        });
      }
    };

    trackLoad();
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ChatAssistant />
    </div>
  );
}
