import { Suspense } from "react";

import { Commits } from "../commits";

export default function StatsPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Commits />
      </Suspense>
    </>
  );
}
