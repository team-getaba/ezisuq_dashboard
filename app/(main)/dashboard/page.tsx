"use client";

import { useSearchParams } from "next/navigation";
import AreaChartHero from "../../../components/areachart";
import { PiChart } from "@/components/pichart";
import Cards from "../../../components/cards";
import { Tables } from "../../../components/table";
import Watchlist from "../../../components/watchlist";

export default function DashBoard() {
  const searchParams = useSearchParams();
  console.log("search prams", searchParams.get("search"));

  return (
    <div className="flex flex-col w-full justify-between items-center gap-4">
      <div className="w-full">
        <Cards />
      </div>
      <div className="flex w-full gap-4 justify-center  items-center">
        <div className="bg-[var(--bg-lightgray)] w-2/3 p-4 h-[25em] rounded-md">
          <AreaChartHero />
        </div>
        <div className="bg-[var(--bg-lightgray)] w-1/3 p-4 h-[25em] rounded-md flex justify-center items-center">
          <PiChart />
        </div>
      </div>
      <div className="flex flex-row-reverse w-full gap-4 justify-center  items-start">
        <div className="bg-[var(--bg-lightgray)] w-1/3 h-full rounded-md flex justify-center items-center">
          <Watchlist />
        </div>
        <div className="w-2/3 rounded-md">
          <Tables page="home" />
        </div>
      </div>
      {searchParams.get("search")}
    </div>
  );
}
