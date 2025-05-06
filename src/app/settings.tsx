"use client";

import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";

import { Switch } from "@/components/ui/switch";

export function Settings() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <h2 className="text-3xl font-bold">Settings 🔧</h2>

      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col p-3 items-center justify-center min-w-36 gap-3 bg-muted rounded-lg">
          <h3 className="text-lg font-semibold">Theme</h3>

          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-muted-foreground" />
            <Switch
              checked={resolvedTheme === "dark"}
              onCheckedChange={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="sm:cursor-none"
            />
            <Moon className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </>
  );
}
