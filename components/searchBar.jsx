"use client";

import React from "react";
import { RiSearchLine } from "react-icons/ri";

export default function SearchBar({ onSubmit, onChange, placeholder, name }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex h-full justify-center items-center"
    >
      <div className="h-full flex justify-center items-center w-[10%] bg-[var(--bg-lightgray)] rounded-l-[30px]">
        <RiSearchLine />
      </div>
      <input
        type="text"
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="bg-[var(--bg-lightgray)] rounded-r-[30px] px-[15px] w-full h-full  outline-orange-400"
      />
    </form>
  );
}
