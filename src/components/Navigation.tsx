import React from 'react';
import { ViewTab } from '../types';
import { 
  BarChart3, 
  HelpCircle, 
  Users2, 
  Table2, 
  GraduationCap, 
  BookOpenCheck,
  Settings2,
  Building,
  PieChart
} from 'lucide-react';

interface NavigationProps {
  activeTab: ViewTab;
  onTabChange: (tab: ViewTab) => void;
  questionsCount: number;
  studentsCount: number;
  careersCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onTabChange,
  questionsCount,
  studentsCount,
  careersCount
}) => {
  const tabs = [
    {
      id: 'summary' as ViewTab,
      label: 'Summary & Insights',
      icon: BarChart3,
      badge: 'Overview'
    },
    {
      id: 'analytics' as ViewTab,
      label: 'Infographics & Charts',
      icon: PieChart,
      badge: 'Visual Data'
    },
    {
      id: 'careers' as ViewTab,
      label: 'By Career',
      icon: Building,
      badge: `${careersCount} majors`
    },
    {
      id: 'questions' as ViewTab,
      label: 'By Question',
      icon: HelpCircle,
      badge: `${questionsCount} questions`
    },
    {
      id: 'students' as ViewTab,
      label: 'By Student',
      icon: Users2,
      badge: `${studentsCount} students`
    },
    {
      id: 'matrix' as ViewTab,
      label: 'Full Matrix',
      icon: Table2,
      badge: `${questionsCount * studentsCount} answers`
    },
    {
      id: 'team' as ViewTab,
      label: 'Research Team',
      icon: GraduationCap,
      badge: 'UniAgustiniana'
    },
    {
      id: 'guide' as ViewTab,
      label: 'Defense Guide',
      icon: BookOpenCheck,
      badge: 'Structure'
    },
    {
      id: 'editor' as ViewTab,
      label: 'Manage & Edit',
      icon: Settings2,
      badge: 'Customize'
    }
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-[98px] sm:top-[106px] z-30 shadow-xs print:hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto py-2 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] font-normal transition-colors ${
                    isActive ? 'text-slate-300' : 'text-slate-400'
                  }`}
                >
                  ({tab.badge})
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
