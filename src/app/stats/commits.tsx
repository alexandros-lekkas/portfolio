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
  console.log(data)
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
    <div className="grid grid-cols-52 gap-1">
      {Array.from({ length: 52 * 7 }, (_, i) => {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      const dateString = currentDate.toISOString().split("T")[0];

      const commit = commitMap.get(dateString);
      const backgroundColor = commit ? commit.color : "#ebedf0";

      return (
        <div
        key={dateString}
        className="w-3 h-3 sm:w-4 sm:h-4 rounded-md transition-all duration-150 cursor-pointer"
        style={{ backgroundColor }}
        ></div>
      );
      })}
    </div>
  );
}
