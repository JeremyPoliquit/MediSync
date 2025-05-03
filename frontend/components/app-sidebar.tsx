import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Badge } from "./ui/badge";
import { LogoutButton } from "./logout-button";
import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";

const items = [
  {
    title: "Home",
    url: "#",
    icon: "Home",
  },
  {
    title: "Inbox",
    url: "#",
    icon: "Inbox",
  },
  {
    title: "Calendar",
    url: "#",
    icon: "Calendar",
  },
  {
    title: "Search",
    url: "#",
    icon: "Search",
  },
  {
    title: "Settings",
    url: "#",
    icon: "Settings",
  },
];

export async function AppSidebar() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }
  return (
    <Sidebar>
      <SidebarGroupLabel>
        <Badge>{data.user.email}</Badge>
      </SidebarGroupLabel>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <LogoutButton />
      </SidebarFooter>
    </Sidebar>
  );
}
