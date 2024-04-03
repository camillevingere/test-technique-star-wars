"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useRouter } from "next/navigation";

export type CoursePaginationButtonProps = {
  totalPages: number;
  page: number;
  baseUrl: string;
};

export const PaginationButton = (props: CoursePaginationButtonProps) => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        disabled={props.page === 1 || props.totalPages === 0}
        onClick={() => {
          const searchParams = new URLSearchParams({
            page: String(props.page - 1),
          });
          const url = `${props.baseUrl}?${searchParams.toString()}`;
          router.push(url);
        }}
      >
        Précédent
      </Button>
      {props.totalPages !== 0 && (
        <Typography>
          {props.page}/{props.totalPages}
        </Typography>
      )}
      <Button
        variant="outline"
        size="sm"
        disabled={props.page === props.totalPages || props.totalPages === 0}
        onClick={() => {
          const searchParams = new URLSearchParams({
            page: String(props.page + 1),
          });
          const url = `${props.baseUrl}?${searchParams.toString()}`;
          router.push(url);
        }}
      >
        Suivant
      </Button>
    </div>
  );
};
