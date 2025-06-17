import React from 'react';
import Header from './Header'; // CRITICAL: Relative path for project components
import { cn } from '@/lib/utils'; // MANDATORY: Import cn utility

// MANDATORY: Define explicit interface with proper types
interface MainAppLayoutProps {
  children: React.ReactNode; // MANDATORY: Always accept children
  className?: string;
}

// CRITICAL: Use React.FC with the proper interface
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div 
      className={cn(
        // Overall layout: Header takes its content height, main content fills remaining space
        // This aligns with Layout Requirements: overall.sizing & overall.definition (conceptually)
        "grid grid-cols-[1fr] grid-rows-[auto_1fr] min-h-screen",
        "bg-background text-foreground", // Base styling for the entire layout
        className
      )}
    >
      <Header />
      {/* Main content area where page-specific content will be rendered */}
      {/* Padding aligns with Layout Requirements: mainContent.layout (px-6 py-4) */}
      <main className="overflow-y-auto px-6 py-4">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
