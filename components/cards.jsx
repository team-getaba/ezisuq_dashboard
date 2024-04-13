const usage = [
  {
    id: 1,
    resource: "Total Sales",
    usage: "145",
    maximum: "This Week",
    href: "#",
    bcolor: "border-purple-500",
  },
  {
    id: 2,
    resource: "Products",
    usage: "1150",
    maximum: "Available in Stock",
    href: "#",
    bcolor: "border-green-500",
  },
  {
    id: 3,
    resource: "Members",
    usage: "3047",
    maximum: "Total",
    href: "#",
    bcolor: "border-blue-500",
  },
  {
    id: 4,
    resource: "Orders",
    usage: "95",
    maximum: "Pending Orders",
    href: "#",
    bcolor: "border-orange-500",
  },
];

export default function Cards() {
  return (
    <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-4">
      {usage.map((item) => (
        <div
          key={item.id}
          className={`p-4 rounded-md !bg-[var(--bg-lightgray)] border-l-[.5em] ${item.bcolor}`}
        >
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            <div className="focus:outline-none">
              <span className="inset-0 " aria-hidden={true} />
              {item.resource}
            </div>
          </p>
          <p className="mt-3 gap-2 flex-col flex">
            <span className="text-tremor-metric font-semibold ">
              {item.usage}
            </span>
            <span className="font-semibold text-tremor-content-subtle dark:text-dark-tremor-content-subtle">
              {item.maximum}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
