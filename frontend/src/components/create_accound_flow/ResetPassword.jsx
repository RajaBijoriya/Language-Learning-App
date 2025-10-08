import React from "react";
import { Button, PasswordInput } from "@mantine/core";
import { IconArrowLeft, IconMoon } from "@tabler/icons-react";

const ResetPassword = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white px-4 py-6 sm:px-8 md:px-12">
      {/* Top Navigation */}
      <div className="w-full flex items-center justify-between mb-8">
        <button
          aria-label="Go back"
          className="p-2 hover:bg-gray-100 rounded-full transition">
          <IconArrowLeft size={28} stroke={1.5} />
        </button>

        <button
          aria-label="Toggle dark mode"
          className="p-2 hover:bg-gray-100 rounded-full transition">
          <IconMoon size={28} stroke={1.5} />
        </button>
      </div>

      {/* Page Title */}
      <div className="w-full sm:w-[80%] md:w-[60%] text-left mt-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Enter Your Password
        </h1>

        {/* Password Input */}
        <PasswordInput
          variant="filled"
          size="lg"
          radius="md"
          withAsterisk
          placeholder="Enter your password"
          className="text-base"
        />
      </div>

      {/* Continue Button */}
      <div className="w-full sm:w-[80%] md:w-[60%] mt-10">
        <Button
          color="#007AFF"
          radius="md"
          size="lg"
          fullWidth
          className="font-medium text-base sm:text-lg hover:opacity-90 transition">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ResetPassword;
