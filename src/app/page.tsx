import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

export default function Page() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <InteractiveGridPattern width={100} height={100} />

      <div className="flex h-full w-full items-center justify-center p-4">
        <div className="rounded-xl bg-background backdrop-blur-lg shadow-lg w-full max-w-2xl overflow-hidden">
          <div className="bg-muted p-3 gap-2 flex flex-row">
            <div className="size-4 rounded-full bg-red-400" />
            <div className="size-4 rounded-full bg-yellow-400" />
            <div className="size-4 rounded-full bg-green-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
