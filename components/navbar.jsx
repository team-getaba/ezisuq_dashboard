"use Client";

import React from "react";
import SearchBar from "./searchBar";
import { useRouter } from "next/navigation";
import { TbArrowBackUp, TbArrowForwardUp } from "react-icons/tb";
import { RiFullscreenFill, RiFullscreenExitFill } from "react-icons/ri";
import { MdOutlineNotifications } from "react-icons/md";

export default function NavBar({ route_name }) {
  const route = useRouter();
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message}`
        );
      });
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  const searchSubmite = (e) => {
    e.preventDefault();
    // alert(e.target[0].value);
    route.replace(
      route_name == "/dashboard"
        ? "/product"
        : route_name + "?search=" + e.target[0].value
    );
  };

  const exception_roues = ["/setting", "/help", "/notification"];

  return (
    <div className="flex justify-between items-center px-[3.5%] h-full">
      <div className="w-1/4 ">
        {route_name == "/dashboard" ? (
          "welcome some one"
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => route.back()}
              className="flex justify-center  hover:bg-orange-400 rounded-full h-[2.5em] w-[2.5em] bg-[var(--bg-lightgray)] items-center gap-2 text-gray-600"
            >
              <TbArrowBackUp size="22px" />
            </button>

            <button
              onClick={() => route.forward()}
              className="flex justify-center  hover:bg-orange-400 h-[2.5em] w-[2.5em] rounded-full bg-[var(--bg-lightgray)] items-center gap-2 text-gray-600"
            >
              <TbArrowForwardUp size="22px" />
            </button>
          </div>
        )}
      </div>
      <div className="h-[50%] w-1/2">
        {!exception_roues.includes(route_name) && (
          <SearchBar
            onSubmit={searchSubmite}
            placeholder={`search ${
              route_name == "/dashboard"
                ? "product"
                : route_name.replace("/", "")
            }...`}
            name="search"
          />
        )}
      </div>
      <div className="w-1/4 flex justify-end items-center gap-2">
        <button
          onClick={toggleFullscreen}
          className="w-[2.5em] h-[2.5em]  hover:bg-orange-400 rounded-full bg-[var(--bg-lightgray)] flex justify-center items-center"
        >
          {isFullScreen ? (
            <RiFullscreenExitFill size="22px" />
          ) : (
            <RiFullscreenFill size="22px" />
          )}
        </button>

        <button
          onClick={() => route.push("/notification")}
          className={
            route_name == "/notification"
              ? "w-[2.5em] h-[2.5em] hover:bg-orange-400 text-white rounded-full bg-orange-400 flex justify-center items-center"
              : "w-[2.5em] h-[2.5em] hover:bg-orange-400 rounded-full bg-[var(--bg-lightgray)] flex justify-center items-center"
          }
        >
          <MdOutlineNotifications size="22px" />
        </button>
        <div className="w-[2.5em] h-[2.5em] hover:bg-orange-200 rounded-full bg-[var(--bg-lightgray)]"></div>
      </div>
    </div>
  );
}
