import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, BookOpen, Target, Trophy, Users, Mail } from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  icon: typeof BookOpen;
}

const navigationItems: NavigationItem[] = [
  { id: 'hero', label: 'Home', icon: GraduationCap },
  { id: 'research-overview', label: 'Research Overview', icon: BookOpen },
  { id: 'research-focus', label: 'Research Focus', icon: Target },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'teaching', label: 'Teaching', icon: Users },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function NavigationDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navigationItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-lg shadow-slate-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 group"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isScrolled
                    ? 'bg-emerald-500 shadow-md shadow-emerald-500/30'
                    : 'bg-white/20 backdrop-blur-sm'
                }`}
              >
                <GraduationCap
                  className={`w-6 h-6 transition-colors duration-300 ${
                    isScrolled ? 'text-white' : 'text-white'
                  }`}
                />
              </div>
              <span
                className={`font-bold text-lg transition-colors duration-300 hidden sm:block ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}
              >
                Niteen Kumar
              </span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? isScrolled
                          ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                          : 'bg-white/20 backdrop-blur-sm text-white'
                        : isScrolled
                        ? 'text-slate-700 hover:bg-slate-100'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden lg:inline">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Nitin Kumar</div>
                  <div className="text-xs text-slate-600">Professor</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-slate-900" />
              </button>
            </div>

            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="text-sm text-slate-600 leading-relaxed">
                <p className="mb-2">Computational Neuroscience</p>
                <p>Applied Mathematics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
