import { Suspense } from "react";

import { Contact } from "./contact";
import { Commits } from "./commits";
import { Portfolio } from "./portfolio";

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
