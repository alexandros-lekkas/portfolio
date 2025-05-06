import Image from "next/image";

const skills = [
  "Java",
  "Python",
  "C",
  "JavaScript",
  "TypeScript",
  "FastAPI",
  "Flask",
  "Django",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bun",
  "Deno",
  "SQL",
  "Postgres",
  "Supabase",
  "Git",
];

export function About() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-3">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">Hi, I'm Alexandros 👋</h2>

          <p className="text-lg font-semibold">
            Computer Science @ University of Chicago | Aspiring Entrepreneur &
            Software Engineer
          </p>

          <div className="flex flex-wrap gap-1 mb-2">
            {skills.map((skill) => (
              <span key={skill} className="text-xs lg:text-sm text-slate-100 bg-slate-800 dark:bg-foreground dark:text-background rounded-full font-semibold px-3 py-1">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <Image
          src="/images/me.jpg"
          alt="me"
          width={175}
          height={175}
          className="rounded-full size-48 md:size-56 lg:size-64 aspect-square ring-4 ring-neutral-100 dark:ring-neutral-800"
        />
      </div>
    </>
  );
}
