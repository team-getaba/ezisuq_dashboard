"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiListUnordered,
  RiHome6Line,
  RiUser3Line,
  RiSettings3Line,
} from "react-icons/ri";
import {
  MdOutlineShoppingCart,
  MdOutlineInventory,
  MdOutlineHelpOutline,
} from "react-icons/md";
import NavBar from "../../components/navbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const NavLinks = [
    {
      id: 1,
      name: "Home",
      path: "/dashboard",
      icons: <RiHome6Line size="22px" />,
    },
    {
      id: 2,
      name: "Orders",
      path: "/order",
      icons: <RiListUnordered size="22px" />,
    },
    {
      id: 3,
      name: "Products",
      path: "/product",
      icons: <MdOutlineShoppingCart size="22px" />,
    },
    {
      id: 4,
      name: "Inventory",
      path: "/inventory",
      icons: <MdOutlineInventory size="22px" />,
    },
    {
      id: 5,
      name: "Customers",
      path: "/customer",
      icons: <RiUser3Line size="22px" />,
    },
    {
      id: 6,
      name: "Settings",
      path: "/setting",
      icons: <RiSettings3Line size="22px" />,
    },
    {
      id: 7,
      name: "Help & Support",
      path: "/help",
      icons: <MdOutlineHelpOutline size="22px" />,
    },
  ];
  const pathname = usePathname();
  const isActive = (path: String) => path === pathname;

  return (
    <section className="flex">
      <aside className="h-screen sticky top-0 flex flex-col justify-between bg-[var(--bg-lightgray)] gap-4 w-[20%]">
        <div className="h-[10vh] flex justify-center items-center border-b-2 border-gray-200">
          <Link href="/dashboard">EZI SUQ</Link>
        </div>
        <div className="flex justify-start flex-col items-center h-full w-full">
          <ul className="w-[85%]">
            {NavLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={
                    link.id == 6
                      ? "flex gap-3 items-start flex-col w-full p-1 border-t-2 mt-4 pt-4"
                      : "flex gap-3 items-start flex-col w-full p-1"
                  }
                >
                  <Link
                    href={link.path}
                    className={
                      isActive(link.path)
                        ? "bg-orange-400 flex justify-start text-white p-4 rounded-md items-center w-full gap-2"
                        : "hover:bg-orange-400 flex justify-start  p-4 rounded-md items-center w-full gap-2"
                    }
                  >
                    {link.icons} {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" h-[15%] w-full border-t-2 border-gray-200 flex justify-center items-center">
          <Link
            href="/"
            className="border-red-700 border-2 flex hover:text-white justify-center hover:bg-red-700 text-red-700 p-4 rounded-md items-center w-[85%] gap-2"
          >
            logout
          </Link>
        </div>
      </aside>

      <main className="w-full">
        <div className="w-full h-[10vh] border-b-2">
          <NavBar route_name={pathname} />
        </div>
        <div className="px-[3.5%] py-6">{children}</div>
      </main>
    </section>
  );
}
