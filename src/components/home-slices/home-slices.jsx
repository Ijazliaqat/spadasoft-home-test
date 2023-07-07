import React from 'react'

const HomeSlices = () => {
  return (
    <>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="bg-cyan-400 text-white h-32 md:h-64 flex items-center justify-center">
            <div
              class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#AA99EC] text-white">
              +
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="bg-cyan-400 text-white h-32 md:h-64 flex items-center justify-center">
            Box 2
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="bg-cyan-400 text-white h-32 md:h-64 flex items-center justify-center">
            Box 3
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSlices