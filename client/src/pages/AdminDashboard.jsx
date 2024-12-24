import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/components/Header";
import AddBook from "@/components/dashboard/AddBook";
import ListBook from "@/components/dashboard/ListBook";
import EditBook from "@/components/dashboard/EditBook";
import AnalyticsCard from "@/components/dashboard/AnalyticsCard";
const AdminDashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromURL = urlParams.get("tab");
    if (tabFromURL) {
      setTab(tabFromURL);
    } else {
      setTab("");
    }
  }, [location.search]);

  return (
    <>
      <Header />
      <section className="min-h-screen">
        <SidebarProvider>
          <AppSidebar />

          <main className="w-full dark:bg-gray-900">
            <SidebarTrigger className="dark:text-gray-300" />
            {tab === "add-book" && <AddBook />}
            {tab === "list-book" && <ListBook />}
            {tab === "edit-book" && <EditBook />}
            {location.pathname === "/admin" && tab === "" && <AnalyticsCard />}
          </main>
        </SidebarProvider>
      </section>
    </>
  );
};

export default AdminDashboard;
