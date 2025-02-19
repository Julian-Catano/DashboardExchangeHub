import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";
import Creators from "./Creators";

// import { NavMain } from "@/components/nav-main";
// import { SidebarOptInForm } from "@/components/sidebar-opt-in-form";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Dashboard</span>
                  <span className="">ExchangeHub</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <div className="aspect-video rounded-xl bg-muted/50 p-4">
          <h2 className="text-lg font-semibold mb-3">Creadores</h2>
          <div className="space-y-3">
            <Creators
              image="https://avatars.githubusercontent.com/u/145505587?v=4&size=64"
              name="Julian Estiven Posso Cataño"
              description="Desarrollador"
            />
            <Creators
              image="https://avatars.githubusercontent.com/u/145505590?v=4"
              name="Geronimo Trujillo Bustamante"
              description="Desarollador"
            />
            <Creators
              image="https://avatars.githubusercontent.com/u/145801000?v=4"
              name="Juan Pablo Ruiz Marin"
              description="Desarollador"
            />
          </div>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
