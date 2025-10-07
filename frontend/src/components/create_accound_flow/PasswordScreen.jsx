import { Button, PasswordInput } from '@mantine/core';
import { IconArrowLeft, IconMoon } from '@tabler/icons-react'
import React from 'react'

const PasswordScreen = () => {
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

      <div className="mr-7 ml-7">
        <h1 className="text-2xl">Enter Your Password</h1>
        <div className='mt-4'>
          <PasswordInput
            variant="filled"
            size="lg"
            radius="md"
            withAsterisk
            description="password"
            placeholder="Input placeholder"
          />
        </div>
      </div>

       <div className="w-[80%] flex flex-col mt-120 gap-10 justify-center">
                <Button
                  className="top-5 mr-10 ml-10"
                  color="#007AFF"
                  radius="md"
                  size="lg"
                  fullWidth>
                  Continue
                </Button>
              </div>
    </div>
  );
}

export default PasswordScreen