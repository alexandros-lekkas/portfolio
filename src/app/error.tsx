import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-4 space-y-3 rounded-xl border border-destructive/75 bg-destructive/10">
      <p className="font-medium">{error.message}</p>

      <Button variant="destructive" size="sm" onClick={() => reset()}>
        Try Again
      </Button>
    </div>
  );
}
