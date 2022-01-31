import React from "react";
import useSWR from "swr";

export interface StudentDetailProps {
  studentId: any;
}

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

export default function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, isValidating, mutate } = useSWR(
    `/students/${studentId}`,
    {
      revalidateOnFocus: false,
      revalidateOnMount: false,
      dedupingInterval: MILLISECOND_PER_HOUR,
      //   dedupingInterval: 2000,
    }
  );

  function handleMutateClick() {
    mutate({ name: "easy frontend" }, true);
  }

  return (
    <div>
      Name: {data?.name || "--"}{" "}
      <button onClick={handleMutateClick}>mutate</button>
    </div>
  );
}
