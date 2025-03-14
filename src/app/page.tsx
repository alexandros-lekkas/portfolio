import { Suspense } from "react";
import Link from "next/link";

import { Hero } from "./components/hero";
import { Commits } from "./components/commits";
import { Work } from "./components/work";
import { Education } from "./components/education";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero />

      <Work />

      <Education />

      <Skills />

      <Projects />

      <Suspense>
        <Commits />
      </Suspense>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat?{" "}
              <Link
                href={"mailto:alexandros.lekkas@outlook.com"}
                className="text-blue-500 hover:underline"
              >
                Just shoot me an email
              </Link>{" "}
              and I&apos;ll respond whenever I can.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
