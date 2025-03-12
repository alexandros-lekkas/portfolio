import { CommitHeatmap } from "./commits";

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

export default async function StatsPage() {
  const commits = await fetchCommits();

  return <>
  <CommitHeatmap commits={commits} />
  </>;
}
