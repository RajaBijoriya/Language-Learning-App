import React from 'react'
import LevelBox from './combobox/LevelBox'
import { IconBell, IconFileStarFilled, IconFlame, IconStar } from '@tabler/icons-react';
import { Progress } from '@mantine/core';
import premium_card from '../../assets/Premium Card.png'
const BookScreen = () => {
  return (
    <div className="flex-col w-full mr-3 ml-3">
      <div className="">
        <div className="flex-col mt-12">
          <div className="flex gap-15">
            <LevelBox />
            <div className="flex">
              <ul className="flex gap-3">
                <li className="flex gap-2">
                  <IconFlame size={30} />
                  <span className="text-2xl">0</span>
                </li>
                <li className="flex gap-2">
                  <IconStar size={30} />
                  <span className="text-2xl">0/20</span>
                </li>
                <li>
                  <IconBell size={30} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-col mt-5">
          <div className="flex gap-56">
            <LevelBox size={30} />
            <div className="flex ">
              <IconFileStarFilled />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 mr-8'>
        <Progress value={10} color='blue' size="xl"/>
      </div>
      <div className='mt-10 flex justify-center mr-7' >
    <img className='w-92 md:w-120 xl:w-150'  src={premium_card} alt="" />
      </div>
    </div>
  );
}

export default BookScreen