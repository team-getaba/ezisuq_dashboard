"use client";

import { RiFlag2Line } from "@remixicon/react";
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { useState } from "react";
import SidePanel from "./sidepanel";

const generateDummyData = () => {
  const dummyData = [];

  for (let i = 0; i < 30; i++) {
    const res = Math.floor(Math.random() * 3);
    const item = {
      name: `customer_${i + 1}`,
      product: `Product_${i + 1}`,
      price: Math.floor(Math.random() * 100) + 1, // Random price between 1 and 100
      status: ["received", "canceled", "pending"][res], // Random status
      color: ["green", "red", "orange"][res], // Random color
      date: `10/${Math.floor(Math.random() * 12) + 1}/2024`, // Random date between 1st and 12th of October 2024
      location: `Location_${i}`,
    };
    dummyData.push(item);
  }

  return dummyData;
};

const data = generateDummyData();

export function Tables({ page }) {
  const [ordersSelected, setOrdersSelected] = useState("all orders");
  const [showSide, setshowSide] = useState({ show: false, item: -1 });
  const orders = ["all orders", "received", "canceled", "pending"];

  return (
    <div className="text-black">
      <div className="w-full flex justify-between h-[3em] items-center">
        <h3 className=" font-bold">
          {page == "home" ? "Recent Orders" : "Orders"}
        </h3>
        <div
          className="bg-orange-100 rounded-md h-full flex gap-1 p-1"
          style={{ width: page == "order" ? "40%" : "60%" }}
        >
          {orders?.map((item, index) => (
            <button
              key={index}
              onClick={() => setOrdersSelected(item)}
              className={` capitalize w-full h-full rounded-md ${
                item == ordersSelected
                  ? "bg-orange-400 text-white"
                  : "bg-none text-gray-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <table className="mt-4 border-separate border-spacing-y-[.71rem] w-full text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="!text-black">Product</TableHeaderCell>
            <TableHeaderCell className="!text-black">Customer</TableHeaderCell>
            <TableHeaderCell className="!text-black">
              Purchased On
            </TableHeaderCell>
            <TableHeaderCell className="!text-black">Price</TableHeaderCell>
            <TableHeaderCell className="!text-black">
              Delivery Status
            </TableHeaderCell>
            <TableHeaderCell className="!text-black">Location</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className="!mt-4" key={showSide.item}>
          {data
            .filter((item) => {
              if (ordersSelected === "all orders") {
                return true; // Include all items if "all orders" is selected
              } else {
                return item.status === ordersSelected; // Only include items with matching status
              }
            })
            .slice(0, page == "order" ? Infinity : 7)
            .map((item, index) => (
              <TableRow
                className={`hover:bg-orange-100 hover:cursor-pointer bg-[var(--bg-lightgray)] ${
                  index == showSide.item ? " bg-orange-400 text-white" : ""
                }`}
                key={item.name}
                onClick={() =>
                  setshowSide({ show: !showSide.show, item: index })
                }
              >
                <TableCell>
                  <span className="capitalize">{item.product}</span>
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>
                  <Badge color={item.color} icon={RiFlag2Line}>
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="uppercase">{item.location}</span>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </table>

      {showSide.show && (
        <SidePanel
          onClick={() => setshowSide({ show: !showSide.show, item: -1 })}
        >
          abcd
        </SidePanel>
      )}
    </div>
  );
}
