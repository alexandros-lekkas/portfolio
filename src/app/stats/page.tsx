import { Suspense } from "react";

import { Commits } from "../../components/data/commits";

export default function StatsPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Commits />
      </Suspense>
    </>
  );
}
