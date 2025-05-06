"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { ScrollArea } from "@/components/ui/scroll-area";

import { About } from "./about";
import { Projects } from "./projects";
import { Settings } from "./settings";

const tabs = [
  { name: "About", component: <About /> },
  { name: "Projects", component: <Projects /> },
  { name: "Settings", component: <Settings /> },
];

export default function Page() {
  const [background, setBackground] = useState<string>(
    "slate-800 dark:bg-neutral-900"
  );
  const [activeTab, setActiveTab] = useState<{
    name: string;
    component: React.ReactNode;
  }>(tabs[0]);

  return (
    <div
      className={cn(
        "fixed inset-0 h-screen w-screen overflow-hidden touch-none overflow-y-hidden scrollbar-none",
        `bg-${background}`
      )}
    >
      <div className="flex h-full w-full items-center justify-center p-4">
        <div className="animate-in fade-in zoom-in-95 rounded-2xl bg-background backdrop-blur-lg shadow-2xl w-full sm:max-w-2xl lg:max-w-[55vw] h-full max-h-[65vh] sm:max-h-96 lg:max-h-[65vh] overflow-hidden ring-4 dark:ring-neutral-700 ring-slate-700 dark:hover:ring-neutral-600 hover:ring-slate-500 transition-all duration-1000">
          <div className="bg-muted pt-3 px-3 gap-2 flex flex-row">
            <div className="size-4 rounded-full bg-red-400" />
            <div className="size-4 rounded-full bg-yellow-400" />
            <div className="size-4 rounded-full bg-green-400" />
          </div>

          <div className="bg-muted p-3 flex flex-row gap-3">
            {tabs.map((tab) => (
              <div
                key={tab.name}
                className={cn(
                  "bg-background px-3 py-1 rounded-lg font-medium transition-all duration-300",
                  activeTab.name === tab.name &&
                  "bg-slate-800 dark:bg-primary text-primary-foreground"
                )}
                onClick={() => setActiveTab(tab)}
              >
                {tab.name}
              </div>
            ))}
          </div>

          <ScrollArea className="bg-background h-full">
            <div className="p-5 pb-28 flex flex-col gap-3 mr-2">
              {activeTab.component}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
