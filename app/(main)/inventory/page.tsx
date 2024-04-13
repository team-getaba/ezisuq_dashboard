"use client";

import { useSearchParams } from "next/navigation";

export default function Inventory() {
  const searchParams = useSearchParams();
  console.log("search prams", searchParams.get("search"));

  return <div className="">{searchParams.get("search")}</div>;
}
