
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Map GitHub’s returned colors to Tailwind classes so you can adjust them per theme:
const githubColorMap: Record<string, string> = {
  "#ebedf0": "bg-gray-200 dark:bg-gray-700",   // Typically no/low commits
  "#9be9a8": "bg-green-100 dark:bg-green-600",
  "#40c463": "bg-green-300 dark:bg-green-700",
  "#30a14e": "bg-green-600 dark:bg-green-800",
  "#216e39": "bg-green-800 dark:bg-green-900",
  // Add or adjust mappings if GitHub returns different hex codes
};

async function fetchCommits() {
  const query = `
    query {
      user(login: "alexandros-lekkas") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch commits");
  }

  const data = await response.json();
  return data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
    (week: any) =>
      week.contributionDays.map((day: any) => ({
        date: day.date,
        count: day.contributionCount,
        color: day.color,
      }))
  );
}

export async function Commits() {
  const commits = await fetchCommits();
  const commitMap = new Map(
    commits.map((commit: any) => [commit.date, commit])
  );

  // Calculate the date range (52 weeks back)
  const today = new Date();
  const startDate = new Date();
  startDate.setDate(today.getDate() - 52 * 7);

  return (
    <div className="flex flex-row flex-wrap gap-1 p-4 border rounded-xl bg-white dark:bg-gray-900 dark:border-gray-700">
      {Array.from({ length: 52 * 7 }, (_, i) => {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        const dateString = currentDate.toISOString().split("T")[0];

        const commit = commitMap.get(dateString);
        const backgroundClass =
          commit && commit.color
            ? githubColorMap[commit.color] ||
              "bg-gray-200 dark:bg-gray-700" // fallback if color is not in map
            : "bg-gray-200 dark:bg-gray-700"; // no-commit fallback

        return (
          <TooltipProvider key={dateString}>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className={`w-4 h-4 rounded-md cursor-pointer transition-all duration-150 ${backgroundClass}`}
                />
              </TooltipTrigger>
              <TooltipContent>
                {commit ? (
                  <div>
                    <div>{commit.count} commits</div>
                    <div>{dateString}</div>
                  </div>
                ) : (
                  <div>No commits</div>
                )}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
}
