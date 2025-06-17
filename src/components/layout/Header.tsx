import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const projectTitle = "WEEKLY STATUS DASHBOARD";
  const startDate = "06/19/2024";
  const endDate = "06/25/2024";
  const startDateLabel = "ENTER START DATE →→"; // Matched from image context
  const throughLabel = "THROUGH";

  return (
    <header
      className={cn(
        "h-16 flex items-center justify-between px-6", // As per layout requirements: h-16, flex, items-center, justify-between, px-6
        "bg-card text-card-foreground border-b border-border", // Consistent with other card elements
        className
      )}
    >
      <h1 className="text-lg font-bold text-card-foreground uppercase tracking-wider">
        {projectTitle}
      </h1>
      <div className="flex items-center space-x-2 sm:space-x-3 text-sm">
        <span className="text-xs sm:text-sm text-muted-foreground uppercase hidden md:inline">
          {startDateLabel}
        </span>
        <span className="text-sm font-semibold text-card-foreground">
          {startDate}
        </span>
        <span className="text-xs sm:text-sm text-muted-foreground uppercase">
          {throughLabel}
        </span>
        <span className="text-sm font-semibold text-card-foreground">
          {endDate}
        </span>
      </div>
    </header>
  );
};

export default Header;
