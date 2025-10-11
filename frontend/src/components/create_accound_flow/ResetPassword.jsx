import React from "react";
import { Button, PasswordInput } from "@mantine/core";
import { IconArrowLeft, IconMoon } from "@tabler/icons-react";
import LeftArrowAndTheme from "../LeftArrowAndTheme";

const ResetPassword = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white px-4 py-6 sm:px-8 md:px-12">
      {/* Top Navigation */}
      <LeftArrowAndTheme/>

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
