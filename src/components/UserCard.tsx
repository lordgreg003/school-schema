"use claint";
import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 min-w-[130px]">
      <div>
        <span>2024/2025</span>
        <Image src="/more.png" alt="" width={20} height={20} />
        <h1>1,234</h1>
        <h1>{type}</h1>
      </div>
    </div>
  );
};

export default UserCard;
