import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSky rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="font-medium ">Lorem ipsum dolor sit </h1>
            <span className="">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            mollitia earum unde.
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="font-medium ">Lorem ipsum dolor sit </h1>
            <span className="">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            mollitia earum unde.
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="font-medium ">Lorem ipsum dolor sit </h1>
            <span className="">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            mollitia earum unde.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
