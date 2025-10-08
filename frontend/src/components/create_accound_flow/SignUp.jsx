import React from "react";
import logo_title from "../../assets/Logo & Title.png";
import {
  IconArrowLeft,
  IconBrandAppleFilled,
  IconBrandGoogleFilled,
  IconMoon,
} from "@tabler/icons-react";
import { Button, Divider, Input } from "@mantine/core";

const SignUp = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white px-4 py-6 sm:px-8 md:px-12">
      {/* Top Navigation */}
      <div className="w-full flex items-center justify-between mb-6">
        <button className="p-2 hover:bg-gray-100 rounded-full transition">
          <IconArrowLeft size={28} stroke={1.5} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition">
          <IconMoon size={28} stroke={1.5} />
        </button>
      </div>

      {/* Logo and Title */}
      <div className="flex flex-col items-center text-center w-full">
        <img
          src={logo_title}
          alt="Logo & Title"
          className="w-32 sm:w-40 md:w-48 object-contain mb-6"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
          Log in and continue your learning
        </h1>
      </div>

      {/* Email Input */}
      <div className="flex flex-col w-full sm:w-[80%] md:w-[60%] mt-8">
        <div className="flex justify-between items-center text-sm sm:text-base text-gray-700 mb-2">
          <p>Email</p>
          <p className="text-blue-500 hover:underline cursor-pointer">
            Log in with Phone Number
          </p>
        </div>
        <Input
          size="lg"
          radius="md"
          variant="filled"
          placeholder="user@gmail.com"
        />
      </div>

      {/* Continue Button */}
      <div className="w-full sm:w-[80%] md:w-[60%] mt-6">
        <Button
          color="#007AFF"
          radius="md"
          size="lg"
          fullWidth
          className="font-medium text-base sm:text-lg hover:opacity-90 transition">
          Continue
        </Button>
      </div>

      {/* Divider */}
      <div className="w-full sm:w-[80%] md:w-[60%] mt-8">
        <Divider my="sm" size="sm" label="or" labelPosition="center" />
      </div>

      {/* Google Login */}
      <div className="w-full sm:w-[80%] md:w-[60%] mt-6">
        <Button
          variant="light"
          color="#007AFF"
          radius="md"
          size="lg"
          fullWidth
          className="flex items-center justify-center gap-2 text-base sm:text-lg hover:bg-gray-100">
          <IconBrandGoogleFilled
            size={24}
            stroke={1.5}
            className="text-black"
          />
          <span className="text-black">Log in with Google</span>
        </Button>
      </div>

      {/* Apple Login */}
      <div className="w-full sm:w-[80%] md:w-[60%] mt-4">
        <Button
          variant="light"
          color="#007AFF"
          radius="md"
          size="lg"
          fullWidth
          className="flex items-center justify-center gap-2 text-base sm:text-lg hover:bg-gray-100">
          <IconBrandAppleFilled size={26} stroke={1.5} className="text-black" />
          <span className="text-black">Log in with Apple</span>
        </Button>
      </div>

      {/* Terms and Privacy */}
      <div className="w-full sm:w-[80%] md:w-[60%] mt-8 text-center px-4">
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          By joining, I declare that I have read and accept the{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Terms
          </span>{" "}
          and{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Privacy Policy
          </span>
          .
        </p>
      </div>

      {/* Sign Up Redirect */}
      <div className="mt-6 mb-4 text-center">
        <p className="text-gray-700 text-base sm:text-lg">
          Don’t have an account yet?{" "}
          <span className="text-blue-500 hover:underline cursor-pointer font-medium">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
