import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark, ChevronRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '솔루션 소개', path: '/solution' },
    { name: '성공 사례', path: '/cases' },
    { name: '멤버십 안내', path: '/pricing' },
  ];

  // Determine navigation style based on route and scroll state
  const isHome = location.pathname === '/';
  // Use solid nav style (white bg, dark text) if:
  // 1. User has scrolled down
  // 2. Mobile menu is open
  // 3. Not on the home page (subpages usually have light backgrounds)
  const isSolidNav = scrolled || isMenuOpen || !isHome;

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isSolidNav ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className={`p-2 rounded-lg ${isSolidNav ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
              <Landmark size={24} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isSolidNav ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
              우리동네 은행
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  isSolidNav ? 'text-slate-600' : 'text-white/90 hover:text-white'
                } ${location.pathname === link.path ? 'font-bold underline underline-offset-4 decoration-2 decoration-accent' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/consulting"
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-1 ${
                isSolidNav 
                  ? 'bg-primary text-white hover:bg-primary/90' 
                  : 'bg-white text-primary hover:bg-slate-100'
              }`}
            >
              무료 진단 받기 <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden z-50 p-2 rounded-md ${isSolidNav ? 'text-slate-800' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-6 gap-6 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-bold ${
                location.pathname === link.path ? 'text-primary' : 'text-slate-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/consulting"
            className="mt-4 w-full bg-primary text-white text-center py-4 rounded-xl text-lg font-bold shadow-md active:scale-95"
          >
            무료 진단 받기
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Landmark size={24} />
                <span className="text-xl font-bold">우리동네 은행</span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm">
                사장님의 브랜드 가치를 자산처럼 관리해드립니다.
                <br />
                지역 기반 마케팅 솔루션의 새로운 기준.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">서비스</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/solution" className="hover:text-primary transition-colors">업종별 솔루션</Link></li>
                <li><Link to="/cases" className="hover:text-primary transition-colors">성공 사례</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-colors">멤버십 안내</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">고객지원</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/consulting" className="hover:text-primary transition-colors">무료 진단 신청</Link></li>
                <li><span className="cursor-pointer hover:text-primary transition-colors">1:1 문의하기</span></li>
                <li><span className="cursor-pointer hover:text-primary transition-colors">이용약관</span></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Our Neighborhood Bank. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex gap-4">
              {/* Dummy Social Icons */}
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">N</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">I</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">B</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;