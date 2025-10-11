import { IconArrowLeft, IconMoon } from "@tabler/icons-react";
import React from "react";

const LeftArrowAndTheme = () => {
  return (
    <div className="w-full">
      {/* Top Navigation */}
      <div className="w-full flex items-center justify-between px-1 py-2">
        {/* Left Arrow */}
        <button
          aria-label="Go back"
          className=" hover:bg-gray-100 rounded-full transition">
          <IconArrowLeft size={28} stroke={1.5} />
        </button>

        {/* Theme Icon */}
        <button
          aria-label="Toggle dark mode"
          className=" hover:bg-gray-100 rounded-full transition">
          <IconMoon size={28} stroke={1.5} />
        </button>
      </div>
    </div>
  );
};

export default LeftArrowAndTheme;
