import { UserAddIcon } from '@heroicons/react/outline';
import React from 'react';

const Navbar = () => {
  return (
    <div class='bg-primary h-[64px] flex h-16 flex-col justify-center items-end flex-shrink-0'>
        <div class="flex justify-between items-center self-stretch  m-8">
            <div class="flex justify-between pl-10 w-80 p-4 color text-white">
              <img src="../assets/logo.png" alt="logo" />
              <h4 class="flex items-start">Dashboard</h4>
            </div>
            <div class="flex text-white border white rounded-lg p-2 gap-4">
              <button>Ajouter un professionnel</button>
              <UserAddIcon className="h-5 w-5 text-white cursor-pointer"/>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
