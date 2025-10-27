import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import googleplay from "../../assets/Rate Card.png";
import play from "../../assets/Play.png";
import noad from "../../assets/No Ad.png";
import innovation from "../../assets/innovation.png";
import feedback from "../../assets/Feedback.png";
import certificate from "../../assets/Certificate.png";
import premium from "../../assets/Premium.png";
import { Button, Divider, Stepper } from "@mantine/core";

const PremiumScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(1);

  const handleSubscribe = (plan) => {
    // Here you would typically handle the subscription process
    // For now, we'll just navigate to the main screen
    navigate("/start", {
      state: {
        ...location.state,
        selectedPlan: plan,
      },
    });
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white px-4 sm:px-8 py-10">
      {/* Header Section */}
      <div className="text-center px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
          More than 100,000 people have purchased{" "}
          <span className="text-blue-500">Premium</span>
        </h1>
        <p className="text-gray-500 text-base sm:text-lg mt-3">
          14 days money-back guarantee
        </p>
      </div>

      {/* Pricing Cards Section */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 w-full">
        {/* 12 Month Plan */}
        <div
          onClick={() => handleSubscribe("12-month")}
          className="bg-blue-100 rounded-2xl p-5 flex flex-col justify-between items-center w-[130px] sm:w-[160px] md:w-[200px] h-[150px] sm:h-[170px] shadow-md cursor-pointer hover:shadow-lg transition-all">
          <h1 className="font-bold text-base sm:text-lg">12 months</h1>
          <h1 className="text-blue-500 text-sm sm:text-base">
            <span className="line-through">144$</span>{" "}
            <span className="font-bold">72$</span>
          </h1>
          <p className="text-sm sm:text-base font-semibold">6$ per month</p>
          <div className="bg-blue-500 mt-2 w-[90px] sm:w-[110px] text-white rounded-xl flex justify-center items-center py-1 text-sm sm:text-base">
            Save 50%
          </div>
        </div>

        {/* 6 Month Plan */}
        <div
          onClick={() => handleSubscribe("6-month")}
          className="bg-red-50 rounded-2xl p-5 flex flex-col justify-between items-center w-[130px] sm:w-[160px] md:w-[200px] h-[150px] sm:h-[170px] shadow-md cursor-pointer hover:shadow-lg transition-all">
          <h1 className="font-bold text-base sm:text-lg">6 months</h1>
          <h1 className="text-blue-500 text-sm sm:text-base">
            <span className="line-through">72$</span>{" "}
            <span className="font-bold">64$</span>
          </h1>
          <p className="text-sm sm:text-base font-semibold">10$ per month</p>
          <div className="bg-blue-500 mt-2 w-[90px] sm:w-[110px] text-white rounded-xl flex justify-center items-center py-1 text-sm sm:text-base">
            Save 20%
          </div>
        </div>

        {/* 1 Month Plan */}
        <div
          onClick={() => handleSubscribe("1-month")}
          className="bg-red-50 rounded-2xl p-5 flex flex-col justify-between items-center w-[130px] sm:w-[160px] md:w-[200px] h-[150px] sm:h-[170px] shadow-md cursor-pointer hover:shadow-lg transition-all">
          <h1 className="font-bold text-base sm:text-lg">1 month</h1>
          <h1 className="text-blue-500 text-sm sm:text-base font-bold">12$</h1>
          <p className="text-sm sm:text-base font-semibold">12$ per month</p>
          <div className="bg-blue-500 mt-2 w-[90px] sm:w-[110px] text-white rounded-xl flex justify-center items-center py-1 text-sm sm:text-base">
            Try Now
          </div>
        </div>
      </div>

      {/* Google Play Image */}
      <div className="flex justify-center mt-10">
        <img
          src={googleplay}
          alt="Google Play"
          className="w-60 sm:w-72 md:w-80"
        />
      </div>

      {/* Premium Features Section */}
      <div className="w-full mt-10 bg-[#F8F8F8] rounded-2xl px-6 py-8 sm:px-10 sm:py-10">
        <h1 className="text-xl sm:text-2xl text-center font-semibold mb-6">
          What do you get with Premium?
        </h1>

        <div className="flex flex-col gap-6">
          {[
            {
              img: play,
              title: "Access to all lessons",
              text: "Choose lessons that are right for you.",
            },
            {
              img: noad,
              title: "No advertising",
              text: "Don't get distracted in vain!",
            },
            {
              img: innovation,
              title: "Versatile practice tools",
              text: "Practice what you've learned with spaced repetition.",
            },
            {
              img: feedback,
              title: "Priority feedback from the community",
              text: "Receive oral and written comments from native speakers.",
            },
            {
              img: premium,
              title: "Premium-only content",
              text: "Receive oral and written comments on the buildings you have completed from native speakers",
            },
            {
              img: certificate,
              title: "Certificates",
              text: "Take tests at the end of the level and confirm your knowledge.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 sm:gap-4 md:gap-6 text-left">
              <img
                src={item.img}
                alt={item.title}
                className="w-10 sm:w-12 md:w-14"
              />
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 
     how it works section  */}

      <div className="w-full mt-10 bg-[#F8F8F8] rounded-2xl px-6 py-8 sm:px-10 sm:py-10">
        <Stepper
          active={active}
          onStepClick={setActive}
          color="blue"
          orientation="vertical">
          <Stepper.Step
            label="Now: You open access to Premium "
            description="Free for 7 days "
          />
          <Stepper.Step
            label="Day 5: Renewal reminder"
            description="We will inform you that the trial period is coming to an end! You can cancel at any time.  "
          />
          <Stepper.Step
            label="Day 7: End of trial period"
            description="Save 50% and pay 95% for full year of premium membership"
          />
        </Stepper>
      </div>

      <div className="mt-10">
        <h1 className="text-blue-500 text-lg underline">
          <a href="">Restore purchase</a>
        </h1>
      </div>

      <div className="mt-5 w-full">
        <Divider my="sm" size="sm" />
      </div>

      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] flex flex-col gap-6 mt-8 mb-4">
        <Button
          color="#007AFF"
          radius="md"
          size="lg"
          fullWidth
          onClick={() =>
            navigate("/vocabulary", {
              state: {
                ...location.state,
                isPremium: false,
              },
            })
          }
          className="py-3 text-base sm:text-lg font-medium hover:opacity-90 transition">
          Try 7 days Free
        </Button>
        <Button
          onClick={() =>
            navigate("/books", {
              state: {
                ...location.state,
                isPremium: false,
              },
            })
          }
          color="#007AFF"
          variant="light"
          radius="md"
          size="lg"
          fullWidth
          className="py-3 text-base sm:text-lg font-medium hover:bg-gray-100 transition">
          Skip
        </Button>
      </div>
    </div>
  );
};

export default PremiumScreen;
