"use claint";
import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow flex-1 p-4 min-w-[130px]">
      <div className="flex justify-between items-center flex-col ">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/2025
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
        <h1 className="twxt-2xl font-semibold my-4">1,234</h1>
        <h1 className="capitalize text-sm font-medium text-gray-500 ">{type}</h1>
      </div>
    </div>
  );
};

export default UserCard;
