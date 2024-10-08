"use client";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import FinanceChart from "@/components/FinanceChart";
import React from "react";
import EventCalender from "@/components/EventCalender";

const page = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        {/* user cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* middle charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count charts */}
          <div className="w-full h-[450px] lg:w-1/3">
            <CountChart />
          </div>
          {/* attendace charts */}
          <div className="w-full h-[450px] lg:w-2/3">
            <AttendanceChart />
          </div>
        </div>
        {/* bottom charts */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <EventCalender />
      </div>
    </div>
  );
};

export default page;
