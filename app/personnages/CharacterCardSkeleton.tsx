import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const CharacterCardSkeleton = () => {
  return (
    <Card className="flex flex-col gap-4">
      <CardHeader className="flex flex-row items-center gap-3 space-y-0">
        <Skeleton className="h-6 w-[100px]" />
        <Skeleton className="size-14 rounded-full" />
      </CardHeader>
      <CardContent>
        <Skeleton className="mb-4 h-6 w-[100px]" />
        <Skeleton className="h-6 w-[150px]" />
      </CardContent>
    </Card>
  );
};
