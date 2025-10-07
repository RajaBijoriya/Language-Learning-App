import React from "react";
import logo_title from "../../assets/Logo & Title.png";
import { IconArrowLeft, IconBrandAppleFilled, IconBrandGoogleFilled, IconMoon } from "@tabler/icons-react";
import { Button, Divider, Input } from "@mantine/core";
import { IconBrandGoogle, IconBrandApple } from "@tabler/icons-react";

const SignUp = () => {
  return (
    <div className="w-full flex-col justify-center items-center">
      <div className="w-full flex items-center justify-between px-6 py-12">
        {/* Left icon */}
        <button>
          <IconArrowLeft size={32} stroke={1.5} />
        </button>

        {/* Right icon */}
        <button>
          <IconMoon size={32} stroke={1.5} />
        </button>
      </div>
      <div className="flex-col justify-center">
        <img
          src={logo_title}
          alt="Logo & Title"
          className="w-40 h-16 object-contain m-auto"
        />
        <h1 className="text-2xl mr-4 ml-5 mt-10">
          Log in and continue your learning
        </h1>
      </div>

      <div className="flex flex-col mt-5">
        <div className="flex justify-around gap-10">
          <p>Email</p>
          <p className="text-blue-500">Log in with Phone Number</p>
        </div>
        <Input
          size="xl"
          radius="md"
          variant="filled"
          placeholder="user@gmail.com"
          className="m-4"
        />

        <div className="w-[80%] flex flex-col gap-10 justify-center">
          <Button
            className="top-5 mr-10 ml-10"
            color="#007AFF"
            radius="md"
            size="lg"
            fullWidth>
            Continue
          </Button>
        </div>

        <div className="mt-10 mr-7 ml-7">
          <Divider my="xm" size="sm" label="or" labelPosition="center" />
        </div>
        <div className="w-[80%] flex flex-col gap-10 justify-center">
          <Button
            className="top-5 mr-10 ml-10"
            variant="light"
            color="#007AFF"
            radius="md"
            size="lg"
            fullWidth>
            <IconBrandGoogleFilled
              size={24}
              stroke={1.5}
              className="text-black"
            />{" "}
            &nbsp;
            <span className="text-black">Log in with Google</span>
          </Button>
        </div>

        <div className="w-[80%] flex flex-col mt-7 gap-10 justify-center">
          <Button
            className="top-5 mr-10 ml-10"
            variant="light"
            color="#007AFF"
            radius="md"
            size="lg"
            fullWidth>
            <IconBrandAppleFilled
              size={28}
              stroke={1.5}
              className="text-black"
            />{" "}
            &nbsp;
            <span className="text-black">Log in with Google</span>
          </Button>
        </div>

        <div className="mt-10 mr-10 ml-10">
          <p className="text-gray-500">
            By joining, I declare that I have read and accent the Terms and
            Privacy Policy
          </p>
        </div>

        <div className="mt-10 mr-10 ml-10">
            <p>Don't have an account yet? <span className="text-xl text-blue-500">Sign up</span></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
