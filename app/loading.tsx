import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => {
        return (
          <div key={id} className="flex flex-col justify-between gap-1">
            <Skeleton className="h-40" />
            <div className="flex flex-col gap-1">
              <p className="font-bold">
                <Skeleton className="h-6 w-1/2" />
              </p>
              <p className="text-gray-400 text-sm">
                <Skeleton className="h-6 w-1/4" />
              </p>
            </div>
          </div>
        );
      })}
    </main>
  );
}
