import React from "react";
import { Button, Input, PasswordInput } from "@mantine/core";
import { IconArrowLeft, IconMoon } from "@tabler/icons-react";
import LeftArrowAndTheme from "../LeftArrowAndTheme";

const CreateUsername = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white px-4 py-6 sm:px-8 md:px-12">
      {/* Top Navigation */}
<LeftArrowAndTheme/>

      {/* Page Title */}
      <div className="w-full sm:w-[80%] md:w-[60%] text-left mt-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Create your User Name
        </h1>
        <p className="text-sm text-gray-600 ml-2">User Name</p>
        {/* Password Input */}
        <Input
          variant="filled"
          size="lg"
          radius="md"
          withAsterisk
          placeholder="username001"
          className="text-base"
        />
      </div>
      <div className="mr-4 ml-1">
        Create a unique username, you can use numbers from 0 to 9 and
        underscores and dashes
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

export default CreateUsername;
