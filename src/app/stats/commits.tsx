"use client";

import { memo } from "react";
import { useState } from "react";

// Define props for the component
interface Commit {
  date: string;
  count: number;
  color?: string;
}

interface CommitHeatmapProps {
  commits: Commit[];
}

const CommitHeatmap = memo(({ commits }: CommitHeatmapProps) => {
  const [hoveredCommit, setHoveredCommit] = useState<Commit | null>(null);

  // Define grid layout (7 days per row like GitHub)
  const weeks = 52;
  const daysInWeek = 7;

  // Convert commits to a map for quick lookup
  const commitMap = new Map(commits.map((commit) => [commit.date, commit]));

  // Generate grid for 52 weeks x 7 days
  const today = new Date();
  const startDate = new Date();
  startDate.setDate(today.getDate() - weeks * daysInWeek);

  const gridCells = [];
  for (let i = 0; i < weeks * daysInWeek; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    const dateString = currentDate.toISOString().split("T")[0];

    // Get commit info for this date
    const commit = commitMap.get(dateString);
    const backgroundColor = commit ? commit.color || "#216e39" : "#ebedf0"; // Default GitHub colors

    gridCells.push(
      <div
        key={dateString}
        className="w-3 h-3 sm:w-4 sm:h-4 rounded-md transition-all duration-150 cursor-pointer"
        style={{ backgroundColor }}
        onMouseEnter={() => setHoveredCommit(commit || null)}
        onMouseLeave={() => setHoveredCommit(null)}
      ></div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4">GitHub Commit Heatmap</h2>
      <div className="grid grid-cols-52 gap-1">{gridCells}</div>

      {/* Tooltip Display */}
      {hoveredCommit && (
        <div className="absolute bg-black text-white text-xs px-2 py-1 rounded-md shadow-md">
          {hoveredCommit.date}: {hoveredCommit.count} commits
        </div>
      )}
    </div>
  );
});

export default CommitHeatmap;
