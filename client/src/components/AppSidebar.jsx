import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Plus, ChartBar, Home, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Add Book",
    url: "/admin?tab=add-book",
    icon: Plus,
  },
  {
    title: "Book List",
    url: "/admin?tab=list-book",
    icon: ChartBar,
  },
  {
    title: "Sign Out",
    url: "/",
    icon: LogOut,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar className="mt-16 dark:border-none shadow-sidebar shadow-md">
      <SidebarContent className="dark:bg-gray-800">
        <SidebarGroup>
          <SidebarGroupLabel className="w-1/2 mx-auto mt-2 text-lg font-bold  dark:text-gray-300">
            Admin
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col py-5 space-y-2">
              {navLinks.map((navLink) => (
                <SidebarMenuItem key={navLink.title}>
                  <SidebarMenuButton className="py-2 px-3 text-lg" asChild>
                    <Link
                      className="flex items-center space-x-3 dark:hover:bg-gray-600 hover:bg-gray-100 rounded-lg py-5"
                      to={navLink.url}
                    >
                      <navLink.icon className="!w-6 !h-6" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {navLink.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
