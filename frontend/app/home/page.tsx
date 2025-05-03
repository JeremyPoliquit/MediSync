import { redirect } from "next/navigation";

import { LogoutButton } from "@/components/logout-button";
import { createClient } from "@/lib/server";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { DashboardNav } from "@/components/dashboard-nav";

export default async function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <DashboardNav />
    </SidebarProvider>
  );
}
