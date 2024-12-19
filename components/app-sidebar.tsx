import * as React from "react";
import {
  ChevronDown,
  Search,
  Calendar,
  Settings,
  Users,
  PieChart,
  Monitor,
  LayoutGrid,
  Airplay,
  StretchHorizontal,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { VersionSwitcher } from "@/components/version-switcher";
import Link from "next/link";

const sidebarItems = [
  { title: "Dashboard", icon: <Monitor />, url: "/dashboard" },
  { title: "Search", icon: <Search />, url: "/search" },
  { title: "Bookings", icon: <Calendar />, url: "/bookings" },
  { title: "Settings", icon: <Settings />, url: "/settings" },
  { title: "Modules", icon: <LayoutGrid />, url: "/modules" },

  { header: "Members" },
  {
    title: "Users",
    icon: <Users />,
    children: [
      { title: "All Users", url: "/users" },
      { title: "Lead", url: "/users/lead" },
      { title: "Customers", url: "/users/customers" },
      { title: "Staff", url: "/users/staff" },
      { title: "Agents", url: "/users/agents" },
      { title: "Suppliers", url: "/users/suppliers" },
    ],
  },

  { header: "Reports & Logs" },
  {
    title: "Reports",
    icon: <PieChart />,
    children: [
      { title: "All Booking Reports", url: "/reports-bookings-all" },
      { title: "Flights Reports", url: "/reports-flights" },
      { title: "Hotels Reports", url: "/reports-hotels" },
      { title: "Cars Reports", url: "/reports-cars" },
      { title: "Tours Reports", url: "/reports-tours" },
      { title: "Visa Reports", url: "/reports-visa" },
      { title: "Cruises Reports", url: "/reports-cruises" },
      { title: "Insurance Reports", url: "/reports-insurance" },
    ],
  },

  { header: "Documentation" },
  {
    title: "Documentation",
    icon: <StretchHorizontal />,
    url: "#",
  },
  {
    title: "Integrations",
    icon: <Airplay />,
    url: "#",
  },
];

const versions = ["Agancy", "Agancy 2", "Agancy 3"];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} >
      <span className="text-center py-4 font-bold">Logo</span>

      <SidebarHeader className="mb-3 mt-6">
        <VersionSwitcher versions={versions} defaultVersion={versions[0]} />
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {sidebarItems.map((item, idx) =>
            item.header ? ( 
              <div
                key={`header-${idx}`}
                className="px-8 py-2 text-sm text-[#9e9e9e]"
              >
                {item.header}
              </div>
            ) : item.children ? (
              <Collapsible key={idx}>
                <CollapsibleTrigger asChild>
                  <div className="flex items-center gap-3 cursor-pointer px-4 py-2 hover:bg-gray-100">
                    {item.icon}
                    <span>{item.title}</span>
                    <ChevronDown className="ml-auto" size={16} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="pl-8">
                    {item.children.map((child, cIdx) => (
                      <SidebarMenuItem key={cIdx}>
                        <SidebarMenuButton asChild>
                          <Link
                            href={child.url}
                            className="block py-1.5 text-sm hover:text-primary"
                          >
                            {child.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarMenuItem key={idx}>
                <SidebarMenuButton asChild>
                  <Link
                    href={item.url as string}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                  >
                    <span>{item.icon}</span>
                    <span className="text-base">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          )}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
