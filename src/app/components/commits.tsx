import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const githubColorMap: Record<string, string> = {
  "#ebedf0": "bg-gray-200 dark:bg-gray-700",
  "#9be9a8": "bg-green-100 dark:bg-green-200",
  "#40c463": "bg-green-300 dark:bg-green-500",
  "#30a14e": "bg-green-600 dark:bg-green-700",
  "#216e39": "bg-green-800 dark:bg-green-900",
};

interface Commit {
  date: string;
  count: number;
  color: string;
}

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
      week.contributionDays.map(
        (day: any) =>
          ({
            date: day.date,
            count: day.contributionCount,
            color: day.color,
          } as Commit)
      )
  );
}

export async function Commits() {
  const commits = await fetchCommits();

  return (
    <section id="commits">
      <div className="flex flex-row flex-wrap gap-1 p-4 border rounded-xl">
        {commits.map((commit: Commit) => {
          const backgroundClass =
            commit.color && githubColorMap[commit.color]
              ? githubColorMap[commit.color]
              : "bg-gray-200 dark:bg-gray-700";

          return (
            <TooltipProvider key={commit.date}>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={`w-4 h-4 rounded-md cursor-pointer transition-all ${backgroundClass}`}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  {commit.count > 0 ? (
                    <div>
                      <div>{commit.count} commits</div>
                      <div>{commit.date}</div>
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
    </section>
  );
}
