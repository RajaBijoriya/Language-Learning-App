import { IconMapPin, IconSettings, IconUserPlus } from '@tabler/icons-react';
import React from 'react'
import avatar from '../../assets/Avatar.png'
import { Badge, Divider, Tabs } from '@mantine/core';


const ProfileScreen = () => {
  return (
    <div className="flex flex-col w-full py-1 px-3">
      <div className="w-full  mt-8  ">
        {/* Top Navigation */}
        <div className="w-full flex items-center justify-between px-1 py-2">
          {/* Left Arrow */}
          <h1 className="text-2xl lg:text-3xl text-gray-700">Profile</h1>

          {/* Theme Icon */}
          <div>
            <button
              aria-label="Toggle dark mode"
              className="p-2 hover:bg-gray-100 rounded-full transition">
              <IconUserPlus size={28} stroke={1.5} />
            </button>
            <button
              aria-label="Toggle dark mode"
              className="p-2 hover:bg-gray-100 rounded-full transition">
              <IconSettings size={28} stroke={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-2  ">
        {/* Top Navigation */}
        <div className="w-full flex items-center justify-between px-1 py-2">
          {/* Left Arrow */}
          <div className="flex ">
            <div className="flex gap-2 justify-center items-center">
              <img src={avatar} className="w-[80px]" alt="avatar" />
              <div>
                <h1 className="font-semibold text-xl">Eric Rodd</h1>
                <div className="flex gap-1">
                  <IconMapPin />
                  <h1 className="text-xl">Estonia, Tallinn</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Theme Icon */}
          <div className="flex justify-center items-center">
            <Badge color="blue">Intermediate</Badge>
          </div>
        </div>

        <Divider size="lg" my="md" />

        <div className="w-full mt-2  ">
          {/* Top Navigation */}
          <div className="w-full flex items-center justify-between px-1 py-2">
            {/* Left Arrow */}
            <h1 className="text-xl font-weight: 600">Friends</h1>

            {/* Theme Icon */}
            <h1 className="text-2xl text-blue-500">0</h1>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center font-semibold text-xl">
        <Tabs defaultValue="first">
          <Tabs.List>
            <Tabs.Tab color="blue" value="first">
              <span className="text-xl font-semibold">Progress</span>
            </Tabs.Tab>
            <Tabs.Tab color="blue" value="second">
              <span className="text-xl">Exercises</span>
            </Tabs.Tab>
            <Tabs.Tab color="blue" value="second">
              <span className="text-xl">Corrections</span>
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
    </div>
  );
}

export default ProfileScreen