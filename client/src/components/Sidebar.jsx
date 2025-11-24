import React from "react";
import { useUser, useClerk, Protect } from "@clerk/clerk-react";
import { House, FileText, Hash, Image, Scissors, SquarePen, Users, Eraser } from "lucide-react";
import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";


const navItems = [
  { to: '/ai', label: 'Dashboard', Icon: House },
  { to: '/ai/write-aticles', label: 'Write Articles', Icon: SquarePen },
  { to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash },
  { to: '/ai/generate-images', label: 'Generate Images', Icon: Image },
  { to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser },
  { to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors },
  { to: '/ai/review-resume', label: 'Review Resume', Icon: FileText },
  { to: '/ai/community', label: 'Community', Icon: Users },
]

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
        <div className="px-4 mt-6 text-sm text-gray-600 font-medium">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink key={to} to={to} end={to === '/a1'} onClick={() =>
              setSidebar(false)} className={({ isActive }) => `px-3.5 py-2.5 flex items-center gap-3 rounded ${isActive ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white' : ''}`}>
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 $(isActive not-[]:? 'text-white': ''}`} />
                  {label}
                </>
              )}
            </NavLink>))}
        </div>
      </div>

      <div className="w-full border-t boder-gray-200 p-4 px-7 flex items-center justify-between">
        <div onClick={openUserProfile} className="flex gap-2 items-center cursor-pointer">
          <img src={user.imageUrl} alt="User Avatar" className="w-8 rounded-full object-cover" />

          <div>
            <h1 className="text-sm font-medium">{user.fullName}</h1>
            <p className="text-xs text-gray-500">
              <Protect plan='premium' fallbacks="Free">Premium</Protect>
            </p>
          </div>

        </div>
        <LogOut onClick={signOut} className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer" />
      </div>
    </div >
  );
};

export default Sidebar;
