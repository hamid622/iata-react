"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import CircularProgress from "@/components/CircularProgress";
import React, { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Page() {
  const chartData = {
    labels: [
      "Nov 20",
      "Nov 21",
      "Nov 22",
      "Nov 23",
      "Nov 24",
      "Nov 25",
      "Nov 26",
      "Nov 27",
      "Nov 28",
      "Nov 29",
      "Nov 30",
      "Dec 1",
      "Dec 2",
      "Dec 3",
      "Dec 4",
      "Dec 5",
      "Dec 6",
      "Dec 7",
      "Dec 8",
      "Dec 9",
      "Dec 10",
      "Dec 11",
      "Dec 12",
      "Dec 13",
      "Dec 14",
      "Dec 15",
      "Dec 16",
      "Dec 17",
      "Dec 18",
      "Dec 19",
    ],
    datasets: [
      {
        label: "Visits",
        data: [
          0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 10, 20, 60, 90, 20, 10,
        ],
        backgroundColor: "#007d88",
      },
      {
        label: "Bookings",
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 4,
        ],
        backgroundColor: "#25cba1",
      },
      {
        label: "Searches",
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 18, 0, 0, 0, 0, 10, 0, 0,
          0, 0, 0, 2, 0, 0, 0, 4,
        ],
        backgroundColor: "#a78bfa",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const currentMonthSearches = chartData.datasets[2].data.reduce(
    (a, b) => a + b,
    0
  );

  const currentMonthTraffic = chartData.datasets[0].data.reduce(
    (a, b) => a + b,
    0
  );
  const maxValue = Math.max(currentMonthSearches, currentMonthTraffic, 100); // Use 100 as minimum max value

  const TrafficData = [
    {
      date: "2024-12-19 20:25:33",
      co: "PK",
      ip: "110.39.54.38",
      link: "https://iata.co/dashboard",
    },
    {
      date: "2024-12-19 20:25:33",
      co: "PK",
      ip: "110.39.54.38",
      link: "https://iata.co/dashboard",
    },
    {
      date: "2024-12-19 20:25:33",
      co: "PK",
      ip: "110.39.54.38",
      link: "https://iata.co/dashboard",
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="ml-1 mt-40 relative z-50" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink className="text-[#262a2e] hover:text-[#262a2e] text-2xl relative  top-20 left-0">
                  Welcome Back
                </BreadcrumbLink>
              </BreadcrumbItem>
              {/* <BreadcrumbSeparator className="hidden md:block" /> */}
              {/* <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem> */}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div>
          <div className="p-6 space-y-6 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="col-span-2">
                <CardHeader className="border-b border-b-[#eaeaea] bg-[#f7f7f7] p-0 py-3 px-5">
                  <CardTitle className="text-[#262a2e] text-base font-medium">
                    Statics Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Bar data={chartData} options={options as any} />
                </CardContent>
                <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 border-t p-6">
                  <div className="box">
                    <p className="font-medium text-sm text-[#6f6f6f]">
                      Total Users{" "}
                    </p>
                    <span className="font-medium text-2xl text-[#262a2e]">
                      3
                    </span>
                  </div>

                  <div className="box">
                    <p className="font-medium text-sm text-[#6f6f6f]">
                      Total Searches{" "}
                    </p>
                    <span className="font-medium text-2xl text-[#262a2e]">
                      0
                    </span>
                  </div>

                  <div className="box">
                    <p className="font-medium text-sm text-[#6f6f6f]">
                      Total Bookings{" "}
                    </p>
                    <span className="font-medium text-2xl text-[#262a2e]">
                      3
                    </span>
                  </div>

                  <div className="box">
                    <p className="font-medium text-sm text-[#6f6f6f]">
                      Total Traffic{" "}
                    </p>
                    <span className="font-medium text-2xl text-[#262a2e]">
                      120
                    </span>
                  </div>
                </div>
              </Card>

              <Card>
                <CardHeader className="border-b border-b-[#eaeaea] bg-[#f7f7f7] p-0 py-3 px-5">
                  <CardTitle className="text-[#262a2e] text-base font-medium">
                    Searches and Traffic
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <div className="py-10 flex items-center justify-center">
                      {/* show circle here */}
                      <CircularProgress
                        searches={currentMonthSearches}
                        traffic={currentMonthTraffic}
                        maxValue={maxValue}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#007d88] "></span>
                        <p className="text-sm text-gray-500">
                          This Month Searches
                        </p>
                      </div>
                      <span className="font-medium text-[#262a2e] text-xl">
                        0
                      </span>
                      <div className="flex items-center gap-2 mt-[22px]">
                        <span className="h-2 w-2 rounded-full bg-[#6bb4ba]"></span>
                        <p className="text-sm text-gray-500">
                          This Month Traffic
                        </p>
                      </div>
                      <span className="font-medium text-[#262a2e] text-xl">
                        122
                      </span>
                    </div>
                  </div>
                </CardContent>
                <p className="text-sm font-normal text-[#6f6f6f] p-5 px-6 border-t border-t-[#eaeaea]">
                  All searches and traffic data is based on current month.
                </p>
              </Card>
            </div>

            <CardHeader className="border-b border-b-[#eaeaea] bg-[#f7f7f7] p-0 py-3 px-5">
              <CardTitle className="text-[#262a2e] text-base font-medium">
                Recent Top Traffic
              </CardTitle>
            </CardHeader>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs font-bold text-[#262a2e]">
                    Date
                  </TableHead>
                  <TableHead className="text-xs font-bold text-[#262a2e]">
                    CO
                  </TableHead>
                  <TableHead className="text-xs font-bold text-[#262a2e]">
                    IP
                  </TableHead>
                  <TableHead className="text-xs font-bold text-[#262a2e]">
                    Link
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {TrafficData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{data.date}</TableCell>
                    <TableCell>{data.co}</TableCell>
                    <TableCell>{data.ip}</TableCell>
                    <TableCell>{data.link}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
