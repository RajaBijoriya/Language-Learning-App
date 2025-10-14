import { Button, Tabs } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react'
import React from 'react'
import image from '../../assets/Find Friends Illustration.png'
const ChatScreen = () => {
  return (
    <div className="flex flex-col w-full py-1 px-3">
      <div className="w-full mt-8  ">
        {/* Top Navigation */}
        <div className="w-full flex items-center justify-between px-1 py-2">
          {/* Left Arrow */}
          <h1 className="text-2xl lg:text-3xl text-gray-700">Chat</h1>

          {/* Theme Icon */}
          <button
            aria-label="Toggle dark mode"
            className="p-2 hover:bg-gray-100 rounded-full transition">
            <IconSearch size={28} stroke={1.5} />
          </button>
        </div>
      </div>

      <div className="flex w-full justify-center text-xl">
        <Tabs defaultValue="first">
          <Tabs.List>
            <Tabs.Tab color="blue" value="first">
              <span className="text-xl">New Users</span>
            </Tabs.Tab>
            <Tabs.Tab color="blue" value="second">
              <span className="text-xl">Friends</span>
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>

      <div className="flex flex-col justify-center items-center mt-6">
        <img src={image} className="w-[500px] lg:w-[800px]" alt="" />
        <h1 className="text-center lg:text-4xl text-2xl mt-4 font-semibold">
          Make friends with a native speaker and improve your English
        </h1>
        <h1 className="text-center lg:text-2xl text-lg mt-4">
          It's kind of quiet here... Add friends! You can check each other's
          exercises and help in learning the language.
        </h1>
      </div>

      <div
        className="w-full flex flex-col gap-6 mt-8 mb-4 
                sm:w-[80%] md:w-[60%] lg:w-[40%] 
                mx-auto justify-center items-center">
        <Button
          onClick={() => navigate("/welcome")}
          color="#007AFF"
          radius="md"
          size="lg"
          fullWidth
          className="py-3 text-base sm:text-lg md:text-xl font-medium hover:opacity-90 transition">
         Find friends
        </Button>
      </div>
    </div>
  );
}

export default ChatScreen