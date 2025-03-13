import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

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
    }`;

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
  console.log(commits);
  const commitMap = new Map(
    commits.map((commit: any) => [commit.date, commit])
  );

  const today = new Date();
  const startDate = new Date();
  startDate.setDate(today.getDate() - 52 * 7);

  return (
    <div className="flex flex-row flex-wrap gap-1 p-4 border dark:bg-white rounded-xl">
      {Array.from({ length: 52 * 7 }, (_, i) => {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        const dateString = currentDate.toISOString().split("T")[0];

        const commit = commitMap.get(dateString);
        return (
          <TooltipProvider key={dateString}>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className={`w-4 h-4 rounded-md transition-all duration-150 cursor-pointer`}
                  style={{
                    backgroundColor: commit
                      ? commit.color // Use GitHub's commit color if available
                      : "var(--no-commit-color)", // Fallback color for no commits
                  }}
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
