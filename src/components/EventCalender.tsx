"use client";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// temporary
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 pm",
    description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit ",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 pm",
    description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit ",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 pm",
    description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit ",
  },
];

const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white rounded-md flex flex-col ml-2  ">
      <Calendar className="" onChange={onChange} value={value} />
      <div className="flex p-3 items-center justify-between">
        <h1 className="text-xl font-bold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" height={20} width={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((i) => (
          <div key={i.id} className="p-5 border-2 rounded-md border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600 ">{i.title}</h1>
              <span className="text-gray-300 text-xs">{i.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{i.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalender;
