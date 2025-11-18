import React from "react";
import { useUser, useClerk } from "@clerk/clerk-react";

const Sidebar = ({ sidebar, setSidebar }) => {
  
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between
      items-center max-sm:absolute top-14 bottom-0
      ${sidebar ? "translate-x-0" : "max-sm:-translate-x-full"}
      transition-all duration-300 ease-in-out`}
    >
      <div className="my-7 w-full flex flex-col items-center">
        <img
          src={user.imageUrl}
          alt="User Avatar"
          className="w-14 h-14 rounded-full object-cover"
        />
        <h1 className="mt-2 text-center font-medium">{user.fullName}</h1>
      </div>
    </div>
  );
};

export default Sidebar;
