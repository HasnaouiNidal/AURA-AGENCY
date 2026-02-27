import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PieChart, 
  Users, 
  Settings, 
  Bell, 
  LogOut, 
  Sparkles 
} from 'lucide-react';
import { clsx } from 'clsx';

export default function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
    { icon: PieChart, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: Users, label: 'Customers', path: '/dashboard/customers' },
    { icon: Sparkles, label: 'AI Insights', path: '/dashboard/insights' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  const isActive = (path: string) => {
    if (path === '/dashboard' && location.pathname === '/dashboard') return true;
    if (path !== '/dashboard' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <aside className="w-20 lg:w-64 h-screen fixed left-0 top-0 bg-[#0F1115] border-r border-white/5 flex flex-col z-40 transition-all duration-300">
      <div className="h-20 flex items-center justify-center lg:justify-start lg:px-6 border-b border-white/5">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[var(--color-aura-accent)] to-[var(--color-aura-accent-dim)] rounded-lg shadow-[0_0_15px_rgba(110,231,255,0.2)]">
            <Sparkles className="w-4 h-4 text-[#0F1115]" />
          </div>
          <span className="hidden lg:block text-lg font-semibold tracking-tight text-white">
            AURA
          </span>
        </Link>
      </div>

      <nav className="flex-1 py-8 flex flex-col gap-2 px-3">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.label}
              to={item.path}
              className={clsx(
                'flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group',
                active 
                  ? 'bg-[var(--color-aura-surface)] text-white' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
              )}
            >
              <item.icon className={clsx(
                "w-5 h-5 transition-colors",
                active ? "text-[var(--color-aura-accent)]" : "group-hover:text-white"
              )} />
              <span className="hidden lg:block font-medium text-sm">{item.label}</span>
              {active && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--color-aura-accent)] shadow-[0_0_8px_var(--color-aura-accent)] hidden lg:block" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button className="flex items-center gap-3 px-3 py-3 w-full rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-all">
          <LogOut className="w-5 h-5" />
          <span className="hidden lg:block font-medium text-sm">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
