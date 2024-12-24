import React, { useState, useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Loader } from "lucide-react"; // Import the Loader component

// Dynamically import components
const Header = lazy(() => import("@/components/Header"));
const AppSidebar = lazy(() => import("@/components/AppSidebar"));
const AddBook = lazy(() => import("@/components/dashboard/AddBook"));
const ListBook = lazy(() => import("@/components/dashboard/ListBook"));
const EditBook = lazy(() => import("@/components/dashboard/EditBook"));
const AnalyticsCard = lazy(() =>
  import("@/components/dashboard/AnalyticsCard")
);

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
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <Loader className="animate-spin text-blue-500" size={48} />
          </div>
        }
      >
        <Header />
      </Suspense>
      <section className="min-h-screen">
        <SidebarProvider>
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <Loader className="animate-spin text-blue-500" size={48} />
              </div>
            }
          >
            <AppSidebar />
          </Suspense>

          <main className="w-full dark:bg-gray-900">
            <SidebarTrigger className="dark:text-gray-300" />
            {tab === "add-book" && (
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-screen">
                    <Loader className="animate-spin text-blue-500" size={48} />
                  </div>
                }
              >
                <AddBook />
              </Suspense>
            )}
            {tab === "list-book" && (
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-screen">
                    <Loader className="animate-spin text-blue-500" size={48} />
                  </div>
                }
              >
                <ListBook />
              </Suspense>
            )}
            {tab === "edit-book" && (
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-screen">
                    <Loader className="animate-spin text-blue-500" size={48} />
                  </div>
                }
              >
                <EditBook />
              </Suspense>
            )}
            {location.pathname === "/admin" && tab === "" && (
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-screen">
                    <Loader className="animate-spin text-blue-500" size={48} />
                  </div>
                }
              >
                <AnalyticsCard />
              </Suspense>
            )}
          </main>
        </SidebarProvider>
      </section>
    </>
  );
};

export default AdminDashboard;
