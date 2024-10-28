"use client"
import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import EventCalender from "@/components/EventCalender";
import React from "react";

const page = () => {
  return (
    <div className="p-4 flex flex-col xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/2 flex  flex-col gap-8">
        <EventCalender />
        <Announcement />
      </div>
    </div>
  );
};

export default page;
