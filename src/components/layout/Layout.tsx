import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="pt-16 md:pt-20 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}; 