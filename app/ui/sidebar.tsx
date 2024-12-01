"use client";

import Image from "next/image";
import SideBarItem from "./sidebar-item";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

import IcDashboard from "./assets/svg/dashboard";
import IcGames from "./assets/svg/game";
import IcChat from "./assets/svg/chat";
import IcFriends from "./assets/svg/friends";
import IcLibrary from "./assets/svg/library";
import IcStats from "./assets/svg/stats";

import clsx from "clsx";
import Link from "next/link";

interface Sidebarprops {
  children: React.ReactNode;
}

const Sidebar: React.FC<Sidebarprops> = ({ 
  children 
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const routes = useMemo(() => [
    {
      icon: IcDashboard,
      name: "Dashboard",
      href: "/",
      active: pathname === "/",
    },

    {
      icon: IcGames,
      name: "Games",
      href: "/games",
      active: pathname === "/games",
    },

    {
      icon: IcChat,
      name: "Chat",
      href: "/chat",
      active: pathname === "/chat",
    },

    {
      icon: IcFriends,
      name: "Friends",
      href: "/friends",
      active: pathname === "/friends",
    },

    {
      icon: IcLibrary,
      name: "Library",
      href: "/library",
      active: pathname === "/library",
    },

    {
      icon: IcStats,
      name: "Stats",
      href: "/stats",
      active: pathname === "/stats",
    }
  ], [pathname])

  return (
    <div className="flex h-full relative">
      <div className="
        w-[120px]
        min-h-[100vh]
        h-full
        flex
        flex-col
        justify-between
        items-center
        fixed
        bg-theme
        z-10
      ">
        {/* logo */}
        <div className="
          w-[48px]
          h-[48px]
          m-[40px]
        ">
          <Image
            src="/images/logo.png"
            alt="PlayStation logo"
            width={48}
            height={48}
          />
        </div>

        <ul className="w-full">
          {routes.map(route => (
            <li
            key={route.href}>
              <Link
                href={route.href}
                className={clsx("w-full min-h-[48px] cursor-pointer flex justify-center items-center hover:bg-primary relative", 
                    {
                      "bg-primary": route.active
                    }
                  )}

                onClick={(e) => {
                  e.preventDefault();
                  router.push(route.href);
                }}
              >
                <SideBarItem
                  isActive={route.active}
                >
                  <route.icon />
                </SideBarItem>
              </Link>
            </li>
          ))}
        </ul>

        {/* profile */}
        <div className="
          w-[48px]
          h-[48px]
          m-[40px]
          relative
        ">
          <div className="
            w-[10px]
            h-[10px]
            bg-indicator
            rounded-full
            border-2
            border-hidden
            absolute
            top-0
            right-0
          "></div>

          <Image
            src="/images/entriflay.avif"
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
      </div>
      
      <main className="flex pl-[120px]">
        {children}
      </main>
    </div>
  );
}
 
export default Sidebar;