import { IconArrowLeft, IconMoon } from "@tabler/icons-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const LeftArrowAndTheme = ({ onThemeToggle }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Top Navigation */}
      <div className="w-full flex items-center justify-between px-1 py-2">
        {/* Left Arrow */}
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="p-2 hover:bg-gray-100 rounded-full transition">
          <IconArrowLeft size={28} stroke={1.5} />
        </button>

        {/* Theme Icon */}
        <button
          onClick={onThemeToggle}
          aria-label="Toggle dark mode"
          className="p-2 hover:bg-gray-100 rounded-full transition">
          <IconMoon size={28} stroke={1.5} />
        </button>
      </div>
    </div>
  );
};

export default LeftArrowAndTheme;
