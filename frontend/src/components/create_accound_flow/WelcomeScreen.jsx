import React from "react";
import HelloIllustration from "../../assets/Hello Illustraton.png";
import logo from "../../assets/logo.png";
import { Button } from "@mantine/core";
import { IconHome, IconMoon } from "@tabler/icons-react";
const WelcomeScreen = () => {
  return (
    <div className="w-full h-screen flex items-center">
      <div className="flex flex-col items-center">
        <div className="flex w-full justify-end mr-20">
          {" "}
          <button>
            {" "}
            <IconMoon className="" size={32} stroke={1} />
          </button>
        </div>
        <img src={logo} alt="logo image" className="w-40 h-13 " />
        <img
          src={HelloIllustration}
          className="w-100 h-100"
          alt="Hello illustration"
        />
        <h1 className="text-black text-[32px] leading-9 font-semibold m-auto text-center">
          Learn a language in 3 minute a day
        </h1>
        <div className="w-[80%] flex flex-col gap-10 justify-center">
          <Button
            className="top-5"
            color="#007AFF"
            radius="md"
            size="xl"
            fullWidth>
            Start Learning
          </Button>
          <p className="text-center text-xl">
            Already, have an account?{" "}
            <span className="text-blue-400">Log in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
