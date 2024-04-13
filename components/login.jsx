"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LogIn() {
  const router = useRouter();

  const sub = (e) => {
    e.preventDefault();
    // alert(e.target[1].value);
    router.push("/dashboard", { scroll: false });
  };
  return (
    <main className="bg-[var(--bg-lightgray)] w-full h-screen flex justify-center items-center">
      <div className="bg-white py-6 rounded-md px-6 w-[25em] flex justify-center items-start gap-[20px] flex-col">
        <div className="w-full text-[30px] ">LOG IN</div>

        <form
          action=""
          onSubmit={sub}
          className="w-full flex justify-around  items-center gap-[25px] flex-col h-[80%]"
        >
          <div className="h-full flex justify-center gap-3 items-start flex-col w-full">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              id=""
              className="bg-none border-orange-200 w-full border-2 !outline-orange-400 pl-2 h-[3em] rounded-md"
            />
          </div>

          <div className="h-full flex justify-center gap-3 items-start flex-col w-full">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id=""
              className="bg-none border-orange-200 w-full border-2 !outline-orange-400 pl-2 h-[3em] rounded-md"
            />
          </div>

          <div className="h-full flex justify-center gap-6 items-start flex-col w-full">
            <Link href="/dashboard" className="w-full text-end text-blue-500">
              Forget Password
            </Link>
            <button className="bg-orange-400 hover:bg-orange-500  text-white rounded-md w-full h-[3em] flex justify-center items-center">
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
