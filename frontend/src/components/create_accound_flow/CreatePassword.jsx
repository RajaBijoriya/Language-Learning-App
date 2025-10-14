import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, PasswordInput } from "@mantine/core";
import { IconArrowLeft, IconMoon } from "@tabler/icons-react";
import LeftArrowAndTheme from "../LeftArrowAndTheme";

const CreatePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (pass) => {
    if (pass.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(pass)) {
      return "Password must contain at least 1 uppercase letter";
    }
    if (!/\d/.test(pass)) {
      return "Password must contain at least 1 number";
    }
    return "";
  };

  const handleContinue = () => {
    const validationError = validatePassword(password);
    if (validationError) {
      setError(validationError);
      return;
    }
    // If validation passes, navigate to choose language
    navigate("/choose-language");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white px-4 py-6 sm:px-8 md:px-12">
      {/* Top Navigation */}
      <LeftArrowAndTheme />
      {/* Page Title */}
      <div className="w-full sm:w-[80%] md:w-[60%] text-left mt-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Create password
        </h1>
        <p className="text-sm text-gray-600 ml-2">Password</p>
        {/* Password Input */}
        <PasswordInput
          variant="filled"
          size="lg"
          radius="md"
          withAsterisk
          placeholder="Enter your password"
          className="text-base"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(""); // Clear error when user types
          }}
          error={error}
        />
      </div>
      <div className="mr-4 ml-1 text-sm text-gray-600 mt-2">
        Your password must contain:
        <ul className="list-disc ml-5 mt-1">
          <li className={password.length >= 8 ? "text-green-500" : ""}>
            At least 8 characters
          </li>
          <li className={/[A-Z]/.test(password) ? "text-green-500" : ""}>
            1 uppercase letter
          </li>
          <li className={/\d/.test(password) ? "text-green-500" : ""}>
            1 number
          </li>
        </ul>
      </div>

      {/* Continue Button */}
      <div className="w-full sm:w-[80%] md:w-[60%] mt-10">
        <Button
          color="#007AFF"
          radius="md"
          size="lg"
          fullWidth
          onClick={handleContinue}
          disabled={!!validatePassword(password)}
          className="font-medium text-base sm:text-lg hover:opacity-90 transition">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CreatePassword;
