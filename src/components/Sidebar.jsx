
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BarChart2, Package, ShoppingCart, User, LogOut, Menu } from "lucide-react";

const Sidebar = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const navItems = [
    { name: 'Meus Produtos', icon: <Package className="h-5 w-5" />, href: '#products' },
    { name: 'Pedidos Recebidos', icon: <ShoppingCart className="h-5 w-5" />, href: '#orders' },
    { name: 'Estatísticas', icon: <BarChart2 className="h-5 w-5" />, href: '#stats' },
    { name: 'Perfil', icon: <User className="h-5 w-5" />, href: '#profile' },
  ];

  return (
    <aside
      className={cn(
        "h-screen bg-agrogreen text-agrocream flex flex-col",
        collapsed ? "w-16" : "w-64",
        "transition-all duration-300 ease-in-out",
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-agrogreen-light">
        {!collapsed && (
          <div className="flex items-center">
            <span className="text-xl font-bold">AgroConecta</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-agrocream hover:bg-agrogreen-light hover:text-agrocream"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center p-3 text-base font-normal rounded-lg hover:bg-agrogreen-light"
              >
                {item.icon}
                {!collapsed && <span className="ml-3">{item.name}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-agrogreen-light">
        <a
          href="#logout"
          className="flex items-center p-3 text-base font-normal rounded-lg hover:bg-agrogreen-light"
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span className="ml-3">Sair</span>}
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
