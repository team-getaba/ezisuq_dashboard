import { DonutChart, Legend } from "@tremor/react";

const sales = [
  {
    name: "New York",
    sales: 980,
  },
  {
    name: "London",
    sales: 456,
  },
  {
    name: "Hong Kong",
    sales: 390,
  },
  {
    name: "San Francisco",
    sales: 240,
  },
];

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export function PiChart() {
  return (
    <div className="flex flex-col gap-3 items-center justify-between h-full  w-full space-x-6">
      <p className="text-tremor-metric font-semibold w-full text-start">
        Total Sales By Category
      </p>

      <DonutChart
        data={sales}
        category="sales"
        index="name"
        valueFormatter={valueFormatter}
        colors={["orange", "cyan", "indigo", "violet", "fuchsia"]}
        className="w-40"
      />
      <Legend
        categories={["Electronics", "Fashine", "Food", "Automotive"]}
        colors={["orange", "cyan", "indigo", "violet", "fuchsia"]}
        className=""
      />
    </div>
  );
}
