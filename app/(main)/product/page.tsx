"use client";

import { useSearchParams } from "next/navigation";
import { Tables } from "../../../components/table";

export default function Product() {
  const searchParams = useSearchParams();
  console.log("search prams", searchParams.get("search"));

  return (
    <div className="">
      <Tables page="order" />
    </div>
  );
}
