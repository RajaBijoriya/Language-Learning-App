import React from 'react'
import googleplay from '../../assets/Rate Card.png'
const PremiumScreen = () => {
  return (
    <div className="w-full h-screen flex-col mt-20">
      <div>
        <h1 className="text-2xl font-semibold mr-10 ml-10">
          More than 100.000 people have purchased{" "}
          <span className="text-blue-500">Premium</span>
        </h1>
        <p className="text-gray-500 text-center mt-5">
          14 days money back guarantee
        </p>
      </div>
      <div className="flex w-full mr-3 ml-3 gap-1 mt-6">
        <div className="bg-blue-100 rounded-xl  justify-center flex-col  items-center w-[120px] h-[135px]">
          <h1 className="mt-2 text-center font-bold">12 month</h1>
          <h1 className="mt-1 text-center text-blue-500">
            <span className="line-through ">144$</span>{" "}
            <span className="font-bold"> 72$</span>
          </h1>
          <h1 className="mt-1 text-center text-sm font-bold">6$ per month</h1>
          <div className="bg-blue-500 mt-2 m-auto w-[90px] h-[30px]  text-white rounded-xl flex justify-center items-center">
            <h1>Save 50%</h1>
          </div>
        </div>

        <div className="bg-red-100 rounded-xl  justify-center flex-col  items-center w-[120px] h-[135px]">
          <h1 className="mt-2 text-center font-bold">6 month</h1>
          <h1 className="mt-1 text-center text-blue-500">
            <span className="line-through ">72$</span>{" "}
            <span className="font-bold"> 64$</span>
          </h1>
          <h1 className="mt-1 text-center text-sm font-bold">10$ per month</h1>
          <div className="bg-blue-500 mt-2 m-auto w-[90px] h-[30px]  text-white rounded-xl flex justify-center items-center">
            <h1>Save 20%</h1>
          </div>
        </div>

        <div className="bg-red-100 rounded-xl  justify-center flex-col  items-center w-[120px] h-[135px]">
          <h1 className="mt-2 text-center font-bold">1 month</h1>
          <h1 className="mt-1 text-center text-blue-500">
            <span className="font-bold"> 12$</span>
          </h1>
          <h1 className="mt-1 text-center text-sm font-bold">6$ per month</h1>
          <div className="bg-blue-500 mt-2 m-auto w-[90px] h-[30px]  text-white rounded-xl flex justify-center items-center">
            <h1>Save 50%</h1>
          </div>
        </div>

      </div>
        <div className='flex mt-5 mr-4 ml-4'>
            <img src={googleplay} alt="" />
        </div>
    </div>
  );
}

export default PremiumScreen