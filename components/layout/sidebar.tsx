"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CreditCard,
  CheckSquare,
  Bell,
  Newspaper,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/todos", icon: CheckSquare, label: "Todos" },
  { href: "/bills", icon: CreditCard, label: "Bills" },
  { href: "/reminders", icon: Bell, label: "Reminders" },
  { href: "/news", icon: Newspaper, label: "News" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col items-center w-[72px] py-4 gap-2 border-r border-border bg-background shrink-0">
      {/* Logo */}
      <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center mb-4">
        <span className="text-primary-foreground font-bold text-sm tracking-tight">J</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col items-center gap-1 flex-1">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              title={label}
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group relative",
                active
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon size={18} strokeWidth={active ? 2.5 : 1.75} />
              {/* Active indicator */}
              {active && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-primary rounded-r-full" />
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
