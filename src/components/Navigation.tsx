
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  currentPage?: string;
}

const Navigation = ({ currentPage }: NavigationProps) => {
  const pages = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/message', label: 'Message', icon: '💌' },
    { path: '/poem', label: 'Poem', icon: '✨' },
    { path: '/about', label: 'About Her', icon: '👑' },
    { path: '/photos', label: 'Photos', icon: '📸' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
      <div className="flex space-x-4">
        {pages.map((page) => (
          <Link key={page.path} to={page.path}>
            <Button
              variant={currentPage === page.path ? "default" : "ghost"}
              size="sm"
              className="rounded-full text-sm font-medium hover:bg-birthday-pink/20 transition-all duration-300"
            >
              <span className="mr-2">{page.icon}</span>
              {page.label}
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
