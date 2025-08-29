import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download,
  Code,
  Users,
  Briefcase,
  ArrowUp,
  ChevronRight,
  MapPin,
  Phone,
  Calendar,
  Award,
  BookOpen,
  Target
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const experiences = [
    {
      title: "Co-founder & Human Resource",
      company: "Tascbar Outsourcing LLP",
      period: "2025 - Present",
      description: "Led recruitment and onboarding process for diverse freelance teams across tech, design, and content domains. Developed HR policies and workflows to improve remote team management efficiency.",
      achievements: [
        "Managed internal communications and performance tracking",
        "Coordinated client-talent matching to enhance satisfaction",
        "Contributed to company growth strategy and branding"
      ]
    },
    {
      title: "Peer To Peer Lead",
      company: "TACS MEA SB",
      period: "2025 - Present",
      description: "Coordinated peer-led sessions to enhance technical and soft skills among students through collaborative learning initiatives.",
      achievements: [
        "Organized and facilitated workshops, discussions, and mentorship programs",
        "Supported team collaboration and project-based learning initiatives",
        "Promoted a learning culture by encouraging peer knowledge-sharing and active participation"
      ]
    },
    {
      title: "Marketing Officer",
      company: "BoneAlpha",
      period: "2024 - 2025",
      description: "Assisted in marketing content creation and sales team support with lead collection and client communication.",
      achievements: [
        "Created and shared marketing content on social media",
        "Supported sales team with lead follow-ups",
        "Applied marketing tools and sales strategies in real-time projects"
      ]
    },
    {
      title: "Designer & Executive Member",
      company: "IEDC Nest 3.0",
      period: "2024 - 2025",
      description: "Volunteered at the IEDC Summit, supporting logistics and participant coordination while designing promotional materials.",
      achievements: [
        "Volunteered at the IEDC Summit, supporting logistics and participant coordination",
        "Assisted in planning and managing campus workshops and startup events",
        "Designed basic promotional materials for events and social media",
        "Collaborated with the team to promote innovation and entrepreneurship activities"
      ]
    },
    {
      title: "Membership Development Coordinator & Asst.Treasurer",
      company: "IEEE MEA SB",
      period: "2024 - Present",
      description: "Manage event schedules and support IEEE MEA SB and PES activities while handling financial responsibilities.",
      achievements: [
        "Manage event schedules and support IEEE MEA SB and PES activities",
        "Organize meetings, workshops, and conferences with stakeholders",
        "Drive membership growth and engagement initiatives",
        "Coordinate with teams to ensure smooth event execution",
        "Handled basic financial tasks, budget planning, and documentation as Assistant Treasurer"
      ]
    },
    {
      title: "YIP Coordinator & Marketing Officer",
      company: "IEDC MEA SB",
      period: "2024 - Present",
      description: "Organized innovation events, hackathons, and mentored student teams on startup ideas and project planning while developing marketing strategies.",
      achievements: [
        "Organized innovation events, hackathons, and idea pitch sessions",
        "Mentored student teams on startup ideas and project planning",
        "Built connections with industry experts and startup mentors",
        "Led teams in executing impactful, student-led projects",
        "Promoted entrepreneurship through campus outreach and campaigns",
        "Developed marketing strategies to boost event reach and brand presence"
      ]
    }
  ];

  const skills = {
    personal: [
      "Organizational & Time Management",
      "Communication & Interpersonal Skills",
      "Teamwork & Independent Work",
      "Attention to Detail & Multitasking",
      "Problem Solving & Fast Learning"
    ],
    professional: [
      "Marketing Strategy & Leadership",
      "Event Planning & Coordination",
      "UI/UX Design & Project Management",
      "Budget Management & Financial Documentation",
      "Startup Ecosystem & Innovation Programs"
    ],
    technical: [
      "Cyber Security & Ethical Hacking",
      "Data Science & Engineering",
      "AutoCAD & 3D Modeling",
      "Game Development (pygame)",
      "Networking Basics"
    ]
  };

  const certifications = [
    "Cyber security and ethical hacking",
    "Introduction to data Science",
    "AutoCAD",
    "Game development using pyGame",
    "Introduction to data engineering and big data",
    "Mastering 3D modeling for mechanical engineers",
    "Networking basics",
    "Space Internship"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 via-purple-50 to-yellow-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/30 border-b border-white/30 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Mohammed Afnan T
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === section
                      ? 'text-purple-600 font-semibold'
                      : 'text-gray-600 hover:text-purple-500'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/40 backdrop-blur-lg border border-white/30"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/20 backdrop-blur-xl border-t border-white/30">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'experience', 'skills', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 px-3 rounded-lg capitalize text-gray-600 hover:text-purple-500 hover:bg-white/20 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Mohammed <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">Afnan T</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 mb-6">HR | Marketing Executive 
                  | Entrepreneur | Tech Community Leader
</p>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                  Co-founder & Hr of Tascbar Outsourcing LLP, empowering freelancers globally with quality opportunities.
                  Skilled in UI/UX design, web development, digital marketing, and branding. Active leader in IEEE, IEDC, 
                  and TACS, organizing impactful tech events and initiatives. Passionate about creating solutions that blend technology, 
                  creativity, and accessibility.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-white rounded-full hover:shadow-2xl hover:shadow-purple-300/50 transform hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </button>
                <a 
                  href="/portfolio cv.pdf" 
                  className="px-8 py-3 bg-white/40 backdrop-blur-lg border border-white/30 text-gray-700 rounded-full hover:bg-white/60 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start mt-8">
                <a href="mailto:mohdafnan1018@gmail.com" className="p-3 bg-white/40 backdrop-blur-lg rounded-full hover:bg-white/60 hover:shadow-xl transition-all duration-300">
                  <Mail size={24} className="text-gray-600" />
                </a>
                <a href="#" className="p-3 bg-white/40 backdrop-blur-lg rounded-full hover:bg-white/60 hover:shadow-xl transition-all duration-300">
                  <Linkedin size={24} className="text-gray-600" />
                </a>
                <a href="#" className="p-3 bg-white/40 backdrop-blur-lg rounded-full hover:bg-white/60 hover:shadow-xl transition-all duration-300">
                  <Github size={24} className="text-gray-600" />
                </a>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl blur-2xl opacity-30 transform rotate-6"></div>
                <img 
                  src="/afnan.jpg" 
                  alt="Mohammed Afnan T" 
                  className="relative w-80 h-80 object-cover rounded-3xl shadow-xl border-4 border-white/50 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Journey</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a dynamic professional with expertise in HR, marketing, and innovation management, 
                  I've been actively involved in building startup ecosystems and fostering entrepreneurship 
                  among students and professionals.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My experience spans across multiple leadership roles including Co-founder at Tascbar 
                  Outsourcing LLP, CMO of IEDC MEA, and various positions in IEEE and other professional 
                  organizations.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/40">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-purple-500" size={20} />
                  <span className="text-gray-700">Mankada, Malappuram, Kerala</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="text-pink-500" size={20} />
                  <span className="text-gray-700">+91 9072820103</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="text-orange-500" size={20} />
                  <span className="text-gray-700">mohdafnan1018@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-blue-500" size={20} />
                  <span className="text-gray-700">Born: July 2, 2005</span>
                </div>
              </div>

              <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/40">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {['English', 'Malayalam', 'Tamil', 'Hindi'].map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm border border-white/40 backdrop-blur-lg">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-purple-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium mt-2 lg:mt-0 border border-white/40">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <ChevronRight className="text-purple-500 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-purple-500" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Personal Skills</h3>
              </div>
              <div className="space-y-3">
                {skills.personal.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-pink-500" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Professional Skills</h3>
              </div>
              <div className="space-y-3">
                {skills.professional.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-purple-500" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-gray-900">Bachelor of Technology in Computer Science</h4>
                  <p className="text-purple-600 font-medium">APJ Abdul Kalam Technological University</p>
                  <p className="text-gray-600 text-sm">2023 - Present</p>
                </div>
                <div className="border-l-4 border-pink-400 pl-4">
                  <h4 className="font-semibold text-gray-900">Biology Science</h4>
                  <p className="text-pink-600 font-medium">Government Higher Secondary School</p>
                  <p className="text-gray-600 text-sm">2022 - 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600">
              Let's discuss opportunities or collaborations. I'm always open to new challenges and projects.
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/40">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl border border-white/40">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">mohdafnan1018@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-r from-pink-100 to-pink-200 rounded-xl border border-white/40">
                    <Phone className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 9072820103</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl border border-white/40">
                    <MapPin className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Kadannamanna (po)<br />Mankada, Malappuram<br />Kerala, India</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="text-center p-8 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Let's Connect</h4>
                  <p className="text-gray-600 mb-6">
                    Ready to collaborate on exciting projects or discuss new opportunities. 
                    Feel free to reach out through any of the contact methods.
                  </p>
                  <div className="flex justify-center gap-4">
                    <a href="mailto:mohdafnan1018@gmail.com" className="p-4 bg-white/40 backdrop-blur-lg rounded-xl hover:bg-white/60 hover:shadow-xl transition-all duration-300">
                      <Mail size={24} className="text-gray-700" />
                    </a>
                    <a href="#" className="p-4 bg-white/40 backdrop-blur-lg rounded-xl hover:bg-white/60 hover:shadow-xl transition-all duration-300">
                      <Linkedin size={24} className="text-gray-700" />
                    </a>
                    <a href="/https://github.com/Mohammed-Afnan-T" className="p-4 bg-white/40 backdrop-blur-lg rounded-xl hover:bg-white/60 hover:shadow-xl transition-all duration-300">
                      <Github size={24} className="text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900/90 via-pink-900/90 to-orange-900/90 backdrop-blur-xl text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:mohdafnan1018@gmail.com" className="p-3 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-colors border border-white/20">
              <Mail size={24} />
            </a>
            <a href="/https://www.linkedin.com/in/mohammed-afnan-t-a95472294" className="p-3 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-colors border border-white/20">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-colors border border-white/20">
              <Github size={24} />
            </a>
          </div>
          <p className="text-gray-300">
            © 2025 Mohammed Afnan T. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full shadow-2xl hover:shadow-purple-300/50 transform hover:scale-110 transition-all duration-300 z-50 backdrop-blur-xl border border-white/30"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}