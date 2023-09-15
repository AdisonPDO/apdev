import React from 'react';
import Image from 'next/image';


export default function Services() {
  return (
    <div className="bg-gray-800 text-center py-16">
      <h1 className="text-5xl text-white font-bold mb-4">MES SERVICES</h1>
      <h4 className="text-2xl text-gray-400 font-bold mb-8">Des prestations adaptées à vos besoins</h4>
      <div className="flex flex-col md:flex-row items-center justify-center bg-cover bg-center py-16" style={{ backgroundImage: 'url(/bg_map.png)' }}>
        <div className="flex flex-wrap w-full md:w-1/2 mb-8 md:mb-0 ml-20">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image src="/agrove.png" alt="Agrove Mobile Screen" width={300} height={500} objectFit="contain" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
            <ul className="list-disc list-inside">
              <li className="mb-2">Service 1</li>
              <li className="mb-2">Service 2</li>
              <li className="mb-2">Service 3</li>
              <li className="mb-2">Service 4</li>
              <li className="mb-2">Service 5</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap w-full md:w-1/2 mr-20">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-end">
            <ul className="list-disc list-inside">
              <li className="mb-2">Service 1</li>
              <li className="mb-2">Service 2</li>
              <li className="mb-2">Service 3</li>
              <li className="mb-2">Service 4</li>
              <li className="mb-2">Service 5</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image src="/agrove.png" alt="Agrove Mobile Screen" width={300} height={500} objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  )
}


