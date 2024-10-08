"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white ">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default EventCalender;
