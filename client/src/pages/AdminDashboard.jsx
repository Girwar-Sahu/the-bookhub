import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/components/Header";
import AddBook from "@/components/dashboard/AddBook";
import ListBook from "@/components/dashboard/ListBook";
const AdminDashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromURL = urlParams.get("tab");
    if (tabFromURL) {
      setTab(tabFromURL);
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
          </main>
        </SidebarProvider>
      </section>
    </>
  );
};

export default AdminDashboard;
