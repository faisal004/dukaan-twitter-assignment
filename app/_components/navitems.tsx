import { useSidebar } from '@/store/use-sidebar';
import { BadgePercent, Banknote, BarChart4, ClipboardList, Home, LayoutDashboard, MousePointer2, Palette, Truck, Users, Volume2Icon, Zap } from 'lucide-react';
import React from 'react';

const Navitems = () => {
  const navItems = [
    { label: 'Home', icon: <Home /> },
    { label: 'Orders', icon: <ClipboardList /> },
    { label: 'Products', icon: <LayoutDashboard /> },
    { label: 'Delivery', icon: <Truck /> },
    { label: 'Marketing', icon: <Volume2Icon /> },
    { label: 'Analytics', icon: <BarChart4 /> },
    { label: 'Payments', icon: <Banknote /> },
    { label: 'Tools', icon: <MousePointer2 /> },
    { label: 'Discounts', icon: <BadgePercent /> },
    { label: 'Audience', icon: <Users /> },
    { label: 'Appearance', icon: <Palette /> },
     { label: 'Plugin', icon: <Zap /> },
  ];

  const defaultSelectedLabel = 'Payments';
  const { collapsed } = useSidebar((state) => state);

  return (
    <div className={`pr-3 mt-2  ${collapsed ? 'flex-col' : 'flex-row'}`}>
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center  text-gray-400 justify-start px-3 max-h-full cursor-pointer hover:bg-[#2a3557] hover:text-white ${item.label === defaultSelectedLabel ? 'bg-[#2a3557] text-white ' : ''}`}
        >
          {collapsed ? (
            <div className="p-2 -mx-2.5 text-sm ">{item.icon}</div>
          ) : (
            <>

              <div className="p-1 text-xs">{item.icon}</div>
              <div className="p-1.5 text-xs">{item.label}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navitems;
