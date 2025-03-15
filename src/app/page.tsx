import { Suspense } from "react";

import { Contact } from "./components/contact";
import { Commits } from "./components/commits";
import { Portfolio } from "./components/portfolio";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh] space-y-10">
      <Portfolio />

      <Suspense>
        <Commits />
      </Suspense>

      <Contact />
    </div>
  );
}
